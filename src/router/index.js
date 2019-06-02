import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import homePage from '@/views/homePage'
import examInformation from '@/views/examInformation'
import gradeInformation from '@/views/gradeInformation'
import objectScoreSetting from '@/views/objectScoreSetting'
import examSchemeSetting from '@/views/scoreSettingUnder/examSchemeSetting'
import schemeSetting from '@/views/scoreSettingUnder/schemeSetting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage,
      redirect: '/examInformation',
      children: [
        {
          path: '/examInformation',
          component: examInformation
        }, {
          path: '/gradeInformation',
          component: gradeInformation
        }, {
          path: '/objectScoreSetting',
          component: objectScoreSetting,
          redirect: '/objectScoreSetting/schemeSetting',
          children: [
            {
              path: '/objectScoreSetting/schemeSetting',
              component: schemeSetting
            }, {
              path: '/objectScoreSetting/examSchemeSetting',
              component: examSchemeSetting
            }]
        }
      ]
    }
  ]
})
