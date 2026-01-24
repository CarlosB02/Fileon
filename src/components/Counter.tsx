import { useRef, useLayoutEffect, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface CounterProps {
    value: number;
    direction?: 'up' | 'down';
    prefix?: string;
    suffix?: string;
    description?: string;
    decimals?: number;
}

const Counter = ({
    value,
    direction = 'up',
    prefix = '',
    suffix = '',
    decimals = 0
}: CounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === 'down' ? value : 0);
    const springValue = useSpring(motionValue, {
        damping: 100,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-10px" });
    const [displayValue, setDisplayValue] = useState(prefix + (direction === 'down' ? value : 0).toString() + suffix);

    useLayoutEffect(() => {
        if (isInView) {
            motionValue.set(direction === 'down' ? 0 : value);
        }
    }, [motionValue, isInView, direction, value]);

    useLayoutEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                const formattedNumber = latest.toFixed(decimals);
                setDisplayValue(`${prefix}${formattedNumber}${suffix}`);
            }
        });
        return unsubscribe;
    }, [springValue, decimals, prefix, suffix]);

    return <span ref={ref}>{displayValue}</span>;
};

export default Counter;
