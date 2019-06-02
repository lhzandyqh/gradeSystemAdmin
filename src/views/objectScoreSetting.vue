<template>
  <div class="container">
    <el-card class="box-card">
      <div class="contentcontainer">
        <el-row :gutter="20">
          <el-col :span="4">
            <score-setting-navigation></score-setting-navigation>
          </el-col>
          <el-col :span="20">
            <router-view></router-view>
          </el-col>
        </el-row>
      </div>
<!--      <el-aside>-->
<!--        <el-row class="navigationcontainer">-->
<!--          <el-col :span="24">-->
<!--            <score-setting-navigation></score-setting-navigation>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </el-aside>-->
<!--      <el-main class="functioncontainer">-->
<!--        <router-view></router-view>-->
<!--      </el-main>-->
    </el-card>
  </div>
</template>

<script>
import scoreSettingNavigation from '@/components/navigationbar/scoreSettingNavigation'
export default {
  components: { scoreSettingNavigation },
  name: 'objectScoreSetting'
}
</script>

<style scoped>
  .box-card {
    width: 100%;
  }

</style>
