<template>
  <div class="blog-view">
    <!-- 侧边栏 -->
    <div class="sidebar">
      <div class="sidebar-header">
        <div class="avatar">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=blog" alt="avatar" />
        </div>
        <h3>我的技术博客</h3>
        <p class="motto">学习 · 记录 · 分享</p>
      </div>
      
      <div class="nav-menu">
        <div 
          v-for="item in menuItems" 
          :key="item.path"
          class="nav-item"
          :class="{ active: currentPath === item.path }"
          @click="goTo(item.path)"
        >
          <el-icon><component :is="item.icon" /></el-icon>
          <span>{{ item.name }}</span>
        </div>
      </div>
      
      <div class="sidebar-footer">
        <el-button type="primary" size="small" @click="goToLogin">
          <el-icon><Lock /></el-icon>
          管理后台
        </el-button>
      </div>
    </div>
    
    <!-- 内容区 -->
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { 
  Reading, VideoCamera, DataLine, Memo, 
  Collection, Lock, Notebook, Cpu 
} from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()
const currentPath = computed(() => route.path)

const menuItems = [
  { name: '博客文章', path: '/blog', icon: Reading },
  { name: '视频学习', path: '/video', icon: VideoCamera },
  { name: '函数可视化', path: '/visualization', icon: DataLine },
  { name: '学习笔记', path: '/notes', icon: Memo },
  { name: '技术收藏', path: '/collections', icon: Collection },
  { name: '技术栈', path: '/skills', icon: Cpu },
]

const goTo = (path) => {
  router.push(path)
}

const goToLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
.blog-view {
  display: flex;
  height: 100vh;
  background: #0f0f23;
}

.sidebar {
  width: 260px;
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
  display: flex;
  flex-direction: column;
  border-right: 1px solid #2d2d44;
}

.sidebar-header {
  padding: 30px 20px;
  text-align: center;
  border-bottom: 1px solid #2d2d44;
}

.avatar {
  width: 80px;
  height: 80px;
  margin: 0 auto 15px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #667eea;
}

.avatar img {
  width: 100%;
  height: 100%;
}

.sidebar-header h3 {
  color: #fff;
  margin: 0 0 8px;
  font-size: 18px;
}

.motto {
  color: #909399;
  font-size: 12px;
  margin: 0;
}

.nav-menu {
  flex: 1;
  padding: 20px 10px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 15px;
  margin-bottom: 5px;
  border-radius: 10px;
  color: #a0aec0;
  cursor: pointer;
  transition: all 0.3s;
}

.nav-item:hover {
  background: rgba(102, 126, 234, 0.1);
  color: #fff;
}

.nav-item.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid #2d2d44;
}

.content {
  flex: 1;
  overflow-y: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
