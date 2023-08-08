import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './state/reducers';
import { Helmet } from 'react-helmet';

import '@fontsource/poppins';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App>
      <Helmet>
        <meta charSet="utf-8"/>
        <meta name="description" content="Geterra website">
        <meta name="keywords" content="geterra,turcanu,maxieni,braila,romania,grains,cereals,producer,cereale,producator,consultanta">
        <title>Geterra</title>
      </Helmet>
    </App>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
