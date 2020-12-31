import React from 'react';
import {View, StyleSheet, Text} from "react-native";
import {device, colors} from "../../stylesheet";


interface CardProps {
    title?: string,
    children: {
        body?: React.ReactElement
    }
}

export const Card: React.FC<CardProps> = ({children: {body}, title}) => {
    return (
        <View style={styles.container}>
            {title && <Text style={styles.title}>{title}</Text>}
            <View>
                {body}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: device.width * .8,
        minHeight: 300,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        borderRadius: 1,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
        borderBottomColor: colors.BlueLagoon,
        color: colors.BlueLagoon,
        paddingBottom: 10,
        borderBottomWidth: 1,
    }
})
