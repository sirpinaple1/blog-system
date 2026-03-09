<template>
  <div class="blog-list">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>博客管理</span>
          <el-button type="primary" @click="handleAdd">新增博客</el-button>
        </div>
      </template>
      
      <!-- 搜索区域 -->
      <el-form :inline="true" :model="queryParams" class="search-form">
        <el-form-item label="标题">
          <el-input v-model="queryParams.title" placeholder="请输入标题" clearable />
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="queryParams.categoryId" placeholder="请选择" clearable>
            <el-option 
              v-for="cat in categoryList" 
              :key="cat.id" 
              :label="cat.name" 
              :value="cat.id" 
            />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="queryParams.status" placeholder="请选择" clearable>
            <el-option label="草稿" :value="0" />
            <el-option label="已发布" :value="1" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loadData">搜索</el-button>
          <el-button @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
      
      <!-- 表格 -->
      <el-table :data="tableData" border stripe>
        <el-table-column prop="id" label="ID" width="60" />
        <el-table-column prop="title" label="标题" min-width="200" show-overflow-tooltip />
        <el-table-column prop="categoryName" label="分类" width="100" />
        <el-table-column prop="views" label="浏览量" width="80" />
        <el-table-column prop="likeCount" label="点赞数" width="80" />
        <el-table-column prop="commentCount" label="评论数" width="80" />
        <el-table-column prop="isTop" label="置顶" width="60">
          <template #default="{ row }">
            <el-tag v-if="row.isTop" type="danger" size="small">是</el-tag>
            <span v-else>否</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" width="80">
          <template #default="{ row }">
            <el-tag :type="row.status === 1 ? 'success' : 'info'" size="small">
              {{ row.status === 1 ? '已发布' : '草稿' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="170" />
        <el-table-column label="操作" width="180" fixed="right">
          <template #default="{ row }">
            <el-button type="primary" link @click="handleEdit(row.id)">编辑</el-button>
            <el-button type="danger" link @click="handleDelete(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      
      <!-- 分页 -->
      <el-pagination
        v-model:current-page="queryParams.pageNum"
        v-model:page-size="queryParams.pageSize"
        :total="total"
        :page-sizes="[10, 20, 50]"
        layout="total, sizes, prev, pager, next"
        @size-change="loadData"
        @current-change="loadData"
        style="margin-top: 20px; justify-content: flex-end"
      />
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { blogApi, categoryApi } from '@/api'

const router = useRouter()

const queryParams = reactive({
  pageNum: 1,
  pageSize: 10,
  title: '',
  categoryId: null,
  status: null
})

const tableData = ref([])
const total = ref(0)
const categoryList = ref([])

const loadData = async () => {
  try {
    const [pageData, cats] = await Promise.all([
      blogApi.list(queryParams),
      categoryApi.list()
    ])
    tableData.value = pageData.records
    total.value = pageData.total
    categoryList.value = cats || []
  } catch (e) {
    console.error(e)
  }
}

const loadCategory = async () => {
  try {
    categoryList.value = await categoryApi.list()
  } catch (e) {
    console.error(e)
  }
}

const handleAdd = () => {
  router.push('/blog/add')
}

const handleEdit = (id) => {
  router.push(`/blog/edit/${id}`)
}

const handleDelete = async (id) => {
  try {
    await ElMessageBox.confirm('确定要删除这条博客吗？', '提示', {
      type: 'warning'
    })
    await blogApi.delete(id)
    ElMessage.success('删除成功')
    loadData()
  } catch (e) {
    if (e !== 'cancel') {
      console.error(e)
    }
  }
}

const handleReset = () => {
  queryParams.title = ''
  queryParams.categoryId = null
  queryParams.status = null
  loadData()
}

onMounted(() => {
  loadData()
  loadCategory()
})
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-form {
  margin-bottom: 20px;
}
</style>
