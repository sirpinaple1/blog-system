# 🎨 博客系统

> 基于 Spring Boot + Vue 3 的全栈博客管理系统

## 📚 简介

这是一个完整的博客系统，用于展示个人技术能力和全栈开发经验。系统采用前后端分离架构，后端使用 Spring Boot + MyBatis Plus，前端使用 Vue 3 + Element Plus。

## 🛠 技术栈

### 后端
- **Spring Boot 2.7** - Java Web 框架
- **MyBatis Plus** - ORM 框架
- **MySQL 8.0** - 关系型数据库
- **JWT** - 身份认证
- **SpringDoc OpenAPI** - API 文档

### 前端
- **Vue 3** - 前端框架
- **Vite** - 构建工具
- **Element Plus** - UI 组件库
- **Vue Router** - 路由管理
- **Pinia** - 状态管理
- **Axios** - HTTP 请求

## 📁 项目结构

```
blog-system/
├── backend/                 # Spring Boot 后端
│   ├── src/main/java/com/blog/
│   │   ├── controller/     # REST API 控制器
│   │   ├── service/        # 业务逻辑层
│   │   ├── mapper/         # 数据访问层
│   │   ├── entity/         # 实体类
│   │   ├── config/         # 配置类
│   │   └── common/         # 公共类
│   ├── src/main/resources/
│   │   ├── mapper/         # MyBatis XML
│   │   ├── schema.sql      # 数据库脚本
│   │   └── application.yml # 配置文件
│   └── pom.xml
│
└── frontend/               # Vue 3 前端
    ├── src/
    │   ├── api/             # API 请求
    │   ├── views/           # 页面组件
    │   ├── router/          # 路由配置
    │   └── stores/          # 状态管理
    ├── package.json
    └── vite.config.js
```

## 🗄️ 数据库设计

| 表名 | 说明 |
|------|------|
| user | 用户表 |
| blog | 博客文章 |
| category | 分类表 |
| tag | 标签表 |
| blog_tag | 文章标签关联 |
| comment | 评论表 |

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/your-username/blog-system.git
cd blog-system
```

### 2. 初始化数据库

```bash
# 创建数据库
mysql -u root -p < backend/src/main/resources/schema.sql
```

### 3. 启动后端

```bash
cd backend
mvn spring-boot:run
```

后端运行在 http://localhost:8080

### 4. 启动前端

```bash
cd frontend
npm install
npm run dev
```

前端运行在 http://localhost:3000

## 📌 API 接口

### 博客管理
- `GET /api/blog/page` - 分页查询博客
- `GET /api/blog/{id}` - 获取博客详情
- `POST /api/blog` - 新增博客
- `PUT /api/blog` - 更新博客
- `DELETE /api/blog/{id}` - 删除博客

### 分类管理
- `GET /api/category/list` - 获取所有分类
- `POST /api/category` - 新增分类
- `PUT /api/category` - 更新分类
- `DELETE /api/category/{id}` - 删除分类

### 标签管理
- `GET /api/tag/list` - 获取所有标签
- `POST /api/tag` - 新增标签
- `PUT /api/tag` - 更新标签
- `DELETE /api/tag/{id}` - 删除标签

## ✨ 核心功能

- [x] 用户认证 (JWT)
- [x] 博客 CRUD
- [x] 分类管理
- [x] 标签管理
- [x] 评论系统
- [x] 点赞功能
- [x] 浏览统计
- [x] Markdown 支持
- [x] Swagger API 文档

## 📝 简历亮点

1. **全栈开发能力** - 独立完成前后端开发
2. **Spring Boot 精通** - 熟练使用 Spring Boot 开发 REST API
3. **Vue 3 实践** - 掌握 Vue 3 Composition API
4. **数据库设计** - 能够设计合理的数据库结构
5. **项目架构** - 清晰的分层架构 (Controller → Service → Mapper)

## 📄 License

MIT
