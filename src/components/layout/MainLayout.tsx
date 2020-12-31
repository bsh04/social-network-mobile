import React from 'react';
import {View, StyleSheet, ScrollView} from "react-native";
import {device} from "../stylesheet";

interface MainLayoutChildren {
    header?: React.ReactNode
    footer?: React.ReactNode
    body?: React.ReactNode
}

interface MainLayoutProps {
    children: MainLayoutChildren
}

export const MainLayout: React.FC<MainLayoutProps> = ({children: {body, header, footer}}) => {
    return (
        <View style={styles.container}>
            <View>{header}</View>
            <ScrollView style={styles.body}>
                {body}
            </ScrollView>
            <View style={styles.footer}>{footer}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: device.width,
        padding: 10,
        flex: 1,
    },
    body: {
    },
    footer: {
    }
})