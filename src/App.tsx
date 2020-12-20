import React from 'react';
import {View} from 'react-native';
import {registerRootComponent} from "expo";
import {Router} from './router'
import {Provider} from 'react-redux'
import {store} from './redux/store/store'

function App() {
    return (
        <Provider store={store}>
            <View style={{flex: 1}}>
                <Router/>
            </View>
        </Provider>
    );
}

registerRootComponent(App);