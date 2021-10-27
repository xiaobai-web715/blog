import React , {useEffect} from 'react'
import search from '../../assets/js/utils/searchAnalysis'

const MoreIndex = (props) => {
//这里要实现一个需求就是用正则表达式解析出props里location的search部分,好用获得参数进行数据的请求
    useEffect(() => {
        search(props.location.search)
    } , [])// eslint-disable-line react-hooks/exhaustive-deps
    const goBack = () => {
        props.history.goBack();
    }
    return (
        <div>
            更多内容
            <button onClick={goBack}>返回</button>
        </div>
    )
}

export default MoreIndex
