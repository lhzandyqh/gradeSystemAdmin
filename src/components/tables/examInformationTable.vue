<template>
  <div class="appcontainer">
    <div class="innerContainer">
      <el-row>
        <el-table
          :data="examData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          border
          style="width: 100%">
          <el-table-column
            align="center"
            label="考试日期"
            width="200">
            <template slot-scope="scope">
              <i class="el-icon-time"/>
              <span style="margin-left: 10px">{{ scope.row.examDate }}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="考试名称"
            prop="examName"
            width="400"/>
          <el-table-column
            align="center"
            label="考试年级"
            prop="examGrade"
            width="200"/>
          <el-table-column
            align="center"
            label="考试编号"
            prop="paperId"
            width="300"/>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row class="pagination-container" style="padding-top: 20px">
        <div class="block">
          <el-pagination
            :current-page="currentPage"
            :page-sizes="[5, 8, 15, 20]"
            :page-size="10"
            :total="examData.length"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"/>
        </div>
      </el-row>
    </div>
    <el-dialog :visible.sync="dialogFormVisible" title="编辑考试信息">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="考试日期">
          <el-date-picker v-model="form.examdatetime" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatBeginTime"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="考试名称">
          <el-input v-model="form.examname" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="考试年级">
          <el-input v-model="form.examgrade" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="考试编号">
          <el-input v-model="form.examnumber" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="update">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="addDialogFormVisible" title="添加考试信息">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="考试日期">
          <el-date-picker v-model="editForm.examdatetime" value-format="yyyy-MM-dd" format="yyyy-MM-dd" @change="formatBeginTime"/>
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
import { addExamData } from '@/api/getExamData'
export default {
  name: 'TestTable',
  props: {
    examData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      addDialogFormVisible: false,
      dialogFormVisible: false,
      currentPage: 1, // 初始页
      pagesize: 5, //    每页的数据
      form: {
        examname: '',
        examgrade: '',
        examnumber: '',
        examdatetime: ''
      },
      editForm: {
        examname: '',
        examgrade: '',
        examnumber: '',
        examdatetime: '',
        id: ''
      },
      formLabelWidth: '160px'
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
      addExamData(prams).then(response => {
        if (response.data.code === 200) {
          console.log('添加成功')
        } else {
          console.log('添加失败')
        }
      })
      this.addDialogFormVisible = false
    },
    handleEditTwo (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    // 点击编辑
    handleEdit (index, row) {
      // this.form = this.tableData
      // this.currentIndex = index
      this.dialogFormVisible = true
      this.editForm = Object.assign({}, row)
    },

    // 点击关闭dialog
    handleClose (done) {
      /* done();
              location.reload(); */
      this.editFormVisible = false
    },

    // 点击取消
    handleCancel (formName) {
      this.editFormVisible = false
    },
    /* eslint-disable */
      update(index, row) {
        this.form.begindate=this.form.begindate.toString()
        this.form.enddate=this.form.enddate.toString()
        // this.tableData.push(this.form)
        this.tableData.splice(index, 1)
        this.tableData.push(this.form)
        // this.tableData[0] = this.form
        this.dialogFormVisible = false
        this.dialogFormVisible = false
        console.log(this.form)
        console.log(this.tableData[0])
        console.log(this.tableData)
      },
      formatBeginTime(time){
        this.form.begindate = time
      },
      formatEndTime(time){
        this.form.enddate = time
      },
    handleSizeChange: function(size) {
      this.pagesize = size
      console.log(this.pagesize) // 每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage) // 点击第几页
      // this.articleList = this.examData.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize)
      // console.log(this.articleList)
    }
    }
  }
</script>

<style scoped>
  .innerContainer{
    border: 1px solid #efefef;
    padding: 10px;
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
    text-align: center;
  }
  .buttonContainer{
    padding-top: 10px;
    text-align: center;
  }
  .innerContainer{
    text-align: center;
  }

</style>
