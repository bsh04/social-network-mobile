import React from 'react';
import {StyleSheet, View, StyleProp} from 'react-native'
import {colors, device} from '../stylesheet'
import {LinearGradient} from "expo-linear-gradient";

interface MainLayoutProps {
    propsStyles?: StyleProp<object>
}

export const MainLayout: React.FC<MainLayoutProps> = ({children, propsStyles}) => {
    return (
        <LinearGradient colors={[colors.WhiteSmoke, colors.Allports]}>
            <View style={styles.container}>
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
        height: device.height
    },
    wrapper: {
        width: device.width * .95,
        height: device.height - 80,
    }
})