import React from 'react';
// import dva from 'dva/mobile';
import { AppRegistry, AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'

import models from './model';
import dva from './dva/dva';
import App from './index';
import model from './dva/app';
import routerModel from './dva/router'

console.disableYellowBox = true;
const app = dva({
    initialState: {},
    models: [model, routerModel],
    onError(e) {
        console.log('onError', e)
    },
});

const SchoolApp = app.start(<App />);
Object.keys(models).map(key => app.model(models[key]));



AppRegistry.registerComponent('school', () => SchoolApp);
