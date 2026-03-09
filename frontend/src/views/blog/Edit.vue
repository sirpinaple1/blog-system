<template>
  <div class="blog-edit">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>{{ isEdit ? '编辑博客' : '新增博客' }}</span>
        </div>
      </template>
      
      <el-form :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.title" placeholder="请输入标题" />
        </el-form-item>
        
        <el-form-item label="分类">
          <el-select v-model="form.categoryId" placeholder="请选择">
            <el-option 
              v-for="cat in categoryList" 
              :key="cat.id" 
              :label="cat.name" 
              :value="cat.id" 
            />
          </el-select>
        </el-form-item>
        
        <el-form-item label="标签">
          <el-select v-model="form.tagIds" multiple placeholder="请选择标签">
            <el-option 
              v-for="tag in tagList" 
              :key="tag.id" 
              :label="tag.name" 
              :value="tag.id" 
            />
          </el-select>
        </el-form-item>
        
        <el-form-item label="描述">
          <el-input v-model="form.description" type="textarea" :rows="2" />
        </el-form-item>
        
        <el-form-item label="内容">
          <el-input v-model="form.content" type="textarea" :rows="15" />
        </el-form-item>
        
        <el-form-item label="封面图">
          <el-input v-model="form.coverImage" placeholder="请输入封面图URL" />
        </el-form-item>
        
        <el-form-item label="置顶">
          <el-switch v-model="form.isTop" :active-value="1" :inactive-value="0" />
        </el-form-item>
        
        <el-form-item label="状态">
          <el-radio-group v-model="form.status">
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">发布</el-radio>
          </el-radio-group>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="handleSave">保存</el-button>
          <el-button @click="handleBack">返回</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { blogApi, categoryApi, tagApi } from '@/api'

const router = useRouter()
const route = useRoute()

const isEdit = computed(() => !!route.params.id)
const form = reactive({
  id: null,
  title: '',
  content: '',
  description: '',
  coverImage: '',
  categoryId: null,
  isTop: 0,
  status: 1,
  tagIds: []
})

const categoryList = ref([])
const tagList = ref([])

const loadData = async () => {
  try {
    const [cats, tags] = await Promise.all([
      categoryApi.list(),
      tagApi.list()
    ])
    categoryList.value = cats || []
    tagList.value = tags || []
  } catch (e) {
    console.error(e)
  }
}

const loadBlog = async () => {
  try {
    const blog = await blogApi.detail(route.params.id)
    Object.assign(form, blog)
  } catch (e) {
    console.error(e)
  }
}

const handleSave = async () => {
  try {
    if (isEdit.value) {
      await blogApi.update(form)
      ElMessage.success('更新成功')
    } else {
      await blogApi.save(form)
      ElMessage.success('保存成功')
    }
    router.push('/blog')
  } catch (e) {
    console.error(e)
  }
}

const handleBack = () => {
  router.push('/blog')
}

onMounted(() => {
  loadData()
  if (isEdit.value) {
    loadBlog()
  }
})
</script>

<style scoped>
.card-header {
  font-size: 18px;
  font-weight: bold;
}
</style>
