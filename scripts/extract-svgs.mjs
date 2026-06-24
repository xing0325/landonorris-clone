import fs from 'fs';
const html = fs.readFileSync('docs/research/raw-page.html','utf8');
const svgs = [...html.matchAll(/<svg[\s\S]*?<\/svg>/g)].map(m=>m[0]);
const uniq = [...new Set(svgs)];
fs.writeFileSync('docs/research/inline-svgs.json', JSON.stringify(uniq,null,2));
const summary = uniq.map((s,i)=>({ i, vb:(s.match(/viewBox="([^"]+)"/)||[])[1]||null, cls:((s.match(/class="([^"]+)"/)||[])[1]||'').slice(0,38), len:s.length })).sort((a,b)=>a.len-b.len);
console.log('total svg blocks:', svgs.length, '| unique:', uniq.length);
console.log(JSON.stringify(summary.slice(0,26)));
