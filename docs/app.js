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

/* —— 蒸馏装置动画:原料粒子过三道闸,少数结晶,其余转入周刊侧道 —— */
function stillRig(){
  const cv = document.getElementById("still-canvas");
  if(!cv) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = cv.getContext("2d");
  const COLORS = ["#E85C9E","#7B5BE0","#34D6C8"];
  let W,H,dpr, parts=[], running=false, raf=0, t=0;

  function size(){
    dpr = Math.min(devicePixelRatio||1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W*dpr; cv.height = H*dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  function spawn(){
    const lane = Math.floor(Math.random()*3);
    parts.push({
      x:-6, y: H*(0.28+lane*0.22) + (Math.random()*14-7),
      vx: 0.9+Math.random()*0.7, c: COLORS[lane],
      pass: Math.random() < 3/7,     // 与真实漏斗一致:7 进 3
      state:"flow", a:1, r:2.2+Math.random()*1.6, wob:Math.random()*6.28
    });
  }
  function step(){
    t++;
    ctx.clearRect(0,0,W,H);
    const gateX = W*0.52, gemX = W*0.86, gemY = H*0.5, sideY = H*0.94;

    // 三道闸(呼吸辉光)
    for(let i=0;i<3;i++){
      const gx = gateX + (i-1)*10;
      const glow = 0.35 + 0.15*Math.sin(t/30 + i);
      ctx.strokeStyle = `rgba(52,214,200,${glow})`;
      ctx.lineWidth = 3; ctx.lineCap="round";
      ctx.beginPath(); ctx.moveTo(gx, H*0.16); ctx.lineTo(gx, H*0.78); ctx.stroke();
    }
    // 结晶(旋转菱形 + 光晕)
    const pulse = 1 + 0.08*Math.sin(t/20);
    ctx.save(); ctx.translate(gemX, gemY); ctx.rotate(t/90);
    const g = ctx.createRadialGradient(0,0,2, 0,0,26*pulse);
    g.addColorStop(0,"rgba(246,211,101,.95)"); g.addColorStop(1,"rgba(246,211,101,0)");
    ctx.fillStyle=g; ctx.fillRect(-26*pulse,-26*pulse,52*pulse,52*pulse);
    ctx.fillStyle="#f6d365";
    ctx.beginPath(); ctx.moveTo(0,-11); ctx.lineTo(8,0); ctx.lineTo(0,11); ctx.lineTo(-8,0); ctx.closePath(); ctx.fill();
    ctx.restore();

    if(t%22===0 && parts.length<90) spawn();
    parts = parts.filter(p=>p.a>0.02 && p.x<W+10);
    for(const p of parts){
      p.wob += 0.08;
      if(p.state==="flow"){
        p.x += p.vx; p.y += Math.sin(p.wob)*0.35;
        if(p.x >= gateX-6){ p.state = p.pass ? "refine" : "divert"; }
      } else if(p.state==="refine"){
        p.x += (gemX-p.x)*0.035; p.y += (gemY-p.y)*0.035;
        if(Math.abs(p.x-gemX)<8 && Math.abs(p.y-gemY)<8) p.a *= 0.82;
      } else { // divert → 侧道(周刊/信源),不是丢弃
        p.x += 0.5; p.y += (sideY-p.y)*0.05; p.a = Math.max(p.a-0.006, 0.25);
        if(p.y > sideY-6) p.a -= 0.02;
      }
      ctx.globalAlpha = p.a;
      ctx.fillStyle = p.c;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,6.28); ctx.fill();
      ctx.globalAlpha = 1;
    }
    raf = requestAnimationFrame(step);
  }
  function start(){ if(!running && !reduced){ running=true; raf=requestAnimationFrame(step);} }
  function stop(){ running=false; cancelAnimationFrame(raf); }

  size();
  addEventListener("resize", ()=>{ size(); }, {passive:true});
  if(reduced){ // 静态版:画一帧示意
    t=40; for(let i=0;i<40;i++) spawn();
    parts.forEach(p=>{ p.x = Math.random()*W*0.5; });
    const r=requestAnimationFrame; step(); cancelAnimationFrame(raf);
    return;
  }
  // 只在可见时运转 —— 不烧任何人的电脑
  new IntersectionObserver(es=>es.forEach(e=> e.isIntersecting ? start() : stop()),{threshold:.05}).observe(cv);
  document.addEventListener("visibilitychange", ()=> document.hidden ? stop() : start());
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
  stillRig();
  auroraPause();
  wireCopy();
  wireNav();
  wireReveal();
});
