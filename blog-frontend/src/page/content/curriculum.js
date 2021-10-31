import React , {useState , useEffect} from 'react'
import { useSelector } from 'react-redux'
import config from '../../assets/js/config/config'
import request from '../../assets/js/utils/request'
import '../../mock/curriculum/index'
import Css from '../../assets/css/home/curriculum.css'

const Curriculum = (props) => {
    const {value} = useSelector(state => state.groundColorReducer)
    const [data , setData] = useState([])
    useEffect(() => {
        let isUnmounted = false;
        const getData = async() => {
            let url = `${config.path}home/curriculum`;
            const res = await request(url , 'get')
            if(res.status === 200 && !isUnmounted){
                setData(res.data)
            }
        }
        getData()
        return () => {
            isUnmounted = true;
        }
    } , [])
    const pushPage = (id) => {
        props.history.push(`${config.path}api/curriculum/more?id=${id}`)
    }
    //接下来要完成的需求就是用mock模拟数据实现请求回显
    return (
        <div className={(value || sessionStorage.getItem('backgroundColor')) === 'dark' ? Css['page'] + ' ' + Css['active'] : Css['page']}>
            <div className={Css['content']}>
                {
                    data && data.length > 0 ? 
                    data.map((item , index) => {
                        return (
                            <div className={Css['book-wrap']} onClick={pushPage.bind(null , item.id)} key={index}>
                                <div className={Css['image']}>
                                    <img alt='' src={require(`../../assets/image/${item.url}`).default}></img>
                                </div>
                                <div className={Css['text-wrap']}>
                                    <div className={Css['title']}>{item.title}</div>
                                    <div className={Css['wrap']}>{item.content}</div>
                                </div>
                            </div>
                        )
                    }):''
                }
            </div>
        </div>
    )
}

export default Curriculum
