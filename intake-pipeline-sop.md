# CCHub 注册表 · 进货流水线 SOP v0.1

> 三角色三段式,**职责不重叠**(谁扫货谁不验收,避免自卖自夸)。
> 本 SOP 的每条 checklist 都是 2026-06-23 用 A/B/C 三个真仓 + dogfood 实测打磨出来的,不是凭空写的。
> 流转格式走 [`docs/handoff-protocol.md`](../docs/handoff-protocol.md)。

收录三道闸(贯穿全程):**①合规闸 ②安全闸 ③品味闸**。原则:**来源不限(ABC都收)、合规与安全零容忍、品味从宽**。进货单位=**单品,不是仓**。

---

## ① ✍️ editor — 扫货官（Scout）

**目标**:从全网/信源池捞出值得收的**单品**候选,初筛品味,产出候选行。
**产物**:在 `content/registry-candidates.md` 追加候选行 → handoff 给 community 装测。

**Checklist**
- [ ] **单品不是仓**:大礼包/awesome 索引**只当信源**,穿透到里面的单颗 skill/agent/MCP/hook 才是候选(目录型标 🔵 不上架)。
- [ ] 一句话写清"它解决什么真问题"——说不清 = 品味闸初筛不过。
- [ ] 标来源仓 + 作者 handle(署名地基)。
- [ ] 标 license(搜来的标「⏳称」,clone 核过标「✅亲验」)。
- [ ] **标重叠度**:与 gstack 套件重不重?重叠的降级(中文用户价值在"补你没有的")。
- [ ] 按"轻而狠 > 800行瑞士军刀"的品味排序。

**红线**:editor 不做最终 license 裁决、不碰安装——只初筛和登记。

---

## ② 🤝 community — 装测官（Install & Test）

**目标**:把候选**真拉到本地真跑**,过安全闸 + 自包含检查,顺手出 demo 素材。
**产物**:装测报告(work不work / 安全命中 / 自包含)+ 录屏 cast → handoff 给 founder 验收。

**Checklist**
- [ ] **真 clone/装到本地**(不是只读 README)——README 宣传与实物常对不上(A 案例:宣称40 skill 实为目录;B 案例:命令偷依赖姊妹仓)。
- [ ] **自包含检查**(B 教训):`grep subagent_type=/skills/xxx`,确认无未声明的外部依赖;有依赖→必须在卡上**明确披露**("此命令还需装 X")。
- [ ] **安全闸人审**(不能纯自动):
  - 扫危险模式 `rm -rf / curl|sh / eval / base64 -d / >/dev/tcp / 外传`
  - **逐条人看上下文**(B 教训:8 命中 4 个是 "retrieval" 里的 "eval" 误报;`rm -rf node_modules`/Dockerfile 清理是无害)
  - 判 3 类:✅无害 / ⚠️借口可疑需提示(如 `curl|sh` 装工具)/ 🔴恶意(外传/后门→毙)
- [ ] **功能验证**:`claude -p` 真跑一遍,确认产出有效(verify-before-claim:看输出不看 exit code)。
- [ ] **录 demo**:`asciinema rec x.cast -c "claude -p '<自然语言触发>'"`。⚠️ headless 不支持 `/斜杠命令`,用自然语言触发技能。
- [ ] 给来源目录留 `.cchub-provenance`(source/installed/status)。

**红线**:community 不做 license 终裁——只报安全与自包含事实。

---

## ③ 🧭 founder — 验收官（Acceptance）

**目标**:查合规闸 + 终审拍板,定段位归属。
**产物**:上架卡(`content/registry-candidates.md` 转正 or `content/cards/`)+ 拍板记录。

**Checklist**
- [ ] **合规闸穿透**(C 教训):license 核到**最终跑在用户机器上那段代码的源仓**,不是中间目录。
  - 商用兼容?(CCHub 是商业主体,**CC-BY-NC / NC-ND = 毙**,C 案例)
  - 演绎许可?(中文拆解=derivative,ND 类禁)
  - 署名齐?takedown 通道留了?
- [ ] 复核 community 的安全结论,有 🔴 直接毙。
- [ ] 品味终审:够不够"值得配中文拆解"。
- [ ] 拍板:上架 / 退回补依赖披露 / 拒收(注明理由,拒收也是信号)。
- [ ] 定段位归属:贡献者是谁,安装量记到谁名下(L4 护城河)。

**红线**:founder 不亲自扫货/装测(否则三段式塌成一段,治理失效);只在终点查合规+拍板。

---

## 🔄 一次完整流转示例(本 session 实跑)

```
editor 扫货  → A(目录型🔵) / B(MIT,可上架) / C(CC-NC-ND🔴)
community 装测 → B 的 /onboard /code-explain 自包含✅+安全✅,录了 code-explain-demo.cast
founder 验收  → B 两卡过合规(MIT+署名@wshobson),上架; A 转信源; C 拒收(license)
```

**已沉淀**:候选库 `registry-candidates.md` · demo `content/demos/code-explain-demo.cast` · 2 张上架卡(/onboard /code-explain,见对话/待转 cards)。
