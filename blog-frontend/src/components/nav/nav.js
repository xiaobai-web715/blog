import React , {useState , useEffect} from 'react'
import Css from '../nav/nav.css'

const NavIndex = (props) => {
    const [data , setData] = useState({})
    const styleChange = (index) => {
        let copyData = [...data];
        copyData[index].style = !copyData[index].style
        setData(copyData)
    }
    useEffect(() => {
        let copyData = props.data;
        for(let i = 0 ; i < copyData.length ; i++){
            copyData[i].style = true;
        }
        setData(copyData)
    } , [])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className={Css['page']}>
            {
                data.length > 0 ?
                data.map((item , index) => {
                    return (
                        <div className={Css['title-content']} key={index}>
                            <div className={Css['title']} onClick={styleChange.bind(null , index)}>
                                <div>{item.title}</div><div className={item.style ? Css['page-content'] + ' ' + Css['down'] : Css['page-content']}></div>
                            </div>
                            <div className={Css['content']}>
                                {
                                    item.res !== undefined ?
                                    item.res.map((item_ , index_) => {
                                        return (
                                            <li className={item.style ? Css['active'] : ''} key={index_} onClick={props.click.bind(null , item_.path)}>{item_.title}</li>
                                        )
                                    }):''
                                }
                            </div>
                        </div>
                    )
                }):''
            }
        </div>
    )
}

export default NavIndex
