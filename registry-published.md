# CCHub 注册表 · 已上架 🟢

> 成色评级见 [rating-standard.md](rating-standard.md)。档位=我们替你验证的深度。

> 过完三道闸、由 🧭 curator 验收上架的成品。用户真正消费的就是这一页。
> 每条:它解决什么 · 怎么装 · 安全提示 · 与 gstack 重叠 · 验收日期。
> license 标「✅亲验」= CCHub clone 核对过 LICENSE 文件。

---

## 轴 1 · 方法论 Skill

### 【SS·常驻】`karpathy-guidelines` — 行为铁律,治 AI 写码的坏毛病
- **来源**:multica-ai/andrej-karpathy-skills · **License**:MIT ✅亲验 · **验收**:2026-06-23
- **解决什么**:67 行行为准则,逼 AI 做外科手术式小改、不过度设计、把假设说出来、给可验证的成功标准。装的是**纪律**,不是工具。
- **怎么装**:复制该 SKILL.md 到 `~/.claude/skills/karpathy-guidelines/SKILL.md`(或 `npx cchub add karpathy-guidelines`,工具就绪后)。
- **安全提示**:纯指令文本,零脚本、零依赖,无任何危险命令。可放心装。
- **与 gstack 重叠**:无重叠。即便你已用 gstack,这个是空白补位。
- **CCHub 心得**:我们自己 dogfood 留用,当"轻而狠"的品味标杆——好 skill 不靠行数靠密度。

### 【SS·常驻】`verification-before-completion` — 说"完成"前先给证据
- **来源**:obra/superpowers · **License**:MIT ✅亲验 · **验收**:2026-06-23
- **解决什么**:逼 AI 在声称"修好了/通过了"之前,先跑验证命令、确认输出,再下结论。根治"假装成功"。
- **怎么装**:复制该 skill 目录到 `~/.claude/skills/verification-before-completion/`(或 `npx cchub add`)。
- **安全提示**:指令型 skill,无脚本执行,无危险命令。可放心装。
- **与 gstack 重叠**:与 gstack 的验证习惯部分重叠,但更聚焦"声称前强制验证"这一动作。
- **CCHub 心得**:本会话第一次用它,当场抓出我们把"命令 exit 0"当成"装好了"的假象——它是真有牙的。

### 【CCHub 出品 · 不参与评级】`blindspot-pass` — 动手前先找盲区
- **蒸馏链**:抖音@南山老实人(发现) → [Anthropic 官方博客](https://claude.com/blog/a-field-guide-to-claude-fable-finding-your-unknowns)(源头,工程师 Thariq Shihipar) → CCHub 行为化改写 · **License**:MIT · **上架**:2026-07-12
- **解决什么**:「瓶颈不是模型能力,是澄清未知的能力」。原文教你写 prompt 找盲区;本 skill 把它翻转成 Claude 的行为守则——**装上后 Claude 主动跑四象限盲区扫描**:大任务先出未知数清单、面试式提问(只问改变架构的,最多3个)、把你没说但默认的约定挑明求证、执行中偏差记日志不打断你。你不需要学任何框架。
- **怎么装**:复制 [`skills/blindspot-pass/SKILL.md`](skills/blindspot-pass/SKILL.md) 到 `~/.claude/skills/blindspot-pass/SKILL.md`。
- **安全提示**:纯行为指令,零脚本零依赖。
- **与 gstack 重叠**:与 office-hours/brainstorming 部分相邻,但聚焦「执行前盲区清单+执行中偏差日志」,互补不重复。

### 【CCHub 出品 · 不参与评级】`own-your-diff` — 交付理解,不只交付代码
- **蒸馏链**:抖音@Ali厂长(发现) → Karpathy×红杉[《From Vibe Coding to Agentic Engineering》](https://karpathy.bearblog.dev/sequoia-ascent-2026/)(源头) → CCHub 行为化改写 · **License**:MIT · **上架**:2026-07-12
- **解决什么**:「你可以外包思考,但不能外包理解」。把大活交给 agent 后,人最大的债是看不懂自己的代码库。装上后,Claude 完成大改动(≥3文件/动架构)时**主动交付三件套**:架构级走读(讲决策不讲流水账)+ 该怀疑什么(诚实标出自己最没把握的段落)+ 理解自查(2-3 个秒答题,答不上先补讲再合并)。
- **怎么装**:复制 [`skills/own-your-diff/SKILL.md`](skills/own-your-diff/SKILL.md) 到 `~/.claude/skills/own-your-diff/SKILL.md`。
- **安全提示**:纯行为指令,零脚本零依赖。
- **与已上架重叠**:verification-before-completion 管「机器自证完成」,本 skill 管「人拿回理解」——一个对机器诚实,一个对人负责,互补成对。

---

<sub>CCHub.ai 独立社区,非 Anthropic、非 CcHUB Nigeria。"Claude" is a trademark of Anthropic PBC。上架项代码版权与 license 归各自作者。发现失效/侵权请开 issue,我们会下架。</sub>
