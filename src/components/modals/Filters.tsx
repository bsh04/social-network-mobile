import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors, CustomButton, FlexBox} from "..";
import {RadioButton} from "../ui/RadioButton/RadioButton";
import {ContentType, ContentTypesI, FiltersI, RoleType, RoleTypeView} from "../../types/types";
import {CheckBox} from "../ui/CheckBox/CheckBox";
import {allPersons} from "../../mockImages/mockUsers"
import {Persons} from "../../types/interfaces";
import {Icon, Overlay} from "react-native-elements";
import {useSelector} from "react-redux";
import {homeSelectors} from "../../redux/slices/homeSlice";
import {ModalAllPersonsPicker} from "./ModalAllPersonsPicker";
import {ViewPersonsPicker} from "./ViewPersonsPicker";
import {useSaveFilters} from "./hooks/useSaveFilters"
import {useNavigation} from "@react-navigation/native"

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

export const Filters: React.FC<{navigation: any}> = ({navigation}) => {
    const {save} = useSaveFilters()
    console.log(navigation)

    const initFilters = useSelector(homeSelectors.getFilters())
    const initContentTypes = useSelector(homeSelectors.getContentTypes())

    const [filters, setFilters] = useState<FiltersI>(initFilters)
    const [contentTypes, setContentTypes] = useState<Array<ContentTypesI>>(initContentTypes)

    const initSelectedPersons = allPersons.filter(person => filters.people.includes(person.id))
    const [selectedPersons, setSelectedPersons] = useState<Array<Persons>>([...initSelectedPersons])
    const [selectedPersonsIds, setSelectedPersonsIds] = useState<Array<number>>([...initSelectedPersons.map(person => person.id)])
    const [viewPersonValues, setViewPersonValues] = useState<"all" | "none" | "selectively">("all")

    const [openModalPersons, setOpenModalPersons] = useState<boolean>(false)

    const handleChangeSelectedRoles = (type: string) => {
        setFilters({...filters, rolesType: [...rolesType].map(item => item.type === type ? {...item, selected: !item.selected} : {...item})})
        setViewPersonValues("all")
    }

    const handleDeleteSelectedPerson = (id: number) => {
        setSelectedPersons([...selectedPersons].filter(person => person.id !== id))
        setSelectedPersonsIds([...selectedPersonsIds.filter(item => item !== id)])
    }

    const handleAddSelectedPerson = (ids: Array<number>) => {
        const uniquesIds = [...selectedPersonsIds, ...ids].filter((id, index, array) => array.indexOf(id) === index)
        setSelectedPersons([...allPersons.filter(person => uniquesIds.includes(person.id))])
        setSelectedPersonsIds([...uniquesIds])
    }

    const isNewsSelected = contentTypes.find(item => item.type === ContentType.News ? item.checked : undefined)?.checked
    const {rolesType} = filters


    const handleSave = () => {
        save(contentTypes, filters)
        navigation.openDrawer()
    }

    useEffect(() => {
        setFilters({...filters, people: selectedPersonsIds})
    }, [selectedPersons])

    useEffect(() => {
        if (viewPersonValues === "all" || viewPersonValues === "none") {
            setSelectedPersons([])
        } else {
            setSelectedPersons(initSelectedPersons)
        }
        if (viewPersonValues !== "all") setFilters({...filters, rolesType: filters.rolesType.map(item => ({...item, selected: false}))})
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
                            {rolesType.map((item, index) => <CheckBox
                                disabled={viewPersonValues === "selectively"}
                                setSelected={handleChangeSelectedRoles}
                                item={{
                                    checked: item.selected,
                                    id: item.type,
                                    title: item.title
                                }}
                                key={index}
                                last={index === rolesType.length}
                            />)}
                            <Text style={styles.sectionTitle}>Отображаемые новости</Text>
                            {selectedPersons.map((item, index) => <SelectedPerson setSelected={handleDeleteSelectedPerson} key={index} person={item}/>)}
                            <ViewPersonsPicker value={viewPersonValues} setValue={(value) => setViewPersonValues(value)}/>
                            {
                                viewPersonValues === "selectively" &&
                                    <CustomButton
                                        onPress={() => setOpenModalPersons(true)}
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
                onPress={handleSave}
                mainStyles={{paddingHorizontal: 20, paddingTop: 10, marginBottom: 10}}
                title={"Применить"}
            />
            <ModalAllPersonsPicker
                initSelectedPeople={selectedPersonsIds}
                setVisible={setOpenModalPersons}
                visible={openModalPersons}
                onSelected={handleAddSelectedPerson}
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
    pickerItem: {
        borderWidth: 1,
        borderColor: colors.Black,
        color: colors.HavelockBlue
    }
})