import React , {Suspense , lazy} from 'react'
import {HashRouter as Router , Route , Switch , Redirect} from 'react-router-dom'
import config from './assets/js/config/config'
const HomeIndex = lazy(() => import('./page/home/index'))
const ContentIndex = lazy(() => import('./page/home/content'))

const RouterFn = () => {
    console.log(HomeIndex)
    return (
        // 最外层是一个标签占位符
        <React.Fragment>
            {/* 第二层是hash路由或history路由 */}
            <Router>
                {/* 第三层是Suspense */}
                <Suspense fallback={<React.Fragment></React.Fragment>}>
                    {/* 第四层是Switch */}
                    <Switch>
                        {/* 第五层是Route */}
                        <Route exact path={config.path + 'home'} component={HomeIndex}></Route>
                        <Route path={config.path + 'home/content'} component={ContentIndex}></Route>
                        <Redirect to={config.path + 'home'}></Redirect>
                    </Switch>
                </Suspense>
            </Router>
        </React.Fragment>
    )
}

export default RouterFn
