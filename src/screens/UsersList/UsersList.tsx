import React, {useEffect, useRef, useState} from 'react';
import {colors, CustomInput, EmptyUserAvatar, FlexBox, Header, InWorkScreen, MainLayout} from "../../components";
import {useRoute, RouteProp} from "@react-navigation/native"
import {teachersSelectors} from "../../redux/slices/teachersSlice"
import {friendsSelectors} from "../../redux/slices/friendsSlice"
import {classmatesSelectors} from "../../redux/slices/classmatesSlice"
import {ParamList} from "../../types/types"
import {useSelector} from "react-redux";
import {Persons} from "../../types/interfaces";
import {View, StyleSheet, Text, FlatList, GestureResponderEvent, Animated, ViewStyle} from "react-native";
import {Image} from "react-native-elements";
import {Loading} from "../../components/ui/Loading/Loading";
import {CheckBox} from "../../components/ui/CheckBox/CheckBox";

interface UsersListHeaderProps {
    searchValue: string
    setSearchValue: (value: string) => void
    handleSearch: () => void
}

const UsersListHeader: React.FC<UsersListHeaderProps> = ({searchValue, setSearchValue, handleSearch}) => {
    return (
        <>
            <CustomInput
                withClean
                setValue={setSearchValue}
                firstInput
                label={"Поиск по имени"}
                onChange={(event) => setSearchValue(event.nativeEvent.text)}
                value={searchValue}
                onSubmitEditing={handleSearch}
            />
        </>
    )
}

interface UsersListRenderProps {
    data: Array<Persons>
    onLongPress?: (event: GestureResponderEvent) => void
    onPress?: (event: GestureResponderEvent) => void
    withCheckBox?: boolean
    onSelectedPerson?: (id: string) => void
    selectedList?: Array<number>
    positionCheckBox?: number | Animated.Value
    propsStyles?: ViewStyle
}

export const UsersListRender: React.FC<UsersListRenderProps> = ({
    data,
    onLongPress,
    withCheckBox,
    onPress,
    onSelectedPerson,
    selectedList,
    positionCheckBox,
    propsStyles,
}) => {
    return (
        <FlatList
        style={[styles.listContainer, propsStyles]}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index, separators}) => {
        return <FlexBox
            flex={{directionRow: true, alignItems: "center", justifyContent: "space-between"}}
            styles={styles.item}
            key={index}
            onLongPress={onLongPress}
            onPress={() => onSelectedPerson ? onSelectedPerson(String(item.id)) : onPress}
        >
            <FlexBox
                flex={{justifyContent: "space-between", alignItems: "center", directionRow: true}}
                onLongPress={onLongPress}
                onPress={() => onSelectedPerson ? onSelectedPerson(String(item.id)) : onPress}
            >
                    {
                         item.avatar ?
                             <Image source={item.avatar!} containerStyle={styles.avatarContainer}/>
                             :
                             <EmptyUserAvatar style={styles.avatarContainer}/>
                     }
                     <Text style={styles.userName}>{item.name}</Text>
            </FlexBox>
            {
                withCheckBox && (
                    <Animated.View style={{right: positionCheckBox}}>
                        <CheckBox
                            item={{
                                title: item.name,
                                id: String(item.id),
                                checked: selectedList ? selectedList.includes(item.id) : true
                            }}
                            last={true}
                            withoutName={true}
                            setSelected={(id) => onSelectedPerson && onSelectedPerson(id)}
                        />
                    </Animated.View>
                )
            }
             </FlexBox>
        }}
        />
    )
}

export const UsersList: React.FC = () => {

    const {params} = useRoute<RouteProp<ParamList, 'UsersList'>>()
    const initData = params.type === "friends"
        ? useSelector(friendsSelectors.getFriends())
        : params.type === "classmates"
            ? useSelector(classmatesSelectors.getClassmates())
            : useSelector(teachersSelectors.getTeachers())

    const title = params.type === "friends"
        ? "Список друзей"
        : params.type === "classmates"
            ? "Список одногруппников"
            : "Список преподавателей"

    const [data, setData] = useState<Array<Persons>>(initData)
    const [searchValue, setSearchValue] = useState<string>("")
    const [isLoading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        if (searchValue === "" ) handleSearch()
    }, [searchValue])

    const handleSearch = () => {
        setLoading(true)
        if (searchValue === "") setData(initData)
        else setData(data.filter(item => item.name.includes(searchValue)))
        setLoading(false)
    }

    return (
        <>
            <Header title={title} />
            <UsersListHeader handleSearch={handleSearch} searchValue={searchValue} setSearchValue={setSearchValue}/>
            {
                isLoading
                ?
                    <Loading/>
                    :
                    <UsersListRender data={data}/>
            }
        </>
    )
};

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 10,
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.Pelorous,
        marginRight: 10,
    },
    item: {
        paddingVertical: 5,
        overflow: "hidden",
    },
    userName: {
        paddingLeft: 10,
        fontSize: 18
    }
})