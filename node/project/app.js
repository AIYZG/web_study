//业务层
const handlerBlogRoute = require('./src/routes/blog')
const queryString = require('querystring')

const  serverHandler = (req,res) => {
    //json
    res.setHeader('content-Type','application/json')

    const url = req.url;
    req.path = url.split('?')[0];
    req.query = queryString.parse(url.split('?')[1])
    const blogData =  handlerBlogRoute(req,res)
    console.log(blogData,'blogData')


    if(blogData){
        res.end(
            JSON.stringify(blogData)
        );
        return;
    }
    //异常反馈
    res.writeHead(404,{'Content-Type':'text/plain'})
    res.write('404 Not Found !!!')
    res.end()
    // const responseData = {
    //     name:'aaa',
    //     age:16,
    //     id:1
    // }
    // res.end(
    //     JSON.stringify(responseData)
    // )
}


module.exports = serverHandler