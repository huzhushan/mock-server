const Mock = require('mockjs')

module.exports = {
  // 登录
  [`POST /app/v1_0/authorizations`] (req, res) {
    res.status(200).json({
      "status": 200,
      "data": {
        token: "laskdjfklsajfldsakjflsdaf",
        refresh_token: "1woejflksdflfjlkasjdflsnf"
      }
    });
  },
  // 获取用户信息
  [`GET /app/v1_0/user`] (req, res) {
    res.status(200).json(Mock.mock({
      data: {
        "id|1-9999": 1,
        "name": "@cname()",	
        "photo": "@image('64x64', '#fb0a2a')",		
        "is_media|1": [0,1],
        "intro": "@cparagraph()",		
        "certi": "@paragraph()",		
        "art_count|1-9999": 1,
        "follow_count|1-9999": 1,	
        "fans_count|1-9999": 1,		
        "like_count|1-9999": 1,
      }
    }))
  },

  // 获取用户频道列表
  [`GET /app/v1_0/user/channels`] (req, res) {
    res.status(200).json(Mock.mock({
      data: {
        "channels|1-20": [
          {
            "id|+1": 100,
            "name": "@cword(2, 4)"
          }
        ]
      }
    }))
  }
};
