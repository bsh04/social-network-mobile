import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Animated} from "react-native";
import {RolesI, RoleType} from "../../../types/types";
import {colors} from "../../stylesheet";
import {FlexBox} from "../..";
import {Icon} from "react-native-elements";

interface CheckBoxProps {
    item: RolesI
    last: boolean
    setSelected: (type: RoleType) => void
}

export const CheckBox: React.FC<CheckBoxProps> = ({item, last, setSelected}) => {
    const {type, title, selected} = item

    const positionIconT = useRef(new Animated.Value(-20)).current;
    const positionIconL = useRef(new Animated.Value(-15)).current;

    const animatedHandler = (items: Array<Animated.Value>, value: Array<number>) => {
        items.map((item, index) => {
            Animated.timing(item, {
                toValue: value[index],
                duration: 200,
                useNativeDriver: false,
            }).start();
        })
    }

    useEffect(() => {
        if (selected) animatedHandler([positionIconT, positionIconL], [0, 0])
        else animatedHandler([positionIconT, positionIconL], [-20, -15])
    }, [selected])

    return (
        <FlexBox styles={{paddingBottom: last ? 0 : 10}} flex={{directionRow: true, alignItems: "center"}} onPress={() => setSelected(type)}>
            <View style={styles.radio}>
                <Animated.View style={{
                    bottom: positionIconT,
                    right: positionIconL,
                }}>
                    <Icon type={'feather'} name={"check"} style={styles.check} size={20}/>
                </Animated.View>
            </View>
            <Text style={[styles.title, {color: selected ? colors.Black : colors.DoveGrey}]}>{title}</Text>
        </FlexBox>
    )
}

const styles = StyleSheet.create({
    radio: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.Gray,
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },
    check: {
    },
    title: {
        paddingLeft: 10,
        fontSize: 16
    }
})