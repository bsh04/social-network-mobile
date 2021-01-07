import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {useFetchFriends} from "../hooks/useFetchFriends"
import {useFetchTeachers} from "../hooks/useFetchTeachers"
import {useFetchClassmates} from "../hooks/useFetchClassmates"
import {friendsSelectors} from "../../../redux/slices/friendsSlice"
import {classmatesSelectors} from "../../../redux/slices/classmatesSlice"
import {teachersSelectors} from "../../../redux/slices/teachersSlice"
import {useSelector} from "react-redux";
import {colors, device, EmptyUserAvatar, FlexBox} from "../../../components";
import {Avatar, Icon, Image} from "react-native-elements";
import {Persons} from "../../../types/interfaces";
import {useNavigation} from "@react-navigation/native"

interface PersonsRenderProps {
    type: "friends" | "classmates" | "teachers"
    data: Array<Persons>
}

const PersonsRender: React.FC<PersonsRenderProps> = ({data, type}) => {
    const navigation = useNavigation()
    let items = [...data]
    items = items.length > 5 ? [...items.splice(0, 6)] : items
    return (
        <FlexBox flex={{directionRow: true, alignItems: "center"}} styles={{paddingLeft: 10, height: 55}} onPress={() => navigation.navigate("UsersList", {type})}>
            {items.map((item, index) => {
                if (index === 5) {
                    return <View key={index} style={[styles.lastFriend, styles.avatarContainer]}>
                        <Text style={styles.countFriends}>+ {data.length - items.length}</Text>
                    </View>
                }
                return (
                    <View key={index} style={styles.wrapper}>
                        {
                            item.avatar ?
                                <Image source={item.avatar!} containerStyle={styles.avatarContainer}/>
                                :
                                <EmptyUserAvatar style={styles.avatarContainer}/>
                        }
                    </View>
                )
                }
            )}
        </FlexBox>
    )
}

export const ProfileDetails: React.FC = () => {
    useFetchFriends()
    useFetchClassmates()
    useFetchTeachers()
    const navigation = useNavigation()

    const friends = useSelector(friendsSelectors.getFriends())
    const classmates = useSelector(classmatesSelectors.getClassmates())
    const teachers = useSelector(teachersSelectors.getTeachers())

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.horLine}/>
                <Text style={styles.friendsTitle}>Друзья</Text>
                <FlexBox flex={{justifyContent: "space-between", alignItems: "center", directionRow: true}}>
                    <FlexBox flex={{directionRow: true, alignItems: "center"}}>
                        <Icon name={"group"} type={"font-awesome"} size={40} color={colors.Allports} />
                        <PersonsRender data={friends} type={"friends"}/>
                    </FlexBox>
                    <Icon name={"arrow-right"} type={"simple-line-icon"} onPress={() => navigation.navigate("UsersList", {type: "friends"})}/>
                </FlexBox>
                <View style={styles.horLine}/>
                <Text style={[styles.friendsTitle]}>Одногруппники</Text>
                <FlexBox flex={{justifyContent: "space-between", alignItems: "center", directionRow: true}}>
                    <FlexBox flex={{directionRow: true, alignItems: "center"}}>
                        <Icon name={"users"} type={"entypo"} size={40} color={colors.Allports} />
                        <PersonsRender data={classmates} type={"classmates"}/>
                    </FlexBox>
                    <Icon name={"arrow-right"} type={"simple-line-icon"} onPress={() => navigation.navigate("UsersList", {type: "classmates"})}/>
                </FlexBox>
                <View style={styles.horLine}/>
                <Text style={[styles.friendsTitle]}>Преподаватели</Text>
                <FlexBox flex={{justifyContent: "space-between", alignItems: "center", directionRow: true}}>
                    <FlexBox flex={{directionRow: true, alignItems: "center"}}>
                        <Icon name={"teach"} type={"material-community"} size={40} color={colors.Allports} />
                        <PersonsRender data={teachers} type={"teachers"}/>
                    </FlexBox>
                    <Icon name={"arrow-right"} type={"simple-line-icon"} onPress={() => navigation.navigate("UsersList", {type: "teachers"})}/>
                </FlexBox>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    friendsTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.LightBlack,
        paddingBottom: 10,
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.Pelorous,
        marginRight: 10,
    },
    lastFriend: {
        backgroundColor: colors.Allports,
        alignItems: "center",
        justifyContent: "center"
    },
    wrapper: {
        width: 40,
    },
    countFriends: {
        color: colors.White,
        position: "relative",
        left: -2
    },
    horLine: {
        width: device.width,
        height: 1,
        backgroundColor: colors.Gray,
        marginVertical: 10
    }
})