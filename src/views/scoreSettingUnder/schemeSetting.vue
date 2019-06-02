<template>
  <div class="container">
    <el-row>
      <span style="font-weight: bold;color: #19c237;font-size: 20px">─分值方案表─</span>
    </el-row>
    <el-row>
      <div class="buttoncontainer">
        <el-button type="primary"  v-on:click="updateTableData" plain>更新表格</el-button>
        <el-button type="success"  v-on:click="add" plain>添加方案</el-button>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <score-scheme-table :scheme-data="schemeData"></score-scheme-table>
    </el-row>
    <el-dialog :visible.sync="addSchemeFormVisible" title="添加分值方案">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="方案名称">
          <el-input v-model="editForm.schemaname" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="语文满分值">
          <el-input v-model="editForm.yuwen" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="数学满分值">
          <el-input v-model="editForm.shuxue" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="英语满分值">
          <el-input v-model="editForm.yingyu" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="物理满分值">
          <el-input v-model="editForm.wuli" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="化学满分值">
          <el-input v-model="editForm.huaxue" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="生物满分值">
          <el-input v-model="editForm.shengwu" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="政治满分值">
          <el-input v-model="editForm.zhengzhi" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="历史满分值">
          <el-input v-model="editForm.lishi" autocomplete="off"/>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label-position="labelPosition" label="地理满分值">
          <el-input v-model="editForm.dili" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addSchemeFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addSchemeData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import scoreSchemeTable from '@/components/tables/scoreSchemeTable'
import { getScoreScheme, addScoreScheme } from '@/api/scoreSetting'
export default {
  name: 'schemeSetting',
  components: { scoreSchemeTable },
  mounted () {
    getScoreScheme().then(response => {
      this.schemeData = response.data.info
    })
  },
  data () {
    return {
      addSchemeFormVisible: false,
      schemeData: [],
      editForm: {
        schemaname: '',
        yuwen: '',
        shuxue: '',
        yingyu: '',
        wuli: '',
        huaxue: '',
        shengwu: '',
        zhengzhi: '',
        lishi: '',
        dili: ''
      },
      formLabelWidth: '160px'
    }
  },
  methods: {
    updateTableData () {
      getScoreScheme().then(response => {
        this.schemeData = response.data.info
      })
    },
    add () {
      this.addSchemeFormVisible = true
    },
    addSchemeData () {
      const prams = {
        schemaname: this.editForm.schemaname,
        yuwen: this.editForm.yuwen,
        shuxue: this.editForm.shuxue,
        yingyu: this.editForm.yingyu,
        wuli: this.editForm.wuli,
        huaxue: this.editForm.huaxue,
        shengwu: this.editForm.shengwu,
        zhengzhi: this.editForm.zhengzhi,
        lishi: this.editForm.lishi,
        dili: this.editForm.dili
      }
      console.log(prams.schemaname)
      if (prams.schemaname === '' || prams.yuwen === '' || prams.shuxue === '' || prams.yingyu === '' || prams.wuli === '' || prams.huaxue === '' || prams.shengwu === '' || prams.zhengzhi === '' || prams.lishi === '' || prams.dili === '') {
        this.$message({
          message: '添加信息不能为空',
          type: 'warning'
        })
      } else {
        addScoreScheme(prams).then(response => {
        })
        this.addSchemeFormVisible = false
        this.$message({
          message: '添加成功',
          type: 'success'
        })
      }
    }
  }
}
</script>

<style scoped>
  .buttoncontainer{
    float: right;
  }

</style>
