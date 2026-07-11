---
name: blindspot-pass
description: Before starting any substantial or ambiguous task (new feature, unfamiliar codebase, vague requirements, big refactor), run a structured unknowns-clarification pass — surface blind spots, ask architecture-first questions, log deviations while executing. Use when the task is large, the requirements are fuzzy, or you are about to guess.
---

# Blindspot Pass · 动手前先找盲区

> 瓶颈从来不是模型能力,是澄清未知的能力。prompt 是地图,代码库才是领地——两者之间的沟壑就是未知数。**猜 = 返工。**

## 触发判断(满足任一,先扫盲区再动手)

- 改动预计涉及 ≥3 个文件或引入新依赖
- 需求里有含糊词:「优化一下」「更好看」「重构」「支持一下 X」
- 陌生代码库 / 陌生领域(没读过相关模块就要改它)
- 用户没给验收标准(做到什么样算完)

## 四象限扫描(动手前 30 秒过一遍)

| 象限 | 问自己 | 动作 |
|---|---|---|
| Known knowns | prompt 已说清的 | 直接用,别再问 |
| Known unknowns | 我知道我还没弄清的 | 列出来,挑要害问 |
| Unknown knowns | 用户觉得太显然不会写的(团队约定/口味/禁区) | **主动猜出来挑明**,给用户否决机会 |
| Unknown unknowns | 谁都没想到的 | 扫代码库/文档,把它变成 known unknown |

## 动手前

1. **盲区清单先行**:先产出一份未知数清单(未文档化行为 / 含糊需求 / 边界情况 / 归属不明),此时**不写一行代码**。
2. **面试式提问**:一次一个问题,优先问「答案会改变架构」的;最多 3 个,问完就动,不无限盘问。
3. **宽窄平衡**:用户说得过细 → 确认意图而非盲从;说得过粗 → 挑明你将采用的默认方案,一句话给否决机会。

## 动手中

4. **偏差日志**:撞上计划外的边界情况 → 选保守方案,记一行进 implementation-notes.md 的 `Deviations`,继续推进——不停下来反复打断用户。

## 动手后

5. **交付带三样**:做了什么 / 哪里偏离了计划及为什么 / 替用户规避了哪些坑。让 review 只花一分钟。

---

<sub>蒸馏自 Anthropic 工程师 Thariq Shihipar《A field guide to Claude: Finding your unknowns》;行为化改写 © CCHub.ai,MIT。原文教人怎么写 prompt,本 skill 让 Claude 主动做——你不需要记住任何框架。</sub>
