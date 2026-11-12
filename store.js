/* Draws the illustrated supermarket cutaway used on the store and avoid pages. */
window.storeSVG = function(){
  const stars = Array.from({length:40},(_,i)=>{const x=(i*97)%1200, y=8+((i*53)%120);return `<circle cx="${x}" cy="${y}" r="${i%5?0.8:1.4}" fill="#5a6a7c"/>`}).join('');
  // products on a shelf
  const prods=(x0,x1,y,h,seed)=>{let s='',x=x0,k=seed;const cols=['#e86a5b','#f2c14e','#7cc4a8','#7fa7e8','#e8e3d8','#c78bd6'];while(x<x1-8){const w=10+((k*7)%10);s+=`<rect class="prod" x="${x}" y="${y-h}" width="${w}" height="${h}" rx="2" fill="${cols[k%cols.length]}"/>`;x+=w+4;k++;}return s};
  const flame=(x,y,s,id)=>`<g id="${id}" transform="translate(${x} ${y}) scale(${s})"><g class="flame"><path d="M0 0 C-22 -18 -14 -46 0 -78 C4 -52 22 -44 18 -18 C24 -30 30 -20 26 -6 C22 2 8 4 0 0Z" fill="#ff5b2a"/><path d="M2 -2 C-10 -14 -6 -34 2 -54 C6 -36 16 -28 12 -12 C12 -4 8 -1 2 -2Z" fill="#ffb63a"/><path d="M3 -4 C-2 -12 0 -22 4 -32 C7 -22 10 -16 8 -8Z" fill="#fff1b8"/></g></g>`;
  const smoke=(x,y,id)=>`<g class="smoke" id="${id}">${[0,1,2,3].map(i=>`<circle cx="${x+(i%2?10:-8)}" cy="${y}" r="${14+i*4}" fill="#5b636d" style="animation-delay:${i*0.6}s"/>`).join('')}</g>`;
  const ctrl=(x,y,id,temp)=>`<g class="ctrl" id="${id}"><rect class="ring" x="${x-6}" y="${y-6}" width="82" height="40" rx="8"/><rect x="${x}" y="${y}" width="70" height="28" rx="4" fill="#1d2632" stroke="#3b4a5b"/><rect x="${x+6}" y="${y+5}" width="40" height="18" rx="2" fill="#071a12"/><text class="temp" id="${id}-t" x="${x+26}" y="${y+19}" text-anchor="middle">${temp}</text><circle class="led" cx="${x+58}" cy="${y+14}" r="4"/></g>`;
  return `
<svg viewBox="0 0 1200 640" class="storesvg" role="img" aria-label="Cutaway of a supermarket at night: a back office with the system manager and an internet modem, three refrigerated cases each with a controller, and the attacker outside">
<defs>
  <linearGradient id="glassCold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe6ff" stop-opacity=".35"/><stop offset="1" stop-color="#5fb8e6" stop-opacity=".12"/></linearGradient>
  <linearGradient id="glassHot" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb06a" stop-opacity=".55"/><stop offset="1" stop-color="#ff5b4f" stop-opacity=".3"/></linearGradient>
  <radialGradient id="glowCold"><stop offset="0" stop-color="#5fb8e6" stop-opacity=".35"/><stop offset="1" stop-color="#5fb8e6" stop-opacity="0"/></radialGradient>
  <radialGradient id="glowHot"><stop offset="0" stop-color="#ff6a3a" stop-opacity=".55"/><stop offset="1" stop-color="#ff6a3a" stop-opacity="0"/></radialGradient>
  <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#ff5b4f"/></marker>
</defs>
<rect width="1200" height="640" fill="#0a0f15"/>
${stars}
<rect y="580" width="1200" height="60" fill="#10161d"/>

<!-- attacker -->
<g id="att" class="part">
  <rect class="ring" x="18" y="12" width="150" height="96" rx="10"/>
  <rect x="48" y="28" width="90" height="56" rx="4" fill="#1d2632" stroke="#3b4a5b"/>
  <rect x="54" y="34" width="78" height="44" fill="#2b1311"/>
  <text x="93" y="61" text-anchor="middle" class="code">&gt;_ set</text>
  <path d="M38 84 H148 L156 94 H30 Z" fill="#2a3542"/>
  <text x="93" y="122" text-anchor="middle" class="lbl">Attacker, anywhere</text>
</g>
<path id="pNet" class="wire" d="M156 60 C200 60 205 70 205 86" marker-end="url(#arr)"/>

<!-- building -->
<rect x="40" y="150" width="1120" height="430" fill="#121a23" stroke="#2a3642" stroke-width="2"/>
<rect x="30" y="140" width="1140" height="14" fill="#1b2430"/>
<g fill="#1b2430" stroke="#2f3c4b"><rect x="820" y="100" width="120" height="40" rx="3"/><rect x="960" y="100" width="120" height="40" rx="3"/></g>
<g fill="none" stroke="#3b4a5b"><circle cx="855" cy="120" r="12"/><circle cx="905" cy="120" r="12"/><circle cx="995" cy="120" r="12"/><circle cx="1045" cy="120" r="12"/></g>
<text x="950" y="92" text-anchor="middle" class="sub">rooftop condensers</text>

<!-- antenna + modem -->
<g id="modem" class="part">
  <rect class="ring" x="186" y="78" width="92" height="190" rx="10"/>
  <line x1="205" y1="92" x2="205" y2="140" stroke="#6b7a8c" stroke-width="3"/>
  <path d="M195 98 a14 14 0 0 1 20 0 M190 92 a22 22 0 0 1 30 0" fill="none" stroke="#6b7a8c" stroke-width="2"/>
  <line x1="205" y1="154" x2="205" y2="222" stroke="#3b4a5b" stroke-width="2" stroke-dasharray="4 4"/>
  <rect x="190" y="222" width="70" height="30" rx="4" fill="#1d2632" stroke="#3b4a5b"/>
  <circle class="led" cx="204" cy="237" r="3"/><circle class="led" cx="216" cy="237" r="3"/>
  <text x="225" y="241" class="sub">modem</text>
</g>
<text id="lblRemote" class="call" x="290" y="215">Remote access for repair techs</text>

<!-- back office -->
<line x1="310" y1="154" x2="310" y2="580" stroke="#2a3642" stroke-width="3"/>
<text x="175" y="180" text-anchor="middle" class="sub">BACK OFFICE</text>
<rect x="70" y="520" width="170" height="10" fill="#2a3542"/><rect x="80" y="530" width="6" height="50" fill="#2a3542"/><rect x="224" y="530" width="6" height="50" fill="#2a3542"/>
<rect x="110" y="488" width="44" height="32" rx="2" fill="#1d2632" stroke="#3b4a5b"/>
<g id="mgr" class="part">
  <rect class="ring" x="96" y="296" width="148" height="120" rx="10"/>
  <rect x="106" y="306" width="128" height="100" rx="6" fill="#1d2632" stroke="#3b4a5b" stroke-width="2"/>
  <rect x="116" y="316" width="108" height="56" rx="2" fill="#071a12"/>
  <text x="122" y="332" class="scr">CASE 01  -18°</text><text x="122" y="346" class="scr">CASE 02    3°</text><text x="122" y="360" class="scr">ROOM 03    2°</text>
  <circle class="led" cx="124" cy="390" r="4"/><rect x="140" y="384" width="80" height="10" rx="2" fill="#2a3542"/>
  <text x="170" y="436" text-anchor="middle" class="lbl">System manager</text>
</g>
<g id="badge" class="badge"><rect x="98" y="262" width="144" height="24" rx="4"/><text x="170" y="279" text-anchor="middle">NO SECURITY UPDATES</text></g>
<path id="pModem" class="wire" d="M225 252 C225 280 200 290 190 306"/>

<!-- ceiling bus -->
<path id="pBus" class="wire" d="M234 330 H290 V176 H1100"/>
<path id="pD1" class="wire" d="M465 176 V276"/>
<path id="pD2" class="wire" d="M745 176 V276"/>
<path id="pD3" class="wire" d="M1100 176 V316"/>

<!-- case 1: glass-door freezers -->
<g id="case1" class="case">
  <ellipse class="glow" cx="460" cy="460" rx="160" ry="140"/>
  <rect x="340" y="310" width="240" height="20" fill="#1b2430"/>
  <rect x="340" y="330" width="240" height="250" fill="#18212b" stroke="#2f3c4b"/>
  ${[0,1,2].map(i=>{const x=346+i*78;return `<rect x="${x}" y="336" width="72" height="232" fill="#0f151c"/>${[400,460,520].map((y,j)=>`<line x1="${x+4}" y1="${y}" x2="${x+68}" y2="${y}" stroke="#2f3c4b"/>${prods(x+6,x+70,y,16+j*2,i*3+j)}`).join('')}<rect class="glass" x="${x}" y="336" width="72" height="232"/><rect x="${x+62}" y="420" width="4" height="50" rx="2" fill="#6b7a8c"/>`}).join('')}
  <text x="460" y="604" text-anchor="middle" class="lbl">Freezer doors</text>
</g>
${ctrl(430,280,'c1','-18°')}

<!-- case 2: open dairy multideck -->
<g id="case2" class="case">
  <ellipse class="glow" cx="745" cy="460" rx="150" ry="140"/>
  <rect x="640" y="310" width="210" height="20" fill="#1b2430"/>
  <path d="M640 330 H850 V580 H640 Z" fill="#18212b" stroke="#2f3c4b"/>
  <rect x="650" y="336" width="190" height="200" fill="#0f151c"/>
  ${[386,436,486,532].map((y,j)=>`<line x1="652" y1="${y}" x2="838" y2="${y}" stroke="#2f3c4b"/>${prods(656,836,y,18,j+2)}`).join('')}
  <rect class="glass" x="650" y="336" width="190" height="200" opacity=".7"/>
  <rect x="640" y="536" width="210" height="44" fill="#1b2430"/>
  <text x="745" y="604" text-anchor="middle" class="lbl">Open dairy case</text>
</g>
${ctrl(710,280,'c2','3°')}

<!-- case 3: walk-in cold room -->
<g id="case3" class="case">
  <ellipse class="glow" cx="1010" cy="460" rx="150" ry="140"/>
  <rect x="900" y="300" width="230" height="280" fill="#1a232e" stroke="#2f3c4b"/>
  ${[0,1,2,3,4].map(i=>`<line x1="${900+i*46}" y1="300" x2="${900+i*46}" y2="580" stroke="#243040"/>`).join('')}
  <rect x="950" y="360" width="110" height="220" rx="3" fill="#202b38" stroke="#3b4a5b" stroke-width="2"/>
  <rect class="glass" x="975" y="380" width="60" height="44" rx="2"/>
  <rect x="1046" y="460" width="8" height="40" rx="3" fill="#6b7a8c"/>
  <text x="1005" y="604" text-anchor="middle" class="lbl">Walk-in cold room</text>
</g>
${ctrl(1065,316,'c3','2°')}

<text id="lblCtrl" class="call" x="420" y="262">Every case has a controller</text>

<!-- fire -->
<g id="fire">
  ${smoke(690,300,'s1')}${smoke(395,300,'s2')}
  ${flame(668,336,0.9,'f1')}${flame(838,332,1.05,'f2')}${flame(808,342,0.7,'f3')}${flame(372,332,0.85,'f4')}${flame(402,338,0.6,'f5')}
</g>
</svg>`;
};

/* styles for the cutaway, injected once */
(function(){
  const css = `
.storesvg text{font-family:var(--mono);fill:var(--fg)}
.storesvg .sub{font-size:11px;fill:var(--muted);letter-spacing:.08em}
.storesvg .lbl{font-size:14px;fill:var(--muted)}
.storesvg .call{font-size:14px;fill:var(--amber);opacity:0;transition:opacity .4s}
.storesvg .call.show{opacity:1}
.storesvg .code{font-size:12px;fill:#ff8f86}
.storesvg .scr{font-size:10px;fill:#6fe0a8;transition:fill .3s}
.storesvg .temp{font-size:13px;fill:#6fe0a8;font-weight:700}
.storesvg .led{fill:#49b5a8}
.storesvg .ring{fill:none;stroke:var(--amber);stroke-width:2.5;stroke-dasharray:6 5;opacity:0;transition:opacity .3s}
.storesvg .on .ring{opacity:1}
.storesvg .glass{fill:url(#glassCold);transition:fill .6s}
.storesvg .glow{fill:url(#glowCold)}
.storesvg .hot .glass{fill:url(#glassHot)}
.storesvg .hot .glow{fill:url(#glowHot)}
.storesvg .hot .prod{opacity:.45}
.storesvg .bad .temp,.storesvg .bad .scr{fill:#ff6b5f}
.storesvg .bad .led{fill:#ff5b4f;animation:blink .6s steps(2) infinite}
@keyframes blink{50%{opacity:.2}}
.storesvg .wire{fill:none;stroke:#2c3846;stroke-width:3;transition:stroke .3s}
.storesvg .wire.on{stroke:var(--cold)}
.storesvg .wire.hot{stroke:var(--alarm);stroke-dasharray:9 7;animation:flow .8s linear infinite}
@keyframes flow{to{stroke-dashoffset:-16}}
.storesvg #pNet{opacity:0}.storesvg #pNet.on,.storesvg #pNet.hot{opacity:1}
.storesvg #att{opacity:.25;transition:opacity .4s}.storesvg #att.on{opacity:1}
.storesvg .badge{opacity:0;transition:opacity .3s}.storesvg .badge.show{opacity:1}
.storesvg .badge rect{fill:var(--amber)}.storesvg .badge text{fill:#1b1305;font-size:11px;font-weight:700}
.storesvg #fire{opacity:0;transition:opacity .6s}.storesvg #fire.show{opacity:1}
.storesvg .flame{transform-box:fill-box;transform-origin:50% 100%;animation:flick .5s ease-in-out infinite alternate}
.storesvg .flame:nth-of-type(2n){animation-duration:.37s}
@keyframes flick{from{transform:scaleY(.86) skewX(-3deg)}to{transform:scaleY(1.08) skewX(3deg)}}
.storesvg .smoke circle{opacity:0;animation:rise 2.6s ease-out infinite}
@keyframes rise{0%{opacity:.5;transform:translateY(0)}100%{opacity:0;transform:translateY(-120px)}}
.storesvg .lock{cursor:pointer}
.storesvg .lock circle{fill:var(--amber);stroke:#1b1305;stroke-width:2}
.storesvg .lock text{fill:#1b1305;font-family:var(--display);font-size:18px}
.storesvg .lock.sel circle{fill:#fff}
`;
  const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
})();
