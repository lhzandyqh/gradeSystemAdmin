<template>
  <div class="container">
    <el-menu
      router
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="/objectScoreSetting/schemeSetting">
        <i class="el-icon-menu"></i>
        <span slot="title">分值模板</span>
      </el-menu-item>
      <el-menu-item index="/objectScoreSetting/examSchemeSetting">
        <i class="el-icon-setting"></i>
        <span slot="title">考试方案</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'scoreSettingNavigation'
}
</script>

<style scoped>

</style>
