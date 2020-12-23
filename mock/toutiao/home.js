const Mock = require('mockjs')

module.exports = {
  // 获取频道列表
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
