import request from '@/utils/request'

// 获取分值方案
export function getScoreScheme () {
  return request({
    url: '/exam/findallscheme',
    method: 'get'
  })
}

// 添加分值方案
export function addScoreScheme (parems) {
  return request({
    url: '/exam/addSubjectSchema',
    method: 'post',
    params: parems
  })
}

// 删除分值方案
export function deleteScoreScheme (parems) {
  return request({
    url: '/exam/deleteSubjectSchema',
    method: 'post',
    params: parems
  })
}

// 获取考试分值方案
export function getExamScoreScheme () {
  return request({
    url: '/exam/findAllExamSchema',
    method: 'post'
  })
}
