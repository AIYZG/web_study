//入口文件
//安装该插件
//cnpm install nodemon -D


const serverHandler = require('../app.js')

//搭建服务器环境
const http = require('http')

const PORT = 8000

//回调函数独立出来
const server = http.createServer(serverHandler)

server.listen(PORT, () => {
    console.log('server running at 8000')
})