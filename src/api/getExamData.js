import request from '@/utils/request'

// 获取考试信息
export function getExamData () {
  return request({
    url: '/exam/findAllExaminfo',
    method: 'get'
  })
}

// 删除某条考试信息(暂无)
// export function deleteExamData () {
//   return request({
//     url: '/exam/findAllExaminfo',
//     method: 'get'
//   })
// }

// 添加某条考试信息
export function addExamData (parems) {
  return request({
    url: '/exam/insertExaminfo',
    method: 'post',
    params: parems
  })
}

// 按考试名称查询考试信息

export function findExamDataByName (parems) {
  return request({
    url: '/exam/findExaminfoByExamnameAndExamGrade',
    method: 'get',
    params: parems
  })
}
