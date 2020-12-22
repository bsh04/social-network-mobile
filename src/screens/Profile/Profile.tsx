import React, {useEffect, useState} from 'react';
import {Header} from "../../components/ui/Header/Header";
import {Alert, View, ScrollView, Text, StyleSheet} from 'react-native'
import {Avatar} from "react-native-elements"
import {CustomButton} from "../../components/ui/Button/Button"
import {useNavigation} from "@react-navigation/native"
import {loginSlice, loginSelectors} from "../../redux/slices/loginSlice"
import {useDispatch, useSelector} from "react-redux"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {MainLayout} from "../../components/layout/MainLayout";
import {EmptyUserAvatar} from "../../components/ui/EmptyUserAvatar/EmptyUserAvatar"
import firebase from "firebase";

export const Profile: React.FC = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [userData, setUserData] = useState(useSelector(loginSelectors.getUser()))

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
        AsyncStorage.removeItem("@token").then(() => {
            firebase.auth().signOut().then(() => {
                dispatch(loginSlice.actions.reset())
            })
        })
    }

    return (
        <>
            <Header title={'Профиль'} isGoBack={false}/>
            <ScrollView>
                <MainLayout>
                    <View style={styles.userData}>
                        {
                            userData.photoURL ?
                                <Avatar />
                                :
                                <EmptyUserAvatar/>
                        }
                        <Text>{userData.displayName}</Text>
                    </View>
                </MainLayout>
            </ScrollView>
            <CustomButton
                title={'Выйти из профиля'}
                onPress={confirmLogOut}
            />
        </>
    );
};

const styles = StyleSheet.create({
    userData: {
        flexDirection: "row",
    }
})