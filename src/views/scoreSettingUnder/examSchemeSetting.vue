<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="container">
    <el-row>
      <el-card>
        <el-row>
          <span style="font-size: 20px;font-weight: bold;color: darkgreen ">为考试设置分数方案</span>
        </el-row>
        <el-row :gutter="20" style="padding-top: 20px">
          <el-col :span="3">
            <span style="font-size: 15px;font-weight: bold">选择考试</span>
          </el-col>
          <el-col :span="6">
            <el-input
              placeholder="请输入考试名称"
              v-model="input">
            </el-input>
          </el-col>
          <el-col :span="3" offset="1">
            <span style="font-size: 15px;font-weight: bold">选择分数方案</span>
          </el-col>
          <el-col :span="4">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="2" offset="1">
            <el-button type="success" plain>设置</el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="success" plain>更新表格</el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-row>
    <el-row style="padding-top: 40px">
      <span style="font-weight: bold;color: #19c237">─考试分值方案表─</span>
    </el-row>
    <el-row style="padding-top: 20px">
      <exam-score-scheme-table :exam-scheme-data="examSchemeData"></exam-score-scheme-table>
    </el-row>
  </div>
</template>

<script>
import examScoreSchemeTable from '@/components/tables/examScoreSchemeTable'
import { getExamScoreScheme } from '@/api/scoreSetting'
export default {
  name: 'examSchemeSetting',
  components: { examScoreSchemeTable },
  mounted () {
    getExamScoreScheme().then(response => {
      this.examSchemeData = response.data.info
    })
  },
  data () {
    return {
      input: '',
      examSchemeData: [],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  }
}
</script>

<style scoped>

</style>
