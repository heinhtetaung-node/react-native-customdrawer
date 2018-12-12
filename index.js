/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

/*** Redux ***/
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { store } from './src/redux/store';
/*** *********** ***/

const RNRedux = () => (
    <Provider store = { store }>
        <App />        
    </Provider>
);
  
AppRegistry.registerComponent(appName, () => RNRedux);
