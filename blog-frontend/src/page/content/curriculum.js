import React from 'react'
import config from '../../assets/js/config/config'
import Css from '../../assets/css/home/curriculum.css'

const Curriculum = (props) => {
    const pushPage = () => {
        props.history.push(config.path + 'api/curriculum/more')
    }
    //接下来要完成的需求就是用mock模拟数据实现请求回显
    return (
        <div className={Css['page']}>
            <div className={Css['content']}>
                <div className={Css['book-wrap']} onClick={pushPage}>
                    <div className={Css['image']}>
                        <img alt='' src={require('../../assets/image/curriculum/javascript高级程序设计.jpg').default}></img>
                    </div>
                    <div className={Css['text-wrap']}>
                        <div className={Css['title']}>JavaScript高级程序设计</div>
                        <div className={Css['wrap']}>你说啥名字好呢</div>
                    </div>
                </div>
                <div className={Css['book-wrap']}>
                    <div className={Css['image']}>
                        <img alt='' src={require('../../assets/image/curriculum/javascript高级程序设计.jpg').default}></img>
                    </div>
                    <div className={Css['text-wrap']}>
                        <div className={Css['title']}>JavaScript高级程序设计</div>
                        <div className={Css['wrap']}>你说啥名字好呢</div>
                    </div>
                </div>
                <div className={Css['book-wrap']}>
                    <div className={Css['image']}>
                        <img alt='' src={require('../../assets/image/curriculum/javascript高级程序设计.jpg').default}></img>
                    </div>
                    <div className={Css['text-wrap']}>
                        <div className={Css['title']}>JavaScript高级程序设计</div>
                        <div className={Css['wrap']}>你说啥名字好呢</div>
                    </div>
                </div>
                <div className={Css['book-wrap']}>
                    <div className={Css['image']}>
                        <img alt='' src={require('../../assets/image/curriculum/javascript高级程序设计.jpg').default}></img>
                    </div>
                    <div className={Css['text-wrap']}>
                        <div className={Css['title']}>JavaScript高级程序设计</div>
                        <div className={Css['wrap']}>你说啥名字好呢</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curriculum
