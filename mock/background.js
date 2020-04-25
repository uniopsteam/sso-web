export default [
    //查询所有平台模拟
    {
        url: '/v1/home/backgrounds/',
        type:'post',
        response: () =>{
            return  {
                "code": 20000,
                "data": {
                    "items": [
                        {
                            "id": 1,
                            "name": "春光明媚,第一张图片",
                            "picture_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578986686411&di=2a16994b86eb1f0174c3c79981fffb01&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1212%2F06%2Fc0%2F16390940_1354774093291.jpg",
                            "description": "嘻嘻嘻嘻嘻嘻嘻嘻春光明媚",
                            "detail_url": "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87%20%E6%98%A5%E5%85%89%E6%97%A0%E9%99%90&hs=2&pn=0&spn=0&di=70840&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=2197557463%2C3087638647&os=24346886",
                            "status": 1
                        },
                        {
                            "id": 2,
                            "name": "夏天真好，第二章图片",
                            "picture_url": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2197557463,3087638647&fm=26&gp=0.jpg",
                            "description": "吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼春光明媚",
                            "status": 1
                        }
                    ]
                }
            }
        }
    },
]