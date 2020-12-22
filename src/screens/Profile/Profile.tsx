import React, {useEffect, useState} from 'react';
import {Header} from "../../components/ui/Header/Header";
import {Alert, Text} from 'react-native'
import {CustomButton} from "../../components/ui/Button/Button"
import {useNavigation} from "@react-navigation/native"
import {loginSlice, loginSelectors} from "../../redux/slices/loginSlice"
import {useDispatch, useSelector} from "react-redux"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Profile: React.FC = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [userData, setUserData] = useState()

    const confirmLogOut = () => {
        Alert.alert(
            "Attention",
            "Are you sure you want to log out of your account?",
            [
                {
                    text: "Yes",
                    onPress: () => handleLogOut()
                },
                {
                    text: "No"
                }
            ]
        )
    }
    console.log(useSelector(loginSelectors.getUser()));

    useEffect(() => {
    }, [])


    const handleLogOut = () => {
        AsyncStorage.removeItem("@token").then(() => {
            dispatch(loginSlice.actions.reset())
        })
    }

    return (
        <>
            <Header title={'Profile'} isGoBack={false}/>
            <Text>Profile</Text>
            <CustomButton
                title={'Log out'}
                onPress={confirmLogOut}
            />
        </>
    );
};