const Mock = require('mockjs');
let target = null,
    data = [];
target = Mock.mock('/home/learn/JS/3' , 'get' , () => {
    return Mock.mock(JSON.stringify({
        status : 200,
        data,
    }))
})
export default target