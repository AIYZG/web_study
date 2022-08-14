const {SuccessModel} = require('../model/responseModel')
const {getList} = require('../controllers/blog')
const handlerBlogRoute = (req,res) => {
    //定义处理路由逻辑的相关模块
    const method = req.method;
    console.log(method,"method")
    console.log(req.path,"req.path")
    // const url = req.url;
    // const path = url.split('?')[0]

    //new

    if(method === 'GET' && req.path === '/api/blog/list'){
        console.log('=====')
        const name = req.query.name || '';
        const keyword = req.query.keyword || '';
        console.log(name,"name")

        const listData = getList(name,keyword); //数据库连接
        //使返回的数据格式更加规范
        return new SuccessModel(listData)
    }

    if(method === 'POST' && req.path === '/api/blog/new'){
        return {
            message:'新建博客'
        }
    }
}

module.exports = handlerBlogRoute