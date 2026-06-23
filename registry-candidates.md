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
