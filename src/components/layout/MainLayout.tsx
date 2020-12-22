import React from 'react';
import {View, StyleSheet} from "react-native";
import {device} from "../stylesheet";

export const MainLayout: React.FC = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: device.width,
        padding: 10,
    }
})