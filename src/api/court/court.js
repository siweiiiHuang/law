import request from '@/utils/request'

// 查询开庭管理列表
export function listCourt(query) {
  return request({
    url: '/court/court/pcList',
    method: 'get',
    params: query
  })
}

// 查询开庭管理详细
export function getCourt(id) {
  return request({
    url: '/court/court/' + id,
    method: 'get'
  })
}

// 新增开庭管理
export function addCourt(data) {
  return request({
    url: '/court/court',
    method: 'post',
    data: data
  })
}

// 修改开庭管理
export function updateCourt(data) {
  return request({
    url: '/court/court',
    method: 'put',
    data: data
  })
}

// 删除开庭管理
export function delCourt(id) {
  return request({
    url: '/court/court/' + id,
    method: 'delete'
  })
}
