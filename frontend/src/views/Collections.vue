<template>
  <div class="page-container">
    <h1 class="page-title">🔖 技术收藏</h1>
    <p class="page-desc">收藏的有价值的技术资源</p>
    
    <div class="tabs">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="前端" name="frontend">
          <div class="resource-list">
            <div v-for="item in frontendResources" :key="item.url" class="resource-card" @click="openLink(item.url)">
              <div class="resource-icon">{{ item.icon }}</div>
              <div class="resource-info">
                <h4>{{ item.title }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </el-tab-pane>
        
        <el-tab-pane label="后端" name="backend">
          <div class="resource-list">
            <div v-for="item in backendResources" :key="item.url" class="resource-card" @click="openLink(item.url)">
              <div class="resource-icon">{{ item.icon }}</div>
              <div class="resource-info">
                <h4>{{ item.title }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </el-tab-pane>
        
        <el-tab-pane label="AI/ML" name="ai">
          <div class="resource-list">
            <div v-for="item in aiResources" :key="item.url" class="resource-card" @click="openLink(item.url)">
              <div class="resource-icon">{{ item.icon }}</div>
              <div class="resource-info">
                <h4>{{ item.title }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </el-tab-pane>
        
        <el-tab-pane label="工具" name="tools">
          <div class="resource-list">
            <div v-for="item in toolResources" :key="item.url" class="resource-card" @click="openLink(item.url)">
              <div class="resource-icon">{{ item.icon }}</div>
              <div class="resource-info">
                <h4>{{ item.title }}</h4>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('frontend')

const frontendResources = [
  { title: 'Vue 3 文档', desc: 'Vue 3 官方文档', icon: '📖', url: 'https://vuejs.org' },
  { title: 'Element Plus', desc: 'Vue 3 组件库', icon: '🖼️', url: 'https://element-plus.org' },
  { title: 'MDN Web Docs', desc: 'Web 技术文档', icon: '🌐', url: 'https://developer.mozilla.org' },
]

const backendResources = [
  { title: 'Spring 文档', desc: 'Spring 官方文档', icon: '🍃', url: 'https://spring.io' },
  { title: 'MyBatis Plus', desc: 'ORM 框架', icon: '🗄️', url: 'https://baomidou.com' },
  { title: 'FastAPI', desc: 'Python Web 框架', icon: '⚡', url: 'https://fastapi.tiangolo.com' },
]

const aiResources = [
  { title: 'PyTorch', desc: '深度学习框架', icon: '🔥', url: 'https://pytorch.org' },
  { title: 'Hugging Face', desc: 'AI 模型库', icon: '🤗', url: 'https://huggingface.co' },
  { title: 'LangChain', desc: 'LLM 应用框架', icon: '🔗', url: 'https://langchain.com' },
]

const toolResources = [
  { title: 'GitHub', desc: '代码托管', icon: '🐙', url: 'https://github.com' },
  { title: 'Docker', desc: '容器化', icon: '🐳', url: 'https://docker.com' },
  { title: 'Vite', desc: '构建工具', icon: '⚡', url: 'https://vitejs.dev' },
]

const openLink = (url) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
.page-container {
  padding: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.page-title {
  color: #fff;
  font-size: 28px;
  margin-bottom: 10px;
}

.page-desc {
  color: #909399;
  margin-bottom: 30px;
}

.tabs {
  background: #1a1a2e;
  border-radius: 15px;
  padding: 20px;
}

.resource-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.resource-card {
  display: flex;
  gap: 15px;
  padding: 20px;
  background: #2d2d44;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
}

.resource-card:hover {
  background: #3d3d5c;
  transform: translateX(5px);
}

.resource-icon {
  font-size: 32px;
}

.resource-info h4 {
  color: #fff;
  margin: 0 0 8px;
}

.resource-info p {
  color: #909399;
  font-size: 14px;
  margin: 0;
}
</style>
