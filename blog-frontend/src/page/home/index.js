import React , {Suspense , lazy , useEffect , useState} from 'react'
import { Link  , Route , Switch as SwitchAntd } from 'react-router-dom'
import config from '../../assets/js/config/config'
import Css from '../../assets/css/home/index.css'
import { Switch} from 'antd'
import 'antd/dist/antd.css'
//要么箭头函数的函数体就别加{}，要是加了你就给写一个return
const HomePage = lazy(() => import('../content/index'))
// const HomePage = lazy(() => {return import('../content/index')})
const HomeLearn = lazy(() => import('../content/learn'))
const HomeCurriculum = lazy(() => import('../content/curriculum'))
const HomeTool = lazy(() => import('../content/tool'))

const HomeIndex = (props) => {
    const [selectStyle , setSelectStyle] = useState({page : true , curriculum : false , tool :false , learn : false})
    //这里有个需求就是我点击导航的时候给指定的部分添加样式,但是通过触发点击事件所获得的props始终是上一个路由的props,我的认为是在点击事件当中所使用的props指针已经确定指向了前一个路由的props,所以导致拿到的不是我们想要的,这里用useEffect来监听props的变化,也就可以拿到新的props
    const [backGround , setBackGround] = useState(false)
    useEffect(() => {
        let isUnmounted = false;
        const pathname = props.location.pathname;
        if(!isUnmounted){
            if(`${config.path}home/page`.indexOf(pathname) !== -1){
                setSelectStyle({page : true , curriculum : false , tool :false , learn : false})
            }else if(`${config.path}home/learn`.indexOf(pathname) !== -1){
                setSelectStyle({page : false , curriculum : false , tool :false , learn : true})
            }else if(`${config.path}home/curriculum`.indexOf(pathname) !== -1){
                setSelectStyle({page : false , curriculum : true , tool :false , learn : false})
            }
            else if(`${config.path}home/tool`.indexOf(pathname) !== -1){
                setSelectStyle({page : false , curriculum : false , tool :true , learn : false})
            }
        }
        return () => {
            isUnmounted = true;
        }
    } , [props])
    //搜索事件
    const search = () => {

    }
    //antd的开关事件
    const onChange = (checked) => {
        setBackGround(checked)
    }
    return (
        <div className={backGround ? Css['page'] + ' ' + Css['active'] : Css['page']}>
            <div className={Css['head']}>
                <div className={Css['user']}>
                    <div className={Css['image']}>
                        <img src={require('../../assets/image/user/head.jpg').default} alt='你说啥名字好呢'></img>
                    </div>
                    <h4>你说啥名字好呢</h4>
                </div>
                <ul className={Css['nav']}>
                    <Link to={config.path + 'home/page'}>
                        <li className={selectStyle.page ? Css['active']  : ''}>
                            <em className={backGround? Css['active'] : ''}>首页</em>
                        </li>
                    </Link>
                    <Link to={config.path + 'home/learn'}>
                        <li className={selectStyle.learn ? Css['active'] : ''}>
                            <em className={backGround? Css['active'] : ''}>学习</em>
                            <span className={backGround ? Css['active'] : ''}></span>
                        </li>
                        </Link>
                    <Link to={config.path + 'home/curriculum'}>
                        <li className={selectStyle.curriculum ? Css['active'] : ''}>
                            <em className={backGround? Css['active'] : ''}>课程</em>
                            <span className={backGround ? Css['active'] : ''}></span>
                        </li>
                    </Link>
                    <Link to={config.path + 'home/tool'}>
                        <li className={selectStyle.tool ? Css['active'] : ''}>
                            <em className={backGround? Css['active'] : ''}>小工具</em>
                        </li>
                    </Link>
                    <li><a href='https://github.com/xiaobai-web715/blog/tree/master' ><em className={backGround? Css['active'] : ''}>本站源码</em></a></li>
                    <li><Switch size='default' onChange={onChange}/></li>
                    <li onClick={search}>
                        <div className={Css['image']}></div>
                        <div className={Css['title']}>搜索</div>
                    </li>
                </ul>
            </div>
            <div className={Css['content']}>
                <Suspense fallback={<React.Fragment></React.Fragment>}>
                    <SwitchAntd>
                        <Route path={config.path+'home/page'} component={HomePage}></Route>
                        <Route path={config.path+'home/learn'} component={HomeLearn}></Route>
                        <Route path={config.path+'home/curriculum'} component={HomeCurriculum}></Route>
                        <Route path={config.path+'home/tool'} component={HomeTool}></Route>
                    </SwitchAntd>
                </Suspense>
            </div>
        </div>
    )
}

export default HomeIndex
