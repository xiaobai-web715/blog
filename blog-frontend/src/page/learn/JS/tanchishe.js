import React , {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import request from '../../../assets/js/utils/request'
import search from '../../../assets/js/utils/searchAnalysis'
import config from '../../../assets/js/config/config'
import '../../../mock/learn/JS/tanchishe'
import Css from '../../../assets/css/learn/JS/tanchishe.css'

const TanChiShe = (props) => {
    const [data , setData] = useState([])
    const {value} = useSelector(state => state.groundColorReducer);
    let title = search(props.location.search).search.title;
    useEffect(() => {
        let isUnmounted = false;
        request('/home/learn/JS/2' , 'get').then(res => {
            if(res.status === 200 && !isUnmounted){
                setData(res.data);
            }
        })
        return () => {
            isUnmounted = true;
        }
    } , [])
    return (
        <div className={Css['page']}>
            <div className={Css['page-title']}>贪吃蛇</div>
            <div className={Css['img']}>
                <img src={require(`../../../assets/image/introduction/learn/${title ? title : '贪吃蛇'}.jpg`).default} alt=''></img>
            </div>
            <div className={Css['text-content']}>
                <div className={Css['text-title']}>知识梳理</div>
                {
                    data && data.length > 0 ? 
                    data.slice(0 , 5).map((item , index) => {
                        return (
                            <div className={(value || sessionStorage.getItem('backgroundColor'))  === 'dark' ? Css['text'] + ' ' + Css['active'] : Css['text']} key={index}>
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
            </div>
            <div className={Css['more']}>
                <Link to={config.path + `api/learn/more?id=JS/2`}><span className={(value  || sessionStorage.getItem('backgroundColor'))  === 'dark' ? Css['active'] : ''}>阅览更多&gt;&gt;</span></Link>
            </div>
        </div>
    )
}

export default TanChiShe
