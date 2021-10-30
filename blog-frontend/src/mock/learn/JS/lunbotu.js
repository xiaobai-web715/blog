const Mock = require('mockjs');
let target = null,
    data = [
        {
            title : '需求',
            content : `1.实现图片无缝滚动轮播
            2.点击图片底部的圆点实现图片的跳转
            3.点击图片两侧的按钮实现左右切换图片`,
        },
        {
            title : '实现思路',
            content : `1.创建两个变量count1与count2,定时轮播通过count1来计数,并在每次执行前和count2校对数值,点击底部圆点或两边的按钮通过count2来计数
            2.滚动轮播:transition:'all 3s' => 构建动画效果
            3.无缝衔接:在最后面加一张重复的第一张,定时任务当中可以操作到最后一张,然后会添加一个定时器任务,会在特定时间内将ul的定位定位到最开始,配合着transition:'all 0s'使用,如(图1)
            4.无论是点击底部圆点还是点击左右两侧的按钮跳转,都要清除定时器任务,在执行完成之后,再重启定时器任务,如(图2)和(图3)`,
            image : ['JS/JS/定时瞬间跳转.png' , 'JS/JS/消除定时器任务.png', 'JS/JS/重启定时器任务.png']
        }
    ];
target = Mock.mock('/home/learn/JS/1' , 'get' , () => {
    return Mock.mock(JSON.stringify({
        status : 200,
        data,
    }))
})
export default target;