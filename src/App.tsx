import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {registerRootComponent} from "expo";
import {Router} from './router'
import {Provider, useDispatch} from 'react-redux'
import {store} from './redux/store/store'
import firebase from "firebase";
import {firebaseConfig} from "./config"
import {userSlice} from "./redux/slices/userSlice"
import {UserValues} from "./types/interfaces";
import {device} from "./components/stylesheet";

function App() {
    const [ready, setReady] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const {email, phoneNumber, photoURL, displayName, uid} = user
                const userData = {
                    email, photoURL, phoneNumber, displayName, token: uid,
                } as UserValues
                dispatch(userSlice.actions.setUser(userData))
            }
            setReady(true)
        })
    }, [])

    if (ready) {
        return (
            <View style={{flex: 1, height: device.height}}>
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