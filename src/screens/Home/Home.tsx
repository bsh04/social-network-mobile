import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, Text, View, StyleSheet, Animated, TouchableOpacity} from "react-native";
import {colors, device, FlexBox, Header} from "../../components";
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native"
import {} from "@react-navigation/drawer"

export const Home: React.FC = ({navigation} : React.ComponentProps<any>) => {
    // const navigation = useNavigation()
    const menuHeightValue = useRef(new Animated.Value(40)).current;

    const [isOpenMenu, setOpenMenu] = useState<boolean>(true)

    const handleToggle = () => {
        setOpenMenu(!isOpenMenu)
    }

    const animatedHandler = (item: Animated.Value, value: number) => {
        Animated.timing(item, {
            toValue: value,
            duration: 100,
            useNativeDriver: false,
        }).start();
    }

    useEffect(() => {
        if (isOpenMenu) {
           animatedHandler(menuHeightValue, 40)
        } else {
            animatedHandler(menuHeightValue, 200)
        }
    }, [isOpenMenu])

    return (
        <>
            <>
                <Animated.View style={[styles.menuContainer, {
                    maxHeight: menuHeightValue
                }]}>
                    <FlexBox styles={styles.menuHeader} flex={{justifyContent: "space-between", alignItems: "center", directionRow: true}}>
                        <Text style={styles.contentType}>Новости</Text>
                        <Icon name={"ios-options"} type={"ionicon"} color={colors.White} onPress={() => navigation.openDrawer()}/>
                    </FlexBox>
                    <FlexBox style={styles.paramsContainer}>
                        <Text>вторая</Text>
                        <Text>вторая</Text>
                    </FlexBox>
                    <TouchableOpacity style={styles.toggleContainer} onPress={handleToggle}>
                        <View style={[styles.toggle]} >
                            <Icon
                                name={`keyboard-arrow-${isOpenMenu ? "up" : "down"}`}
                                type={"material"}
                                color={colors.White}
                                style={styles.toggleIcon}
                            />
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
        backgroundColor: colors.HavelockBlue,
        overflow: "hidden",
        paddingBottom: 10,
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
    toggleIcon: {
      position: "relative",
      top: 1,
    },
    toggle: {
        position: "absolute",
        left: 5,
        bottom: 5,
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: colors.BlueLagoon,
        alignItems: "center",
        justifyContent: "center"
    }
})