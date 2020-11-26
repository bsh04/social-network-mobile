import React from 'react';
import {StyleSheet, View, StyleProp} from 'react-native'
import {device} from '../stylesheet'

interface MainLayoutProps {
    propsStyles?: StyleProp<object>
}

export const MainLayout: React.FC<MainLayoutProps> = ({children, propsStyles}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.wrapper, propsStyles]}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: device.width,
        alignItems: "center",
        paddingVertical: 10,
        height: device.height
    },
    wrapper: {
        width: device.width * .95,
        height: device.height - 50
    }
})