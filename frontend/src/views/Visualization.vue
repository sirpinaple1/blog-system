<template>
  <div class="page-container">
    <h1 class="page-title">📈 函数可视化</h1>
    <p class="page-desc">交互式函数图形展示</p>
    
    <div class="visualization-panel">
      <div class="control-panel">
        <el-form label-width="80px">
          <el-form-item label="函数表达式">
            <el-input v-model="funcExpr" placeholder="如: Math.sin(x) * Math.cos(x)" />
          </el-form-item>
          <el-form-item label="X 范围">
            <el-slider v-model="xRange" range :min="-10" :max="10" />
            <span>{{ xRange[0] }} ~ {{ xRange[1] }}</span>
          </el-form-item>
          <el-form-item label="Y 范围">
-form-item label="            <el-slider v-model="yRange" range :min="-5" :max="5" />
            <span>{{ yRange[0] }} ~ {{ yRange[1] }}</span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="drawChart">绘制</el-button>
            <el-button @click="addPreset">添加预设</el-button>
          </el-form-item>
        </el-form>
        
        <div class="presets">
          <h4>预设函数</h4>
          <el-tag 
            v-for="preset in presets" 
            :key="preset.expr"
            class="preset-tag"
            @click="loadPreset(preset)"
          >
            {{ preset.name }}
          </el-tag>
        </div>
      </div>
      
      <div class="chart-container">
        <canvas ref="canvasRef" width="800" height="500"></canvas>
      </div>
    </div>
    
    <div class="math-formulas">
      <h2>📐 常用数学公式</h2>
      <div class="formula-grid">
        <div class="formula-card">
          <div class="formula">f(x) = sin(x)</div>
          <p>正弦函数</p>
        </div>
        <div class="formula-card">
          <div class="formula">f(x) = cos(x)</div>
          <p>余弦函数</p>
        </div>
        <div class="formula-card">
          <div class="formula">f(x) = eˣ</div>
          <p>指数函数</p>
        </div>
        <div class="formula-card">
          <div class="formula">f(x) = log(x)</div>
          <p>对数函数</p>
        </div>
        <div class="formula-card">
          <div class="formula">f(x) = x²</div>
          <p>二次函数</p>
        </div>
        <div class="formula-card">
          <div class="formula">f(x) = √x</div>
          <p>平方根函数</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const canvasRef = ref(null)
const funcExpr = ref('Math.sin(x) * Math.cos(x * 2)')
const xRange = ref([-5, 5])
const yRange = ref([-2, 2])

const presets = [
  { name: '正弦波', expr: 'Math.sin(x)' },
  { name: '余弦波', expr: 'Math.cos(x)' },
  { name: '正切', expr: 'Math.tan(x)' },
  { name: '指数', expr: 'Math.exp(x * 0.5)' },
  { name: '高斯', expr: 'Math.exp(-x * x / 2)' },
  { name: '阻尼波', expr: 'Math.sin(x * 3) * Math.exp(-Math.abs(x) * 0.3)' },
]

const loadPreset = (preset) => {
  funcExpr.value = preset.expr
  drawChart()
}

const addPreset = () => {
  drawChart()
}

const drawChart = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  
  const ctx = canvas.getContext('2d')
  const width = canvas.width
  const height = canvas.height
  
  // 清空画布
  ctx.fillStyle = '#1a1a2e'
  ctx.fillRect(0, 0, width, height)
  
  // 绘制网格
  ctx.strokeStyle = '#2d2d44'
  ctx.lineWidth = 1
  
  const xSpan = xRange.value[1] - xRange.value[0]
  const ySpan = yRange.value[1] - yRange.value[0]
  
  // 绘制网格线
  for (let i = 0; i <= 10; i++) {
    const x = (width / 10) * i
    const y = (height / 10) * i
    
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }
  
  // 绘制坐标轴
  ctx.strokeStyle = '#667eea'
  ctx.lineWidth = 2
  
  // X 轴
  const y0 = height * (0 - yRange.value[0]) / ySpan
  ctx.beginPath()
  ctx.moveTo(0, y0)
  ctx.lineTo(width, y0)
  ctx.stroke()
  
  // Y 轴
  const x0 = width * (0 - xRange.value[0]) / xSpan
  ctx.beginPath()
  ctx.moveTo(x0, 0)
  ctx.lineTo(x0, height)
  ctx.stroke()
  
  // 绘制函数
  ctx.strokeStyle = '#764ba2'
  ctx.lineWidth = 3
  ctx.beginPath()
  
  let firstPoint = true
  for (let px = 0; px < width; px++) {
    const x = xRange.value[0] + (px / width) * xSpan
    
    try {
      const f = new Function('x', `return ${funcExpr.value}`)
      const y = f(x)
      
      if (isNaN(y) || !isFinite(y)) continue
      
      const py = height - ((y - yRange.value[0]) / ySpan) * height
      
      if (firstPoint) {
        ctx.moveTo(px, py)
        firstPoint = false
      } else {
        ctx.lineTo(px, py)
      }
    } catch (e) {
      continue
    }
  }
  ctx.stroke()
}

onMounted(() => {
  drawChart()
})
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

.visualization-panel {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
}

.control-panel {
  width: 300px;
  background: #1a1a2e;
  padding: 20px;
  border-radius: 15px;
}

.control-panel .el-form-item {
  margin-bottom: 20px;
}

.presets {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #2d2d44;
}

.presets h4 {
  color: #fff;
  margin-bottom: 15px;
}

.preset-tag {
  margin: 5px;
  cursor: pointer;
}

.chart-container {
  flex: 1;
  background: #1a1a2e;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-container canvas {
  max-width: 100%;
}

.math-formulas {
  margin-top: 40px;
}

.math-formulas h2 {
  color: #fff;
  margin-bottom: 20px;
}

.formula-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.formula-card {
  background: #1a1a2e;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
}

.formula {
  color: #667eea;
  font-size: 18px;
  font-family: 'Times New Roman', serif;
  margin-bottom: 10px;
}

.formula-card p {
  color: #909399;
  font-size: 14px;
  margin: 0;
}
</style>
