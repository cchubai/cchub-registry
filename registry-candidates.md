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
