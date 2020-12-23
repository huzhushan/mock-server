module.exports = {
  'GET /' (req, res) {
    res.status(200).send("欢迎访问mock-server，这是第一个接口返回的数据")
  },
}