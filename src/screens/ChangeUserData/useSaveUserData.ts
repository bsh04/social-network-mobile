import firebase from "firebase";
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userSelectors, userSlice} from "../../redux/slices/userSlice"
import {useNavigation} from "@react-navigation/native";

export const useSaveUserData = () => {
    const dispatch = useDispatch()
    const data = useSelector(userSelectors.getUser())
    const navigation = useNavigation()

    const save = useCallback((firstName: string, secondName: string, email: string) => {
        firebase.auth().onAuthStateChanged(user => {
            user?.updateProfile({
                displayName: firstName + " " + secondName,
            })
            user?.updateEmail(email)
        })
        dispatch(userSlice.actions.setUser({...data, displayName: firstName + " " + secondName, email}))
        navigation.goBack()
    }, [dispatch])

    return {save}
}