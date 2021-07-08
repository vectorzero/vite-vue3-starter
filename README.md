# Vite2.x + Vue3.x + TypeScript Starter

## 快速开始

### 安装依赖

```sh
npm install
# or
yarn add
```

### 启动项目

```sh
npm run dev
```

### 项目打包

```sh
npm run build
```

## 部署

### 配置 GitHub

1. 创建一个有 repo 和 workflow 权限的 GitHub Token
2. 在仓库中添加secret: `仓库 -> settings -> Secrets -> New repository secret`

### 新建gh-pages分支


```sh
yarn build || npm run build
git checkout -b gh-pages
git add -f dist
git commit -m 'created gh-pages'
git subtree push --prefix dist origin gh-pages
```
