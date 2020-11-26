import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native'
import {Icon, IconProps} from 'react-native-elements'
import {device} from '../../stylesheet'
import {useNavigation} from '@react-navigation/native'

interface HeaderProps {
    title: string,
    icon?: IconProps,
    isGoBack?: boolean,
}

export const Header: React.FC<HeaderProps> = ({title, isGoBack = true, icon}) => {

    const {goBack} = useNavigation()

    return (
        <>
            <StatusBar backgroundColor={'#025167'}/>
            <View style={styles.container}>
                <View style={styles.leftItems}>
                    {isGoBack &&
                    <Icon name={"arrow-left"} type={"simple-line-icon"} color={'white'} onPress={() => goBack()}/>}
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
        height: 50,
        backgroundColor: '#216477',
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },
    leftItems: {
      alignItems: "center",
      flexDirection: "row"
    },
    title: {
        color: 'white',
        paddingLeft: 20,
        fontWeight: "bold",
        fontSize: 18
    }
})