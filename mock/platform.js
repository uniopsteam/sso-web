export default [
    //查询所有平台模拟
    {
        url: '/v1/home/platforms/',
        type:'post',
        response: () =>{
            return  {
                "code": 20000,
                "data": {
                    "platforms": [
                        {
                            "name": "系统运维组",
                            "platforms": [
                                {
                                    "name": "cmdb",
                                    "icon_url": "http://www.jinkun.cn/uploads/allimg/140818/140AGA0-1.png",
                                    "description": "cmdb配置管理，运维监控等",
                                    "redirect_url": "http://127.0.0.1:8003/api/v1/third_login/sso_login/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6IndpbnRlciIsImV4cCI6MTU3ODM2NjU2NiwiZW1haWwiOiIxMTExMTExMTFAcXEuY29tIn0.VwvsrBgKSE-h4TxaHg4f1Fh5ETPy3VzpOVkt1Yi6ySA"
                                }
                            ]
                        }
                    ]
                }
            }
        }
    },
]