<template>
  <div class="appcontainer">
    <el-container class="con_section">
      <el-header class="header">
        <span style="font-size: 20px;font-weight: bold">中关村中学成绩后台管理系统</span>
      </el-header>
      <el-main class="main">
        <el-row>
          <home-page-navigation></home-page-navigation>
        </el-row>
        <el-row>
          <router-view></router-view>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import homePageNavigation from '@/components/navigationbar/homePageNavigation'
export default {
  // eslint-disable-next-line standard/object-curly-even-spacing
  components: { homePageNavigation},
  name: 'homePage'
}
</script>

<style scoped>
  .con_section{
    position: absolute;
    top: 0px;
    bottom: 0px;
    left:0px;
    width:100%;
  }
  .header {
    line-height: 60px;
    background: rgba(76, 191, 65, 0.84);
    color: #fff;
    float: left;
  }
  .main{
    background-color: honeydew;
    text-align: center;
  }
</style>
