<template>
  <div class="blog-list-page">
    <div class="search-bar">
      <el-input
        v-model="searchKey"
        placeholder="搜索文章..."
        prefix-icon="Search"
        clearable
        @input="handleSearch"
      />
    </div>
    
    <div class="articles">
      <div 
        v-for="article in filteredArticles" 
        :key="article.id" 
        class="article-card"
        @click="viewArticle(article)"
      >
        <div class="article-cover" v-if="article.coverImage">
          <img :src="article.coverImage" alt="cover" />
        </div>
        <div class="article-content">
          <h3>{{ article.title }}</h3>
          <p class="article-desc">{{ article.description }}</p>
          <div class="article-meta">
            <span>📅 {{ formatDate(article.createTime) }}</span>
            <span>👁 {{ article.views || 0 }}</span>
            <span>❤️ {{ article.likeCount || 0 }}</span>
          </div>
        </div>
      </div>
      
      <el-empty v-if="filteredArticles.length === 0" description="暂无文章" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { blogApi } from '@/api'

const router = useRouter()
const articles = ref([])
const searchKey = ref('')

const filteredArticles = computed(() => {
  if (!searchKey.value) return articles.value
  return articles.value.filter(article => 
    article.title.toLowerCase().includes(searchKey.value.toLowerCase())
  )
})

const loadArticles = async () => {
  try {
    const data = await blogApi.list({ pageNum: 1, pageSize: 100 })
    articles.value = data.records || []
  } catch (e) {
    console.error(e)
  }
}

const handleSearch = () => {
  // 搜索逻辑
}

const viewArticle = (article) => {
  // 可以在此查看文章详情
}

const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('zh-CN')
}

loadArticles()
</script>

<style scoped>
.blog-list-page {
  padding: 20px;
}

.search-bar {
  margin-bottom: 30px;
  max-width: 500px;
}

.articles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
}

.article-card {
  background: #1a1a2e;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
}

.article-cover {
  height: 160px;
  overflow: hidden;
}

.article-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-content {
  padding: 20px;
}

.article-content h3 {
  color: #fff;
  margin: 0 0 10px;
  font-size: 18px;
}

.article-desc {
  color: #909399;
  font-size: 14px;
  margin: 0 0 15px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-meta {
  display: flex;
  gap: 15px;
  color: #667eea;
  font-size: 12px;
}
</style>
