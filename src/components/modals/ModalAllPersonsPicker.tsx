import React, {useEffect, useState} from "react";
import {useFetchFriends} from "../../hooks/useFetchFriends";
import {useFetchClassmates} from "../../hooks/useFetchClassmates";
import {useFetchTeachers} from "../../hooks/useFetchTeachers";
import {useSelector} from "react-redux";
import {friendsSelectors} from "../../redux/slices/friendsSlice";
import {classmatesSelectors} from "../../redux/slices/classmatesSlice";
import {teachersSelectors} from "../../redux/slices/teachersSlice";
import {RoleType, RoleTypeView} from "../../types/types";
import {Overlay} from "react-native-elements";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors, FlexBox} from "..";
import {UsersListRender} from "../../screens";

interface ModalAllPersonsPickerProps {
    visible: boolean
    setVisible: (value: boolean) => void
    onSelected: (ids: Array<number>) => void
    initSelectedPeople: Array<number>
}

export const ModalAllPersonsPicker: React.FC<ModalAllPersonsPickerProps> = ({visible, setVisible, onSelected, initSelectedPeople}) => {
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
        if (multipleSelected) {
            setSelectedPersons(selectedPersons.includes(Number(id)) ? [...selectedPersons.filter(item => item !== Number(id))] : [...selectedPersons, Number(id)])
        } else {
            onSelected([Number(id)])
            setVisible(false)
        }
    }

    const handleSubmit = () => {
        onSelected(selectedPersons)
        setVisible(false)
    }

    useEffect(() => {
        if (!visible) setMultipleSelected(false)
    }, [visible])

    useEffect(() => {
        setSelectedPersons(initSelectedPeople)
    }, [initSelectedPeople])

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
                                    style={[styles.tabsSectionListHeader, {borderRightWidth: index !== 2 ? 1 : 0}]}
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
                </FlexBox>
                {
                    multipleSelected && (
                        <FlexBox styles={styles.tabsSectionList} flex={{directionRow: true}}>
                            <TouchableOpacity
                                style={[styles.tabsSectionListFooter, {borderRightWidth: 1, borderColor: colors.LightBlack}]}
                                onPress={handleSubmit}
                            >
                                <Text style={styles.tabsSectionListHeaderTitle}>Добавить</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.tabsSectionListFooter]}
                                onPress={() => setVisible(false)}
                            >
                                <Text style={styles.tabsSectionListHeaderTitle}>Отменить</Text>
                            </TouchableOpacity>
                        </FlexBox>
                    )
                }
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
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
        borderBottomWidth: 1,
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
    },
    tabsSectionListFooter: {
        width: "45%",
        paddingHorizontal: 5,
        height: 40,
        borderTopWidth: 1,
        borderColor: colors.Allports,
        justifyContent: "center"
    }
})