const Mock = require('mockjs')

module.exports = {

  'GET /api3' (req, res) {
    res.status(200).json(Mock.mock({
      "total|10-30": 1
  }))
  }
}