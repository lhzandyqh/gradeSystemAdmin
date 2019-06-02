<template>
  <div class="container">
    <el-table
      :data="examSchemeData"
      border
      style="width: 100%">
      <el-table-column
        align="center"
        label="序号"
        prop="Id"
        width="60"/>
      <el-table-column
        align="center"
        label="考试名称"
        prop="examName"
        width="150"/>
      <el-table-column
        align="center"
        label="考试日期"
        width="150">
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span style="margin-left: 10px">{{ scope.row.examDate }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="方案类型"
        prop="schameName"
        width="100"/>
      <el-table-column
        align="center"
        label="语文"
        prop="yuwen"
        width="78"/>
      <el-table-column
        align="center"
        label="数学"
        prop="shuxue"
        width="85"/>
      <el-table-column
        align="center"
        label="英语"
        prop="yingyu"
        width="82"/>
      <el-table-column
        align="center"
        label="物理"
        prop="wuli"
        width="82"/>
      <el-table-column
        align="center"
        label="化学"
        prop="huaxue"
        width="82"/>
      <el-table-column
        align="center"
        label="生物"
        prop="shengwu"
        width="82"/>
      <el-table-column
        align="center"
        label="政治"
        prop="zhengzhi"
        width="82"/>
      <el-table-column
        align="center"
        label="历史"
        prop="lishi"
        width="82"/>
      <el-table-column
        align="center"
        label="地理"
        prop="dili"/>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'examScoreSchemeTable',
  props: {
    examSchemeData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
