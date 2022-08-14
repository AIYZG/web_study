const getList = (name,keyword) => {
    //链接数据库
    return [
        {
            id:1,
            title:'www',
            text:'赶紧学习node',
            name:'gf'
        },
        {
            id:2,
            title:'yzg',
            text:'赶紧学习架构',
            name:'yzg'
        }
    ]
}

module.exports = {
    getList
}