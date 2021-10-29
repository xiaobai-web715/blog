import React , {useEffect , useState} from 'react'
import {useSelector} from 'react-redux'
import search from '../../assets/js/utils/searchAnalysis'
import request from '../../assets/js/utils/request'
import config from '../../assets/js/config/config'
import '../../mock/learn/HC/index'
import Css from '../../assets/css/learn-more/index.css'

//还有一个需求需要解决,就是单页面应用的滚动轴会影响下一个页面的定位,不是每次都这样
const MoreIndex = (props) => {
    const {value} = useSelector(state => state.groundColorReducer)
    const [data , setData] = useState([]);
    useEffect(() => {
        let isUnmounted = false;
        //请求数据
        const getData = async() => {
            //这里要实现一个需求就是用正则表达式解析出props里location的search部分,好用获得参数进行数据的请求
            // console.log(search(props.location.search).search)
            let path = search(props.location.search).search.id,
                url = `${config.path}home/learn/${path}`;
            let res = await request(url , 'get')
            if(res.status === 200 && !isUnmounted){
                setData(res.data)
            }
        } 
        getData()  
        return () => {
            isUnmounted =true;
        }  
    } , [])// eslint-disable-line react-hooks/exhaustive-deps
    const goBack = () => {
        props.history.goBack();
    }
    return (
        <div className={(value || sessionStorage.getItem('backgroundColor')) === 'dark' ? Css['page'] + ' ' + Css['active'] : Css['page']}>
            <div className={Css['page-content']}>
                <div className={Css['go-back']} onClick={goBack}>&lt;&lt;返回</div>
                <div className={Css['text-content']}>
                    <div className={Css['text-title']}>知识梳理</div>
                    {
                        data && data.length > 0 ? 
                        data.map((item , index) => {
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
                                                            <img src={require(`../../assets/image/${_item}`).default} alt='' ></img>
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
            </div>
        </div>
    )
}

export default MoreIndex
