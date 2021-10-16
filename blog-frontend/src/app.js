import React from 'react'
import RouterFn from './router'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/index';

const App = () => {
    const store = createStore(reducer)
    return (
        <Provider store = {store}>
            <RouterFn/>
        </Provider>
    )
}

export default App
