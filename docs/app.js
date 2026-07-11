/* CCHub.ai portal — light interactivity, zero deps */

// Published registry — mirrors registry-published.md.
// (Later: generate this from the markdown at build time.)
const REGISTRY = [
  {
    tier: "SS",
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
    tier: "SS",
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
        ${it.tier ? `<span class="badge badge--tier">${it.tier} 常驻</span>` : ''}
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

/* ============ 蒸馏台 · THE STILL ============ */

// 蒸馏日志 — 每条:信号(哪来的+多热) → 源头(一手出处) → 产出(蒸成了什么) + 判决(含没收的和为什么)
const DISTILL = [
  {
    date:"07-12", type:"skill",
    signal:{platform:"抖音", author:"@Ali厂长", heat:"赞 6.4k · 转 1.5k"},
    source:{name:"Karpathy × 红杉《From Vibe Coding to Agentic Engineering》", url:"https://karpathy.bearblog.dev/sequoia-ascent-2026/"},
    output:{name:"own-your-diff", desc:"大活交付时归还“理解债”:架构走读 + 自曝薄弱点 + 理解自查", url:"https://github.com/cchubai/cchub-registry/blob/main/skills/own-your-diff/SKILL.md"},
    verdict:"只蒸一颗:「外包思考,不能外包理解」→ 行为化。趋势观点(vibe coding 已死 / 80·20 反转)判为观点非行为 → 转周刊。",
  },
  {
    date:"07-12", type:"skill",
    signal:{platform:"抖音", author:"@南山老实人", heat:"赞 1.7k · 藏 2.0k"},
    source:{name:"Anthropic 官方博客《Finding your unknowns》· Thariq Shihipar", url:"https://claude.com/blog/a-field-guide-to-claude-fable-finding-your-unknowns"},
    output:{name:"blindspot-pass", desc:"动手前主动跑四象限盲区扫描,治瞎猜与返工", url:"https://github.com/cchubai/cchub-registry/blob/main/skills/blindspot-pass/SKILL.md"},
    verdict:"原文教人写 prompt 找盲区 → 翻转成 Claude 主动做,用户不用学任何框架。4 个模板不搬运,行为化改写。",
  },
  {
    date:"07-12", type:"intel",
    signal:{platform:"公众号", author:"AI信息小屋", heat:"全文蒸馏"},
    source:{name:"Firecrawl 官方 · Keyless 发布", url:"https://github.com/firecrawl/firecrawl"},
    output:{name:"Firecrawl Keyless", desc:"146K 星爬虫 MCP 免 Key 化,月送 1000 次 —— 零配置,与「试用即装」绝配"},
    verdict:"候选库已有 Firecrawl → 本条作为升级情报,推进 A 档验收。",
  },
  {
    date:"07-12", type:"topic",
    signal:{platform:"抖音", author:"@杨竹筠", heat:"赞 5.5k · 藏 5.6k"},
    source:{name:"掘金《Claude Code 六大进阶等级》", url:"https://juejin.cn/post/7617744579777265718"},
    output:{name:"「六个段位」进阶框架", desc:"提示工程师→规划者→上下文工程师→工具整合→工作流→编排者"},
    verdict:"框架型内容非工具 → 不做 skill。与 CCHub 段位体系天然呼应 → 周刊选题。",
  },
  {
    date:"07-12", type:"topic",
    signal:{platform:"抖音", author:"@铁木觉醒之路", heat:"赞 5.0w · 藏 3.9w"},
    output:{name:"「搭建个人数据库」", desc:"个人知识库 × AI,藏赞比极高的强选题信号"},
    verdict:"泛方法论,无可装单品 → 周刊选题池。",
  },
  {
    date:"07-12", type:"topic",
    signal:{platform:"抖音", author:"@紫薯冰粉", heat:"赞 1.4w · 藏 7.8k"},
    output:{name:"Framer + Codex 作品集工作流", desc:"两天 vibe coding 个人网站,保留手工自定义部分"},
    verdict:"真实工作流案例 → Showcase 素材。",
  },
  {
    date:"07-12", type:"source",
    signal:{platform:"抖音", author:"@PM.姜同学", heat:"原视频已删"},
    source:{name:"替代信源:码哥字节《筛完 1400+ Skills》/ 中文 skills 合集仓", url:"https://www.cnblogs.com/uniqueDong/p/20304104"},
    output:{name:"中文 skills 推荐信源 ×2", desc:"顺藤摸到的同类文字信源,入信源池持续挖"},
    verdict:"原视频不可达不硬追 → 蒸馏改道:同主题文字源头入池。",
  },
];

const STILL_TYPE = {
  skill:  {label:"SKILL 上架", cls:"skill"},
  intel:  {label:"情报",       cls:"intel"},
  topic:  {label:"周刊素材",   cls:"topic"},
  source: {label:"信源入池",   cls:"source"},
};

function stillCard(it){
  const t = STILL_TYPE[it.type];
  const el = document.createElement("article");
  el.className = `still-card still-card--${t.cls} reveal`;
  el.innerHTML = `
    <div class="still-card__head">
      <span class="still-type still-type--${t.cls}">${t.label}</span>
      <span class="still-date">${it.date}</span>
    </div>
    <div class="still-chain">
      <div class="still-node">
        <span class="still-node__k">📡 信号</span>
        <span class="still-node__v">${it.signal.platform} ${it.signal.author}</span>
        <span class="still-node__m">${it.signal.heat}</span>
      </div>
      <div class="still-link" aria-hidden="true"></div>
      <div class="still-node">
        <span class="still-node__k">🔬 源头</span>
        ${it.source ? `<a class="still-node__v" href="${it.source.url}" target="_blank" rel="noopener">${it.source.name} ↗</a>` : `<span class="still-node__v still-dim">直接蒸馏信号本体</span>`}
      </div>
      <div class="still-link" aria-hidden="true"></div>
      <div class="still-node still-node--out">
        <span class="still-node__k">⚗️ 产出</span>
        ${it.output.url ? `<a class="still-node__v" href="${it.output.url}" target="_blank" rel="noopener"><code>${it.output.name}</code> ↗</a>` : `<span class="still-node__v">${it.output.name}</span>`}
        <span class="still-node__m">${it.output.desc}</span>
      </div>
    </div>
    <p class="still-verdict"><span>判决</span>${it.verdict}</p>`;
  return el;
}

function renderStill(){
  const feed = document.getElementById("still-feed");
  if(!feed) return;
  DISTILL.forEach(it => feed.appendChild(stillCard(it)));
  const n = {skill:0,intel:0,topic:0,source:0};
  DISTILL.forEach(it=>n[it.type]++);
  const stat = document.getElementById("still-tally");
  if(stat) stat.innerHTML = `今日 <b>${DISTILL.length}</b> 条原料 → <b class="c-skill">${n.skill}</b> skill · <b class="c-intel">${n.intel}</b> 情报 · <b class="c-topic">${n.topic}</b> 素材 · <b class="c-source">${n.source}</b> 信源 · <b>0</b> 硬凑`;
}

/* —— 蒸馏剧场:今天的真实原料逐条走完全程,机器自己解说 —— */
function theater(){
  const T = document.getElementById("theater");
  if(!T) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = id => document.getElementById(id);
  const card=$("th-card"), narr=$("th-narr"), prog=$("th-progress"),
        shelfRow=$("th-shelf-row"), drawerN=$("th-drawer-n"),
        gates=[$("g0"),$("g1"),$("g2")], fx=$("th-fx"), ctx=fx.getContext("2d");
  const PASS = t => t==="skill"||t==="intel";
  let dpr, sparks=[], fxRaf=0, playing=false, killed=false, idx=0, timers=[];

  /* --- canvas FX 层 --- */
  function sizeFx(){ dpr=Math.min(devicePixelRatio||1,2); fx.width=fx.clientWidth*dpr; fx.height=fx.clientHeight*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
  function burst(x,y,color,n=26,spread=2.6){
    for(let i=0;i<n;i++){ const a=Math.random()*6.28, v=0.6+Math.random()*spread;
      sparks.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,a:1,c:color,r:1.2+Math.random()*2}); }
  }
  function beam(x,y,h){ sparks.push({beam:1,x,y,h,a:1}); }
  function fxLoop(){
    ctx.clearRect(0,0,fx.clientWidth,fx.clientHeight);
    sparks = sparks.filter(s=>s.a>0.03);
    for(const s of sparks){
      if(s.beam){ s.a-=0.03;
        ctx.strokeStyle=`rgba(52,214,200,${s.a*.8})`; ctx.lineWidth=2;
        ctx.beginPath(); ctx.moveTo(s.x,s.y-s.h/2); ctx.lineTo(s.x,s.y+s.h/2); ctx.stroke();
        s.x+=3.2; continue; }
      s.x+=s.vx; s.y+=s.vy; s.vy+=0.03; s.a-=0.018;
      ctx.globalAlpha=s.a; ctx.fillStyle=s.c;
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,6.28); ctx.fill(); ctx.globalAlpha=1;
    }
    fxRaf = requestAnimationFrame(fxLoop);
  }

  /* --- 定位:卡片飞到某站 --- */
  function xyOf(el, dy=0){
    const a=T.getBoundingClientRect(), b=el.getBoundingClientRect();
    return {x: b.left-a.left + b.width/2, y: b.top-a.top + b.height + 14 + dy};
  }
  function fly(to, ms=900){ card.style.transition=`transform ${ms}ms cubic-bezier(.22,.61,.36,1)`;
    card.style.transform=`translate(${to.x}px,${to.y}px) translateX(-50%)`; }

  /* --- 旁白 --- */
  function say(html){ narr.innerHTML=html; narr.classList.remove("tick"); void narr.offsetWidth; narr.classList.add("tick"); }
  const wait = ms => new Promise(r=>{ const t=setTimeout(r,ms); timers.push(t); });

  /* --- 演一条 --- */
  async function play(it, i){
    prog.textContent = `蒸馏中 ${i+1} / ${DISTILL.length}`;
    const tt = STILL_TYPE[it.type];
    // 1) 信号进场
    card.className = "th-card"; card.style.transition="none";
    card.innerHTML = `<em>${it.signal.platform}</em><b>${it.signal.author}</b><s>${it.signal.heat}</s>`;
    const p0 = xyOf($("st-signal"));
    card.style.transform = `translate(${p0.x-220}px,${p0.y}px) translateX(-50%)`;
    card.style.opacity = 1;
    await wait(60); fly(p0, 800);
    say(`📡 捕获信号:<b>${it.signal.platform} ${it.signal.author}</b> · ${it.signal.heat}`);
    await wait(1500);
    // 2) 溯源
    const p1 = xyOf($("st-trace")); fly(p1, 800); await wait(850);
    beam(p1.x-70, p1.y+8, 92);
    say(it.source ? `🔬 溯源:不搬二手内容,摸到一手出处 → <b>${it.source.name}</b>` : `🔬 溯源:信号本体即原料,直接蒸馏`);
    if(it.source){ await wait(900); card.innerHTML += `<i class="th-tag">一手源 ✓</i>`; }
    await wait(1400);
    // 3) 三道闸
    const pg = xyOf($("st-gates"), 6); fly(pg, 800); await wait(900);
    const verdicts = PASS(it.type)
      ? [["合规 ✓ license 可商用可演绎",1],["安全 ✓ 无破坏 · 无外传 · 无后门",1],["品味 ✓ 真解决问题,不是凑数",1]]
      : [["合规 ✓",1],["安全 ✓",1],["品味闸:是<b>观点</b>不是<b>行为</b> —— 拦下",0]];
    for(let g=0; g<3; g++){
      const [text, ok] = verdicts[g];
      gates[g].className = "th-gate " + (ok? "ok":"no");
      burst(pg.x+(g-1)*26, pg.y-30, ok? "#34D6C8":"#E85C9E", ok?14:30);
      say((ok?"✅ ":"⛔ ") + text);
      await wait(ok? 950: 1500);
    }
    // 4) 分流
    if(!PASS(it.type)){
      const pd = xyOf($("th-drawer"), -46);
      card.classList.add("th-card--fall"); fly(pd, 1000);
      say(`↩️ 转入<b>周刊 · 信源抽屉</b> —— 没收 ≠ 丢弃,好观点当选题(${tt.label})`);
      await wait(1100);
      drawerN.textContent = +drawerN.textContent + 1;
      burst(pd.x, pd.y+20, "#7B5BE0", 18);
      card.style.opacity = 0;
      await wait(1300);
    } else {
      const p3 = xyOf($("st-gem")); fly(p3, 800); await wait(850);
      burst(p3.x, p3.y+8, "#f6d365", 46, 3.4);
      card.classList.add("th-card--gold");
      card.innerHTML = `<em>${it.type==="skill" ? "⚗️ SKILL 已上架" : "⚗️ 情报"}</em><b>${it.output.name}</b><s>${it.output.desc.slice(0,26)}…</s>`;
      say(it.type==="skill"
        ? `⚗️ 结晶:<b>${it.output.name}</b> —— 从一条视频,蒸成一个今天就能装的 skill`
        : `⚗️ 凝成情报:<b>${it.output.name}</b> → 推进验收队列`);
      await wait(2100);
      const chip = document.createElement("span");
      chip.className = "th-chip" + (it.type==="intel"? " th-chip--intel":"");
      chip.textContent = it.output.name;
      shelfRow.appendChild(chip);
      card.style.opacity = 0;
      await wait(800);
    }
    gates.forEach(g=>g.className="th-gate");
  }

  async function run(){
    if(playing) return; playing = true;
    while(!killed){
      if(idx===0){ shelfRow.innerHTML=""; drawerN.textContent="0"; }
      await play(DISTILL[idx], idx);
      idx = (idx+1) % DISTILL.length;
      await wait(600);
    }
  }
  function halt(){ killed=true; timers.forEach(clearTimeout); cancelAnimationFrame(fxRaf); }

  sizeFx(); addEventListener("resize", sizeFx, {passive:true});

  if(reduced){ // 静帧版:直接展示解说与成果
    say("📡 信号 → 🔬 溯源 → 🚪 三道闸 → ⚗️ 结晶。今天 7 条原料,2 条蒸成 skill,4 条转入周刊抽屉。");
    prog.textContent = "静态模式";
    DISTILL.filter(d=>PASS(d.type)).forEach(d=>{
      const c=document.createElement("span"); c.className="th-chip"+(d.type==="intel"?" th-chip--intel":"");
      c.textContent=d.output.name; shelfRow.appendChild(c);
    });
    drawerN.textContent = DISTILL.filter(d=>!PASS(d.type)).length;
    return;
  }
  fxLoop();
  // 可见才开演;切走即停 —— 不烧任何人的电脑
  new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting && !playing){ killed=false; run(); }
    if(!e.isIntersecting && playing){ halt(); playing=false; }
  }),{threshold:.15}).observe(T);
  document.addEventListener("visibilitychange", ()=>{
    if(document.hidden && playing){ halt(); playing=false; }
    else if(!document.hidden && !playing){ killed=false; timers=[]; fxLoop(); run(); }
  });
}

/* —— 今日原料带:机器条目的轻量分区(XSS 安全:全部 textContent,原始文本永不入 HTML) —— */
async function ticker(){
  const host = document.getElementById("ticker");
  if(!host) return;
  try{
    const r = await fetch("distill-feed.json?t=" + Math.floor(Date.now()/6e5)); // 10min 粒度破缓存
    const d = await r.json();
    const items = (d.items||[]).slice(0, 20);
    if(!items.length){ host.style.display="none"; return; }
    const row = document.createElement("div");
    row.className = "ticker__row";
    const mk = it => {
      const s = document.createElement("span"); s.className = "ticker__item";
      const b = document.createElement("b");  b.textContent = it.n;
      const i = document.createElement("i");  i.textContent = `${it.ch} · ${it.tier}`;
      s.append(b, i); return s;
    };
    items.forEach(it => row.appendChild(mk(it)));
    items.forEach(it => row.appendChild(mk(it))); // 复制一份做无缝循环
    host.appendChild(row);
  }catch(e){ host.style.display = "none"; }
}

/* 极光背景:页面隐藏时暂停(GPU 省电) */
function auroraPause(){
  document.addEventListener("visibilitychange", ()=>{
    document.documentElement.classList.toggle("halt", document.hidden);
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  renderRegistry();
  renderStill();
  theater();
  ticker();
  auroraPause();
  wireCopy();
  wireNav();
  wireReveal();
});
