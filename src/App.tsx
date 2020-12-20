import React, {useEffect} from 'react';
import {View} from 'react-native';
import {registerRootComponent} from "expo";
import {Router} from './router'
import {Provider} from 'react-redux'
import {store} from './redux/store/store'
import firebase from "firebase";
import {firebaseConfig} from "./config"

function App() {
    useEffect(() => {
        firebase.initializeApp(firebaseConfig);
    }, [])

    return (
        <Provider store={store}>
            <View style={{flex: 1}}>
                <Router/>
            </View>
        </Provider>
    );
}

registerRootComponent(App);