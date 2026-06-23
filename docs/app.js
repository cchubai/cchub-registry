/* CCHub.ai portal — light interactivity, zero deps */

// Published registry — mirrors registry-published.md.
// (Later: generate this from the markdown at build time.)
const REGISTRY = [
  {
    axis: "方法论 SKILL",
    name: "karpathy-guidelines",
    src: "multica-ai/andrej-karpathy-skills",
    license: "MIT",
    safe: true,
    desc: "67 行行为铁律,逼 AI 做外科手术式小改、不过度设计、把假设说出来、给可验证的成功标准。装的是纪律,不是工具。",
    note: "我们自己留用,当“轻而狠”的品味标杆 —— 好 skill 不靠行数靠密度。",
    install: "npx cchub add karpathy-guidelines",
  },
  {
    axis: "方法论 SKILL",
    name: "verification-before-completion",
    src: "obra/superpowers",
    license: "MIT",
    safe: true,
    desc: "逼 AI 在声称“修好了/通过了”之前,先跑验证命令、确认输出,再下结论。根治“假装成功”。",
    note: "第一次用它就当场抓出我们把命令 exit 0 当成功的假象 —— 它是真有牙的。",
    install: "npx cchub add verification-before-completion",
  },
];

function card(it){
  const el = document.createElement("article");
  el.className = "card reveal";
  el.innerHTML = `
    <div class="card__top">
      <span class="card__axis">${it.axis}</span>
      <div class="badges">
        ${it.safe ? '<span class="badge badge--safe">✓ 放心装</span>' : ''}
        <span class="badge badge--mit">${it.license}</span>
      </div>
    </div>
    <div class="card__name">${it.name}</div>
    <div class="card__src">来源 · ${it.src}</div>
    <p class="card__desc">${it.desc}</p>
    <p class="card__note">${it.note}</p>
    <div class="card__install">
      <code>${it.install}</code>
      <button class="copy" data-copy="${it.install}" aria-label="复制安装命令">复制</button>
    </div>`;
  return el;
}

function renderRegistry(){
  const wrap = document.getElementById("cards");
  if(!wrap) return;
  REGISTRY.forEach(it => wrap.appendChild(card(it)));
}

function wireCopy(){
  document.addEventListener("click", e => {
    const b = e.target.closest(".copy");
    if(!b) return;
    navigator.clipboard.writeText(b.dataset.copy).then(()=>{
      const t = b.textContent;
      b.textContent = "已复制 ✓";
      b.classList.add("done");
      setTimeout(()=>{ b.textContent = t; b.classList.remove("done"); }, 1600);
    });
  });
}

function wireNav(){
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, {passive:true});
}

function wireReveal(){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }});
  }, {threshold:.12, rootMargin:"0px 0px -8% 0px"});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
}

function mountDemo(){
  const el = document.getElementById("player");
  if(!el || !window.AsciinemaPlayer) return;
  AsciinemaPlayer.create("demos/code-explain-demo.cast", el, {
    autoPlay:true, loop:true, preload:true, controls:true, fit:"width",
    theme:"asciinema", terminalFontSize:"13px", idleTimeLimit:1.5, speed:1.3,
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  renderRegistry();
  wireCopy();
  wireNav();
  wireReveal();
  mountDemo();
});
