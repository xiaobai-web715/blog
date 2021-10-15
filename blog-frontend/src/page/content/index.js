import React from 'react'
import Css from '../../assets/css/content/index.css'

const HomePage = () => {
    return (
        <div className={Css['page']}>
            <div className={Css['first-screen']}>
                <div className={Css['text-content']}>
                    <p>Hello!我是<span>兴华</span></p>
                    <p className={Css['introduce']}>点击查看最新技术视频教程、实战课程、技术博客、前端资源导航、以及UP主的想法和生活点滴。致力于帮助你以最直观、最快速的方式学会前端开发，并希望我的个人经历对你有所启发。</p>
                    <button>去B站关注</button>
                </div>
                <div className={Css['image-content']}>
                    <div className={Css['image']}></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
