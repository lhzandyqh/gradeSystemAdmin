<template>
  <div class="container">
<!--    <h1>这是成绩信息管理界面</h1>-->
    <el-card class="box-card">
      <el-row :gutter="20" class="functioncontanier">
        <el-col :span="2">
          <span style="font-weight: bold;font-size: 18px;margin-top: 20px">成绩类型</span>
        </el-col>
        <el-col :span="3">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" plain>更新显示</el-button>
        </el-col>
        <el-col :span="3">
          <upload-exam-data></upload-exam-data>
        </el-col>
        <el-col :span="1">
          <el-button type="info" plain>导出成绩</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 20px">
        <div class="innercontainer">
          <el-row style="padding-top: 20px">
            <el-col :span="4">
              <el-input v-model="input" placeholder="请输入考试名称"></el-input>
            </el-col>
            <el-col :span="4">
              <el-button type="success" plain>按考试名称查询</el-button>
            </el-col>
            <el-col :span="4">
              <el-input v-model="input" placeholder="请输入考试年级"></el-input>
            </el-col>
            <el-col :span="4">
              <el-button type="success" plain>按考试编号查询</el-button>
            </el-col>
            <el-col :span="4">
              <el-input v-model="input" placeholder="请输入考试姓名"></el-input>
            </el-col>
            <el-col :span="4">
              <el-button type="success" plain>按考试姓名查询</el-button>
            </el-col>
          </el-row>
          <el-row style="padding-top: 20px">
            <grade-information-table style="width: 99%"></grade-information-table>
          </el-row>
        </div>
      </el-row>
      <el-row style="padding-top: 20px">
        <div class="buttoncontainer">
          <el-button type="warning" plain>更新总分</el-button>
          <el-button type="warning" plain>更新班排名</el-button>
          <el-button type="warning" plain>更新校排名</el-button>
        </div>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import gradeInformationTable from '@/components/tables/gradeInformationTable'
import uploadExamData from '@/components/upload/uploadExamData'
export default {
  name: 'gradeInformation',
  components: { gradeInformationTable, uploadExamData },
  data () {
    return {
      options: [{
        value: '选项1',
        label: '原始分'
      }, {
        value: '选项2',
        label: '等级分'
      }],
      value: ''
    }
  }
}
</script>

<style scoped>
  .box-card {
    width: 100%;
  }
  .buttoncontainer{
    text-align: center;
  }
  .innercontainer{
    border: 1px solid #efefef;
    width: 100%;
    height: 100%;
    padding-bottom: 20px;
    padding-right: 10px;
    text-align: center;
    margin-right: 20px;
    padding: 10px;

  }
</style>
