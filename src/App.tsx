import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {registerRootComponent} from "expo";
import {Router} from './router'
import {Provider, useDispatch} from 'react-redux'
import {store} from './redux/store/store'
import firebase from "firebase";
import {firebaseConfig} from "./config"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {userSlice} from "./redux/slices/userSlice"

function App() {
    const [ready, setReady] = useState(false)
    const dispatch = useDispatch()
    const getToken = async () => {
        return await AsyncStorage.getItem("@token")
    }

    useEffect(() => {
        firebase.initializeApp(firebaseConfig);
        getToken().then((res) => {
            dispatch(userSlice.actions.setToken(res ?? undefined))
            setReady(true)
        })
    }, [])

    if (ready) {
        return (
            <View style={{flex: 1}}>
                <Router/>
            </View>
        )
    }
    return null
}

const AppWrapper: React.FC = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

registerRootComponent(AppWrapper);