import React from 'react';
import {Header} from "../../components/ui/Header/Header";
import {Alert, Text} from 'react-native'
import {CustomButton} from "../../components/ui/Button/Button"
import firebase from "firebase";
import {useNavigation} from "@react-navigation/native"
import {userSlice} from "../../redux/slices/userSlice"
import {useDispatch} from "react-redux"

export const Profile: React.FC = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

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

    const handleLogOut = () => {
        dispatch(userSlice.actions.reset())
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