import React, {Dispatch, SetStateAction, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {colors, CustomButton, FlexBox} from "..";
import {ButtonItemProps, RadioButton} from "../ui/RadioButton/RadioButton";
import {ContentType, ContentTypeView} from "../../types/types";

interface FiltersProps {
    contentTypes: Array<ButtonItemProps>
    setContentType: Dispatch<SetStateAction<ButtonItemProps[]>>
}

export const Filters: React.FC<FiltersProps> = ({contentTypes, setContentType}) => {
    return (
        <View style={styles.container}>
            <ScrollView style={{flex: 1}}>
                <FlexBox flex={{directionRow: false}}>
                    <Text style={styles.title}>Фильтры</Text>
                    <RadioButton items={contentTypes} setItems={setContentType} />
                </FlexBox>
            </ScrollView>
            <CustomButton
                title={"Применить"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.WhiteSmoke,
        height: "100%"
    },
    title: {
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        fontSize: 20,
        color: colors.Allports,
        paddingBottom: 10,
    }
})