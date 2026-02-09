import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOSTNAME = 'https://www.fileon.pt';

const routes = [
    '/',
    '/sobre-nos',
    '/digitalizacao',
    '/recuperacao',
    '/armazenamento-web',
    '/gestao-documental',
    '/contactos',
    '/casos-reais'
];

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
            .map((route) => {
                return `  <url>
    <loc>${HOSTNAME}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
</url>`;
            })
            .join('\n')}
</urlset>`;

    const outputPath = path.join(__dirname, 'public', 'sitemap.xml');

    fs.writeFileSync(outputPath, sitemap);
    console.log(`Sitemap generated at ${outputPath}`);
};

generateSitemap();
