import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, Text, View, StyleSheet, Animated, TouchableOpacity} from "react-native";
import {colors, device, FlexBox, Header} from "../../components";
import {Icon} from "react-native-elements";

export const Home: React.FC = () => {
    const menuHeight = useRef(new Animated.Value(40)).current;

    const [isOpenMenu, setOpenMenu] = useState<boolean>(true)

    const handleToggle = () => {
        setOpenMenu(!isOpenMenu)
    }

    useEffect(() => {
        if (isOpenMenu) {
            Animated.timing(menuHeight, {
                toValue: 100,
                duration: 100,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(menuHeight, {
                toValue: 40,
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
                    <FlexBox styles={styles.menuHeader} flex={{justifyContent: "space-between", alignItems: "center", directionRow: true}}>
                        <Text style={styles.contentType}>Новости</Text>
                        <Icon name={"ios-options"} type={"ionicon"} color={colors.White}/>
                    </FlexBox>
                    <FlexBox style={styles.paramsContainer}>
                        <Text>вторая</Text>
                        <Text>вторая</Text>
                    </FlexBox>
                    <TouchableOpacity style={styles.toggleContainer} onPress={handleToggle}>
                        <View style={[styles.toggle]} >
                            <Icon name={`keyboard-arrow-${isOpenMenu ? "up" : "down"}`} type={"material"} color={colors.White}/>
                        </View>
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
        overflow: "hidden"
    },
    contentType: {
        color: colors.White,
    },
    menuHeader: {
        height: 40,
        position: "relative",
    },
    paramsContainer: {
        position: "absolute"

    },
    toggleContainer: {
        position: "absolute",
        height: 40,
        width: 40,
        bottom: 0,
        left: device.width / 2 - 20,
        zIndex: 10000
    },
    toggle: {
        position: "absolute",
        left: 5,
        bottom: 5,
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: colors.Blue,
        alignItems: "center",
        justifyContent: "center"
    }
})