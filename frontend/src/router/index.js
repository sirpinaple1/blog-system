import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/blog',
    name: 'BlogView',
    component: () => import('@/views/BlogView.vue'),
    redirect: '/blog/list',
    children: [
      {
        path: '/blog/list',
        name: 'BlogList',
        component: () => import('@/views/BlogList.vue')
      }
    ]
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('@/views/Video.vue')
  },
  {
    path: '/visualization',
    name: 'Visualization',
    component: () => import('@/views/Visualization.vue')
  },
  {
    path: '/notes',
    name: 'Notes',
    component: () => import('@/views/Notes.vue')
  },
  {
    path: '/collections',
    name: 'Collections',
    component: () => import('@/views/Collections.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('@/views/Skills.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    redirect: '/admin/blog',
    meta: { requiresAuth: true },
    children: [
      {
        path: '/admin/blog',
        name: 'BlogListAdmin',
        component: () => import('@/views/blog/List.vue'),
        meta: { title: '博客管理' }
      },
      {
        path: '/admin/blog/add',
        name: 'BlogAdd',
        component: () => import('@/views/blog/Edit.vue'),
        meta: { title: '新增博客' }
      },
      {
        path: '/admin/blog/edit/:id',
        name: 'BlogEdit',
        component: () => import('@/views/blog/Edit.vue'),
        meta: { title: '编辑博客' }
      },
      {
        path: '/admin/category',
        name: 'Category',
        component: () => import('@/views/category/List.vue'),
        meta: { title: '分类管理' }
      },
      {
        path: '/admin/tag',
        name: 'Tag',
        component: () => import('@/views/tag/List.vue'),
        meta: { title: '标签管理' }
      },
      {
        path: '/admin/comment',
        name: 'Comment',
        component: () => import('@/views/comment/List.vue'),
        meta: { title: '评论管理' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  
  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else if (to.path === '/login' && token) {
    next('/admin/blog')
  } else {
    next()
  }
})

export default router
