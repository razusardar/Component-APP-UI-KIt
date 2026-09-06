const fs=require('fs'),vm=require('vm'),path=require('path'),assert=require('assert');
const root=path.resolve(__dirname,'..');
const context=vm.createContext({window:{FORMA_BASE:'./'},console});
for(const name of ['icons','catalog'])vm.runInContext(fs.readFileSync(path.join(root,'dist/js',name+'.js'),'utf8'),context);
const app=fs.readFileSync(path.join(root,'dist/js/app.js'),'utf8');vm.runInContext(app.slice(0,app.lastIndexOf('shell();render();')),context);
const samples=vm.runInContext(`({overview:overview(),usage:usage(),accessibility:accessibility(),tokens:tokens(),...Object.fromEntries(Object.keys(categories).map(k=>['components-'+k,components(k)])),...Object.fromEntries(foundationLinks.map(([k])=>['foundations-'+k,foundations(k)])),...Object.fromEntries(patternLinks.map(([k])=>['patterns-'+k,patterns(k)])),register:patterns('authentication','register'),forgot:patterns('authentication','forgot')})`,context);
for(const [route,html] of Object.entries(samples)){assert(html.length>100,route+' empty');assert(!html.includes('undefined'),route+' undefined');assert(!html.includes('__ID__'),route+' unexpanded IDs');const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);assert(ids.length===new Set(ids).size,route+' duplicate IDs');}
fs.writeFileSync('/tmp/forma-rendered.json',JSON.stringify(samples));
console.log(Object.keys(samples).length+' route render checks passed');
// Theme preference, persistence, and OS-change tests without a browser.
let listener,stored='dark';const media={matches:false,addEventListener:(event,fn)=>listener=fn};const themeCtx=vm.createContext({window:{},document:{documentElement:{dataset:{}}},localStorage:{getItem:()=>stored,setItem:(k,v)=>stored=v},matchMedia:()=>media});vm.runInContext(fs.readFileSync(path.join(root,'dist/js/theme.js'),'utf8'),themeCtx);assert.equal(themeCtx.document.documentElement.dataset.theme,'dark');themeCtx.window.formaTheme.set('system');assert.equal(stored,'system');assert.equal(themeCtx.document.documentElement.dataset.theme,'light');media.matches=true;listener();assert.equal(themeCtx.document.documentElement.dataset.theme,'dark');console.log('Theme persistence and system change checks passed');
