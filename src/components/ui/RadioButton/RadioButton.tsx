import React, {Dispatch, SetStateAction} from 'react';
import {View, StyleSheet, Text} from "react-native";
import {colors, FlexBox} from "../..";
import {ContentType, ContentTypesI} from "../../../types/types";

interface RadioButtonProps {
    items: Array<ContentTypesI>
    setItems: Dispatch<SetStateAction<ContentTypesI[]>>
}

interface RadioButtonItemProps {
    item: ContentTypesI
    setChecked: (type: ContentType) => void
    last: boolean
}

const RadioButtonItem: React.FC<RadioButtonItemProps> = ({setChecked, item, last}) => {
    const {title, checked, type} = item
    return (
        <FlexBox styles={[styles.row, {paddingBottom: last ? 0 : 10}]} flex={{directionRow: true, alignItems: "center"}} onPress={() => setChecked(type)}>
            <View style={styles.radio}>
                {checked && <View style={styles.checkedPoint}/>}
            </View>
            <Text style={[styles.title, {color: checked ? colors.Black : colors.DoveGrey}]}>{title}</Text>
        </FlexBox>
    )
}

export const RadioButton: React.FC<RadioButtonProps> = ({items, setItems}) => {
    const handleChangeChecked = (type: ContentType) => {
        setItems([...items].map(item => item.type === type ? {...item, checked: true} : {...item, checked: false}))
    }

    return (
        <View style={styles.container}>
            {items.map((item, index) => {
                return <RadioButtonItem setChecked={handleChangeChecked} key={index} item={item} last={index === items.length} />
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
        borderColor: colors.Gray,
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    checkedPoint: {
        borderRadius: 50,
        width: 13,
        height: 13,
        backgroundColor: colors.Pelorous,
    },
    title: {
        paddingLeft: 10,
        fontSize: 16
    }
})