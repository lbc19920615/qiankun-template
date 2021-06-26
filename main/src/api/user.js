
import request from '@/utils/request'

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const userInfo = (type) => {
  return {
    roles: [type],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  }
}

export function login (data) {
  // return request({
  //   url: '/vue-element-admin/user/login',
  //   method: 'post',
  //   data
  // })
  return Promise.resolve({
    data: {
      ...userInfo('admin'),
      token: tokens.admin.token
    }
  })
}

export function getInfo (token) {
  // return request({
  //   url: '/vue-element-admin/user/info',
  //   method: 'get',
  //   params: { token }
  // })
  return Promise.resolve({
    data: {
      ...userInfo('admin')
    }
  })
}

export function logout () {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
