import React from 'react'
import {useSelector} from 'react-redux'
import Css from '../../../assets/css/learn/HC/index.css'

const HCIndex = () => {
    const {value} = useSelector(state => state.groundColorReducer);
    return (
        <div className={value === 'dark' ? Css['page'] + ' ' + Css['active'] : Css['page']}>
            <div className={Css['page-title']}>静态页面</div>
            <div className={Css['img']}>
                <img src={require('../../../assets/image/HC/淘宝.jpg').default} alt=''></img>
            </div>
            <div className={Css['text-content']}>
                <div className={Css['text-title']}>知识梳理</div>
                <div className={value === 'dark' ? Css['text'] + ' ' + Css['active'] : Css['text']}>
                    <div className={Css['title']}>Css</div>
                    <div className={Css['content']}>你说啥名字好呢</div>
                </div>
                {/* <div className={value === 'dark' ?  Css['active'] + ' ' + Css['btn'] : Css['btn']}>
                    <textarea></textarea>
                    <button>提交</button>
                </div> */}
            </div>
        </div>
    )
}

export default HCIndex
