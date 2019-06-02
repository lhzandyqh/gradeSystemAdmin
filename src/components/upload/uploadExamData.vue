<template>
  <div>
    <el-button type="info" plain @click="excelImportShow = true">导入成绩<i class="el-icon-upload el-icon--right"></i></el-button>
    <el-dialog title="导入文件" :visible.sync="excelImportShow">
      <el-upload
        class="upload-demo"
        drag
        :before-upload="beforeUpload"
        action="http://58.119.112.12:11008/importinit/batch_add_initscore"
        :on-preview="handlePreview"
        :on-remove="handleRemove">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传xls/xlsx文件</div>
        <!--<i class="el-icon-upload"></i>-->
        <!--<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
        <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
        <!--<el-button slot="trigger" size="small" type="primary">选取文件</el-button>-->

        <!--<div slot="tip" class="el-upload__tip">只能上传excel文件</div>-->

        <div slot="tip" class="el-upload-list__item-name">{{ this.fileName }}</div>

      </el-upload>
      <span slot="footer" class="dialog-footer">
              <el-button @click="excelImportShow = false">取消</el-button>
              <el-button type="primary" @click="submitUpload()">提交</el-button>
            </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      excelImportShow: false,
      fileName: '',
      files: ''
    }
  },
  methods: {
    beforeUpload (file) {
      console.log(file, '文件')

      this.files = file

      const extension = file.name.split('.')[1] === 'xls'

      const extension2 = file.name.split('.')[1] === 'xlsx'

      // const isLt2M = file.size / 1024 / 1024 < 5(校验上传文件的大小)

      if (!extension && !extension2) {
        this.$message.warning('上传文档只能是 xls、xlsx格式!')

        return
      }

      console.log(file.name)

      this.fileName = file.name

      return false // 返回false不会自动上传
    },
    handlePreview (file) {
      console.log(file, '文件')

      // this.files = file;
      //
      // const extension = file.name.split('.')[1] === 'xls'
      //
      // const extension2 = file.name.split('.')[1] === 'xlsx'
      //
      // // const isLt2M = file.size / 1024 / 1024 < 5(校验上传文件的大小)
      //
      // if (!extension && !extension2) {
      //
      //   this.$message.warning('上传文档只能是 xls、xlsx格式!')
      //
      //   return
      //
      // }
      //
      // console.log(file.name);
      //
      // this.fileName = file.name;
      //
      // return false // 返回false不会自动上传
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    submitUpload () {
      // eslint-disable-next-line camelcase
      var url_key = 'http://58.119.112.12:11008/importinit/batch_add_initscore'
      // var url_key ='http://58.119.112.13:11001/batch_add_asset';
      if (this.fileName === '') {
        this.$message.warning('请选择要上传的文件！')

        return false
      }

      let fileFormData = new FormData()

      fileFormData.append('file', this.files)// filename是键，file是值，就是要传的文件，test.zip是要传的文件名

      // importBdDeptdoc(fileFormData).then((res) => {
      //
      //   this.addLoading = false;
      //
      //   this.$message({
      //
      //     message: '导入成功',
      //
      //     type: 'success'
      //
      //   });
      //
      //   this.getUsers();//重新请求一次页面数据
      //
      // })
      this.$axios.post(url_key, fileFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        // this.addLoading = false;
        if (res.errno === 200) {
          this.$message({
            message: '导入成功',
            type: 'success'
          })
          this.reload()
        } else {
          this.$message({
            message: '导入数据格式不匹配',
            type: 'warning'
          })
        }
      })
    },
    // 在整个列表的数据中过滤导出自己需要的数据
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
}
</script>

<style scoped>

</style>
