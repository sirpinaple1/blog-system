<template>
  <div class="page-container">
    <h1 class="page-title">🛠️ 技术栈</h1>
    <p class="page-desc">掌握的技术和工具</p>
    
    <div class="skills-section">
      <h2>💻 编程语言</h2>
      <div class="skill-cards">
        <div v-for="skill in languages" :key="skill.name" class="skill-card">
          <div class="skill-icon">{{ skill.icon }}</div>
          <div class="skill-info">
            <h4>{{ skill.name }}</h4>
            <el-progress :percentage="skill.level" :color="skill.color" />
          </div>
        </div>
      </div>
    </div>
    
    <div class="skills-section">
      <h2>🌐 前端技术</h2>
      <div class="skill-cards">
        <div v-for="skill in frontend" :key="skill.name" class="skill-card">
          <div class="skill-icon">{{ skill.icon }}</div>
          <div class="skill-info">
            <h4>{{ skill.name }}</h4>
            <el-progress :percentage="skill.level" :color="skill.color" />
          </div>
        </div>
      </div>
    </div>
    
    <div class="skills-section">
      <h2>⚙️ 后端技术</h2>
      <div class="skill-cards">
        <div v-for="skill in backend" :key="skill.name" class="skill-card">
          <div class="skill-icon">{{ skill.icon }}</div>
          <div class="skill-info">
            <h4>{{ skill.name }}</h4>
            <el-progress :percentage="skill.level" :color="skill.color" />
          </div>
        </div>
      </div>
    </div>
    
    <div class="skills-section">
      <h2>🤖 AI / 机器学习</h2>
      <div class="skill-cards">
        <div v-for="skill in ai" :key="skill.name" class="skill-card">
          <div class="skill-icon">{{ skill.icon }}</div>
          <div class="skill-info">
            <h4>{{ skill.name }}</h4>
            <el-progress :percentage="skill.level" :color="skill.color" />
          </div>
        </div>
      </div>
    </div>
    
    <div class="skills-section">
      <h2>🛠️ 工具</h2>
      <div class="skill-cards">
        <div v-for="skill in tools" :key="skill.name" class="skill-card">
          <div class="skill-icon">{{ skill.icon }}</div>
          <div class="skill-info">
            <h4>{{ skill.name }}</h4>
            <el-progress :percentage="skill.level" :color="skill.color" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const languages = ref([
  { name: 'Python', level: 85, icon: '🐍', color: '#3776AB' },
  { name: 'Java', level: 80, icon: '☕', color: '#ED8B00' },
  { name: 'JavaScript', level: 90, icon: '📜', color: '#F7DF1E' },
  { name: 'TypeScript', level: 75, icon: '🔷', color: '#3178C6' },
])

const frontend = ref([
  { name: 'Vue 3', level: 90, icon: '💚', color: '#4FC08D' },
  { name: 'React', level: 70, icon: '⚛️', color: '#61DAFB' },
  { name: 'Element Plus', level: 85, icon: '🖼️', color: '#409EFF' },
  { name: 'CSS/SCSS', level: 80, icon: '🎨', color: '#CC6699' },
])

const backend = ref([
  { name: 'Spring Boot', level: 85, icon: '🍃', color: '#6DB33F' },
  { name: 'MyBatis Plus', level: 85, icon: '🗄️', color: '#DFA84C' },
  { name: 'FastAPI', level: 70, icon: '⚡', color: '#009688' },
  { name: 'MySQL', level: 80, icon: '🐬', color: '#4479A1' },
])

const ai = ref([
  { name: 'PyTorch', level: 75, icon: '🔥', color: '#EE4C2C' },
  { name: 'TensorFlow', level: 60, icon: '🧠', color: '#FF6F00' },
  { name: 'LangChain', level: 65, icon: '🔗', color: '#2E4053' },
  { name: 'Hugging Face', level: 70, icon: '🤗', color: '#FFD700' },
])

const tools = ref([
  { name: 'Git', level: 90, icon: '🐙', color: '#F05032' },
  { name: 'Docker', level: 75, icon: '🐳', color: '#2496ED' },
  { name: 'Linux', level: 80, icon: '🐧', color: '#FCC624' },
  { name: 'VS Code', level: 95, icon: '💙', color: '#007ACC' },
])
</script>

<style scoped>
.page-container {
  padding: 30px;
  max-width: 1200px;
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

.skills-section {
  margin-bottom: 40px;
}

.skills-section h2 {
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
  padding-left: 15px;
  border-left: 4px solid #667eea;
}

.skill-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.skill-card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: #1a1a2e;
  border-radius: 12px;
}

.skill-icon {
  font-size: 36px;
}

.skill-info {
  flex: 1;
}

.skill-info h4 {
  color: #fff;
  margin: 0 0 10px;
}
</style>
