const Mock = require('mockjs')

module.exports = {
  // 登录
  [`POST /app/v1_0/authorizations`] (req, res) {
    res.status(200).json(Mock.mock({
      "status": 200,
      "data": {
        token: "@word(30, 60)",
        refresh_token: "@word(30, 60)"
      }
    }));
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
  }
};
