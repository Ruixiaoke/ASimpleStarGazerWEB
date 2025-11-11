# AGENTS.md - ASimpleStarGazerWEB (Vite + React)

## 模块速览
- 前端应用，使用 React 18 + TypeScript + Vite + Tailwind。
- 产物通过 `npm run build` 输出到 `dist/` 并由 Nginx/Static hosting 提供。

## 建置指令
```bash
npm install
npm run build
docker build -t app:latest .
```

## 测试与质量
- 主测试命令：`npm run test:ci`
- 单元测试覆盖率 ≥80%（Jest + React Testing Library）
- E2E：Cypress（位于 `tests/e2e`），覆盖关键用户流程
- 压力测试：保障前端资源请求在 1000 RPS 下稳定（借助 CDN/压测脚本）
- 样式/逻辑变更前运行 `eslint --fix ./src`

## 编程规范
- 组件、hooks、context 文件使用 `PascalCase`
- 工具函数/变量使用 `lowerCamelCase`
- 禁用 `any`，在 `src/types` 定义共享接口
- Tailwind 原子类优先，复杂样式提炼至复用组件

## 任務优先级
1. 安全漏洞（CVSS > 7.0，如 XSS/CSP 失效）
2. 生产错误日志（Sentry/Browser console）
3. 新功能或体验迭代

## Agent 工作流
1. 同步根目录 AGENTS 要求，安装依赖并完成构建/测试/压力验证
2. 更新本文件 `Activity Log`，记录时间、任务摘要、验证结果（最新在上）

## Agent Activity Log
### 2025-11-11 22:05 UTC+8 - 文档初始化
- 建立 Vite 前端协作规范与验证命令
- 提醒后续任务完成后更新日志
