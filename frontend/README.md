# Blog System Frontend

基于 Vue 3 + Element Plus 的博客管理前端

## 技术栈

- Vue 3 (Composition API)
- Vite
- Element Plus
- Vue Router
- Pinia
- Axios
- Markdown-it

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 3. 构建生产版本

```bash
npm run build
```

## 项目结构

```
src/
├── api/          # API 请求
├── assets/       # 静态资源
├── components/   # 公共组件
├── router/       # 路由配置
├── stores/       # Pinia 状态管理
├── views/        # 页面组件
│   ├── blog/     # 博客管理
│   ├── category/ # 分类管理
│   ├── tag/      # 标签管理
│   └── comment/  # 评论管理
├── App.vue       # 根组件
└── main.js       # 入口文件
```

## 功能模块

- [x] 登录认证
- [x] 博客管理（增删改查）
- [x] 分类管理
- [x] 标签管理
- [x] 评论管理
