<template>
  <div class="page-container">
    <h1 class="page-title">📝 学习笔记</h1>
    <p class="page-desc">记录学习过程中的重点和难点</p>
    
    <div class="notes-grid">
      <div v-for="note in notes" :key="note.id" class="note-card">
        <div class="note-header">
          <el-tag :type="note.type === '重点' ? 'danger' : note.type === '难点' ? 'warning' : 'info'">
            {{ note.type }}
          </el-tag>
          <span class="note-date">{{ note.date }}</span>
        </div>
        <h3>{{ note.title }}</h3>
        <p>{{ note.content }}</p>
        <div class="note-footer">
          <el-tag v-for="tag in note.tags" :key="tag" size="small" type="info">{{ tag }}</el-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const notes = ref([
  {
    id: 1,
    title: 'Python 装饰器',
    content: '装饰器是 Python 的高级特性，可以在不修改原函数的情况下，增强其功能。',
    type: '重点',
    date: '2024-01-15',
    tags: ['Python', '装饰器']
  },
  {
    id: 2,
    title: 'Vue3 组合式 API',
    content: '组合式 API 是 Vue3 最重要的特性，提供更好的逻辑复用和代码组织。',
    type: '重点',
    date: '2024-01-20',
    tags: ['Vue', '前端']
  },
  {
    id: 3,
    title: 'Spring Boot 自动装配',
    content: 'Spring Boot 通过 @SpringBootApplication 和starter自动配置简化开发。',
    type: '难点',
    date: '2024-02-01',
    tags: ['Java', 'Spring']
  },
  {
    id: 4,
    title: '神经网络反向传播',
    content: '反向传播算法是训练神经网络的核心，通过梯度下降更新参数。',
    type: '难点',
    date: '2024-02-10',
    tags: ['深度学习', 'AI']
  }
])
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

.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
}

.note-card {
  background: #1a1a2e;
  padding: 25px;
  border-radius: 15px;
  transition: transform 0.3s;
}

.note-card:hover {
  transform: translateY(-5px);
}

.note-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.note-date {
  color: #909399;
  font-size: 12px;
}

.note-card h3 {
  color: #fff;
  margin: 0 0 10px;
}

.note-card p {
  color: #a0aec0;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.note-footer {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
</style>
