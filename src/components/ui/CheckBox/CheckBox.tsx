import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Animated, ViewStyle} from "react-native";
import {RolesI, RoleType} from "../../../types/types";
import {colors} from "../../stylesheet";
import {FlexBox} from "../..";
import {Icon} from "react-native-elements";
import {animatedHandler} from "../../../hooks/useAnimatedHandler";

interface CheckboxItem {
    title: string
    checked: boolean
    id: string
}

interface CheckBoxProps {
    item: CheckboxItem
    last: boolean
    setSelected: (id: string) => void
    withoutName?: boolean
    disabled?: boolean
    style?: ViewStyle
}

export const CheckBox: React.FC<CheckBoxProps> = ({item, last, setSelected, withoutName, disabled, style}) => {
    const {id, title, checked} = item

    const positionIconT = useRef(new Animated.Value(-20)).current;
    const positionIconL = useRef(new Animated.Value(-15)).current;

    useEffect(() => {
        if (checked) animatedHandler([positionIconT, positionIconL], [0, 1])
        else animatedHandler([positionIconT, positionIconL], [-20, -15])
    }, [checked])

    return (
        <FlexBox styles={[style, {paddingBottom: last ? 0 : 10}]} flex={{directionRow: true, alignItems: "center"}} onPress={disabled ? undefined : () =>  setSelected(id)}>
            <View style={styles.radio}>
                <Animated.View style={{
                    bottom: positionIconT,
                    right: positionIconL,
                }}>
                    <Icon type={'feather'} name={"check"} style={styles.check} size={20}/>
                </Animated.View>
            </View>
            {!withoutName && <Text style={[styles.title, {color: checked ? colors.Black : colors.DoveGrey, opacity: disabled ? .3 : 1}]}>{title}</Text>}
        </FlexBox>
    )
}

const styles = StyleSheet.create({
    radio: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.DoveGrey,
        width: 20,
        position: "relative",
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