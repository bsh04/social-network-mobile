import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import {useFetchFriends} from "../hooks/useFetchFriends"
import {friendsSelectors} from "../../../redux/slices/friendsSlice"
import {useSelector} from "react-redux";
import {colors, FlexBox} from "../../../components";
import {Avatar, Icon, Image} from "react-native-elements";
import {Friends} from "../../../types/interfaces";
import {useNavigation} from "@react-navigation/native"
const avatarsURL = "../../../mockImages/avatars/"

const FriendsRender: React.FC<{data: Array<Friends>}> = ({data}) => {
    const navigation = useNavigation()
    let friendsList = [...data]
    friendsList = friendsList.length > 5 ? [...friendsList.splice(0, 6)] : friendsList
    return (
        <FlexBox flex={{directionRow: true, alignItems: "center"}} styles={{paddingLeft: 10, height: 55}} onPress={() => navigation.navigate("UsersList")}>
            {friendsList.map((friend, index) => {
                if (index === 5) {
                    return <View style={[styles.lastFriend, styles.avatarContainer]}>
                        <Text style={styles.countFriends}>+ {data.length - friendsList.length}</Text>
                    </View>
                }
                return (
                    <View key={index} style={styles.wrapper}>
                        <Image source={friend.avatar} containerStyle={styles.avatarContainer}/>
                    </View>
                )
                }
            )}
        </FlexBox>
    )
}

export const ProfileDetails: React.FC = () => {
    useFetchFriends()
    const navigation = useNavigation()

    const friends = useSelector(friendsSelectors.getFriends())

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.friendsTitle}>Друзья</Text>
                <FlexBox flex={{justifyContent: "space-between", alignItems: "center", directionRow: true}}>
                    <FlexBox flex={{directionRow: true, alignItems: "center"}}>
                        <Icon name={"group"} type={"font-awesome"} size={40} color={colors.Allports} />
                        <FriendsRender data={friends}/>
                    </FlexBox>
                    <Icon name={"arrow-right"} type={"simple-line-icon"} onPress={() => navigation.navigate("UsersList")}/>
                </FlexBox>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
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
    }
})