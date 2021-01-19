import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <head>
            <link
                href='https://fonts.googleapis.com/css?family=Encode+Sans Semi Condensed:400|Alegreya+Sans:500'
                rel='stylesheet'
            />
            <meta charset='utf-8' />
            <meta http-equiv='X-UA-Compatible' content='IE=edge' />
            <title>JAMES HICKS | EXPLORE</title>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1'
            />
        </head>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
