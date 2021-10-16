import React , {Suspense , lazy , useEffect , useState , useRef} from 'react'
import { Link  , Route , Switch as SwitchAntd } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import config from '../../assets/js/config/config'
import { ground_color } from '../../action/backGround'
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
    const dispatch = useDispatch(null);
    const [selectStyle , setSelectStyle] = useState({page : true , curriculum : false , tool :false , learn : false})
    const [backGround , setBackGround] = useState(false)
    //添加一个状态来修改搜索组件的属性
    const [bMask , setBMask] = useState(false)
    const [bSearch , setBSearch] = useState(Css["up"])
    const [searchText , setSearchText] = useState('')
    let mask = useRef(null);
    //这里有个需求就是我点击导航的时候给指定的部分添加样式,但是通过触发点击事件所获得的props始终是上一个路由的props,我的认为是在点击事件当中所使用的props指针已经确定指向了前一个路由的props,所以导致拿到的不是我们想要的,这里用useEffect来监听props的变化,也就可以拿到新的props
    useEffect(() => {
        let isUnmounted = false;
        const pathname = props.location.pathname;
        console.log(pathname.indexOf(`${config.path}home/learn`) !== -1 , `${config.path}home/page`.indexOf(pathname) !== -1 , pathname)
        if(!isUnmounted){
            if(pathname.indexOf(`${config.path}home/page`) !== -1){
                setSelectStyle({page : true , curriculum : false , tool :false , learn : false})
            }else if(pathname.indexOf(`${config.path}home/learn`) !== -1){
                setSelectStyle({page : false , curriculum : false , tool :false , learn : true})
            }else if(pathname.indexOf(`${config.path}home/curriculum`) !== -1){
                setSelectStyle({page : false , curriculum : true , tool :false , learn : false})
            }
            else if(pathname.indexOf(`${config.path}home/tool`) !== -1){
                setSelectStyle({page : false , curriculum : false , tool :true , learn : false})
            }
        }
        return () => {
            isUnmounted = true;
        }
    } , [props])
    useEffect(() => {
        //绑定点击事件
        mask.current.addEventListener('click' , () => {
            setBMask(false)
            setBSearch(Css["up"])
        } , false)
        //绑定滚动条事件,并禁止掉
        mask.current.addEventListener('mousewheel' , (e) => {
            e.preventDefault()
        } , false)
    } , [])// eslint-disable-line react-hooks/exhaustive-deps
    //搜索事件
    const search = () => {
        setBMask(true)
        setBSearch(Css['down'])
    }
    //antd的开关事件
    const onChange = (checked) => {
        dispatch(ground_color(checked))
        setBackGround(checked)
    }
    return (
        <div className={backGround ? Css['page'] + ' ' + Css['active'] : Css['page']}>
            <div className={backGround ? Css['head'] + ' ' + Css['active'] : Css['head']}>
                <div className={Css['user']}>
                    <div className={Css['image']}>
                        <img src={require('../../assets/image/common/head.jpg').default} alt='你说啥名字好呢'></img>
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
                        </li>
                        </Link>
                    <Link to={config.path + 'home/curriculum'}>
                        <li className={selectStyle.curriculum ? Css['active'] : ''}>
                            <em className={backGround? Css['active'] : ''}>书籍</em>
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
                        <div className={Css['image']}><div></div></div>
                        搜索
                    </li>
                </ul>
            </div>
            <Suspense fallback={<React.Fragment></React.Fragment>}>
                <SwitchAntd>
                    <Route path={config.path+'home/page'} component={HomePage}></Route>
                    <Route path={config.path+'home/learn'} component={HomeLearn}></Route>
                    <Route path={config.path+'home/curriculum'} component={HomeCurriculum}></Route>
                    <Route path={config.path+'home/tool'} component={HomeTool}></Route>
                </SwitchAntd>
            </Suspense>
            {/* 点击搜索框时添加的背景颜色 */}
            <div className={bMask ? Css['mask'] : Css['mask'] + ' ' + Css['hide']}ref={mask}></div>
            {/* 点击搜索框弹出的搜索部分 */}
            <div className={Css['search'] + ' ' + bSearch}>
                <div className={Css['head']}>
                    <div className={Css['search-wrap']}>
                        <div></div>
                        <input placeholder='Search docs' value={searchText} onChange={e => {setSearchText(e.target.value)}}></input>
                    </div>
                </div>
                <div className={Css['search-content']}></div>
                <div className={Css['bottom']}></div>
            </div>
        </div>
    )
}

export default HomeIndex
