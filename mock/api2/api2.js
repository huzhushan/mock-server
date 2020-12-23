module.exports = {

  [`POST /api2`] (req, res) {
    res.status(200).json({
      "api2": "我爱你中国~~"
    });
  }
};
