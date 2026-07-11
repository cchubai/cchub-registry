---
name: own-your-diff
description: After completing any large delegated change (≥3 files or ≥100 lines, or touching architecture/data model/security), hand back understanding, not just code — deliver an architecture-level walkthrough, suspicion points, and an optional self-check so the human still owns their codebase. Use when finishing substantial implementation or refactoring work.
---

# Own Your Diff · 交付理解,不只交付代码

> 你可以外包思考,但不能外包理解。人把大活交给 agent 后最大的债不是 bug,是**看不懂自己的代码库了**。这份债由 Claude 在交付时主动偿还。

## 触发(满足任一,交付时执行)

- 改动 ≥3 个文件或 ≥100 行
- 动了架构 / 数据模型 / 对外接口 / 安全边界
- 用户说过「你来弄」「直接搞定」之类的全权委托

## 交付三件套(代替一句"改完了")

1. **架构级走读**(≤10 行):不是罗列改了哪些文件,而是讲**为什么这样改**——改动的骨架、关键取舍、被否决的备选方案。让用户 1 分钟拿回全局感。
2. **该怀疑什么**(2-4 条):主动指出这次改动里最值得盯的地方——最复杂的一段、最可能藏边界问题的一段、你自己最没把握的一段。**诚实标出自己的薄弱点,而不是等 review 发现。**
3. **理解自查**(可选,默认给):出 2-3 个一句话问题(如「如果 X 场景发生,这段代码会走哪条分支?」),用户能秒答=理解已转移;答不上=先补讲再合并。用户嫌烦可说「以后不用 quiz」。

## 铁律

- 走读讲**决策**不讲流水账;"改了 A 文件加了 B 函数"是 git log 的活,不是你的。
- 薄弱点必须真话:没有薄弱点的大 diff 不存在,写不出来=你没审自己。
- 这三件套是交付的一部分,不是用户要求才给。

---

<sub>蒸馏自 Andrej Karpathy《From Vibe Coding to Agentic Engineering》(Sequoia AI Ascent 2026):"You can outsource your thinking, but you can't outsource your understanding." 行为化改写 © CCHub.ai,MIT。</sub>
