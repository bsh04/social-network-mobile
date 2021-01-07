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
        <ScrollView style={styles.container}>
            <View style={styles.header}>{header}</View>
            <View style={styles.body}>{body}</View>
            <View style={styles.footer}>{footer}</View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        height: device.height
    },
    header: {
      paddingTop: 10,
    },
    body: {
        paddingBottom: 10
    },
    footer: {
        position: "relative",
        bottom: 1
    }
})