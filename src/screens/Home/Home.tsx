import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, Text, View, StyleSheet, Animated, TouchableOpacity} from "react-native";
import {colors, device, FlexBox, Header} from "../../components";
import {Icon} from "react-native-elements";

export const Home: React.FC = () => {
    const menuHeight = useRef(new Animated.Value(40)).current;

    const [isOpenMenu, setOpenMenu] = useState<boolean>(true)

    const handleToggle = () => {
        console.log('asd')
        setOpenMenu(!isOpenMenu)
    }

    useEffect(() => {
        if (isOpenMenu) {
            Animated.timing(menuHeight, {
                toValue: 40,
                duration: 100,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(menuHeight, {
                toValue: 10,
                duration: 100,
                useNativeDriver: false,
            }).start();
        }
    }, [isOpenMenu])

    return (
        <>
            <Header title={'Главная'} isGoBack={false}/>
            <>
                <Animated.View style={[styles.menuContainer, {
                    height: menuHeight
                }]}>
                    <FlexBox flex={{justifyContent: "space-between", alignItems: "center", directionRow: true}}>
                        <Text style={styles.contentType}>Новости</Text>
                        <Icon name={"ios-options"} type={"ionicon"} color={colors.White}/>
                    </FlexBox>
                    <FlexBox style={styles.paramsContainer}>

                    </FlexBox>
                    <TouchableOpacity style={styles.toggleContainer} onPress={handleToggle}>
                        <TouchableOpacity style={[styles.toggle]} >
                            <Icon name={"keyboard-arrow-down"} type={"material"} color={colors.White}/>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Animated.View>
                <ScrollView>

                </ScrollView>
                </>
        </>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        paddingHorizontal: 10,
        backgroundColor: colors.DoveGrey,
        justifyContent: "center"
    },
    contentType: {
        color: colors.White,
        position: "relative"
    },
    paramsContainer: {

    },
    toggleContainer: {
        position: "absolute",
        height: 60,
        width: 60,
        left: device.width / 2 - 30,
        bottom: -30,
        zIndex: 10000
    },
    toggle: {
        left: 15,
        bottom: 15,
        position: "absolute",
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: colors.Blue,
        alignItems: "center",
        justifyContent: "center"
    }
})