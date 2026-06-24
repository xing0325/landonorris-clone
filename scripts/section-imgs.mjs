import fs from 'fs';
const h = fs.readFileSync('docs/research/raw-page.html','utf8');
const blocks = [...h.matchAll(/<section[\s\S]*?<\/section>/g)].map(m=>m[0]);
blocks.forEach((b,i)=>{
  const cls=(b.match(/class="([^"]*)"/)||[])[1]||'';
  const raw=[...b.matchAll(/(?:src|srcset)="([^"]+)"/g)].flatMap(x=>x[1].split(',').map(s=>s.trim().split(/\s+/)[0]));
  const names=[...new Set(raw.map(u=>u.split('/').pop()).filter(f=>/\.(webp|png|jpg|svg)/i.test(f)).map(n=>n.replace(/-p-\d+(?=\.)/,'')))];
  if(['home-marquee','is-horizontal-track','is-otot','home-helmets'].some(k=>cls.includes(k)))
    { console.log(`\n#${i} .${cls.replace(/\bw-[\w-]+/g,'').trim().slice(0,28)} (${names.length} imgs)`); console.log(names.join('\n')); }
});
