class BaseModel {
    constructor(data,message) {
        //3.兼容处理
        if(typeof data === 'string'){
            this.message = data;
            data = null;
            message = null;
        }

        //1.传对象
        if(data) {
            this.data = data;
        }

        //2.字符串的情况
        if(message) {
            this.message = message;
        }
    }
}

//成功模型
class SuccessModel extends BaseModel {
    constructor(data,message){
        //继承父类
        super(data,message);
        //成功为0
        this.errno = 0
    }
}

//失败模型
class ErrorModel extends BaseModel {
    constructor(data,message){
        //继承父类
        super(data,message);
        //成功为0
        this.errno = -1
    }
}

//通过状态码就会知道请求成功还是失败
module.exports = {
    SuccessModel,
    ErrorModel
}