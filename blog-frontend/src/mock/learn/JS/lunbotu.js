const Mock = require('mockjs');
let target = null,
    data = [
        {
            title : '需求',
            content : `1.实现图片无缝滚动轮播
            2.点击图片底部的圆点实现图片的跳转
            3.点击图片两侧的按钮实现左右切换图片`,
        },
    ];
target = Mock.mock('/home/learn/JS/1' , 'get' , () => {
    return Mock.mock(JSON.stringify({
        status : 200,
        data,
    }))
})
export default target;