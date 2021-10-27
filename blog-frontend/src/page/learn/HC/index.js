import React , {useState , useEffect}from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Css from '../../../assets/css/learn/HC/index.css'
import config from '../../../assets/js/config/config'
import '../../../mock/learn/HC/index'
import request from '../../../assets/js/utils/request'

const HCIndex = () => {
    const [data , setData] = useState([])
    const {value} = useSelector(state => state.groundColorReducer);
    useEffect(() => {
        let isUnmounted = false;
        request('/home/learn/HC/1' , 'get').then(res => {
            if(res.status === 200 && !isUnmounted){
                setData(res.data);
            }
        })
        return () => {
            isUnmounted = true;
        }
    } , [])
    return (
        <div className={value === 'dark' ? Css['page'] + ' ' + Css['active'] : Css['page']}>
            <div className={Css['page-title']}>静态页面</div>
            <div className={Css['img']}>
                <img src={require('../../../assets/image/HC/淘宝.jpg').default} alt=''></img>
            </div>
            <div className={Css['text-content']}>
                <div className={Css['text-title']}>知识梳理</div>
                {
                    data && data.length > 0 ? 
                    data.map((item , index) => {
                        return (
                            <div className={value === 'dark' ? Css['text'] + ' ' + Css['active'] : Css['text']} key={index}>
                                <div className={Css['title']}>{item.title}</div>
                                <div className={Css['content']}>
                                    <div className={Css['texts']}>{item.content}</div>
                                    <div>
                                        {
                                            item.image && item.image.length > 0 ?
                                            item.image.map((_item , _index) => {
                                                return (
                                                    <div className={Css['image-content']} key={_index}>
                                                        <img src={require(`../../../assets/image/${_item}`).default} alt='' ></img>
                                                        <p>图{_index+1}</p>
                                                    </div>
                                                )
                                            }):''
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }):''
                }
                {/* 下面的这几行是想设计一个可以写入的部分,mock.js目前还没有办法实现 */}
                {/* <div className={value === 'dark' ?  Css['active'] + ' ' + Css['btn'] : Css['btn']}>
                    <textarea></textarea>
                    <button>提交</button>
                </div> */}
            </div>
            <div className={Css['more']}>
                <Link to={config.path + `api/learn/more?id=HC/1&text=多数据测试需要`}><span className={value === 'dark' ? Css['active'] : ''}>阅览更多&gt;&gt;</span></Link>
            </div>
        </div>
    )
}

export default HCIndex
