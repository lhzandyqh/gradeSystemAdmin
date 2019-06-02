<template>
  <div class="container">
<!--    <h1>这是考试信息管理界面</h1>-->
    <el-card class="box-card">
      <el-row :gutter="20" class="functioncontanier">
        <el-col :span="4">
          <el-input v-model="inputName" placeholder="请输入考试名称"></el-input>
        </el-col>
        <el-col :span="3">
          <el-button type="success" @click="findExamDataByAny" plain>按考试名称查询</el-button>
        </el-col>
        <el-col :span="4">
          <el-input v-model="inputGrade" placeholder="请输入考试年级"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="success" @click="findExamDataByAny" plain>按考试年级查询</el-button>
        </el-col>
        <el-col :span="7">
          <el-button type="primary" plain @click="add">添加</el-button>
          <el-button type="warning" @click="updataDisplay" plain>更新列表</el-button>
        </el-col>
      </el-row>
      <el-row style="padding-top: 20px">
        <exam-information-table :exam-data="examData"></exam-information-table>
      </el-row>
    </el-card>
    <el-dialog :visible.sync="addDialogFormVisible" title="添加考试信息">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="考试日期">
          <el-date-picker v-model="editForm.examdatetime" value-format="yyyy-MM-dd" format="yyyy-MM-dd"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="考试名称">
          <el-input v-model="editForm.examname" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="考试年级">
          <el-input v-model="editForm.examgrade" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="考试编号">
          <el-input v-model="editForm.examnumber" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addExam">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import examInformationTable from '@/components/tables/examInformationTable'
import { getExamData, addExamData, findExamDataByName } from '@/api/getExamData'
export default {
  name: 'examInformation',
  data () {
    return {
      examData: [],
      addDialogFormVisible: false,
      editForm: {
        examname: '',
        examgrade: '',
        examnumber: '',
        examdatetime: '',
        id: ''
      },
      formLabelWidth: '160px',
      inputName: '',
      inputGrade: ''
    }
  },
  methods: {
    addExam () {
      const prams = {
        examdatetime: this.editForm.examdatetime,
        examname: this.editForm.examname,
        examgrade: this.editForm.examgrade,
        examnumber: this.editForm.examnumber
      }
      console.log(prams.examdatetime)
      if (prams.examdatetime === '' || prams.examname === '' || prams.examgrade === '' || prams.examnumber === '') {
        this.$message({
          message: '添加信息不能为空',
          type: 'warning'
        })
      } else {
        addExamData(prams).then(response => {
        })
        this.addDialogFormVisible = false
        this.$message({
          message: '添加成功',
          type: 'success'
        })
      }
    },
    add () {
      this.addDialogFormVisible = true
    },
    updataDisplay () {
      getExamData().then(response => {
        this.examData = response.data.info
      })
    },
    findExamDataByAny () {
      const prams = {
        examname: this.inputName,
        examgrade: this.inputGrade
      }
      findExamDataByName(prams).then(response => {
        this.examData = response.data.info
        console.log('数据替换完成')
      })
    }
  },
  components: { examInformationTable },
  mounted () {
    getExamData().then(response => {
      this.examData = response.data.info
    })
  }
}
</script>

<style scoped>
  .box-card {
    width: 100%;
  }
  .container{
  }
</style>
