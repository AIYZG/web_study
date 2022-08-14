const http = require('http')
const server = http.createServer((req,res) => {
    const method = req.method;
    if(method === 'POST'){
        let postData = '';
        req.on('data',chunk => {
            postData += chunk.toString();
            // console.log(postData,'postData');
        })

        req.on('end',()=> {
            console.log(postData,'11');
            res.end('数据请求完成11')
        })
    }
})

server.listen(8000,()=>{
    console.log('8000')
})