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
import {Picker} from '@react-native-picker/picker';
import {useFetchFriends} from "../../hooks/useFetchFriends";
import {useFetchClassmates} from "../../hooks/useFetchClassmates";
import {useFetchTeachers} from "../../hooks/useFetchTeachers";
import {friendsSelectors} from "../../redux/slices/friendsSlice";
import {classmatesSelectors} from "../../redux/slices/classmatesSlice";
import {teachersSelectors} from "../../redux/slices/teachersSlice";
import {UsersList, UsersListRender} from "../../screens";
import {Loading} from "../ui/Loading/Loading";

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

interface ModalAllPersonsPickerProps {
    visible: boolean
    setVisible: (value: boolean) => void
    onSelected: (ids: Array<number>) => void
    initSelectedPeople: Array<number>
}

const ModalAllPersonsPicker: React.FC<ModalAllPersonsPickerProps> = ({visible, setVisible, onSelected, initSelectedPeople}) => {
    useFetchFriends()
    useFetchClassmates()
    useFetchTeachers()

    const friends = useSelector(friendsSelectors.getFriends())
    const classmates = useSelector(classmatesSelectors.getClassmates())
    const teachers = useSelector(teachersSelectors.getTeachers())

    const ListRender = {friends, classmates, teachers, liked: friends, university: friends}

    const [selectedPersons, setSelectedPersons] = useState(initSelectedPeople)

    const [viewRole, setViewRole] = useState<RoleType>(RoleType.Friends)
    const [multipleSelected, setMultipleSelected] = useState<boolean>(false)

    const handleAdded = (id: string) => {
        setSelectedPersons(selectedPersons.includes(Number(id)) ? [...selectedPersons.filter(item => item !== Number(id))] : [...selectedPersons, Number(id)])
        // onSelected([Number(id)])
        if (!multipleSelected) {
            setVisible(false)
        }
    }

    // const checkBoxFormatParse = (person)

    return (
            <Overlay
                isVisible={visible}
                onBackdropPress={() => setVisible(false)}
                overlayStyle={{padding: 0}}
            >
                <View style={styles.tabsSectionList}>
                    <FlexBox styles={styles.tabsSectionListHeaders} flex={{directionRow: true, alignItems: "center"}}>
                        {[...Object.values(RoleType)].map((role, index) => {
                            if (index < 3) {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        style={[styles.tabsSectionListHeader, {borderRightWidth: index !== 2 ? 2 : 0}]}
                                        onPress={() => setViewRole(role)}
                                    >
                                        <Text style={styles.tabsSectionListHeaderTitle}>{RoleTypeView[role]}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        })}
                    </FlexBox>
                    <FlexBox styles={styles.tabsSectionListContent}>
                        <UsersListRender
                            selectedList={selectedPersons}
                            data={ListRender[viewRole]}
                            withCheckBox={multipleSelected}
                            onLongPress={() => setMultipleSelected(!multipleSelected)}
                            onSelectedPerson={handleAdded}
                        />
                        {/*{*/}
                        {/*    ListRender[viewRole]?.map((person, index) => {*/}
                        {/*        return (*/}
                        {/*            <FlexBox*/}
                        {/*                flex={{directionRow: true}}*/}
                        {/*                key={index}*/}
                        {/*                onLongPress={() => setMultipleSelected(true)}*/}
                        {/*                onPress={() => handleAdded(person.id)}*/}
                        {/*            >*/}
                        {/*                {*/}
                        {/*                    multipleSelected ?*/}
                        {/*                        <CheckBox item={person} last={} setSelected={} />*/}
                        {/*                        :*/}
                        {/*                        <Text>{person.name}</Text>*/}
                        {/*                }*/}
                        {/*            </FlexBox>*/}
                        {/*        )*/}
                        {/*    })*/}
                        {/*}*/}
                    </FlexBox>
                </View>
            </Overlay>
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

    const [openModalPersons, setOpenModalPersons] = useState<boolean>(false)

    const handleChangeSelectedRoles = (type: string) => {
        setFilters({...filters, rolesType: [...rolesType].map(item => item.type === type ? {...item, selected: !item.selected} : {...item})})
    }

    const handleDeleteSelectedPerson = (id: number) => {
        setSelectedPersons([...selectedPersons].filter(person => person.id !== id))
    }

    const handleAddSelectedPerson = (ids: Array<number>) => {
        setSelectedPersons([...selectedPersons, ...allPersons.filter(person => ids.includes(person.id))])
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
                            {rolesType.map((item, index) => <CheckBox
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
                mainStyles={{paddingHorizontal: 20, paddingTop: 10, marginBottom: 10}}
                title={"Применить"}
            />
            <ModalAllPersonsPicker
                initSelectedPeople={filters.people}
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
    },
    tabsSectionList: {
        width: "100%"
    },
    tabsSectionListHeaders: {
        width: "100%"
    },
    tabsSectionListHeader: {
        width: "30%",
        paddingHorizontal: 5,
        height: 40,
        borderBottomWidth: 2,
        borderColor: colors.Allports,
        justifyContent: "center"
    },
    tabsSectionListHeaderTitle: {
        width: '100%',
        textAlign: "center",
        fontWeight: "bold",
        color: colors.LightBlack,
    },
    tabsSectionListContent: {
        height: 500,
    }
})