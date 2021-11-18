import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import {store} from "./components/Redux/indexRedux";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
    </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);