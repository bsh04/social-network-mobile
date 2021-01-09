import React, {Dispatch, SetStateAction, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {colors, CustomButton, FlexBox} from "..";
import {RadioButton} from "../ui/RadioButton/RadioButton";
import {ContentTypesI} from "../../types/types";

interface FiltersProps {
    contentTypes: Array<ContentTypesI>
    setContentType: Dispatch<SetStateAction<ContentTypesI[]>>
}

export const Filters: React.FC<FiltersProps> = ({contentTypes, setContentType}) => {
    return (
        <View style={styles.container}>
            <ScrollView style={{flex: 1}}>
                <FlexBox flex={{directionRow: false}}>
                    <Text style={styles.title}>Фильтры</Text>
                    <Text style={styles.sectionTitle}>Тип ленты</Text>
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
        height: "100%",
    },
    title: {
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        fontSize: 20,
        color: colors.Allports,
        paddingBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        paddingBottom: 10,
        color: colors.Darkslategray,
        fontWeight: "bold"
    }
})