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

### 代码规范
- 组件、hooks、context 文件使用 `PascalCase`
- 工具函数/变量使用 `lowerCamelCase`
- 禁用 `any`，在 `src/types` 定义共享接口
- Tailwind 原子类优先，复杂样式提炼至复用组件

### UI/UX 设计规范（必须遵守）

⚠️ **所有前端代码必须严格遵循 [docs/STYLE_GUIDE.md](../docs/STYLE_GUIDE.md) 的设计规范**

#### 必须遵守的核心规则：

1. **色彩系统**
   - 主背景色：`#0B1E3D` (Primary Night Blue)
   - 主按钮色：`#6E4AFF` (Primary Purple)
   - 强调色：`#FFD66B` (Star Gold)
   - 文字色：`#0B1E3D` (主要文字) / `#5F6B7A` (次要文字)
   - 使用 STYLE_GUIDE 定义的背景渐变

2. **排版系统**
   - 字体：Inter (或系统回退)
   - 标题：28-32px / 700
   - 正文：14-16px / 400
   - 按钮/标签：12-16px / 500-600

3. **组件规范**
   - 主按钮：高度 48px，圆角 12px，紫色背景
   - 输入框：高度 44px，圆角 12px，浅灰背景 `#E6EAF1`
   - 卡片：圆角 16px，半透明背景（深色模式下）

4. **间距系统**
   - 使用 8 的倍数：8px、16px、24px、32px、40px
   - Tailwind 配置需对应此间距系统

5. **图标与插画**
   - 圆润风格，简洁轮廓
   - 图标尺寸：20-24px
   - 星星点缀使用金色 `#FFD66B`

#### 执行要求：
- 任何新增或修改的 UI 组件都必须先核对 STYLE_GUIDE.md
- 提交代码前检查色彩、间距、圆角等是否符合设计系统
- 不得随意使用 STYLE_GUIDE 未定义的颜色或尺寸
- 在 Activity Log 中说明如何符合设计规范

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
