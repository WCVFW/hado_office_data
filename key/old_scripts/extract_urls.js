const fs = require('fs');

const content = fs.readFileSync('E:\\office\\key\\finanvo-main.js', 'utf-8');

// Absolute URLs
const absoluteRegex = /https?:\/\/[^\s"'`,]+/g;
const absoluteUrls = content.match(absoluteRegex) || [];

// Relative API routes (starting with / and containing letters/slashes/params)
const relativeRegex = /(?:["'`])(\/(?:api|company|user|search|subscription|config|charges|download|advance|ibbl|drive|es|gpt)[^"'`]*)(?:["'`])/g;
let relativeUrls = [];
let match;
while ((match = relativeRegex.exec(content)) !== null) {
    relativeUrls.push(match[1]);
}

const allUrls = [...absoluteUrls, ...relativeUrls];
const uniqueUrls = Array.from(new Set(allUrls)).sort();

fs.writeFileSync('E:\\office\\key\\urls.txt', uniqueUrls.join('\n'), 'utf-8');
