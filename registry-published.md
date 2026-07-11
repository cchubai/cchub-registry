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

---

<sub>CCHub.ai 独立社区,非 Anthropic、非 CcHUB Nigeria。"Claude" is a trademark of Anthropic PBC。上架项代码版权与 license 归各自作者。发现失效/侵权请开 issue,我们会下架。</sub>
