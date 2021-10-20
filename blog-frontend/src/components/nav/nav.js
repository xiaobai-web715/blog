import React , {useState , useEffect} from 'react'
import config from '../../assets/js/config/config'
//可以给非src下面的文件添加props的属性
import { withRouter } from 'react-router'
import Css from '../nav/nav.css'

const NavIndex = (props) => {
    const [data , setData] = useState([])
    const styleChange = (index) => {
        let copyData = [...data];
        //这里同样也需要考虑到如果是undefiend的情况下就是我初次之后还有点击到过这个根目录底下的子目录,也就是true变成false
        if(copyData[index].style === undefined){
            copyData[index].style = false;
        }else{
            copyData[index].style = !copyData[index].style
        }
        setData(copyData)
    }
    useEffect(() => {
        let copyData = null,
            isUnmounted = false;
        if(JSON.stringify(data) !== '[]'){
            copyData = data;
        }else{
            //初次render之前,状态data是空数组
            copyData = props.data;
        }
        for(let i = 0 ; i < copyData.length ; i++){
            if(props.location.pathname.indexOf(copyData[i].catalogue) !== -1){
                //匹配到路由的将根目录的style改成false;
                copyData[i].style = false;
                for(let t = 0 ; t < copyData[i].res.length ; t++){
                    if(props.location.pathname === (config.path + copyData[i].res[t].path)){
                        //匹配到对应子目录的会将子目录的style变成false
                        copyData[i].res[t].style = false;
                    }else{
                        copyData[i].res[t].style = true;
                    }
                }
            }else{
                //没有匹配到路由的根目录的style状态不变,但是这里出现一个问题就是我有的根目录的状态style是undefined,所以要在下面做判断的时候考虑到
                for(let t = 0 ; t < copyData[i].res.length ; t++){
                    copyData[i].res[t].style = true;
                }
            }
        }
        if(!isUnmounted){
            setData([...copyData])
        }
        return () => {
            isUnmounted = true;
        }
    } , [props])// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className={Css['page']}>
            {
                data.length > 0 ?
                data.map((item , index) => {
                    return (
                        <div className={Css['title-content']} key={index}>
                            <div className={Css['title']} onClick={styleChange.bind(null , index)}>
                                <div>{item.title}</div><div className={item.style || item.style === undefined ? Css['page-content'] + ' ' + Css['down'] : Css['page-content']}></div>
                            </div>
                            <div className={item.style || item.style === undefined ? Css['content'] + ' ' + Css['active'] : Css['content']} >
                                {
                                    item.res !== undefined ?
                                    item.res.map((item_ , index_) => {
                                        return (
                                            <li className={item_.style ? '' : Css['active']} key={index_} onClick={props.click.bind(null , item_.path)}>{item_.title}</li>
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

export default withRouter(NavIndex)
