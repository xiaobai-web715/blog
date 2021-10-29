import React , {useRef , useEffect}  from 'react'
import config from '../../assets/js/config/config'
import Css from '../../assets/css/learn/introduction.css'

const Introduction = (props) => {
    const data = [
        {title : '1'},
        {title : '23'},
        {title : '25'},
        {title : '26'},
        {title : '27'},
        {title : '88'},
        {title : '1'},
        {title : '23'},
        {title : '25'},
    ]
    const dataTarget = [
        {title : '淘宝' , url : 'home/learn/HC/1'},
        {title : '京东' , url : 'home/learn/HC/1'},
        {title : '58同城' , url : 'home/learn/HC/1'},
        {title : '轮播图' , url : 'home/learn/JS/1'},
        {title : '贪吃蛇' , url : 'home/learn/JS/2'},
        {title : '数据可视化' , url : 'home/learn/JS/3'},
        {title : '京东_react' , url : 'home/learn/React/1'},
        {title : '博客' , url : 'home/learn/React/2'},
    ]
    const ul = useRef(null)
    const ulTarget = useRef(null)
    const timerInterval = useRef(null)
    const timerTimeout = useRef(null)
    useEffect(() => {
        let count = 0;
        let li = ul.current.getElementsByTagName('li')
        timerInterval.current = setInterval(() => {
            //一个可视界面展示3张，所以最后面要跟上重复的前三张图片,所以count从1到5会递减到不重复的图片，当变成6的时候出现的更在后面的重复的前三张图片，然后if提交语句里面的值会是true，然后添加一个2秒的延时执行函数，函数内部会执行将ul的定位瞬间定位到left:0这个位置，然后count计数变成0
            //至此位置一轮结束，然后定时函数继续执行重复上述过程。
            count++;
            ul.current.style.transition = 2 + 's';
            ul.current.style.left = 0 - 470*count + 'px';
            if(count === li.length - 3){
                timerTimeout.current = setTimeout(() => {
                    count = 0
                    ul.current.style.left = 0;
                    ul.current.style.transition = 0 + 's';
                } , 2000)
            }
        } , 5000)
        return () => {
            clearInterval(timerInterval.current)
            clearTimeout(timerTimeout.current)
        }
    } , [])
    //点击图片跳转页面
    const pushPage = (url , title) => {
        //拼接一个图片名字,好在页面动态替换图片
        props.history.push(config.path + url + `?title=${title}`)
    }
    return (
        <div className={Css['page']}>
            <div className={Css['title']}>我的学习历程</div>
            <div className={Css['image-wrap']}>
                <ul ref={ul}>
                    {
                        data.length > 0 ?
                        data.map((item , index) => {
                            return (
                                <li key={index}><img src={require(`../../assets/image/introduction/${item.title}.jpg`).default} alt={item.title}></img></li>
                            )
                        }):''
                    }
                </ul>
            </div>
            <div className={Css['title']}>搞错了,再来</div>
            <div className={Css['image-wrap'] + ' ' + Css['target']}>
                <ul ref={ulTarget} className={Css['target']}>
                    {
                        dataTarget.length > 0 ?
                        dataTarget.map((item , index) => {
                            return (
                                <li key={index} className={Css['target']} style={{'--i' : index}} onClick={pushPage.bind(null , item.url , item.title)}><img className={Css['target']} src={require(`../../assets/image/introduction/learn/${item.title}.jpg`).default} alt={item.title}></img></li>
                            )
                        }):''
                    }
                </ul>
            </div>
        </div>
    )
}

export default Introduction
