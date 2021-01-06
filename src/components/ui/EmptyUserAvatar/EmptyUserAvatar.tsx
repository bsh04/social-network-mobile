import React from 'react';
import {View, StyleSheet, ViewStyle} from "react-native";
import {colors} from "../../stylesheet";
import {Icon} from "react-native-elements";

export const EmptyUserAvatar:React.FC<{style?: ViewStyle}> = ({style}) => {
    return (
        <View style={[style, styles.container]}>
            <Icon name={"person"} type={"material"} color={"#555"}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: colors.Gray,
        alignItems: "center",
        justifyContent: "center"
    }
})