import fs from 'fs';
const ORIGIN = 'https://landonorris.com';
const html = fs.readFileSync('docs/research/raw-page.html','utf8');
const abs = u => { if(!u) return null; u=u.trim(); if(u.startsWith('//')) return 'https:'+u; if(u.startsWith('http')) return u; if(u.startsWith('/')) return ORIGIN+u; return ORIGIN+'/'+u; };

const imgSrc = [...html.matchAll(/<img[^>]+?src="([^"]+)"/g)].map(m=>m[1]);
const srcset = [...html.matchAll(/srcset="([^"]+)"/g)].flatMap(m=>m[1].split(',').map(s=>s.trim().split(/\s+/)[0]));
const cssLinks = [...html.matchAll(/<link[^>]+?href="([^"]+?\.css[^"]*)"/g)].map(m=>m[1]);
const allLinks = [...html.matchAll(/<link[^>]+?href="([^"]+)"/g)].map(m=>m[1]);
const fontsInHtml = allLinks.filter(u=>/\.(woff2?|ttf|otf)(\?|$)/i.test(u));
const favicons = [...html.matchAll(/<link[^>]+?rel="[^"]*icon[^"]*"[^>]+?href="([^"]+)"/g)].map(m=>m[1]);
const og = [...html.matchAll(/<meta[^>]+?property="og:image"[^>]+?content="([^"]+)"/g)].map(m=>m[1]);

const cssAssets = [];
for (const c of cssLinks) {
  const url = abs(c);
  try {
    const t = await fetch(url).then(r=>r.text());
    [...t.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)].forEach(m=>cssAssets.push(m[1]));
  } catch(e){ console.log('CSS FETCH FAIL', url, e.message); }
}
const cssFonts = [...new Set(cssAssets.map(abs))].filter(u=>/\.(woff2?|ttf|otf)(\?|$)/i.test(u));
const cssImgs = [...new Set(cssAssets.map(abs))].filter(u=>/\.(png|jpe?g|webp|svg|gif|avif)(\?|$)/i.test(u));
const allImgs = [...new Set([...imgSrc, ...srcset].map(abs))].filter(Boolean);

console.log('=== CSS files ==='); console.log(cssLinks.map(abs).join('\n'));
console.log('\n=== unique <img>/srcset images:', allImgs.length, '===');
console.log(allImgs.slice(0,6).join('\n'));
console.log('\n=== FONTS (html links):', fontsInHtml.length, '| (css url()):', cssFonts.length, '===');
console.log([...new Set([...fontsInHtml.map(abs), ...cssFonts])].join('\n'));
console.log('\n=== css bg images:', cssImgs.length, '=== (sample)');
console.log(cssImgs.slice(0,8).join('\n'));
console.log('\n=== favicons ==='); console.log(favicons.map(abs).join('\n'));
console.log('=== og:image ==='); console.log(og.map(abs).join('\n'));

// persist full manifest for the downloader
const manifest = { images:[...new Set([...allImgs, ...cssImgs])], fonts:[...new Set([...fontsInHtml.map(abs), ...cssFonts])], favicons:favicons.map(abs), og:og.map(abs) };
fs.writeFileSync('docs/research/asset-manifest.json', JSON.stringify(manifest,null,2));
console.log('\nTOTAL unique assets:', manifest.images.length+manifest.fonts.length+manifest.favicons.length, '-> docs/research/asset-manifest.json');
