# AI 创意互动实验｜Loopit Cases

GitHub Pages：<https://awoele.github.io/yxy-loopit-cases/>

面向简历与作品集的单页互动展示，集中呈现三个可直接试玩的 Loopit Case：

- `#MyJJKDomain`：三卡策略游戏
- `Pick. Play. Make.`：Loopit 模板探索与再创作
- `KATSEYE Beat Flip`：自由滑动与音乐卡点

页面参考 Loopit 官网的品牌粉画布、粗体标题和竖屏试玩窗口，并通过三栏布局支持横向比较。三个案例均接入已发布的 Loopit 线上版本，不再打包本地游戏内容；窗口内使用发布构建直达地址，独立试玩使用公开分享页。每个作品仅在点击后加载，避免多个互动同时占用音频和网络资源。

## 本地运行

```bash
npm install
npm run dev
```

## 验证

```bash
npm run build
npm test
```

## GitHub Pages

`.github/workflows/pages.yml` 会在 `main` 分支更新时构建并发布静态站点。部署目标固定为仓库 `awoele/yxy-loopit-cases`，页面路径为 `/yxy-loopit-cases/`。

在 Windows PowerShell 中可用与 CI 相同的配置验证静态导出：

```powershell
$env:GITHUB_PAGES = "true"
$env:GITHUB_REPOSITORY = "awoele/yxy-loopit-cases"
$env:NEXT_PUBLIC_BASE_PATH = "/yxy-loopit-cases"
$env:NEXT_PUBLIC_SITE_URL = "https://awoele.github.io/yxy-loopit-cases/"
npm run build:pages
npm run test:pages
```

本地封面、Logo、Next.js 脚本与样式会自动带上仓库路径前缀；外部 Loopit iframe 和独立试玩链接保持原地址。

项目中的动漫及艺人相关内容仅用于非商业概念原型与个人作品展示。
