const Mock = require('mockjs')

let getApi3Data = (req) => {
  // console.log(req.query);
  return Mock.mock({
      "total|10-30": 1
  })

}

module.exports = {

  [`GET /api3`] (req, res) {
    res.status(200).json(getApi3Data(req))
  }
}