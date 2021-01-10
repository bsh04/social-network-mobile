import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {colors, CustomButton, FlexBox} from "..";
import {RadioButton} from "../ui/RadioButton/RadioButton";
import {ContentType, ContentTypesI, FiltersI, RoleType} from "../../types/types";
import {CheckBox} from "../ui/CheckBox/CheckBox";
import {allPersons} from "../../mockImages/mockUsers"
import {Persons} from "../../types/interfaces";
import {Icon} from "react-native-elements";
import {useSelector} from "react-redux";
import {homeSelectors} from "../../redux/slices/homeSlice";
import {Picker} from '@react-native-picker/picker';

interface FiltersProps {
}

interface SelectedPersonProps {
    person: Persons
    setSelected: (id: number) => void
}

const SelectedPerson: React.FC<SelectedPersonProps> = ({person, setSelected}) => {
    const {id, name} = person
    return (
        <FlexBox styles={styles.selectedPersonContainer} flex={{alignItems: "center", justifyContent: "space-between", directionRow: true}}>
            <Text numberOfLines={1} lineBreakMode={"clip"} style={styles.selectedPersonName}>{name}</Text>
            <Icon type={"antdesign"} name={"close"} color={colors.LightBlack} containerStyle={{marginRight: 5}} size={20} onPress={() => setSelected(id)} />
        </FlexBox>
    )
}

interface ViewPersonsPickerProps {
    value: string
    setValue: (value: "all" | "none" | "selectively") => void
}

const ViewPersonsPicker: React.FC<ViewPersonsPickerProps> = ({value, setValue}) => {
    return (
        <View style={styles.picker}>
            <Picker
                selectedValue={value}
                style={{width: "100%", color: colors.Black, height: 30}}
                onValueChange={(itemValue) => setValue(String(itemValue) as "all" | "none" | "selectively")}
                dropdownIconColor={colors.White}
            >
                <Picker.Item label={"Все"} value={"all"} />
                <Picker.Item label={"Никакие"} value={"none"}/>
                <Picker.Item label={"Выборочно"} value={"selectively"} />
            </Picker>
        </View>
    )
}

export const Filters: React.FC<FiltersProps> = () => {
    const initFilters = useSelector(homeSelectors.getFilters())
    const initContentTypes = useSelector(homeSelectors.getContentTypes())

    const [filters, setFilters] = useState<FiltersI>(initFilters)
    const [contentTypes, setContentTypes] = useState<Array<ContentTypesI>>(initContentTypes)

    const initSelectedPersons = allPersons.filter(person => filters.people.includes(person.id))
    const [selectedPersons, setSelectedPersons] = useState<Array<Persons>>(initSelectedPersons)
    const [viewPersonValues, setViewPersonValues] = useState<"all" | "none" | "selectively">("all")

    const handleChangeSelectedRoles = (type: RoleType) => {
        setFilters({...filters, rolesType: [...rolesType].map(item => item.type === type ? {...item, selected: !item.selected} : {...item})})
    }

    const handleDeleteSelectedPerson = (id: number) => {
        setSelectedPersons([...selectedPersons].filter(person => person.id !== id))
    }

    const isNewsSelected = contentTypes.find(item => item.type === ContentType.News ? item.checked : undefined)?.checked
    const {rolesType} = filters

    useEffect(() => {
        if (viewPersonValues === "all" || viewPersonValues === "none") {
            setSelectedPersons([])
        } else {
            setSelectedPersons(initSelectedPersons)
        }
    }, [viewPersonValues])

    return (
        <View style={styles.container}>
            <ScrollView style={{flex: 1}}>
                <FlexBox styles={{paddingHorizontal: 20}} flex={{directionRow: false}}>
                    <Text style={styles.title}>Фильтры</Text>
                    <Text style={styles.sectionTitle}>Тип ленты</Text>
                    <RadioButton items={contentTypes} setItems={setContentTypes} />
                    {isNewsSelected &&
                        <>
                            <Text style={[styles.sectionTitle]}>Тип контента</Text>
                            {rolesType.map((item, index) => <CheckBox setSelected={handleChangeSelectedRoles} item={item} key={index} last={index === rolesType.length} />)}
                            <Text style={styles.sectionTitle}>Отображаемые новости</Text>
                            {selectedPersons.map((item, index) => <SelectedPerson setSelected={handleDeleteSelectedPerson} key={index} person={item}/>)}
                            <ViewPersonsPicker value={viewPersonValues} setValue={(value) => setViewPersonValues(value)}/>
                            {
                                viewPersonValues === "selectively" &&
                                    <CustomButton
                                        mainStyles={{paddingTop: 10, marginBottom: 10}}
                                        containerStyle={{width: "60%"}}
                                        buttonType={"info"}
                                        title={"Добавить"}
                                    />
                            }
                        </>
                    }
                </FlexBox>
            </ScrollView>
            <CustomButton
                mainStyles={{paddingHorizontal: 20, paddingTop: 10, marginBottom: 10}}
                title={"Применить"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.WhiteSmoke,
        height: "100%",
    },
    title: {
        paddingTop: 10,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        fontSize: 20,
        color: colors.Allports,
    },
    sectionTitle: {
        fontSize: 18,
        paddingBottom: 10,
        paddingTop: 15,
        color: colors.Darkslategray,
        fontWeight: "bold"
    },
    selectedPersonContainer: {
        borderColor: colors.Pelorous,
        borderWidth: 1,
        borderRadius: 50,
        padding: 0,
        marginBottom: 10,
    },
    selectedPersonName: {
        width: "80%",
        color: colors.LightBlack,
        paddingLeft: 10,
    },
    picker: {
        borderWidth: 2,
        borderColor: colors.BlueLagoon,
        borderRadius: 50,
        alignItems: "center",
        height: 30,
        justifyContent: "center"
    },
    pickerItem: {
        borderWidth: 1,
        borderColor: colors.Black,
        color: colors.HavelockBlue
    }

})