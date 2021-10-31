import React , {useState , useEffect} from 'react'
import {useSelector} from 'react-redux'
import request from '../../assets/js/utils/request'
import search from '../../assets/js/utils/searchAnalysis'
import config from '../../assets/js/config/config'
import '../../mock/curriculum-more/index'
import Css from '../../assets/css/curriculum-more/index.css'
const MoreCurriculum = (props) => {
    const {value} = useSelector(state => state.groundColorReducer)
    const [data , setData] = useState([])
    useEffect(() => {
        let isUnmounted = false;
        const getData = async() => {
            let id = search(props.location.search).search.id,
                url = `${config.path}home/curriculum/${id}`;
            const res = await request(url , 'get')
            if(res.status === 200 && !isUnmounted){
                setData(res.data)
            }
        }
        getData();
        return () => {
            isUnmounted = true;
        }
    } , [])// eslint-disable-line react-hooks/exhaustive-deps
    const goBack = () => {
        props.history.goBack()
    }
    return (
        <div className={(value || sessionStorage.getItem('backgroundColor')) === 'dark' ? Css['page'] +' '+ Css['active'] : Css['page']}>
            <div className={Css['page-content']}>
                <div className={Css['go-back']} onClick={goBack}>&lt;&lt;返回</div>
                <div className={Css['text-content']}>
                    {
                        data && data.length > 0?
                        data.map((item , index) => {
                            return (
                                <div className={Css['content-wrap']} key={index}>
                                    <div className={Css['head-wrap']}>
                                        <img src={require(`../../assets/image/${item.url}`).default} alt=''></img>
                                        <div className={Css['maininfo']}>
                                            <div className={Css['title']}>{item.title}</div>
                                            <div className={Css['author']}>作者：{item.author}</div>
                                            <div className={Css['content']}>简介：{item.content}</div>
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

export default MoreCurriculum
