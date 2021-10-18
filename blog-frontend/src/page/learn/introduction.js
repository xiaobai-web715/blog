import React , {useRef , useEffect}  from 'react'
import Css from '../../assets/css/learn/introduction.css'

const Introduction = () => {
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
    const ul = useRef(null)
    const timer = useRef(null)
    useEffect(() => {
        let count = 0;
        let li = ul.current.getElementsByTagName('li')
        timer.current = setInterval(() => {
            //一个可视界面展示3张，所以最后面要跟上重复的前三张图片,所以count从1到5会递减到不重复的图片，当变成6的时候出现的更在后面的重复的前三张图片，然后if提交语句里面的值会是true，然后添加一个2秒的延时执行函数，函数内部会执行将ul的定位瞬间定位到left:0这个位置，然后count计数变成0
            //至此位置一轮结束，然后定时函数继续执行重复上述过程。
            count++;
            ul.current.style.transition = 2 + 's';
            ul.current.style.left = 0 - 470*count + 'px';
            if(count === li.length - 3){
                setTimeout(() => {
                    count = 0
                    ul.current.style.left = 0;
                    ul.current.style.transition = 0 + 's';
                } , 2000)
            }
        } , 5000)
        return () => {
            clearInterval(timer.current)
        }
    } , [])
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
        </div>
    )
}

export default Introduction
