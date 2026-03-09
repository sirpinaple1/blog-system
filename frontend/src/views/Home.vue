<template>
  <div class="home">
    <div class="hero">
      <div class="hero-content">
        <h1 class="title">🚀 博客管理系统</h1>
        <p class="subtitle">基于 Spring Boot + Vue 3 的全栈博客平台</p>
        <div class="tech-stack">
          <span class="tag">Spring Boot</span>
          <span class="tag">Vue 3</span>
          <span class="tag">MyBatis Plus</span>
          <span class="tag">MySQL</span>
        </div>
        <div class="btn-group">
          <el-button type="primary" size="large" class="enter-btn" @click="goToBlog">
            <el-icon><Reading /></el-icon>
            浏览博客
          </el-button>
          <el-button size="large" class="enter-btn admin-btn" @click="goToLogin">
            <el-icon><Lock /></el-icon>
            管理员入口
          </el-button>
        </div>
      </div>
      <div class="hero-animation">
        <div class="floating-card card-1">
          <el-icon><Document /></el-icon>
          <span>博客管理</span>
        </div>
        <div class="floating-card card-2">
          <el-icon><FolderOpened /></el-icon>
          <span>分类管理</span>
        </div>
        <div class="floating-card card-3">
          <el-icon><PriceTag /></el-icon>
          <span>标签管理</span>
        </div>
        <div class="floating-card card-4">
          <el-icon><ChatDotRound /></el-icon>
          <span>评论系统</span>
        </div>
      </div>
    </div>
    <div class="features">
      <div class="feature-item">
        <el-icon :size="40"><Setting /></el-icon>
        <h3>强大的后台管理</h3>
        <p>支持博客、分类、标签、评论的完整 CRUD 操作</p>
      </div>
      <div class="feature-item">
        <el-icon :size="40"><DataAnalysis /></el-icon>
        <h3>数据统计分析</h3>
        <p>浏览量、点赞数、评论数实时统计</p>
      </div>
      <div class="feature-item">
        <el-icon :size="40"><Cloudy /></el-icon>
        <h3>RESTful API</h3>
        <p>标准化的接口设计，Swagger 文档支持</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { Lock, Document, FolderOpened, PriceTag, ChatDotRound, Setting, DataAnalysis, Cloudy, Reading } from '@element-plus/icons-vue'

const router = useRouter()

const goToBlog = () => {
  router.push('/blog')
}

const goToLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  padding: 60px 20px;
}

.hero {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60vh;
}

.hero-content {
  flex: 1;
}

.title {
  font-size: 56px;
  font-weight: bold;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  animation: fadeInUp 0.8s ease-out;
}

.subtitle {
  font-size: 24px;
  color: #a0aec0;
  margin-bottom: 30px;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.tech-stack {
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.tag {
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  color: #a0aec0;
  font-size: 14px;
}

.btn-group {
  display: flex;
  gap: 20px;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.enter-btn {
  font-size: 16px;
  padding: 18px 35px;
}

.admin-btn {
  background: transparent;
  border: 2px solid #667eea;
  color: #667eea;
}

.admin-btn:hover {
  background: #667eea;
  color: #fff;
}

.hero-animation {
  flex: 1;
  position: relative;
  height: 400px;
}

.floating-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 25px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  color: white;
  font-size: 16px;
  animation: float 3s ease-in-out infinite;
}

.card-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.card-2 {
  top: 30%;
  right: 5%;
  animation-delay: 0.5s;
}

.card-3 {
  top: 55%;
  left: 20%;
  animation-delay: 1s;
}

.card-4 {
  top: 75%;
  right: 15%;
  animation-delay: 1.5s;
}

.features {
  max-width: 1200px;
  margin: 80px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.feature-item {
  text-align: center;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  transition: transform 0.3s;
}

.feature-item:hover {
  transform: translateY(-10px);
}

.feature-item h3 {
  color: white;
  margin: 20px 0 10px;
}

.feature-item p {
  color: #a0aec0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }
  
  .title {
    font-size: 36px;
  }
  
  .tech-stack {
    justify-content: center;
  }
  
  .btn-group {
    justify-content: center;
  }
  
  .hero-animation {
    display: none;
  }
  
  .features {
    grid-template-columns: 1fr;
  }
}
</style>
