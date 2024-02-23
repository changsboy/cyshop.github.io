const fs = require('fs');
const extractCss = require('extract-css-core');

const html = fs.readFileSync('index.html', 'utf-8');
const result = extractCss(html, { normalizeUrl: false });

fs.writeFileSync('output.css', result.css);


