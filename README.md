# GitHub Pages

要通过 GitHub Actions 将幻灯片部署到 GitHub Pages，请按以下步骤操作：

1. 在你的仓库中，进入 Settings > Pages。在 Build and deployment 下，选择 GitHub Actions。（不要选择 Deploy from a branch 并上传 dist 目录，这不推荐。）
2. 创建 `.github/workflows/deploy.yml`，内容如下，通过 GitHub Actions 将幻灯片部署到 GitHub Pages。

```yaml
name: Deploy pages

on:
  workflow_dispatch:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'

      - name: Setup @antfu/ni
        run: npm i -g @antfu/ni

      - name: Install dependencies
        run: nci

      - name: Build
        run: nr build --base /${{github.event.repository.name}}/

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. 提交并推送更改到你的仓库。每次你推送到 main 分支时，GitHub Actions 工作流将自动将幻灯片部署到 GitHub Pages。
4. 你可以在 `https://<username>.github.io/<repository-name>/` 访问你的幻灯片。
