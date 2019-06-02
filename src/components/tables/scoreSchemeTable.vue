<template>
  <div class="tablecontainer">
    <el-table
      :data="schemeData"
      border
      style="width: 100%">
      <el-table-column
        align="center"
        label="序号"
        prop="id"
        width="60"/>
      <el-table-column
        align="center"
        label="方案类型"
        prop="schemaname"
        width="100"/>
      <el-table-column
        align="center"
        label="语文"
        prop="yuwen"
        width="80"/>
      <el-table-column
        align="center"
        label="数学"
        prop="shuxue"
        width="80"/>
      <el-table-column
        align="center"
        label="英语"
        prop="yingyu"
        width="80"/>
      <el-table-column
        align="center"
        label="物理"
        prop="wuli"
        width="80"/>
      <el-table-column
        align="center"
        label="化学"
        prop="huaxue"
        width="80"/>
      <el-table-column
        align="center"
        label="生物"
        prop="shengwu"
        width="80"/>
      <el-table-column
        align="center"
        label="政治"
        prop="zhengzhi"
        width="80"/>
      <el-table-column
        align="center"
        label="历史"
        prop="lishi"
        width="80"/>
      <el-table-column
        align="center"
        label="地理"
        prop="dili"
        width="80"/>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {deleteScoreScheme} from '@/api/scoreSetting'
export default {
  name: 'scoreSchemeTable',
  props: {
    schemeData: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleDelete (index, row) {
      const prams = {
        id: row
      }
      console.log(prams.id)
      deleteScoreScheme(prams).then(response => {
        if (response.data.code === 200) {
          console.log(response.data.code)
          console.log('删除成功')
        } else {
          console.log('删除成功')
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
