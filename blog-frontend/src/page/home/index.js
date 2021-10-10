import React from 'react'
import { Link } from 'react-router-dom'
import Css from'../../assets/css/home/index.css'

const HomeIndex = () => {
    return (
        <div>
           <div className={Css['page']}>
               <Link to='/home/content'><span className={Css['main']}>首页</span></Link>
           </div>
        </div>
    )
}

export default HomeIndex
