import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import "jquery/dist/jquery.min.js"

import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import store from './Store/index';


ReactDOM.render(
    <Provider store={store}>
                    <BrowserRouter>
                        <App />  
                    </BrowserRouter>
    </Provider>               
               , document.getElementById('root'))
