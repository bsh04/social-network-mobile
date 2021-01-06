import React, {useEffect, useState} from 'react';
import {Header, MainLayout, CustomButton, EmptyUserAvatar, FlexBox} from "../../components";
import {Alert, View, ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Avatar, Icon, Overlay} from "react-native-elements"
import {useNavigation} from "@react-navigation/native"
import {userSlice, userSelectors} from "../../redux/slices/userSlice"
import {useDispatch, useSelector} from "react-redux"
import {ProfileHeaderProps} from "./ProfileInterfaces"
import firebase from "firebase";
import {UserValues} from "../../types/interfaces";
import {device} from "../../components/stylesheet";
import {ProfileDetails} from "./components/ProfileDetails";
import {ProfileHeader} from "./components/ProfileHeader";

export const Profile: React.FC = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const userData: UserValues = useSelector(userSelectors.getUser())

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

    const handleLogOut = () => {
        firebase.auth().signOut().then(() => {
            dispatch(userSlice.actions.reset())
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
                    body: <ProfileDetails />,
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