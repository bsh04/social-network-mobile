import React, {Dispatch, SetStateAction} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {colors, CustomButton, FlexBox} from "..";
import {RadioButton} from "../ui/RadioButton/RadioButton";
import {ContentType, ContentTypesI, FiltersI, RoleType} from "../../types/types";
import {CheckBox} from "../ui/CheckBox/CheckBox";

interface FiltersProps {
    contentTypes: Array<ContentTypesI>
    setContentTypes: Dispatch<SetStateAction<ContentTypesI[]>>
    filters: FiltersI
    setFilters: Dispatch<React.SetStateAction<FiltersI>>
}

export const Filters: React.FC<FiltersProps> = ({
    contentTypes,
    setContentTypes,
    filters,
    setFilters,
}) => {
    const {rolesType} = filters

    const handleChangeSelectedRoles = (type: RoleType) => {
        const newRoles = [...rolesType]
        newRoles.map(item => item.type === type ? item.selected = !item.selected : item)
        setFilters({...filters, rolesType: newRoles})
    }

    const isNewsSelected = contentTypes.find(item => item.type === ContentType.News ? item.checked : undefined)?.checked

    return (
        <View style={styles.container}>
            <ScrollView style={{flex: 1}}>
                <FlexBox flex={{directionRow: false}}>
                    <Text style={styles.title}>Фильтры</Text>
                    <Text style={styles.sectionTitle}>Тип ленты</Text>
                    <RadioButton items={contentTypes} setItems={setContentTypes} />
                    {isNewsSelected &&
                        <>
                            <Text style={styles.sectionTitle}>Тип контента</Text>
                            {rolesType.map((item, index) => <CheckBox setSelected={handleChangeSelectedRoles} item={item} key={index} last={index === rolesType.length} />)}
                        </>
                    }
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