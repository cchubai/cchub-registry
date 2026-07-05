# CCHub 注册表 · 候选库 v0.1（扫货产出）

> ✍️ editor 扫货 / 🧭 founder 初验。2026-06-23 全网五轴扫货首批。
> 三态：**🟢上架候选**（自包含+license清+品味够）· **🔵信源**（目录/索引型，只读不收）· **⚪待装测**（看着好，需 community 真装验自包含+安全）
> ⚠️ license 标「✅亲验」= 我们 clone 核对过；标「⏳称」= 仅搜索声称，验收时必须核实。
> 🔁 **重叠度** = 与用户已用的 gstack 套件重不重（重叠的价值低，给中文用户策展的核心价值是"补你没有的"）。

---

## 轴 1 · 方法论 Skill（最高价值：装的是纪律不是工具）

| 候选 | 是什么 | License | 重叠度 | 裁决 |
|---|---|---|---|---|
| **obra/superpowers** | 整条开发纪律框架(brainstorm→plan→TDD→review→debug) | MIT ✅亲验 | 部分(investigate/office-hours) | 🟢 已挑 3 个上架候选,已 dogfood |
| **multica-ai/andrej-karpathy-skills** | 67 行行为铁律,零依赖,"轻而狠"原型 | MIT ✅亲验 | 无 | 🟢 已 dogfood,留用,品味标杆 |
| **anthropics/skills**(官方,17 个) | pdf/docx/xlsx/pptx/web-artifacts-builder/frontend-design | 官方 ⏳称 | 无 | ⚪ 强候选,官方=安全闸近乎免审,优先装测 |

## 轴 2 · Slash 命令

| 候选 | 是什么 | License | 自包含 | 裁决 |
|---|---|---|---|---|
| **wshobson/commands** | 60 个生产级命令 | MIT ✅亲验 | ⚠️ 大半依赖姊妹仓 agents | 🟢 已出 2 卡(/onboard /code-explain 自包含) |
| qdhenry/Claude-Command-Suite | 216+ 命令(大礼包) | ⏳称 | 未验 | 🔵 礼包→挑单品,不整收 |

## 轴 3 · Subagent

| 候选 | 是什么 | License | 裁决 |
|---|---|---|---|
| **VoltAgent/awesome-claude-code-subagents** | 100+ 专精 subagent(code-reviewer/architect-reviewer 有名) | ⏳称 | 🔵 索引型→挑单品装测 |
| **wshobson/agents** | wshobson/commands 的姊妹仓(命令的依赖来源) | ⏳称 | ⚪ 装测它=解锁 commands 大半命令,优先验 |
| rshah515/claude-code-subagents | 133-165 个(大礼包) | ⏳称 | 🔵 礼包→挑单品 |

## 轴 4 · MCP Server（接外部能力，价值高但安全闸最严）

| 候选 | 是什么 | 裁决 |
|---|---|---|
| **GitHub MCP** | 让 Claude 读 issue/审 PR/跨库搜索 | ⚪ 公认头号,但 MCP=接外部凭证,安全闸最严,需专项审 |
| **Context7** | 实时拉 React/Next/Django 等最新文档 | ⚪ 高频痛点(治模型用过时 API),优先装测 |
| PostgreSQL MCP | 自然语言查库/读 schema | ⚪ 强,但碰数据库=安全敏感 |
| Playwright MCP | 浏览器自动化/视觉测试 | ⚪ 与 gstack browse 重叠,中文用户若无 gstack 才推 |

## 轴 5 · Hook（自动化纪律，CCHub 最该原创的一类）

| 模式 | 干什么 | 裁决 |
|---|---|---|
| 改文件即格式化 | Write/Edit 后跑 prettier/eslint --fix | ⚪ 经典,可做"CCHub 中文注释版"原创 hook 包 |
| 测试门 | PreToolUse 拦 PR:测试不过 exit 2 | ⚪ 高价值,适合配中文拆解 |
| 命令日志 | PreToolUse 记录每条 bash+时间戳 | ⚪ 审计/复盘用 |
| **危险命令拦截** | rm -rf/DROP TABLE 前阻断 | ⚪ 与 gstack careful 重叠,但中文原创版有价值 |

---

## 🔵 信源池（索引/目录型——只读找线索，绝不直接收）

| 信源 | 体量 | ⚠️ license 红线 |
|---|---|---|
| **hesreallyhim/awesome-claude-code** | 最权威 awesome 索引 | 🔴 **CC BY-NC-ND**:非商业+禁演绎,**复制/再分发=侵权**,只能私下读 |
| netresearch/claude-code-marketplace | 40 skill source-ref 目录 | MIT ✅亲验,但指向的 40 仓各有 license,穿透核 |
| VoltAgent/awesome-agent-skills | 1000+ skill 合集 | ⏳称,囤货型,只挑珍珠 |
| anthropics/skills | 官方 17 skill | 官方,既是信源也是上架强候选 |

---

## 📊 首批扫货结论

- **数量**:五轴共 ~18 个候选 + 4 信源,够装测排几轮。
- **品味升级**:学到生态共识——**"AI 缺的不是能力是纪律,纪律可文本分发"**;CCHub 该重点捧"轻而狠"的方法论/行为类(karpathy 型),而非又一个 800 行瑞士军刀。
- **下一步装测优先级**:① anthropics/skills 官方(安全免审)② Context7 MCP(高频痛点)③ wshobson/agents(解锁 commands)④ VoltAgent 里 code-reviewer/architect-reviewer 单品。
- **原创空地**:Hook 类几乎没人做中文版 → CCHub 可出**原创中文 hook 包**,不只是策展别人的。

---

## 2026-06-23 · 第二轮增量扫货（手动验证轮）

> 验证本地扫货闭环的首轮真实产出。license 均「⏳称」未亲验。

| 候选 | 是什么 | License | 重叠/类型 | 红旗装测 | 裁决 |
|---|---|---|---|---|---|
| **affaan-m/ECC** | agent harness 性能优化系统(skills/instincts/memory/security) | ⏳称 | 跨平台(CC/Codex/Cursor) | ⚠️ **clone 超时**(仓大/网络),三查未完成 | ⚪ 待装测·重试 |
| **rohitg00/awesome-claude-code-toolkit** | 135 agent+35 skill+42 命令+176 插件 大合集 | ⏳称 | 索引/目录型 | 不 clone(信源不装) | 🔵 信源·穿透挑单品 |
| **FlorianBruniaux/claude-code-ultimate-guide** | 430K 行综合指南(workflow/hook/skill/MCP) | ⏳称 | 文档/指南型 | 不 clone | 🔵 信源·学习参考 |
| **Context Engineering / MCP Builder / Doc Co-Authoring**(claudeskills.info 榜单热门) | 提示工程/MCP 开发/协作写作 skill | ⏳称 | 待定位源仓 | 未定位 | ⚪ 下轮定位源仓再装测 |

**本轮机器学到的真实约束**:大仓 `clone --depth 1` 也可能超时——自动扫货须给 clone 设超时阈值(如 60s),超时即标「待装测·重试」不卡死整轮。✅ 已验证:登记+push 闭环本身通。

---

## 2026-06-23 · cron 扫货轮（23:28）

> 五轴全搜，去重后净新增 6 项。license 均「⏳称」未亲验。

| 候选 | 轴 | 是什么 | License | 与 gstack 重叠度 | 裁决 |
|---|---|---|---|---|---|
| **elementalsouls/Claude-BugHunter** | 轴1+2 | 71 skills + 15 slash commands + 681 公开漏洞报告模式，覆盖 24 类漏洞类别，外部红队/bug bounty 专项包 | ⏳称 | 部分（与 /cso 安全审计轴重叠，但外部攻击面视角是补充） | ⚪ 待装测·需安全专项审查（纯外部攻击面，勿放内网） |
| **disler/claude-code-hooks-mastery** | 轴5 | 11 种 hook 事件全覆盖 + meta-agent + Builder/Validator 双 agent 团队验证范式，有 TTS 反馈 + JSON 自动日志 | ⏳称 | 部分（与 gstack careful/hooks 重叠，但多 hook 组合范式是补充） | ⚪ 待装测·Hook 轴最完整的单品候选 |
| **Imbad0202/academic-research-skills** | 轴1 | 27 个模式跑 research→write→review→revise→finalize 学术论文全链路，每阶段需人工确认，"AI 是副驾，不是主驾" | ⏳称 | 无 | 🟢 候选·细分受众（研究员/学生）明确，品味克制 |
| **firecrawl/firecrawl-mcp-server** | 轴4 | 官方 Firecrawl MCP，`npx -y firecrawl-mcp` 一行装，给 Claude 提供抓取+搜索能力，输出 LLM-ready Markdown | ⏳称 | 小（与 gstack browse 有边界重叠，但 firecrawl 专攻批量抓/JS 渲染页） | ⚪ 待装测·需 API key，官方维护=安全闸松 |
| **perplexityai/modelcontextprotocol** | 轴4 | 官方 Perplexity MCP，接 Sonar 模型实时联网搜索+引用，一行 `claude mcp add` 装 | ⏳称 | 中（与 gstack WebSearch 功能重叠，但 Sonar 带引用+深度研究模式） | ⚪ 待装测·需 PPLX API key，官方维护 |
| **VILA-Lab/Dive-into-Claude-Code** | 信源 | 学术级逆向分析报告（1.6k ★），核心发现：Claude Code 仅 1.6% 是 AI 决策逻辑，98.4% 是确定性基础设施；含中文 README | ⏳称 | 无 | 🔵 信源·agent 架构设计参考，不收为 skill |

**本轮总结**：新增 6 项（4 个 ⚪待装测 + 1 个 🟢候选 + 1 个 🔵信源）；无异常。装测优先：disler/hooks-mastery（Hook 轴填空）> Imbad0202/academic-research-skills（已评🟢）> firecrawl + perplexity MCP（需 API key 各自独立验）。

---

## 2026-06-24 · cron 扫货轮（01:04）

> 五轴全搜，去重后净新增 8 项。license 均「⏳称」未亲验。

| 候选 | 轴 | 是什么 | License | 与 gstack 重叠度 | 裁决 |
|---|---|---|---|---|---|
| **steipete/claude-code-mcp** | 轴4 | 把 Claude Code 本身包成 MCP server，实现「agent 套 agent」——外层模型可把复杂编码任务委托给内层 Claude Code 实例，`npx @steipete/claude-code-mcp@latest` 一行装 | ⏳称 | 低（gstack 有 Agent 工具，但 MCP 嵌套路由是不同拓扑） | ⚪ 待装测·架构实验性强，装前需确认权限隔离 |
| **zilliztech/claude-context** | 轴4 | 语义代码搜索 MCP，Milvus 向量库 + BM25 混合索引全库，支持 OpenAI/VoyageAI/Ollama embedding，`index_codebase` 一次后 `search_code` 自然语言检索 | ⏳称 | 无（gstack 无语义代码搜索轴） | ⚪ 待装测·需 OPENAI_API_KEY + MILVUS_TOKEN，大仓适用场景明确 |
| **jztan/pdf-mcp** | 轴4 | 解决 Claude Code 不能读超 30MB/100 页 PDF 的痛点：BM25+语义混合搜页+仅取相关页，OCR 支持多栏及日文版面，SQLite 持久化缓存，MIT 开源，`pip install pdf-mcp` | ⏳称 | 低（官方 Read 工具读 PDF 有大小限制，本品补该边界） | ⚪ 待装测·细分痛点清晰，无需远程 API key |
| **mukul975/cve-mcp-server** | 轴4 | 27 个安全情报工具跨 21 API（NVD/EPSS/CISA KEV/MITRE ATT&CK/Shodan/VirusTotal/GreyNoise），一句话查 CVE 即得跨源关联报告 | ⏳称 | 中（与 gstack /cso 静态代码审计重叠，但本品面向实时外部威胁情报，视角互补） | ⚪ 待装测·需多 API key，安全敏感，勿连内网代码库 |
| **vanzan01/claude-code-sub-agent-collective** | 轴3 | Context Engineering 研究项目：30+ agent 以 hub-and-spoke 架构协作，hook 强制 TDD、合约式 handoff 保上下文，`npx` 分发，内置 Context7 集成 | ⏳称 | 部分（gstack 有 subagent/workflow 原语，但 TDD 强制 + 合约 handoff 纪律层是补充） | ⚪ 待装测·架构理念有参考价值，完整性待验 |
| **barkain/claude-code-workflow-orchestration** | 轴3 | Claude Code 插件：PreToolUse hook 渐进提醒主 agent 走专项委托路径，8 个领域专属 agent（代码/测试/架构/DevOps），懒加载 stub（1.1KB 启动，7.5KB 按需） | ⏳称 | 高（gstack Workflow/Agent 工具覆盖相似功能，差异在 hook 渐进软执行机制） | 🔵 信源·重叠高，穿透挑 hook 渐进提醒单模式参考即可 |
| **karanb192/claude-code-hooks** | 轴5 | 可 copy-paste 的 hook 集：protect-tests / auto-format / branch-guard / context-snapshot / cost-tracker / tts-alerts / discord-notify / rules-injector / rate-limiter 等 12+ 条，每条独立、有中英注释 | ⏳称 | 部分（与 gstack careful/guard 重叠 2-3 条，其余均为填空） | 🟢 候选·即取即用，颗粒度好，中文用户友好 |
| **decider/claude-hooks** | 轴5 | Python 实现的代码质量 hook 套件：clean code 自动校验 + package 版本老化检测 + 任务完成通知，轻量无外部依赖 | ⏳称 | 部分（与 gstack careful 重叠「危险命令拦截」，但 Python 生态 + package age 检测是差异点） | ⚪ 待装测·Python 项目适配性好，需验 Python 依赖自包含性 |

**本轮总结**：新增 8 项（5 个 ⚪待装测 + 1 个 🟢候选 + 1 个 🔵信源 + 1 个 🟢候选）；无异常。装测优先：karanb192/claude-code-hooks（即用型🟢）> jztan/pdf-mcp（无需外部 key）> zilliztech/claude-context（语义搜索填空）> mukul975/cve-mcp-server（需多 API key，安全审后装）。

---

## 2026-06-24 · cron 扫货轮（04:00）

> 五轴全搜，去重后净新增 5 项。license 均「⏳称」未亲验。

| 候选 | 轴 | 是什么 | License | 与 gstack 重叠度 | 裁决 |
|---|---|---|---|---|---|
| **sangrokjung/claude-forge** | 轴1+2+3+5 | "oh-my-zsh for Claude Code"：11 AI agent（6 Opus 深析 + 5 Sonnet 快执）+ 36 slash 命令 + 15 skill + 6 层安全 hook（secret 过滤/SQL 注入防护/MCP 跟踪等），`curl install.sh` 5 分钟装，含 /plan→/tdd→/code-review→/commit-push-pr 预连管道 | ⏳称 | 中（与 gstack /cso/careful/guard 在安全 hook 轴重叠，但 6 层安全 + 管道预连是补充） | ⚪ 待装测·框架型但有独特的 6 层安全 hook 层，需穿透验各层自包含性 |
| **SuperClaude-Org/SuperClaude_Framework** | 轴1+2 | 23k+ ★ 的 CC 元编程配置框架：30 slash 命令 + 16 领域专家 agent + "认知人格（persona）"机制（通过 .md 指令注入行为模式），`pipx install` 装，MIT | ⏳称 | 部分（gstack 无 persona 切换机制；30 命令中数个与 gstack skill 重叠，但 persona 层为差异点） | ⚪ 待装测·星数高=社区共识强；persona 概念值得单独提炼收录 |
| **Piebald-AI/tweakcc** | 轴5 | 深度定制 Claude Code 的基础设施工具：替换系统提示 / 自定义工具集 / 输入高亮主题 / thinking 动词 / spinner，支持私有/未发布功能解锁，npm 全平台 | ⏳称 | 低（gstack 无 CC 界面/提示层定制轴，是真空地带） | ⚪ 待装测·属于"CC 底座定制"而非 skill/hook，安全敏感（系统提示替换），需专项审 |
| **Piebald-AI/claude-code-system-prompts** | 信源 | 持续追踪每个 CC 版本的完整系统提示（515 条）+ 27 个内置工具描述 + subagent 提示范本，v2.1.186（2026-06-22）已更新 | ⏳称 | 无 | 🔵 信源·CC 架构逆向最全参考，写 skill/hook 时查工具描述原文，不装测 |
| **alirezarezvani/claude-skills** | 信源 | 337 skill + 30 agent + 70 命令大合集，覆盖工程/营销/产品/合规/C 级顾问等领域，跨 CC/Codex/Cursor/Gemini | ⏳称 | 部分（跨 agent 平台=范围超出 CC 专注轴） | 🔵 信源·礼包→穿透挑工程类单颗 skill，不整收 |

**本轮总结**：新增 5 项（3 个 ⚪待装测 + 2 个 🔵信源）；无异常。装测优先：SuperClaude_Framework（星数高、MIT、persona 概念独特）> sangrokjung/claude-forge（6 层安全 hook 管道有实际价值）> Piebald-AI/tweakcc（底座定制但需安全专项审）。

---

## 2026-06-24 · cron 扫货轮（08:00）

> 五轴全搜，去重后净新增 8 项，记忆/持久化类集中爆发。license 均「⏳称」未亲验。

| 候选 | 轴 | 是什么 | License | 与 gstack 重叠度 | 裁决 |
|---|---|---|---|---|---|
| **thedotmack/claude-mem** | 轴4+5 | 46.1K★ 最热跨会话记忆插件：Stop hook 捕获 session → Claude Agent SDK AI 压缩 → ChromaDB 向量搜索注入未来会话；支持多机 SSH 同步（claude-mem-sync）、Endless Mode beta（生物拟态记忆架构），兼容 CC/OpenClaw/Codex/Gemini/Copilot | Apache 2.0 ⏳称 | 中（gstack auto memory 是 markdown 写入，本品补向量召回+跨会话注入层） | ⚪ 待装测·星数碾压级，Apache 2.0 license 清，优先级最高 |
| **yoloshii/ClawMem** | 轴4+5 | 全本地无 API key 的 Agent 记忆层：SQLite vault + BM25+向量混合 RAG + 注意力衰减 + 因果链图（semantic/temporal/causal beam search）；Hooks + MCP 双接入，兼容 OpenClaw/Hermes，`npm install clawmem` | ⏳称 | 低（gstack auto memory 是 markdown，本品补结构化混合 RAG 召回） | ⚪ 待装测·全本地=无 key=安全闸最松，架构学术味重，适合重度用户 |
| **coleam00/claude-memory-compiler** | 轴5 | Karpathy LLM Knowledge Base 架构迁移到 CC：Stop hook 捕获 transcript → Claude Agent SDK 提炼决策/教训 → 每日日志 → 编译成交叉引用知识库文章；无向量数据库，纯 markdown+索引，社区首日 237★ | ⏳称 | 中（与 gstack auto memory 理念重叠，但"编译蒸馏"机制是差异点） | ⚪ 待装测·设计哲学清晰，无外部依赖，装测成本低 |
| **mann1x/claude-hooks** | 轴5 | Qdrant + HyDE 查询扩展（先生成假设答案再向量搜）+ 注意力衰减 + 去重 + instinct 自动抽取（bug-fix 模式→`~/.claude/instincts/` .md 文件）；OpenWolf 集成；自动安装器注入 settings.json | ⏳称 | 低（gstack 无向量记忆召回轴，HyDE 机制独特） | ⚪ 待装测·需 Qdrant+Ollama 本地服务，重度记忆场景专用 |
| **lihaoz-barry/claude-code-hooks** | 轴5 | 跨平台任务完成通知 hook：macOS 原生声音通知 + ntfy.sh 手机 push（iOS/Android）+ 终端窗口自动 focus（Terminal.app/iTerm2）；内附 claude-here.command 双击启动 launcher | ⏳称 | 无（gstack 无移动端通知轴，是真空地带） | 🟢 候选·痛点明确（长任务完成后人不在电脑前），实现轻量，可即取即用 |
| **czlonkowski/n8n-mcp** | 轴4 | 官方 n8n 配套 MCP：让 Claude 访问 525 个 n8n 节点完整 schema（99% 节点属性、63.6% 操作、90% 官方文档），对话里直接构建/调试 n8n 工作流，Docker/stdio 双模式 | ⏳称 | 无（gstack 无 n8n 自动化集成轴） | ⚪ 待装测·需本地 n8n 实例，但 n8n 用户群大，填空明确 |
| **czlonkowski/n8n-skills** | 轴1 | n8n-mcp 配套 skill 包（同一作者）：7 个 skill 教 Claude 正确构建生产级 n8n 工作流，含表达式语法/节点配置/Code JS/Code Python/验证专家，与 n8n-mcp 搭配使用 | ⏳称 | 无 | ⚪ 待装测·MCP+skill 双件套组合，装 n8n-mcp 时一并装 |
| **0xfurai/claude-code-subagents** | 轴3 | 100+ 生产级专精 subagent，按语言/框架切分（Kafka/Auth0/OCaml/Phoenix/TypeORM/GitLab CI/GitHub Actions Expert 等），每个 agent 按任务复杂度指定 Claude 模型（Opus/Sonnet 分级），单 .md 文件即取即用 | ⏳称 | 低（VoltAgent 也是 100+ 但 handle 不同，专精集不同，互补） | ⚪ 待装测·框架/语言覆盖面独特，Kafka/OCaml/Phoenix 是稀有轴 |

**本轮总结**：新增 8 项（6 个 ⚪待装测 + 1 个 🟢候选 + 0 个 🔵信源）；记忆/持久化类本轮集中爆发（4 项），无异常。装测优先：thedotmack/claude-mem（46K★ 最热，Apache 2.0 最清）> lihaoz-barry/claude-code-hooks（已评🟢，零依赖）> coleam00/claude-memory-compiler（无外部依赖装测成本低）> czlonkowski/n8n-mcp+skills（n8n 用户填空）。

---

## 2026-06-24 · cron 扫货轮（12:00）

> 五轴全搜，去重后净新增 5 项。license 均「⏳称」未亲验。

| 候选 | 轴 | 是什么 | License | 与 gstack 重叠度 | 裁决 |
|---|---|---|---|---|---|
| **Weizhena/Deep-Research-skills** | 轴1 | 1.1k★ 结构化两阶段研究 skill（outline→deep-investigate），人工确认每阶段切换，支持学术/技术/市场/尽调四类场景，有中文 README，需 pyyaml Python 依赖 | ⏳称 | 低（gstack /deep-research 是 web 多搜聚合，本品补「人工审核每步」的结构化研究纪律，视角互补） | ⚪ 待装测·星数高，中文 README 对中文用户友好，Python 依赖需验自包含性 |
| **Orchestra-Research/AI-Research-SKILLs** | 轴1 | 98 个 AI 研究全链路 skill（文献调研→实验设计→训练流水线→评估→论文写作），autoresearch 双循环主编排（快实验 inner loop + 综合反思 outer loop），支持 CC/Codex/Gemini/Cursor 等 8 平台 | ⏳称 | 无（AI 研究员细分受众，gstack 无此轴） | 🔵 信源·礼包型→穿透挑 autoresearch 主编排 skill 单品装测 |
| **glebis/claude-skills** | 轴1 | 创意型 skill 小合集：daydream（5 模式反「奉承症」结构对话：FULL/STEELMAN/DECISION/INTERACTIVE/TLDR）、deep-research（调 OpenAI Deep Research API）、gmail（Gmail 集成）、doctorg（循证健康研究 + Apple Health 上下文）、thinking-patterns（季度复盘教练），每颗独立文件夹 | ⏳称 | 低（daydream 反奉承模式是 gstack 真空；gmail/doctorg 均是空地） | 🔵 信源·穿透挑 daydream 单颗装测（反奉承品味独特，其他 gmail/doctorg 各有细分受众） |
| **shanraisshan/claude-code-best-practice** | 信源 | GitHub Trending 日榜 #1（2026-03），汇聚官方+社区的精选最佳实践（skill/subagent/hook/command/agent-teams 全覆盖），每条来源注明出处，含中文注释参考 | ⏳称 | 无 | 🔵 信源·设计 gstack 新 skill/hook 时查模式库，中文友好 |
| **ChrisWiles/claude-code-showcase** | 轴5 | 完整展示项目：hook 里内置「prompt 置信度自动 skill 激活」系统——每次提交前分析关键词/文件路径打分（keyword:2/pathPattern:4/intentPattern:4），超阈值自动建议激活对应 skill，兼附 GitHub Actions 工作流触发，hook 本体 < 150 行 | ⏳称 | 低（gstack 无「prompt 驱动 skill 自动激活」轴，是真空地带） | ⚪ 待装测·穿透抓 skill-activation hook 单模式，Hook 轴新方向 |

**本轮总结**：新增 5 项（2 个 ⚪待装测 + 3 个 🔵信源）；研究类 skill 和信源型目录本轮集中。无异常。装测优先：Weizhena/Deep-Research-skills（1.1k★，中文 README，人工确认纪律明确）> ChrisWiles/claude-code-showcase 穿透 skill-activation hook 模式（Hook 轴新方向）。

---

## 2026-07-04 · cron 扫货轮（00:00）

> 五轴全搜，去重后净新增 6 项。license 均「⏳称」未亲验。

| 候选 | 轴 | 是什么 | License | 与 gstack 重叠度 | 裁决 |
|---|---|---|---|---|---|
| **vlad-ko/claude-wizard** | 轴1+3 | /wizard 单 skill 把 Claude Code 变成高级架构师：8 阶段流水线（需求→设计→TDD→实现→对抗审查→质量门→PR→回顾），v2 升级为编排模式——主线程拆分出 architect/builder/adversarial-critic/reviewer 专属 subagent 并行推进，battle-tested（数百 PR 验证），MIT | ⏳称 | 低（gstack /investigate+/code-review 覆盖部分，但 8 阶段端到端编排 + 对抗审查门是差异点） | 🟢 候选·品味最高候选之一，"纪律分发"理念最佳实践，方法论轴强力补充 |
| **Jeffallan/claude-skills** | 轴1+2 | 66 个全栈开发专精 skill（12 类：语言/后端/前端/基础设施/测试/DevOps/安全/数据/ML/平台），每个 skill 核心仅 80 行配路由表，token 减约 50%；附 9 个 workflow 命令覆盖 Jira/Confluence 集成；/common-ground 命令显式暴露并验证 Claude 对项目的隐式假设 | ⏳称 | 低（gstack 有少量 skill，本品 66 个全栈细分 + 50% token 精简 + Jira 集成是真空） | ⚪ 待装测·Listed in awesome-claude-code，/common-ground 命令品味独特值单独评 |
| **valorisa/Claude-Skills** | 轴1 | rescue-tokens 旗舰 skill：9 个 token 优化模式（cache 管理/context forking/模型分级/输入过滤），声称可从 $750/月降到 $100（85%），全套 skill 以 TDD 红绿重构自测，含 productivity-workflow 与 dev-best-practices 系列 | ⏳称 | 低（gstack 无 token 优化方法论轴，rescue-tokens 填真空） | ⚪ 待装测·token 成本痛点对中文用户极相关，先验 rescue-tokens 单颗 |
| **supatest-ai/awesome-claude-code-sub-agents** | 轴3 | MIT 开源的决策型 subagent 集合：定位"expert consultant 而非 code generator"，每 agent 提供架构决策框架+生产模式+80/20 实践（300-800 行），覆盖语言（Python/JS/TS/Go/Java/C#/Rust）+ 框架（React/Vue/Django/Spring）+ 测试 + 性能轴 | ⏳称 | 低（VoltAgent 是"生成"型，本品是"决策咨询"型，定位差异显著） | ⚪ 待装测·MIT license，定位独特，code-quality-guardian 单 agent 先试 |
| **matlugert/tdd-skill** | 轴1 | 极简单颗 TDD skill：严格实施 RED→GREEN→REFACTOR→REPEAT 循环，每步显示实际命令+退出码+测试输出，无外部依赖，约 1 个文件 | ⏳称 | 低（gstack 无强制 TDD 纪律轴，sangrokjung/claude-forge 含 /tdd 但需整包，本品可单颗即取） | ⚪ 待装测·零依赖单颗，装测成本最低，可作 TDD 轴基准对比件 |
| **travisvn/awesome-claude-skills** | 信源 | 专注 Claude Skills 的 curated awesome 列表，聚合社区 skill 仓库+工具+资源，与 hesreallyhim/awesome-claude-code 互补（后者更宽，本品更深 skill 轴） | ⏳称 | 无 | 🔵 信源·skill 轴扫货的专项信源，与 awesome-claude-code 并列参考 |

**本轮总结**：新增 6 项（4 个 ⚪待装测 + 1 个 🟢候选 + 1 个 🔵信源）；无异常。装测优先：vlad-ko/claude-wizard（🟢品味最高，8 阶段编排 battle-tested）> valorisa/rescue-tokens（零依赖，token 成本痛点直击）> matlugert/tdd-skill（最轻，可快速验）> supatest-ai（MIT，决策型定位独特）。

---

## 2026-07-04 · cron 扫货轮（08:00）

> 五轴全搜，去重后净新增 5 项。license 均「⏳称」未亲验。

| 候选 | 轴 | 是什么 | License | 与 gstack 重叠度 | 裁决 |
|---|---|---|---|---|---|
| **iannuttall/claude-sessions** | 轴2 | 1.1k★ 的跨会话连续性 slash 命令集：/session-start、/session-end、/session-resume 等，结构化记录「做了什么/为什么决策/下步是什么」，解决 Claude Code 会话断点失忆问题，X 上作者称「每周省 2-3 小时」 | ⏳称 | 低（gstack auto memory 是向量/markdown，本品是轻量 session 日志 slash 命令，互补） | ⚪ 待装测·1.1k★ 社区验证，零依赖，优先验自包含性 |
| **AgriciDaniel/claude-seo** | 轴1+3 | 25 sub-skills + 18 sub-agents 的 SEO 全栈审计套件：technical SEO/E-E-A-T/Schema.org/GEO（AI 搜索优化）/local SEO/e-commerce SEO，编排器同时调度最多 15 个 agent，MIT 开源，可选 DataForSEO/Firecrawl/Banana 扩展，全离线运行（不接 Google API 时） | MIT ⏳称 | 无（gstack 无 SEO/AEO 轴，完全填空） | ⚪ 待装测·MIT+细分受众清晰（SEO 从业者/内容团队），先验核心 seo skill 单颗 |
| **AgriciDaniel/claude-blog** | 轴1+3 | claude-seo 同一作者的博客内容生产套件：30 sub-skills + 5 agents + 5 门 v1.9.0「交付合约」(Capability/Format/Visual/Content/Asset 五闸)，每篇草稿最多迭代 3 次才升级人工介入，双优化（Google E-E-A-T + AI 引用 GEO/AEO），兼容 Next.js MDX/Astro/Hugo/WordPress/Ghost 等 8 CMS | ⏳称 | 无（gstack 无内容营销轴） | ⚪ 待装测·与 claude-seo 同作者可组合，博主/内容团队细分受众明确 |
| **luongnv89/claude-howto** | 信源 | CC 版本同步的可视化入门教程仓：copy-paste 模板覆盖 slash 命令/memory/hooks/skills/agents/plugins/CLI，含学习路线图（15 分钟速成→11-13 小时完整路径），v2.1.160（2026-06）随版本持续更新 | ⏳称 | 无 | 🔵 信源·新手上手文档参考，编写 CCHub 中文教程时查原型模板 |
| **ComposioHQ/awesome-claude-skills** | 信源 | Composio 官方维护的 1000+ skills 策展列表，强调跨平台（CC/Codex/Cursor/Gemini CLI/Antigravity/Windsurf），内置 connect-apps 插件（500+ 外部 app 动作），与 travisvn/awesome-claude-skills 互补（后者社区驱动，本品 Composio 生态加权） | ⏳称 | 无 | 🔵 信源·补 travisvn 之外第二个 skill 索引源，穿透挑 Composio 连接类 skill 单品 |

**本轮总结**：新增 5 项（3 个 ⚪待装测 + 2 个 🔵信源）；无异常。装测优先：iannuttall/claude-sessions（零依赖，session 连续性真实痛点）> AgriciDaniel/claude-seo（MIT，SEO 真空填空）> AgriciDaniel/claude-blog（可与 claude-seo 组合装测）。

---

## 2026-07-04 · cron 扫货轮（12:00）

> 五轴全搜，去重后净新增 5 项。license 均「⏳称」未亲验。

| 候选 | 轴 | 是什么 | License | 与 gstack 重叠度 | 裁决 |
|---|---|---|---|---|---|
| **sickn33/antigravity-awesome-skills** | 信源 | 42k+★ 的可安装 skill 大库：1894+ 技能覆盖 Claude Code/Cursor/Codex/Gemini/Antigravity 等多平台，`npx antigravity-awesome-skills` 直接按角色/bundle/workflow 安装，内含官方+社区双源，有目录站点可浏览筛选 | ⏳称 | 无 | 🔵 信源·星数碾压级，穿透挑专精单颗；npx 安装器有参考价值 |
| **jefflester/claude-skills-supercharged** | 轴1+5 | Haiku 4.5 驱动的 AI 自动 skill 注入系统：UserPromptSubmit hook 分析 prompt 意图，给每个 skill 打置信度（0.0-1.0），>0.65 自动注入上下文，声称 95%+ 精度；比 ChrisWiles/claude-code-showcase 关键词打分升级到 LLM 推理层 | ⏳称 | 低（ChrisWiles 已登记但是 keyword 评分，本品 LLM 推理是差异点；gstack 无 AI 驱动 skill 自激活轴） | ⚪ 待装测·概念创新，需验 Haiku 调用延迟对交互体验的影响 |
| **wynandw87/claude-code-youtube-mcp** | 轴4 | YouTube MCP 服务器，15 工具覆盖：视频转录/元数据/频道信息/播放列表/评论/热榜/互动分析/章节提取/SponsorBlock/最多播放热力图；5 个工具无需 API key（转录/SponsorBlock/热力图/URL 解析），其余 10 个需 YouTube Data API v3 | ⏳称 | 无（gstack 无 YouTube 内容分析轴，内容创作者/研究者真空填空） | ⚪ 待装测·5 工具免 key 可低成本先验，内容创作细分受众明确 |
| **davepoon/buildwithclaude** | 信源 | CC 生态发现 hub：123 skills + 99 commands + 31 agents + 13 rules 可检索，内置 bwc-cli（`npx bwc`）交互式浏览 50+ subagent/30+ 命令并安装，附 Visual Index（Vexilo）以 5 步工作流可视化索引，兼容 CC/Claude Desktop/Agent SDK/OpenClaw | ⏳称 | 无 | 🔵 信源·最有 CLI 发现工具的 hub，穿透挑 frontend-design-pro 等单品；bwc-cli 本身可作参考工具 |
| **elevenlabs/elevenlabs-mcp** | 轴4 | 官方 ElevenLabs MCP server：TTS/音效生成/音乐生成/声音克隆/语音转换/转录/人声分离 8 大能力，支持 29+ 语言、90+ 转录语言、Multilingual v3/Turbo/Flash/Scribe 模型，`npx @elevenlabs/elevenlabs-mcp` 一行装，官方维护 | ⏳称 | 无（gstack 无 TTS/音频生成轴，完全填空）；与 lihaoz-barry/claude-code-hooks TTS 通知互补（通知 vs 内容生产） | ⚪ 待装测·官方维护=安全闸松，需 ElevenLabs API key，媒体/播客/无障碍场景受众明确 |

**本轮总结**：新增 5 项（3 个 ⚪待装测 + 2 个 🔵信源）；无异常。装测优先：elevenlabs/elevenlabs-mcp（官方维护=安全闸最松）> wynandw87/claude-code-youtube-mcp（5 工具免 key 可快速验）> jefflester/claude-skills-supercharged（Haiku 自动注入概念独特，需验延迟影响）。

---

## 2026-07-04 · cron 扫货轮（16:00）

> 五轴全搜，去重后净新增 7 项。license 均「⏳称」未亲验。

| 候选 | 轴 | 是什么 | License | 与 gstack 重叠度 | 裁决 |
|---|---|---|---|---|---|
| **EtanHey/cmuxlayer** | 轴4 | cmux MCP server：25 个工具覆盖 terminal agent 全生命周期——spawn/monitor/orchestrate Claude/Codex/Cursor/Gemini/Kiro 多种 agent，含 thinking-state 检测、chunked input、inbox 元通信；`claude mcp add cmuxlayer` 一行装，需本地 cmux 运行 | ⏳称 | 低（gstack Agent 工具是单进程编排，本品补「跨 terminal 进程间可视协调」层） | ⚪ 待装测·架构独特，25 工具含 kill/wait_for/resync，需 cmux 依赖，先验依赖链 |
| **EtanHey/brainlayer** | 轴4 | 同一作者的持久记忆 MCP：SQLite + knowledge graph，12 个工具含 ToolAnnotations（semantic_search/store_memory/link_concepts），全本地无外部 API | ⏳称 | 中（与 thedotmack/claude-mem 和 yoloshii/ClawMem 同属记忆轴，差异在 knowledge graph 链路而非向量 RAG） | ⚪ 待装测·全本地=无 key，与 cmuxlayer 同作者可组合装测 |
| **dvcrn/mcp-server-subagent** | 轴4 | 双向 parent↔subagent 通信 MCP：parent 派任务、子 agent 执行中途可向 parent 提问/汇报再获指导，适合长任务动态协商场景，支持 Claude Code/Aider/Q | ⏳称 | 低（gstack SendMessage 是单向推送，本品补「子 agent 主动问询」的双向协议） | ⚪ 待装测·双向通信机制独特，协议轻量，装测成本低 |
| **RealMikeChong/ultra-mcp** | 轴4 | 多模型桥接 MCP：单接口暴露 GPT-5/Gemini 2.5 Pro(+Google Search)/Grok-4，25 个 discoverable prompt 覆盖全工具，`npx -y ultra-mcp install` 交互式配置，SQLite 本地用量统计，按 API key 自动路由模型 | ⏳称 | 低（gstack 无多模型统一接入层；与 Perplexity MCP 互补：后者专搜索，本品专多模型推理） | ⚪ 待装测·需各家 API key（OpenAI/Google/xAI 按需），官方 npm 包分发=安全闸较松 |
| **disler/claude-code-hooks-multi-agent-observability** | 轴5 | disler 第二件品：全事件 hook 打点 → SQLite 持久 → Vue 3 实时仪表盘，追踪 12 种 hook 事件（含 SubagentStart/SubagentStop/PreCompact），支持对话历史随事件转发，Bun 驱动 TypeScript server | ⏳称 | 部分（disler/hooks-mastery 已登记=同作者，本品聚焦 observability/可视化，互补而不重叠） | ⚪ 待装测·需 Bun+Vue 3 前端，但 multi-agent 可视调试是真实痛点，hooks-mastery 用户自然升级 |
| **gensecaihq/MCP-Developer-SubAgent** | 轴3 | 专门为 MCP 开发设计的 subagent 框架：8 个专精 agent（协议设计/FastMCP 实现/security audit/测试/文档/部署），内置安全 hook 检查，附 production-ready FastMCP server 模板，markdown-driven 无外部依赖 | ⏳称 | 无（gstack 无「辅助开发 MCP server 本身」的轴，细分受众=MCP 开发者） | ⚪ 待装测·细分受众明确，安全 hook 自带值得验，需确认 8 个 agent 各自自包含性 |
| **jeremylongshore/claude-code-plugins-plus-skills** | 信源 | 1367 个 agent skill + 340 个 plugin 的开放市场，含 CCPI CLI package manager（`ccpi search`/`ccpi install`），互动教程 + 生产编排模式，覆盖 42 个 SaaS skill pack（1086 skill），tonsofskills.com 可检索 | ⏳称 | 无 | 🔵 信源·礼包规模最大候选之一，穿透挑 SaaS pack 单颗；CCPI CLI 机制值得参考 |

**本轮总结**：新增 7 项（5 个 ⚪待装测 + 1 个 🔵信源 + 1 个 ⚪已含红旗）；无异常。装测优先：EtanHey/brainlayer（全本地，无 key）> dvcrn/mcp-server-subagent（协议轻量，双向通信独特）> RealMikeChong/ultra-mcp（npx 一行装，多模型填空）> disler/hooks-multi-agent-observability（hooks-mastery 用户的自然升级）。

---

## 2026-07-04 · cron 扫货轮（20:00）

> 五轴全搜，去重后净新增 5 项。license 均「⏳称」未亲验。

| 候选 | 轴 | 是什么 | License | 与 gstack 重叠度 | 裁决 |
|---|---|---|---|---|---|
| **ChromeDevTools/chrome-devtools-mcp** | 轴4 | Google 官方 Chrome DevTools MCP（Apache-2.0）：26 工具覆盖输入/导航/性能录制/网络分析/调试/内存检查，让 coding agent 直接操控并审查活跃 Chrome 进程；`npx @chrome-devtools/chrome-devtools-mcp` 一行装，v0.21.0（2026-04 已 43 个 release） | Apache-2.0 ⏳称 | 低（gstack Playwright MCP 是「浏览器自动化」，本品是「DevTools 调试/性能层」，互补而非重叠） | ⚪ 待装测·Google 官方维护=安全闸最松，DevTools 调试场景在前端/性能优化轴填真空 |
| **npow/claude-skills** | 轴1+2 | 生产级多步骤 workflow slash 命令集：/ship-it（并行 subagent 带质量门全链路交付）、/deep-design（并行批评者对抗压测设计规格，迭代至缺陷饱和）、/competitive-matrix（市场研究→浏览器交互矩阵可视化）、/init-github-repo（JTBD README+CI/CD），每颗独立 .md 目录 | ⏳称 | 低（gstack /investigate 是探索型，本品 /deep-design 是「对抗批评直到饱和」纪律型；/ship-it 与 vlad-ko/claude-wizard 思路相近但更模块化） | ⚪ 待装测·/deep-design 对抗迭代机制品味独特，/ship-it 作为 wizard 参照系先验 |
| **wan-huiyan/agent-review-panel** | 轴1+3 | MIT 开源单颗 skill：4-6 位 AI 审查员围坐辩论代码/计划，最后由 supreme judge 裁决；9 个自动检测信号组（代码/架构/安全等自动路由），内置 domain checklist，「反群体思维机制」阻止一致赞同；443 测试零外部依赖，`/roundtable:agent-review-panel` 召唤 | MIT ⏳称 | 低（gstack /code-review 是单一审查，本品是「多审查员辩论＋裁判」对抗结构；vlad-ko/claude-wizard 有 adversarial-critic 但仅1对1，本品 4-6 对 1 是差异） | 🟢 候选·MIT、零依赖、anti-groupthink 机制独特，方法论轴高品味补充，优先装测 |
| **agiprolabs/claude-trading-skills** | 轴1 | 67 个 DeFi/量化金融 Agent Skill（MIT）：链上分析（Solana RPC/Helius API）、DEX 执行（默认 simulation 模式）、回测、税务合规（Koinly/IRS Form 8949 格式输出），覆盖 Claude Code/Cursor/Codex/Gemini CLI 等 30+ 工具 | MIT ⏳称 | 无（金融/DeFi 是 gstack 真空，agiprolabs 侧重 DeFi/链上，与 shakeebshaan 传统量化互补） | ⚪ 待装测·MIT，DeFi 细分受众明确（Solana 开发者/量化交易者），DEX 执行默认 simulation=安全阀自带 |
| **shakeebshaan/claude-code-quant-skills** | 轴1+2+5 | 传统量化研究专项三件套：skill（回测审计「挑剔的风控经理」视角 + 指标设计 pandas 向量化对话式生成）+ slash 命令 + hook，聚焦因子/策略/风险分析全链路，MIT，与 agiprolabs 互补（后者链上/DeFi-native，本品经典 quant） | MIT ⏳称 | 无（传统量化 gstack 真空，与 agiprolabs DeFi 视角并列但不重叠） | ⚪ 待装测·三件套组合完整度高，MIT，可与 agiprolabs 一并作「量化金融轴」双件套装测 |

**本轮总结**：新增 5 项（4 个 ⚪待装测 + 1 个 🟢候选）；无异常。装测优先：wan-huiyan/agent-review-panel（🟢 MIT 零依赖，anti-groupthink 独特）> ChromeDevTools/chrome-devtools-mcp（官方 Apache-2.0，DevTools 真空填空）> agiprolabs/claude-trading-skills + shakeebshaan/claude-code-quant-skills（量化金融轴双件套，MIT，可组合验）> npow/claude-skills（/deep-design 对抗迭代机制先试）。

---

## 2026-07-05 · cron 扫货轮（00:00）

> 五轴全搜，去重后净新增 6 项。license 均「⏳称」未亲验。

| 候选 | 轴 | 是什么 | License | 与 gstack 重叠度 | 裁决 |
|---|---|---|---|---|---|
| **DeusData/codebase-memory-mcp** | 轴4 | 24.1k★ MIT 代码智能 MCP：tree-sitter AST 解析 158 语言 + Hybrid LSP 语义类型 → 持久化知识图谱（函数/类/调用链/HTTP 路由/跨服务链接），sub-ms 查询，声称比逐文件 grep 减少 99% tokens；单一静态 C 二进制零依赖，跨平台（macOS/Linux/Windows），14 个 MCP 工具，基准测试 83% 答案质量 | MIT ⏳称 | 低（zilliztech/claude-context 已登记为语义搜索，本品差异在 tree-sitter AST 知识图谱而非向量嵌入，且单二进制零安装门槛） | ⚪ 待装测·星数高=社区广泛验证，MIT 清，但预编译二进制=需验来源签名，代码智能轴优先级高 |
| **anthropics/claude-plugins-official** | 多轴 | 官方 Anthropic 管理的 Claude Code 插件目录（2026-05-22 上线），55+ 精选插件含内部（Anthropic 维护）+ 外部（合作方/社区）两类，v2.1.143+ 自动预置，`/plugin` Tab→Discover 即可浏览安装；既是信源也是权威安全闸参考 | 官方 ⏳称 | 无（hesreallyhim/awesome-claude-code 是社区策展，本品是官方权威分发点，互补不重叠） | 🔵 信源·装测任何第三方 plugin 前先查本目录是否收录；官方收录=安全审查已过，优先信任 |
| **rdmgator12/awesome-claude-connectors** | 轴4 | 追踪 Anthropic 官方 Claude Connectors 目录全量 554 个 MCP 集成（2026-07-02 更新），30 分类+描述+使用场景，覆盖 Claude.ai/Desktop/Mobile/Code 全平台，每周维护更新 | ⏳称 | 无（本品聚焦「官方验证 Connector」轴，与 awesome-claude-code 侧重社区 skill/hook 不同） | 🔵 信源·扫 MCP 轴新品时的首选查重参考，补 MCP 信源池 |
| **rdmgator12/awesome-claude-plugins** | 多轴 | 追踪 Anthropic 官方 Claude Plugins 目录：257 个可安装 plugin 包（2026-06-18 更新），含 skills/MCP servers/slash 命令/sub-agents/hooks 组合包，225 个支持 Claude Code，覆盖 28 分类，每周维护 | ⏳称 | 无（本品追踪官方 plugin 生态，与其他 awesome 列表覆盖面互补） | 🔵 信源·扫 plugin 生态时与 anthropics/claude-plugins-official 并读，获完整分类视图 |
| **kuuneruto-tech/mcp-server-antigravity** | 轴4 | Claude Code ↔ Google Antigravity（agy CLI）桥接 MCP：单工具 `ask_antigravity` 把 Claude 不擅长的任务委托给 Gemini Flash High（支持 thinking_depth low/high），补充网络搜索/图像生成/1M token 上下文；Google I/O 2026 当天（2026-05-20）发布，Node.js + @modelcontextprotocol/sdk | ⏳称 | 低（gstack WebSearch 是本地搜索，本品借 Antigravity quota 访问 Gemini 模型=跨模型分工；SinanTufekci 版已扫但读未记录文件更脆弱，本品直接 wrap agy 更稳） | ⚪ 待装测·需本地安装 Antigravity CLI（agy），跨模型分工场景明确，装前确认 agy 授权范围 |
| **feiskyer/claude-code-settings** | 轴1+2+3+5 | "vibe coding 全家桶"：autonomous-skill（headless 多会话长任务执行器）、youtube-transcribe-skill、spec-kit-skill（spec 驱动开发，GitHub issue 自动修复）、kiro-skill、nanobanana-skill 等 5+ skills；附 hook（token 使用监控）+ agents + Chrome DevTools MCP 集成，`/plugin marketplace add feiskyer/claude-code-settings` 一行装 | ⏳称 | 中（autonomous-skill 与 gstack /loop 功能区重叠，但 headless 多会话长任务执行是差异；youtube-transcribe 与 wynandw87 YouTube MCP 侧重不同=转录 vs 分析） | 🔵 信源·穿透挑 autonomous-skill 和 spec-kit-skill 单颗装测，youtube-transcribe 可补 YouTube MCP 之外的轻量替代 |

**本轮总结**：新增 6 项（1 个 ⚪待装测 MCP 强候选 + 1 个 ⚪待装测跨模型桥接 + 3 个 🔵信源 + 1 个 🔵信源穿透型）；无异常。装测优先：DeusData/codebase-memory-mcp（24.1k★ MIT，代码智能真空填空，先验二进制签名）> kuuneruto-tech/mcp-server-antigravity（Antigravity 用户可快速验跨模型分工效果）；信源：anthropics/claude-plugins-official 已是扫货基准参考，每轮查重必查。

---

## 2026-07-05 · cron 扫货轮（04:00）

> 五轴全搜，去重后净新增 6 项。license 均「⏳称」未亲验。

| 候选 | 轴 | 是什么 | License | 与 gstack 重叠度 | 裁决 |
|---|---|---|---|---|---|
| **daxaur/openpaw** | 轴1+5 | 152★ MIT「npx pawmode」一行装的 38-skill 个人助理框架：Telegram/Discord/Obsidian/Spotify/智能家居/日历/email 全整合，Stop hook 每次会话蒸馏一条 takeaway 自学习，本地 kanban 任务看板，无 daemon 无云无订阅，设计哲学"一次运行写好配置然后消失" | MIT ⏳称 | 中（gstack auto memory 是 markdown 存取，本品补「个人助理层」——远超编码工具范畴，IM 和日历是真空；与 lihaoz-barry 通知 hook 互补） | ⚪ 待装测·个人助理定位独特，MIT 零云依赖，openpaw 整包先装测 |
| **op7418/Claude-to-IM-skill** | 轴1 | 把 Claude Code/Codex 桥接到 Telegram/Discord/飞书 IM：工具调用时 IM 内弹出 Allow/Deny 权限确认，流式预览 Claude 输出，会话跨 daemon 重启持久化；有中文 README（README_CN.md），`/plugin marketplace add` 一行装 | ⏳称 | 低（gstack 无 IM 接入层；daxaur/openpaw 含 Telegram 但侧重「个人助理」，本品侧重「移动端远程操控 CC 会话」，互补） | 🟢 候选·有中文 README 对中文用户极相关，Telegram/Discord/飞书三平台覆盖，填 CC 移动端操控真空 |
| **agamm/claude-code-owasp** | 轴1 | 266★ MIT 的 OWASP 安全编码纪律单颗 skill：OWASP Top 10:2025 + ASVS 5.0 + Agentic AI 安全（ASI01-ASI10）+ 20+ 语言安全 quirk，安全代码审查清单含输入处理/认证/访问控制/数据保护，无外部依赖 | MIT ⏳称 | 部分（elementalsouls/BugHunter 已登记=外部攻击面/漏洞挖掘，本品定位是「预防型安全编码纪律」——编码阶段而非红队阶段，视角互补；/cso 是 infra 审计，本品是代码层） | ⚪ 待装测·266★ MIT 零依赖，安全轴编码纪律层真空，装测成本极低 |
| **kepano/obsidian-skills** | 轴1 | Obsidian 官方（kepano=Obsidian CEO）出品 agent 技能包：教 agent 用 Obsidian CLI + Markdown + Bases + JSON Canvas 格式，兼容 CC/Codex/OpenCode，仓内含 `.claude-plugin` 格式，多个社区 fork 验证采用 | ⏳称 | 低（gstack auto memory 存 markdown，本品补「agent 真正操作 Obsidian vault」——知识管理操作层，不是存储层；pablo-mano/Obsidian-CLI-skill 是同类但 130+ CLI 命令更厚重，本品官方轻量版） | ⚪ 待装测·Obsidian 官方出品=安全闸最松，Obsidian 用户直接价值高，轻量 |
| **webdevtodayjason/claude-hooks** | 轴5 | npm 全局安装的 Claude Code Hooks Manager CLI（75★）：`claude-hooks` 交互式菜单管理 hooks，支持 install/list/create/edit/enable/disable/remove/config 全操作，编辑打开 $EDITOR，自动写入 settings.json；`npx claude-hooks` 即用 | ⏳称 | 低（karanb192/claude-code-hooks 是「内容集合」，本品是「hooks 管理工具」；两者互补——用本品管理 karanb192 的 hooks；gstack 无 hooks CLI 管理层） | ⚪ 待装测·管理工具视角填真空，npm 分发，装测成本低，可与 karanb192 组合 |
| **AgriciDaniel/claude-cybersecurity** | 轴1+3 | AgriciDaniel 第三件品（继 claude-seo + claude-blog）：8 specialist agent 并行 OWASP 2025 代码审查（漏洞检测/授权验证/secret 扫描/供应链/IaC 安全/威胁情报/AI 代码模式/业务逻辑），11 种语言，零配置，CWE Top 25 + MITRE ATT&CK 映射 | ⏳称 | 中（agamm/claude-code-owasp 是编码纪律单 skill，本品是 8 agent 并行审计框架=更重但覆盖更全；mukul975/cve-mcp-server 是实时威胁情报，本品是静态代码审计；/cso 是 infra 层，本品是代码层） | ⚪ 待装测·与 claude-seo+claude-blog 同作者可组合装测，先验 vulnerability-detection 单 agent |

**本轮总结**：新增 6 项（4 个 ⚪待装测 + 1 个 🟢候选 + 0 个 🔵信源）；无异常。装测优先：op7418/Claude-to-IM-skill（🟢已评，中文 README，零依赖）> agamm/claude-code-owasp（266★ MIT 零依赖，安全纪律轴最轻装测件）> webdevtodayjason/claude-hooks（npm 一行装，hooks 管理工具填空）> kepano/obsidian-skills（Obsidian 官方出品，安全闸最松）。

---

## 2026-07-05 · cron 扫货轮（08:00）

> 五轴全搜，去重后净新增 5 项。license 均「⏳称」未亲验。

| 候选 | 轴 | 是什么 | License | 与 gstack 重叠度 | 裁决 |
|---|---|---|---|---|---|
| **trailofbits/skills** | 轴1/2/3/5 | Trail of Bits 顶级安全机构官方 Claude Code skill marketplace：`audit-context-building`（逐行建心智模型）/ `trailmark`（source-code graph 安全图分析）/ `agentic-actions-auditor`（GitHub Actions AI 集成安全审计）/ `testing-handbook-skills`，`.claude-plugin` 格式，`/plugin marketplace add` 一行接入；Trail of Bits 出品 Slither/Manticore 等顶级安全工具 | ⏳称 | 部分（与 agamm/claude-code-owasp 编码纪律互补；本品覆盖合约/actions/逆向工程审计，视角更专业更深） | 🟢 候选·安全专业机构背书=安全闸极松，`trailmark` graph 分析和 `agentic-actions-auditor` 独特，安全轴最高品味补充 |
| **revfactory/harness** | 轴1/3 | L3 Meta-Factory 元 skill：一句「build a harness for this project」→ 自动生成 `.claude/agents/` agent 定义 + `.claude/skills/` skill 文件，支持 pipeline/fan-out/expert-pool/supervisor 等 6 种团队架构；15 任务 A/B 测试质量从 49.5 升至 79.3（+60%），有中文/韩文 README，MIT；配套 `harness-100`（100 生产级预制 harness，中/英双语） | MIT ⏳称 | 低（gstack 有 Workflow/Agent 原语，但「从领域描述自动生成 agent 团队架构」是 L3 层，是真空地带） | 🟢 候选·Meta-Factory 层独一无二，MIT，中韩双语对亚洲用户友好，装测后可作 harness 设计范本 |
| **huifer/skill-security-scan** | 工具类 | CCHub 策展流程专用——安装第三方 skill 前先跑扫描：`pip install skill-security-scan`，自动扫 `.claude/skills/` 中的 network/file/cmd/代码注入风险，0-100 风险评分，中英双语界面，HTML/JSON/console 报告，自定义规则+白名单；中文技术文章有原理解析 | ⏳称 | 无（gstack 无 skill 安全扫描轴；本品填的是「策展人验收工具」真空，CCHub 上架流程直接用得上） | 🟢 候选·定位独特（不是 skill，是 skill 审查工具），中文原生，pip 安装零环境依赖，立即纳入 CCHub 审查 SOP |
| **BeehiveInnovations/pal-mcp-server** | 轴4 | 多模型对话线程 MCP：Claude Code/Gemini CLI/Codex CLI + OpenAI/Grok/Ollama/Azure/OpenRouter 等多家模型在同一会话中协作推理（context revival 跨工具保持），支持 code review→planning→implementation→验证完整链路，自动配置 Claude Desktop/Code/Gemini CLI，git clone + setup 脚本一键装 | ⏳称 | 中（RealMikeChong/ultra-mcp 已登记=多模型统一接入，本品差异在「conversation threading 跨模型」——模型间可互相讨论而非只是单次路由） | ⚪ 待装测·需各家 API key，conversation threading 机制独特值得验，先测双模型对话效果 |
| **johnlindquist/claude-hooks** | 轴5 | TypeScript 强类型 hook 系统，由 Kit.app/Script Kit 作者出品：PreToolUse/PostToolUse/Notification/Stop 全事件强类型 payload，自动补全+类型推断，session 日志写系统 tmp，npm 分发（`npx`），有技术 gist 深度讲解 subagent + hooks 协作模式 | ⏳称 | 部分（karanb192/claude-code-hooks 是 copy-paste 内容集，本品是 TypeScript 框架——目标用户：想用 TS 写 hook 逻辑的开发者；webdevtodayjason/claude-hooks 是 CLI 管理工具，本品是编写层） | ⚪ 待装测·npm 分发，TypeScript 用户自然选择，与 karanb192+webdevtodayjason 合成完整 hook 工具链 |

**本轮总结**：新增 5 项（2 个 ⚪待装测 + 3 个 🟢候选）；安全工具类本轮集中（trailofbits + huifer），无异常。装测优先：trailofbits/skills（🟢专业机构，安全轴标杆）> revfactory/harness（🟢MIT，L3 元层独特，中韩双语）> huifer/skill-security-scan（🟢立即纳入 CCHub 审查 SOP）> johnlindquist/claude-hooks（TS 类型安全 hook 框架）> BeehiveInnovations/pal-mcp-server（多模型 threading，需验实际效果）。

---

## 2026-07-05 · cron 扫货轮（12:00）

> 五轴全搜，去重后净新增 6 项。license 均「⏳称」未亲验。

| 候选 | 轴 | 是什么 | License | 与 gstack 重叠度 | 裁决 |
|---|---|---|---|---|---|
| **mkXultra/ai-cli-mcp** | 轴4 | MCP server 让 Claude/Codex/Gemini CLI/Forge/OpenCode 在后台并行启动，暴露 `run`/`wait`/`kill`/`result` 四工具，session ID 跨运行复用上下文，`npx ai-cli-mcp` 装；前身为 @mkxultra/claude-code-mcp，已扩展支持五种 AI CLI | ⏳称 | 低（EtanHey/cmuxlayer 侧重 terminal 间可视协调，本品侧重「从 MCP client 内后台启动多种 AI CLI」，互补） | ⚪ 待装测·多 AI CLI 用户减摩擦，先验 Claude+Codex 并行场景 |
| **Dokkabei97/all-agents-mcp** | 轴4 | 统一 stdio 接口编排 Claude Code/Codex/Gemini CLI/Copilot CLI：单查/多对比（同 prompt 并行）/智能任务路由/专项工具（code-review/debug/explain/test-gen），直接调各 CLI 二进制，各自管理认证和计费 | ⏳称 | 低（RealMikeChong/ultra-mcp 是多模型推理桥接，本品是多 CLI 进程编排+对比模式，互补） | ⚪ 待装测·对比模式可快速发现各 agent 答案分歧，装前需本地安装各目标 CLI |
| **nyldn/claude-octopus** | 轴1+3 | 最多 8 AI 模型（Codex/Gemini/Antigravity/Copilot/Qwen/Ollama/Perplexity/OpenRouter/OpenCode + Claude）并行协作，75% 共识门拦截分歧，32 personas + 49 命令 + 54 skills，"Dark Factory mode"全自主 Discover→Define→Develop→Deliver 管道，`.claude-plugin` 格式可装 | ⏳称 | 中（wan-huiyan/agent-review-panel 是同模型多角色辩论，本品是「跨模型共识投票」，互补；gstack /code-review 是单审） | ⚪ 待装测·需各家 CLI 预装，75% 共识门逻辑独特值得验，先测双模型对比场景 |
| **amtiYo/agents** | 工具类 | `.agents/agents.json` 单源真相，`agents sync` 自动写入 Claude Code/Codex/Gemini CLI/Cursor/Copilot/Antigravity/Windsurf/OpenCode/Junie 等 9 工具的 MCP config；Show HN 社区验证，解决「每加一个 MCP server 要改 N 个 config 文件」痛点 | ⏳称 | 低（gstack 无跨工具 MCP config 同步轴，是真空地带） | ⚪ 待装测·多工具用户减配置摩擦，零云依赖，装测成本低 |
| **mohitagw15856/pm-claude-skills** | 轴1 | 400 个 PM 专业 Agent Skills（PRDs/发布计划/合规/JD/战略分析），50 个 Production-Ready 级含 Python 计算助手（RICE/Sprint 计划/客户健康评分），已入 Anthropic 官方 plugin 目录，`npx pm-claude-skills add` 装 | ⏳称 | 无（gstack 无 PM 决策/产品方法论轴，产品经理/项目管理真空填空） | ⚪ 待装测·官方目录收录=安全审查已过，npx 一行装，先验 PRD 和 RICE 两颗 skill |
| **ccplugins/awesome-claude-code-plugins** | 信源 | 118 个可安装 plugin（34 命令 + 16 agent），按 `.claude-plugin` 新格式打包，含 claude-desktop-extension、security-guidance 等实用包，ccplugins 组织专门维护，与 rdmgator12/awesome-claude-plugins（官方 Anthropic 追踪）互补 | ⏳称 | 无 | 🔵 信源·plugin 新格式的社区策展参考，穿透挑 security-guidance 单品装测 |

**本轮总结**：新增 6 项（5 个 ⚪待装测 + 1 个 🔵信源）；无异常。装测优先：mohitagw15856/pm-claude-skills（官方目录，PM 真空填空，npx 一行装）> amtiYo/agents（跨工具 config 同步，零云依赖）> mkXultra/ai-cli-mcp（多 AI CLI 后台编排）> Dokkabei97/all-agents-mcp（多 CLI 对比模式）> nyldn/claude-octopus（8 模型共识门，需各 CLI 预装）。

---

## 2026-07-05 · cron 扫货轮（16:00）

> 五轴全搜，去重后净新增 5 项。license 均「⏳称」未亲验。

| 候选 | 轴 | 是什么 | License | 与 gstack 重叠度 | 裁决 |
|---|---|---|---|---|---|
| **EpicGames/unreal-engine-skills-for-claude-code-plugin** | 轴4+1 | Epic Games 官方出品：通过 MCP 让 Claude Code 直接操控 Unreal Editor——spawn/transform actor、编辑 Blueprint/材质/Niagara/Sequencer/Control Rig、C++ Live Coding 重编译；另含 author-new-ai-callable-toolsets 和 agent skills 两组技能；110★，99 fork，2026-06-25 最新更新，`.claude-plugin` 格式单仓注册安装 | MIT ⏳称 | 无（gstack 无游戏引擎/UE 轴，完全填空；Epic Games 出品=安全闸最松） | 🟢 候选·官方大厂背书，UE 开发者直接价值，安全轴几乎免审，优先装测 |
| **K-Dense-AI/claude-skills-mcp** | 轴4 | 元工具：MCP server 通过向量语义搜索帮你「找到对的 skill」——加载 Anthropic 官方 ~90 skills + K-Dense AI 78+ 科学技能（生物信息/化学信息/数据分析），暴露 find_skills/list_skills/get_skill_doc 三工具；PyTorch + sentence-transformers 本地向量，首次约 250MB 下载后缓存 | ⏳称 | 低（gstack 无 skill 语义发现轴；已有 travisvn/awesome-claude-skills 是人工索引，本品是 AI 语义检索互补） | ⚪ 待装测·概念独特（skill 的 skill），需验首次下载后响应延迟，科学研究用户额外获得 78+ 领域专精 |
| **trailofbits/claude-code-config** | 轴5+1 | Trail of Bits 官方全局 CLAUDE.md 模板 + settings.json 安全默认值：明确禁止 rm -rf/危险命令、GitHub Actions 必须 SHA pin + zizmor 扫描、Python/Node/Rust/Bash 各语言工具链规范、"无推测特性/无过早抽象/替换不弃用"开发哲学，附 review-pr 和 merge-dependabot 两条 slash 命令 | ⏳称 | 部分（trailofbits/skills 已登记=专项安全 skill，本品是「项目配置规范层」，互补；与 gstack careful 概念重叠但本品是 CLAUDE.md 纪律层而非 hook 拦截层） | ⚪ 待装测·安全顶级机构出品的「项目配置模板」，可作 CCHub 推荐给团队的默认配置基线，装测成本极低（仅复制 CLAUDE.md） |
| **henkisdabro/wookstar-claude-plugins** | 轴1+3 | 数字营销垂直插件包（GA/GTM/Shopify/Google Ads）：Google Analytics 4 + Tag Manager 调试 skills、Shopify Liquid/GraphQL/OS 2.0/Hydrogen skill（API 2026-01 版）、Codex/Gemini 外包 agent（把 Claude 不擅长任务路由到其他 AI CLI）、email 草稿人性化 hook，`/plugin install` 一行装，按需触发无 slash 前缀 | ⏳称 | 低（gstack 无数字营销/电商轴；Codex/Gemini 路由 agent 与 Dokkabei97/all-agents-mcp 路由方式不同=插件层触发 vs MCP 层） | ⚪ 待装测·数字营销垂直填空（GA/GTM/Shopify 是开发+营销团队常见组合），先验 shopify skill 单颗 |
| **steven823tw/claude-standalone-skills** | 轴1 | 22 个独立 SKILL.md 文件，1:1 复刻 @claude-plugins-official 官方插件功能（agent-sdk-dev/code-review/security-guidance/frontend-design/playwright/context7 等），专为「第三方推理网关屏蔽 plugin system」场景设计，直接放入 ~/.claude/skills/ 即用，无 plugin 依赖 | ⏳称 | 中（与 anthropics/claude-plugins-official 内容重叠，但本品解决「组织部署无法用 /plugin 命令」的障碍，互为备份方案） | ⚪ 待装测·使用场景精确（plugin 系统被屏蔽的企业/团队），轻量零依赖，可即取即用 |

**本轮总结**：新增 5 项（4 个 ⚪待装测 + 1 个 🟢候选）；无异常。装测优先：EpicGames/unreal-engine-skills-for-claude-code-plugin（🟢官方大厂 MIT，UE 开发者直接用）> trailofbits/claude-code-config（Trail of Bits 全局配置模板，可作团队基线，零装测门槛）> K-Dense-AI/claude-skills-mcp（skill 发现工具，需验延迟）> steven823tw/claude-standalone-skills（plugin 系统受限用户的备份方案）。

---

## 2026-07-05 · cron 扫货轮（20:00）

> 五轴全搜，去重后净新增 5 项。license 均「⏳称」未亲验。

| 候选 | 轴 | 是什么 | License | 与 gstack 重叠度 | 裁决 |
|---|---|---|---|---|---|
| **JuliusBrussee/caveman** | 轴1 | 83k★ 爆款 token 省钱 skill：让 Claude 以"穴居人说话"模式回复——剥除叙述/客套/套话，代码/命令/错误原样保留，实测平均削减 65% 输出 token（22–87% 区间），兼容 Codex/Gemini/Cursor/Copilot 等 30+ 平台；单颗 SKILL.md + CLAUDE.md，零依赖；Brevity Constraints 学术论文佐证：简洁约束令大模型准确度+26 点 | MIT ⏳称 | 低（valorisa/rescue-tokens 已登记是方法论层成本管理，本品是"说话行为层"削减，互补；两者可叠加） | 🟢 候选·83k★ 社区共识最强，零依赖即取即用，先装测验实际 token 节省与代码质量的 tradeoff |
| **kpab/claude-fable-5-skills** | 轴1 | 10 个 Fable 5 原生 agent skills，专为 Fable 5「不需保姆」行为重写旧模型"过度指令"：no-gold-plating（diff 只改必改行）/ act-when-ready（信息足够即行动，不再罗列选项）/ effort-calibration / scope-control / subagent-orchestration 等，已提交 awesome-claude-code issue #2164，blindtest 14 题赢 12 | MIT ⏳称 | 无（现有 skill 均未专门适配 Fable 5 新行为；karpathy-guidelines 是行为铁律但与模型版本无关；本品填 Fable 5 迁移适配真空） | 🟢 候选·填 Fable 5 升级后的真空，MIT，单颗即取，no-gold-plating 直接与 gstack karpathy-guidelines 互补 |
| **mukul975/Anthropic-Cybersecurity-Skills** | 轴1 | 23.6k★ Apache 2.0，817 个结构化网络安全 skill，29 个安全领域，六框架全映射（MITRE ATT&CK/NIST CSF 2.0/MITRE ATLAS/D3FEND/NIST AI RMF/MITRE F3 反欺诈），覆盖 Claude Code/Copilot/Codex/Cursor/Gemini 等 20+ 平台，同作者另有 cve-mcp-server（已登记）但本品是 skill 而非 MCP | Apache 2.0 ⏳称 | 中（mukul975/cve-mcp-server 已登记是实时威胁情报 MCP；agamm/claude-code-owasp 是编码纪律单颗；trailofbits/skills 是专项审计；本品是防守型六框架结构化技能库，是信源而非单颗） | 🔵 信源·礼包型→穿透挑框架映射最全的防守技能单品，如 github-advanced-security/implementing-cve 先装测；六框架映射是本品独特价值 |
| **Security-Phoenix-demo/security-skills-claude-code** | 轴1+3 | Phoenix Security 工程团队出品：搜索 595+ 威胁情报源 + 生成 opengrep/semgrep SAST 规则（30+ 语言）+ STRIDE 威胁建模 + NotebookLM 引用研究 + 活文档自动生成，每条 skill 蒸馏 Phoenix 平台能力的本地版，无需 Phoenix 后端，MIT，Claude Marketplace 已收录 | MIT ⏳称 | 低（agamm/claude-code-owasp 是编码纪律静态层；trailofbits/skills 是合约/actions 专项；本品聚焦「威胁情报查询 + SAST 规则生成」运营层，三者形成安全全链路） | ⚪ 待装测·MIT，Marketplace 已收录=安全审查已过，先验 SAST 规则生成 skill（30 语言覆盖是稀有轴） |
| **levnikolaevich/claude-code-skills** | 轴1+4 | 全交付生命周期 plugin 套件 + 4 个捆绑 MCP server：hex-line（每行带内容 hash，强制 agent 验当前文件版本再编辑，防幻觉覆写）/ hex-graph（SQLite 代码知识图谱，framework-aware SCIP 互操作）/ hex-ssh（hash 验证远程机器编辑 + SFTP）/ hex-research（研究图谱索引 hypothesis/goal/task）；含 Agile pipeline 多模型 AI 评审 + codebase audit + docs 生成，有文档站 | ⏳称 | 中（DeusData/codebase-memory-mcp 是 tree-sitter AST 知识图谱，本品 hex-graph 是 SQLite 依赖图；hex-line 「hash 验证编辑」是独有机制，无已登记品覆盖） | ⚪ 待装测·框架型，先穿透验 hex-line MCP（hash 验证编辑填防幻觉覆写真空，是本套件最独特价值） |

**本轮总结**：新增 5 项（2 个 🟢候选 + 2 个 ⚪待装测 + 1 个 🔵信源）；无异常。装测优先：JuliusBrussee/caveman（🟢 83k★ 零依赖，先验 token 节省与质量 tradeoff）> kpab/claude-fable-5-skills（🟢 Fable 5 迁移适配真空，MIT 即取）> Security-Phoenix-demo（MIT+Marketplace 审查已过，SAST 规则生成稀有）> levnikolaevich/hex-line 单 MCP 先验（防幻觉覆写独特机制）。
