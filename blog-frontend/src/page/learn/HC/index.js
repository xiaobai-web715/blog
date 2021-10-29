import React , {useState , useEffect}from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Css from '../../../assets/css/learn/HC/index.css'
import config from '../../../assets/js/config/config'
import '../../../mock/learn/HC/index'
import request from '../../../assets/js/utils/request'
import search from '../../../assets/js/utils/searchAnalysis'

const HCIndex = (props) => {
    const [data , setData] = useState([])
    const {value} = useSelector(state => state.groundColorReducer);
    let title = search(props.location.search).search.title;
    useEffect(() => {
        let isUnmounted = false;
        request('/home/learn/HC/1' , 'get').then(res => {
            if(res.status === 200 && !isUnmounted){
                setData(res.data);
            }
        })
        //下面的这个判断是个坑,你要将等号前面的这两个括起来,要不然·就是左边是一个式子,右边是一个式子
        //console.log(value || sessionStorage.getItem('backgrounColor') , (value || sessionStorage.getItem('backgrounColor')) === 'dark')
        return () => {
            isUnmounted = true;
        }
    } , [])
    return (
        <div className={Css['page']}>
            <div className={Css['page-title']}>静态页面</div>
            <div className={Css['img']}>
                <img src={require(`../../../assets/image/introduction/learn/${title ? title : '淘宝'}.jpg`).default} alt=''></img>
            </div>
            <div className={Css['text-content']}>
                <div className={Css['text-title']}>知识梳理</div>
                {
                    // 这里的需求是只想在该页面展示前5条内容,更多的去more-learn页面去看,这里没有设计分页,是通过slice(index1 , index2)来实现只截取index1到index2 - 1的数据
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
                {/* 下面的这几行是想设计一个可以写入的部分,mock.js目前还没有办法实现 */}
                {/* <div className={value === 'dark' ?  Css['active'] + ' ' + Css['btn'] : Css['btn']}>
                    <textarea></textarea>
                    <button>提交</button>
                </div> */}
            </div>
            <div className={Css['more']}>
                <Link to={config.path + `api/learn/more?id=HC/1`}><span className={(value  || sessionStorage.getItem('backgroundColor'))  === 'dark' ? Css['active'] : ''}>阅览更多&gt;&gt;</span></Link>
            </div>
        </div>
    )
}

export default HCIndex
