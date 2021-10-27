const Mock = require('mockjs')
let target = null;
let data = [
    {
        title : '块级/行级/行级块元素',
        content : '块级元素:div、ul、li、h系列、p、table、tr、form\n行级元素:span、a、strong、i\n行级块元素:img、input、td、button',
    },
    {
        title : 'src与href的不同',
        content:`href标识超文本引用,用在link和a等元素上，href是引用和页面的关联，是在当前元素和引用资源之间建立联系。\nsrc是source的缩写,表示替换当前元素，用在img、script、iframe上，在请求src资源时会将其指向的资源下载并应用到当前文档中，例如js脚本、img图片和frame等元素。`,
    },
    {
        title:'浮动与清除浮动',
        content:`当元素设置了浮动（float:left/right）之后，元素就会脱离正常文档流。所有产生了浮动流的元素，块级元素看不到它们（图1）与（图2）,父级元素计算高度的时候会忽视掉浮动的子元素的高度（所以这就是为啥浮动与清除浮动搭配使用），块级兄弟元素会占据浮动元素的位置。
        父元素是块级元素，要想计算高度的时候包含浮动的子元素，就要清除浮动（图3）：
        1.在浮动元素末尾添加一个空元素
        2.使用伪元素（::after）DOM::after{content:''；display:'block';clear:'both'}
        3.使父元素变成bfc元素，设置position:absolute;float:left/right;display:inline-block;overflow:hidden;这四个属性中的一个。
        兄弟元素是块级元素，要想看到产生了浮动的元素的话,就要变成bfc元素（图4）：
        1.position:absolute;用着很奇怪
        2.float:left/right;
        3.display"inline-block;
        4.overflow:hidden;`,
        image : ['HC/CSS/浮动1.jpg' , 'HC/CSS/浮动2.jpg' , 'HC/CSS/清除浮动1.jpg' , 'HC/CSS/清除浮动2.jpg'],
    },
    {
        title:'margin塌陷及解决方法',
        content:`子元素的margin-top小于或等于父元素的margin-top时，子元素的margin-top从视觉上来看并未产生作用（图1）;当子元素的margin-top大于父元素的margin-top时，父元素的margin-top看起来像是被子元素的margin-top所取代了，并且子元素与父元素的相对位置还是没有发生变化（图2）。
        解决办法也是触发元素的bfc,不过要视情况使用:
        1.position:absolute;用着很奇怪
        2.float:left/right;
        3.display:inline-block;
        4.overflow:hidden;`,
        image:['HC/CSS/margin塌陷1.jpg' , 'HC/CSS/margin塌陷2.jpg']
    }
]
target = Mock.mock('/home/learn/HC/1' , 'get' , () => {
    return Mock.mock(JSON.stringify({
        status : 200,
        data,
    }))
})
export default target;