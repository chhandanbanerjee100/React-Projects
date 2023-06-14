import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { NavigationProvider } from './components/third_project/context/navigation';
// import { store } from "./components/redux/store/Index";
import { Provider } from 'react-redux';
import { store } from './components/redux-II/store/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <NavigationProvider>
  <Provider store={store} >
    <App />
  </Provider>
  // </NavigationProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// The react-redux is all about making the connections. It does using Provider Component which works as a context system. The reducers(dispatch and state) will be connected to the react part using this.
