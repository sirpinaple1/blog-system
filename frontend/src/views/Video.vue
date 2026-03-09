<template>
  <div class="page-container">
    <h1 class="page-title">📺 视频学习</h1>
    <p class="page-desc">收录优质技术视频教程</p>
    
    <div class="video-grid">
      <div v-for="video in videos" :key="video.id" class="video-card">
        <div class="video-player">
          <iframe 
            :src="video.url" 
            frameborder="0" 
            allowfullscreen
          ></iframe>
        </div>
        <div class="video-info">
          <h3>{{ video.title }}</h3>
          <p>{{ video.desc }}</p>
          <div class="video-tags">
            <el-tag v-for="tag in video.tags" :key="tag" size="small">{{ tag }}</el-tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const videos = ref([
  {
    id: 1,
    title: 'Python 基础入门',
    desc: 'Python 编程基础教程',
    url: 'https://player.bilibili.com/player.html?bvid=BV1Ms411R75P',
    tags: ['Python', '入门']
  },
  {
    id: 2,
    title: 'Spring Boot 实战',
    desc: 'Spring Boot 企业级开发',
    url: 'https://player.bilibili.com/player.html?bvid=BV1PE411i7CV',
    tags: ['Java', 'Spring Boot']
  },
  {
    id: 3,
    title: 'Vue3 教程',
    desc: 'Vue3 组合式 API 详解',
    url: 'https://player.bilibili.com/player.html?bvid=BV1dS4y1y7Dd',
    tags: ['Vue', '前端']
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

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 25px;
}

.video-card {
  background: #1a1a2e;
  border-radius: 15px;
  overflow: hidden;
}

.video-player {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}

.video-player iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-info {
  padding: 20px;
}

.video-info h3 {
  color: #fff;
  margin: 0 0 10px;
  font-size: 16px;
}

.video-info p {
  color: #909399;
  font-size: 14px;
  margin-bottom: 15px;
}

.video-tags {
  display: flex;
  gap: 8px;
}
</style>
