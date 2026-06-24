import fs from 'fs';
let html = fs.readFileSync('docs/research/raw-page.html','utf8');
html = html.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ');
const blocks = [...html.matchAll(/<section[\s\S]*?<\/section>/g)].map(m=>m[0]);
const out = blocks.map((b,i)=>{
  const cls=(b.match(/<section[^>]*class="([^"]*)"/)||[])[1]||'';
  const headings=[...b.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/g)].map(m=>m[1].replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim()).filter(Boolean);
  const text=b.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
  return {i, cls:cls.replace(/\bw-[\w-]+/g,'').replace(/\s+/g,' ').trim().slice(0,38), headings, text:text.slice(0,360)};
});
fs.writeFileSync('docs/research/section-text.json', JSON.stringify(out,null,2));
out.forEach(s=>console.log(`\n=== #${s.i}  .${s.cls} ===\nH: ${JSON.stringify(s.headings)}\nT: ${s.text.slice(0,300)}`));
