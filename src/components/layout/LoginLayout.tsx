import React from 'react';
import {StyleSheet, View, StyleProp} from 'react-native'
import {colors, device} from '../stylesheet'
import {LinearGradient} from "expo-linear-gradient";

interface MainLayoutProps {
    propsStyles?: StyleProp<object>
    contentCenter?: boolean
}

export const LoginLayout: React.FC<MainLayoutProps> = ({children, propsStyles, contentCenter}) => {
    return (
        <LinearGradient colors={[colors.White, colors.WhiteSmoke]}>
            <View style={[styles.container, contentCenter && {justifyContent: 'center'}]}>
                <View style={[styles.wrapper, propsStyles]}>
                    {children}
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        width: device.width,
        alignItems: "center",
        height: device.height - 50
    },
    wrapper: {
        width: device.width * .95,
        height: device.height,
    },
    theme: {
        width: 100,
        height: 100,
        zIndex: 100000
    }
})