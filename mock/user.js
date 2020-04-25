const tokens = {
    testuser:{
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6IndpbnRlciIsImV4cCI6MTU3ODM2NTIxOCwiZW1haWwiOiIxMTExMTExMTFAcXEuY29tIn0.y7G3yJIFfQjKpj70bZWNITDEJDAX2gPTciX-kkVeQs4'
    }
}

const users = {
    'admin-token': {
      roles: ['admin'],
      introduction: 'I am a super administrator',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'Super Admin'
    },
    'editor-token': {
      roles: ['editor'],
      introduction: 'I am an editor',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'Normal Editor'
    }
  }

export default [
    //用户登陆模拟
    {
        url: '/v1/login/api-token-auth/',
        type:'post',
        response: config =>{
            const { username } = config.body
            const token = tokens[username]

            //mock error
            if (!token) {
                return {
                    code: 40000,
                    message: '账号或者密码不正确.'
                }
            }

            return {
                code: 20000,
                data: token
              }
        }
    },
    //用户退出模拟
    {
        url: '/v1/logout/api-token-auth/',
        type:'post',
        response: () =>{
            return {
                code: 20000,
                data: 'success'
              }
        }
    },
    //获取用户信息
    {
        url: '/v1/user/info/',
        type:'get',
        response: () =>{
            return {
                code: 20000,
                data: users['admin-token']
              }
        }
    }
]