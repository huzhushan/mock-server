# mock-server

基于express + mockjs的mock服务器。

## 特性

- 支持对象格式配置mock接口
- 支持mock文件模块化
- 支持跨域
- 监听文件变化自动重启服务

## 使用
### 克隆项目到本地
```js
  // ssh方式
  git clone git@github.com:huzhushan/mock-server.git
  // https方式
  git clone https://github.com/huzhushan/mock-server.git
```

### 安装依赖
```js
  npm install
  // 或者
  yarn install
```

### 启动项目
```js
  npm start
```
访问页面：http://localhost:8090，你将会看到以下内容：
```html
欢迎访问mock-server，这是第一个接口返回的数据
```
## 配置接口
- 所有的接口都在mock文件夹下配置
- 支持模块化配置
> 访问http://localhost:8090看到的是`第一个接口`返回的数据，打开mock文件夹下的`api1.js`可以看到`第一个接口的配置:`
> ```js
> module.exports = {
>   'GET /' (req, res) {
>     res.status(200).send("欢迎访问mock-server，这是第一个接口返回的数据")
>   },
> }
> ```
### 格式
```js
{
  'GET /' (req, res) {
    res.status(200).send("欢迎访问mock-server，这是第一个接口返回的数据")
  },
}
```
- 采用key:value键值对格式
- key中包含请求方法和请求地址
  ```
  'GET /'：
    `GET`是请求方法
    `GET`后面的`/`是请求地址
  ```
- value是一个回调函数，里面处理请求和响应数据
  - 回调函数接收的参数：
  - req代表request，可以访问请求传递的参数
  - res代表response，可以通过res返回数据给前端

### 配置mock随机数据
*打开mock目录下的api3.js:*
```js
const Mock = require('mockjs')

module.exports = {

  'GET /api3' (req, res) {
    res.status(200).json(Mock.mock({
      "total|10-30": 1
  }))
  }
}
```
可以看到通过Mock返回了随机数据
### 配置动态url
*打开mock目录下的api4.js*
```js
module.exports = {
'GET /api4/:id' (req, res) {
  console.log(req.params.id);
  res.status(200).json(getApiData(req))
  }
}
```
url`/api4/:id`中的`:id`就是一个动态参数

### 模块化配置
可以根据自己的需求在mock目录下创建多个js文件或文件夹

### 监听文件变化自动重启服务
修改或新增接口配置不用重启服务，服务会自动重启