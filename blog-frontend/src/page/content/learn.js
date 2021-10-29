import React , {lazy , Suspense} from 'react'
import {Route , Switch , Redirect} from 'react-router-dom'
import NavIndex from '../../components/nav/nav'
// import {Menu} from 'antd' => antd的这个导航组件会有一个颜色变化的延迟
import Css from '../../assets/css/home/learn.css'
import config from '../../assets/js/config/config'
const Introduction = lazy(() => import('../learn/introduction'))
const HCIndex = lazy(() => import('../learn/HC/index'))
const LunBoTu = lazy(() => import('../learn/JS/lunbotu'))
const TanChiShe = lazy(() => import('../learn/JS/tanchishe'))
const ShuJuKeShiHua = lazy(() => import('../learn/JS/shujukeshihua'))
const JDReact = lazy(() => import('../learn/React/jdReact'))
const Blog = lazy(() => import('../learn/React/blog'))

const LearnIndex = (props) => {
    const handleClick = (url) => {
        props.history.push(config.path + url)
    }
    const data = [
        {title : '学习历程' , catalogue : 'introduction' , res : [{title : '简介' , path : 'home/learn/introduction'}]},
        {title : 'HTML与CSS' , catalogue : 'HC' , res : [{title : '静态页面' , path : 'home/learn/HC/1'}]},
        {title : 'JavaScript' , catalogue : 'JS' , res : [{title : '轮播图' , path : 'home/learn/JS/1'} , {title : '贪吃蛇' , path : 'home/learn/JS/2'} , {title : '数据可视化' , path : 'home/learn/JS/3'}]},
        {title : 'React' ,  catalogue : 'React' , res : [{title : '京东电商' , path : 'home/learn/React/1'} , {title : '博客' , path : 'home/learn/React/2'}]}
    ]
    return (
        <div className={Css['page']}>
            <NavIndex data={data} click={handleClick}></NavIndex>
            <Suspense fallback={<React.Fragment></React.Fragment>}>
                <Switch>
                    <Route path={config.path + 'home/learn/introduction'} component={Introduction}></Route>
                    <Route path={config.path + 'home/learn/HC/1'} component={HCIndex}></Route>
                    <Route path={config.path + 'home/learn/JS/1'} component={LunBoTu}></Route>
                    <Route path={config.path + 'home/learn/JS/2'} component={TanChiShe}></Route>
                    <Route path={config.path + 'home/learn/JS/3'} component={ShuJuKeShiHua}></Route>
                    <Route path={config.path + 'home/learn/React/1'} component={JDReact}></Route>
                    <Route path={config.path + 'home/learn/React/2'} component={Blog}></Route>
                    <Redirect to={config.path + 'home/learn/introduction'}></Redirect>
                </Switch>
            </Suspense>
        </div>
    )
}

export default LearnIndex
