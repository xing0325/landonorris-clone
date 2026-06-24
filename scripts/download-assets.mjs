import fs from 'fs'; import path from 'path';
const m = JSON.parse(fs.readFileSync('docs/research/asset-manifest.json','utf8'));
const FAV = [
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67b5a0969616f526f020ec0e_ln-favicon.png',
  'https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/67b5a098cbef46b41e40dfd2_ln-webclip.png'
];
for (const d of ['public/images','public/fonts','public/seo']) fs.mkdirSync(d,{recursive:true});
const jobs = [
  ...m.images.map(u=>({u, dir:'public/images'})),
  ...m.fonts.map(u=>({u, dir:'public/fonts'})),
  ...[...new Set([...(m.favicons||[]), ...FAV])].map(u=>({u, dir:'public/seo'})),
];
const nameOf = u => decodeURIComponent(u.split('/').pop().split('?')[0]).replace(/[^\w.\-]/g,'_');
let ok=0,fail=0,skip=0; const fails=[];
async function dl(j){
  const dest = path.join(j.dir, nameOf(j.u));
  if (fs.existsSync(dest) && fs.statSync(dest).size>0){ skip++; return; }
  try { const r = await fetch(j.u); if(!r.ok) throw new Error('HTTP '+r.status);
    fs.writeFileSync(dest, Buffer.from(await r.arrayBuffer())); ok++;
  } catch(e){ fail++; fails.push(nameOf(j.u)+' :: '+e.message); }
}
let i=0; const CONC=8;
const worker=async()=>{ while(i<jobs.length){ await dl(jobs[i++]); } };
await Promise.all(Array.from({length:CONC},worker));
console.log('downloaded:',ok,'| skipped:',skip,'| failed:',fail,'| total',jobs.length);
if(fails.length) console.log('FAILS:\n'+fails.slice(0,12).join('\n'));
