const Mock = require('mockjs')

let getApiData = (req) => {
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
'GET /api4/:id' (req, res) {
  console.log(req.params.id);
  res.status(200).json(getApiData(req))
  }
}