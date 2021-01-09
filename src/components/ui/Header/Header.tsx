import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native'
import {Icon, IconProps} from "react-native-elements"
import {device} from '../../stylesheet'
import {colors} from '../../stylesheet'
import {useNavigation} from "@react-navigation/native"

interface HeaderProps {
    title: string,
    icon?: IconProps,
    isGoBack?: boolean,
}

export const Header: React.FC<HeaderProps> = ({title, isGoBack = true, icon}) => {

    const {goBack} = useNavigation()

    return (
        <>
            <StatusBar backgroundColor={colors.BlueLagoon}/>
            <View style={styles.container}>
                <View style={styles.leftItems}>
                    {isGoBack &&
                    <Icon name={"arrow-left"} type={"simple-line-icon"} color={colors.WhiteSmoke} onPress={() => goBack()}/>}
                    <Text style={styles.title}>{title}</Text>
                </View>
                {icon && <Icon {...icon} color={'white'}/>}
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        width: device.width,
        height: 56,
        backgroundColor: colors.BlueLagoon,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: "space-between",
    },
    leftItems: {
      alignItems: "center",
      flexDirection: "row"
    },
    title: {
        color: colors.WhiteSmoke,
        paddingLeft: 20,
        fontWeight: "bold",
        fontSize: 18
    }
})