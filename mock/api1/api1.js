const Mock = require('mockjs')

let getApi1Data = (req) => {
  // console.log(req.query);
  return Mock.mock({
      "data|1-9": [{
          "name|5-8": /[a-zA-Z]/,
          "id|+1": 1,
          "value|0-500": 0
      }]
  })

}

module.exports = {

  [`GET /api1`] (req, res) {
    res.status(200).json(getApi1Data(req))
  }
}