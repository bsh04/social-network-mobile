import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {registerRootComponent} from "expo";
import {Router} from './router'

function App() {
    return (
        <View style={{flex: 1}}>
            <Router/>
        </View>
    );
}

registerRootComponent(App);