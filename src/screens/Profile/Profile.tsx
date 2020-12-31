import React, {useEffect, useState} from 'react';
import {Header, MainLayout, CustomButton, EmptyUserAvatar, FlexBox} from "../../components";
import {Alert, View, ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Avatar, Icon, Overlay} from "react-native-elements"
import {useNavigation} from "@react-navigation/native"
import {loginSlice, loginSelectors} from "../../redux/slices/loginSlice"
import {useDispatch, useSelector} from "react-redux"
import {ProfileHeaderProps} from "./ProfileInterfaces"
import firebase from "firebase";
import {UserValues} from "../../types/interfaces";
import {device} from "../../components/stylesheet";

const ProfileHeader: React.FC<ProfileHeaderProps> = ({userData}) => {

    const navigation = useNavigation()

    const handleOpenPhoto = () => {
        if (userData.photoURL) {
            return (
                <Overlay isVisible>
                    <Text>Photo</Text>
                </Overlay>
            )
        }
        return (
            <Overlay isVisible>
                <Text>Photo</Text>
            </Overlay>
        )
    }

    return (
        <View>
            <FlexBox flex={{directionRow: true, justifyContent: "space-between", alignItems: "center"}}>
                <FlexBox flex={{directionRow: true}}>
                    <TouchableOpacity
                        onPress={handleOpenPhoto}
                    >
                        {
                            userData.photoURL ?
                                <Avatar/>
                                :
                                <EmptyUserAvatar/>
                        }
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.userName}>{userData.displayName}</Text>
                        <Text style={styles.role}>Студент</Text>
                    </View>
                </FlexBox>
                <Icon name={"arrow-right"} type={"simple-line-icon"} onPress={() => navigation.navigate("UserData")}/>
            </FlexBox>
            <View>
                <CustomButton
                    title={"Изменить данные"}
                    buttonType={"info"}
                    containerStyle={{width: device.width * .8}}
                    icon={<Icon name={"edit"} type={"antdesign"} color={"white"} size={15} style={{paddingRight: 10}}/>}
                    mainStyles={{paddingTop: 30}}
                    onPress={() => navigation.navigate('ChangeUserData')}
                />
            </View>
        </View>
    )
}

export const Profile: React.FC = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const userData: UserValues = useSelector(loginSelectors.getUser())

    const confirmLogOut = () => {
        Alert.alert(
            "Внимание",
            "Вы действительно хотите выйти из профиля?",
            [
                {
                    text: "Да",
                    onPress: () => handleLogOut()
                },
                {
                    text: "Нет"
                }
            ]
        )
    }

    useEffect(() => {
        // firebase.firestore().collection("/universities").doc("xF57hYLByZ69xOPK3Qb4").get().then(res => {
        //     console.log(res.data())
        // })
        // firebase.storage().ref("universities.json").then((res) => {
        //     console.log(res)
        // });

    }, [])


    const handleLogOut = () => {
        firebase.auth().signOut().then(() => {
            dispatch(loginSlice.actions.reset())
        })
    }

    const handleOpenSettings = () => {
        navigation.navigate("Settings")
    }

    return (
        <>
            <Header
                title={'Профиль'}
                isGoBack={false}
                icon={{type: "antdesign", name: "setting", onPress: handleOpenSettings}}
            />
            <MainLayout>
                {{
                    header: <ProfileHeader userData={userData}/>,
                    footer: (
                        <CustomButton
                            containerStyle={{width: device.width * .8}}
                            title={'Выйти из профиля'}
                            onPress={confirmLogOut}
                        />
                    )
                }}
            </MainLayout>
        </>
    );
};

const styles = StyleSheet.create({
    userName: {
        fontWeight: "bold",
        fontSize: 18,
        paddingLeft: 10
    },
    role: {
        fontSize: 14,
        paddingLeft: 10
    }
})