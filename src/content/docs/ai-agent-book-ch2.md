---
title: 第 2 章：Agent 核心认知架构
description: 《AI Agent 理论与工程架构实践》第 2 章 - 规划推理与工具调用机制
---

# 第 2 章：Agent 核心认知架构

> **本章要点**：
> - 掌握 ReAct (Reason + Act) 协同推理范式
> - 拆解长期记忆与 Vector Embedding 检索的融合方案
> - 实现安全的 Function Calling 工具调用接口

---

## 2.1 规划与推理机制 (ReAct 框架)

**ReAct (Reasoning and Acting)** 是现代 Agent 最经典且最广为采纳的推理框架。它要求 LLM 在每一步行动前交替进行 **思考 (Thought)** 与 **行动 (Action)**：

1. **Thought（思考）**：分析当前状态、明确解决下一步问题所需的缺失信息。
2. **Action（行动）**：决定调用的工具名称（Tool Name）与入参（Parameters）。
3. **Observation（观察）**：从工具执行结果中读取返回的数据并反馈给下一轮 Thought。

```markdown
Thought: 我需要查询北京今天的天气，然后再推荐适合的户外活动。
Action: weather_api(city="Beijing")
Observation: 北京天气晴朗，气温 22℃，微风。
Thought: 天气非常好，温度适宜，适合公园徒步或户外野餐。
Action: finish(result="北京今日天气晴朗 (22℃)，推荐前往朝阳公园徒步或野餐。")
```

---

## 2.2 记忆系统设计

Agent 的记忆系统模拟了人类脑神经的记忆分区：

- **工作记忆 (Working Memory)**：受限于 Context Window，存放当前的 Prompt、短期对话上下文。
- **长效记忆 (Episodic Memory)**：利用 Embedding 向量化技术存入向量数据库（如 ChromaDB / Qdrant），在需要时通过 Semantic Search 语义检索拉取相关历史经验。

---

## 2.3 Function Calling 与沙箱安全

在生产环境中，给 Agent 挂载工具时必须注意**沙箱隔离与权限控制**：

1. **严格模式校验**：使用 JSON Schema 对工具参数进行强制校验。
2. **只读与写操作隔离**：对于删除数据、发起转账等危险写指令，引入 **Human-in-the-Loop（人工确认环节）**。

---

## 2.4 小结与下一章预告

本章剖析了 Agent 内部的 ReAct 推理逻辑与记忆机制。在下一章 [第 3 章：多 Agent 协作系统](/ai-agent-book-ch3/) 中，我们将探讨多个 Agent 之间如何像团队一样分工合作。
