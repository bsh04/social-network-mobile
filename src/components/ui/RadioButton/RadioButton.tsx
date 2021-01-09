import React, {Dispatch, SetStateAction} from 'react';
import {View, StyleSheet, Text} from "react-native";
import {colors, FlexBox} from "../..";
import {ContentType} from "../../../types/types";

export interface ButtonItemProps {
    type: ContentType
    checked: boolean
    title: string
}

interface RadioButtonProps {
    items: Array<ButtonItemProps>
    setItems: Dispatch<SetStateAction<ButtonItemProps[]>>
}

interface RadioButtonItemProps {
    item: ButtonItemProps
    setChecked: (type: ContentType) => void
}

const RadioButtonItem: React.FC<RadioButtonItemProps> = ({setChecked, item}) => {
    const {title, checked, type} = item
    return (
        <FlexBox style={styles.row} flex={{directionRow: true, alignItems: "center"}} onPress={() => setChecked(type)}>
            <View style={styles.radio}>
                {checked && <View style={styles.checkedPoint}/>}
            </View>
            <Text style={[styles.title, {color: checked ? colors.Black : colors.Gray}]}>{title}</Text>
        </FlexBox>
    )
}

export const RadioButton: React.FC<RadioButtonProps> = ({items, setItems}) => {
    const handleChangeChecked = (type: ContentType) => {
        const newItems = [...items]
        newItems.map(item => item.type === type ? item.checked = true : item.checked = false)
        setItems(newItems)
    }

    return (
        <View style={styles.container}>
            {items.map((item, index) => {
                return <RadioButtonItem setChecked={handleChangeChecked} key={index} item={item} />
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    row: {

    },
    radio: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.Blue,
        width: 30,
        height: 30,
        backgroundColor: colors.WhiteGray,
    },
    checkedPoint: {
        borderRadius: 50,
        width: 15,
        height: 15,
        backgroundColor: colors.Green,
    },
    title: {
        paddingLeft: 10,
    }
})