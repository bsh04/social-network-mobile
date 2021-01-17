import React, {useEffect, useMemo, useRef, useState} from 'react';
import {ScrollView, Text, View, StyleSheet, Animated, TouchableOpacity} from "react-native";
import {colors, device, FlexBox, Header} from "../../components";
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native"
import {homeSelectors} from "../../redux/slices/homeSlice"
import {useSelector} from "react-redux";
import {allPersons} from "../../mockImages/mockUsers"

export const Home: React.FC = ({navigation} : React.ComponentProps<any>) => {
    // const navigation = useNavigation()
    const menuHeightValue = useRef(new Animated.Value(40)).current;
    const initFilters = useSelector(homeSelectors.getFilters())
    const contentType = useSelector(homeSelectors.getSelectedContentType())
    const selectedRoles = initFilters.rolesType.filter(role => role.selected)

    const filters = useMemo(() => selectedRoles.length > 0
            ? selectedRoles.map(role => role.title)
            : allPersons.filter(person => initFilters.people.includes(person.id)).map(person => person.name), [initFilters])

    const [isOpenMenu, setOpenMenu] = useState<boolean>(false)

    useEffect(() => {
        if (filters.length === 0) {
            setOpenMenu(false)
        }
    }, [filters])

    const handleToggle = () => {
        if (filters.length > 0) setOpenMenu(!isOpenMenu)
    }

    const animatedHandler = (item: Animated.Value, value: number) => {
        Animated.timing(item, {
            toValue: value,
            duration: 100,
            useNativeDriver: false,
        }).start();
    }

    useEffect(() => {
        if (!isOpenMenu) {
           animatedHandler(menuHeightValue, 40)
        } else {
            animatedHandler(menuHeightValue, 200)
        }
    }, [isOpenMenu])

    return (
        <>
            <>
                <Animated.View style={[styles.menuContainer, {
                    maxHeight: menuHeightValue,
                    paddingBottom: isOpenMenu ? 40 : 0
                }]}>
                    <FlexBox styles={styles.menuHeader} flex={{justifyContent: "space-between", alignItems: "center", directionRow: true}}>
                        <Text style={styles.contentType}>{contentType}</Text>
                        <Icon name={"ios-options"} type={"ionicon"} color={colors.White} onPress={() => navigation.openDrawer()}/>
                    </FlexBox>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <FlexBox style={styles.paramsContainer} flex={{directionRow: true}}>
                            {filters.map((item, index) => (
                                <View key={index} style={styles.selectedFilterItem}>
                                    <Text style={styles.selectedFilterItemText}>{item}</Text>
                                </View>
                            ))}
                        </FlexBox>
                    </ScrollView>
                    <TouchableOpacity style={styles.toggleContainer} disabled={filters.length === 0} onPress={handleToggle}>
                        <View style={[styles.toggle, {opacity: filters.length === 0 ? .5 : undefined}]}>
                            <Icon
                                name={`keyboard-arrow-${isOpenMenu ? "up" : "down"}`}
                                type={"material"}
                                color={colors.White}
                                style={styles.toggleIcon}
                            />
                        </View>
                    </TouchableOpacity>
                </Animated.View>
                </>
        </>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        backgroundColor: colors.HavelockBlue,
        overflow: "hidden",
        paddingBottom: 10,
    },
    contentType: {
        color: colors.White,
        fontSize: 18,
    },
    menuHeader: {
        height: 40,
        position: "relative",
        paddingHorizontal: 10
    },
    paramsContainer: {
        position: "relative",
        width: "100%",
        flexWrap: "wrap",
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
    },
    selectedFilterItem: {
        paddingHorizontal: 10,
        paddingBottom: 5,
        paddingTop: 2,
        flexDirection: "row",
        borderRadius: 50,
        backgroundColor: colors.ButtonTypes.BGColor.primary,
        marginHorizontal: 5,
    },
    selectedFilterItemText: {
        color: colors.White,
        textAlignVertical: "center"
    }
})