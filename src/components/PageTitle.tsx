import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                document.title = 'Fileon';
                break;
            case '/about':
                document.title = 'Fileon - Sobre Nós';
                break;
            case '/digitization':
                document.title = 'Fileon - Digitalização';
                break;
            case '/recovery':
                document.title = 'Fileon - Recuperação';
                break;
            case '/armazenamento-web':
                document.title = 'Fileon - Armazenamento Web';
                break;
            case '/gestao-documental':
                document.title = 'Fileon - Gestão Documental';
                break;
            case '/contactos':
                document.title = 'Fileon - Contactos';
                break;
            case '/casos-reais':
                document.title = 'Fileon - Casos Reais';
                break;
            case '/privacidade':
                document.title = 'Fileon - Política de Privacidade';
                break;
            case '/termos':
                document.title = 'Fileon - Termos e Condições';
                break;
            case '/rgpd':
                document.title = 'Fileon - RGPD';
                break;
            default:
                // Keep the default title or set specific 404/other if needed
                // If the path is not recognized (404), likely handled by NotFound component or defaults.
                // For now, we leave it as whatever it was set to, or reset to 'Fileon'
                document.title = 'Fileon';
        }
    }, [location]);

    return null;
};

export default PageTitle;
