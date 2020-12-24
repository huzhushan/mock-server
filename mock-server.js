const path = require("path"); //引入path模块
// const fs = require('fs'); // 引入fs模块
const requireContext = require('require-context')
const express = require('express'); //引入express模块
const bodyParser = require('body-parser'); // body-parser中间件解析post请求
const cors = require('cors')


const app = express(); //实例化express
const mockData = {}; // mock数据

// cors跨域
app.use(cors())

// www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended:true
}));


// 读取mock目录下的所有文件，组装mockData
const Files = requireContext(path.join(__dirname + '/mock'), true, /\.js$/)
Files.keys().forEach(key => {
  Object.assign(mockData, Files(key))
})

// 遍历mockData对象，
// 获取每个接口的路径(url)和方法(method)，
// 并通过express调用mock数据
for (let key in mockData) {
  let _key = key.replace(/(^\s*)|(\s*$)/g, '');
  let _method = 'get';
  let _url = _key.replace(/^(get|post|put|delete)\s+/i, function (rs,$1) {
    _method = $1.toLowerCase();
    return '';
  })
  
  app[_method](_url, mockData[key])
}


// 监听8090端口
app.listen('8090', function () {
  console.log('MOCK Server is running at http://localhost:8090')
});