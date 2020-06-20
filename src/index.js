import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase= require('firebase')
require('firebase/firestore')
 
firebase.initializeApp ({
  apiKey: "AIzaSyBboM8cw6vhYqTESxYQvjnddPjxKm3bWQ8",
  authDomain: "evernote-9707b.firebaseapp.com",
  databaseURL: "https://evernote-9707b.firebaseio.com",
  projectId: "evernote-9707b",
  storageBucket: "evernote-9707b.appspot.com",
  messagingSenderId: "363003127050",
  appId: "1:363003127050:web:3ba6a2ed00cd35620cc6f3"
})



ReactDOM.render(
  
    <App />,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
