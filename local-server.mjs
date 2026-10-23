import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { readFile, realpath, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = await realpath(fileURLToPath(new URL('./', import.meta.url)));
const { basePath } = JSON.parse(await readFile(path.join(root, 'pages-manifest.json'), 'utf8'));
const types = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif', '.mp4': 'video/mp4', '.webm': 'video/webm', '.ogg': 'audio/ogg', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };
const server = createServer(async (request, response) => {
  try {
    if (!['GET', 'HEAD'].includes(request.method)) { response.statusCode = 405; response.end('Preview is read-only.'); return; }
    const url = new URL(request.url, 'http://preview.invalid');
    if (url.pathname === '/') { response.statusCode = 302; response.setHeader('Location', basePath); response.end(); return; }
    if (!url.pathname.startsWith(basePath)) { response.statusCode = 404; response.end('Page not found.'); return; }
    let file = path.resolve(root, decodeURIComponent(url.pathname.slice(basePath.length)));
    if (file !== root && !file.startsWith(root + path.sep)) { response.statusCode = 404; response.end(); return; }
    let details = await stat(file).catch(() => null);
    if (details?.isDirectory()) { file = path.join(file, 'index.html'); details = await stat(file).catch(() => null); }
    if (!details?.isFile()) {
      response.statusCode = 404;
      const fallback = await realpath(path.join(root, '404.html')).catch(() => null);
      if (!fallback || !fallback.startsWith(root + path.sep)) { response.end(request.method === 'HEAD' ? undefined : 'Page not found.'); return; }
      const body = await readFile(fallback);
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.setHeader('X-Content-Type-Options', 'nosniff');
      response.setHeader('Content-Length', body.length);
      response.end(request.method === 'HEAD' ? undefined : body); return;
    }
    file = await realpath(file); if (!file.startsWith(root + path.sep)) { response.statusCode = 404; response.end(); return; }
    response.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    response.setHeader('X-Content-Type-Options', 'nosniff'); response.setHeader('Accept-Ranges', 'bytes');
    const range = /^bytes=(\d+)-(\d*)$/.exec(request.headers.range || ''), start = range ? Number(range[1]) : 0, end = range?.[2] ? Math.min(details.size - 1, Number(range[2])) : details.size - 1;
    if (start > end || start >= details.size) { response.statusCode = 416; response.end(); return; }
    response.statusCode = range ? 206 : 200; response.setHeader('Content-Length', end - start + 1);
    if (range) response.setHeader('Content-Range', `bytes ${start}-${end}/${details.size}`);
    if (request.method === 'HEAD') response.end(); else createReadStream(file, { start, end }).pipe(response);
  } catch { response.statusCode = 500; response.end('Preview unavailable.'); }
});
server.listen(Number(process.env.PORT || 8189), '127.0.0.1', () => console.log('Pages preview: http://127.0.0.1:' + server.address().port + basePath));
