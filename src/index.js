import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import firebase from 'firebase'


firebase.initializeApp(
    {
        apiKey: "AIzaSyDveoaafaLOa1ztv_86-GQ-uyolwR2KWz0",
        authDomain: "fir-ppf.firebaseapp.com",
        databaseURL: "https://fir-ppf.firebaseio.com",
        projectId: "fir-ppf",
        storageBucket: "fir-ppf.appspot.com",
        messagingSenderId: "404050777920"
      }
)

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
