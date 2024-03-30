import fs from 'fs';
import path from 'path';

export default async (req, res) => {
    const htmlPath = path.resolve('./public/embedfile.html');
    const html = fs.readFileSync(htmlPath, 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
}