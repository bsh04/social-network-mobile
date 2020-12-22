import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {registerRootComponent} from "expo";
import {Router} from './router'
import {Provider, useDispatch} from 'react-redux'
import {store} from './redux/store/store'
import firebase from "firebase";
import {firebaseConfig} from "./config"
import {loginSlice} from "./redux/slices/loginSlice"
import {UserValues} from "./types/interfaces";

function App() {
    const [ready, setReady] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const userData = {
                    email: user?.email,
                    photoURL: user?.photoURL,
                    phoneNumber: user?.phoneNumber,
                    displayName: user?.displayName,
                    token: user?.uid,
                } as UserValues
                dispatch(loginSlice.actions.setUser(userData))
            }
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