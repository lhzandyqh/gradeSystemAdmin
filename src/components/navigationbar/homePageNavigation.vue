<template>
  <div class="container">
    <el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/examInformation">考试信息管理</el-menu-item>
      <el-menu-item index="/objectScoreSetting">科目满分值分值设定</el-menu-item>
      <el-menu-item index="/gradeInformation">成绩信息管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'homePageNavigation',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>
