import React, {useRef, useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, TextInputProps, TextInput} from "react-native";
import {Header, MainLayout, FlexBox, CustomButton, CustomInput, device} from "../../components";
import {useSelector} from "react-redux";
import {loginSelectors} from "../../redux/slices/loginSlice"
import {Icon} from "react-native-elements";
import firebase from "firebase";

export const ChangeUserDataForm = () => {
    const initData = useSelector(loginSelectors.getUser())

    const handleSave = async () => {
        firebase.auth().onAuthStateChanged(user => {
            user?.updateProfile({
                displayName: firstName + " " + secondName,
            })
            user?.updateEmail(email)
        })
        // const user = firebase.auth().currentUser
        // console.log(user)
    }

    const [firstName, setFirstName] = useState<string>(initData.displayName?.split(" ")[0] || "")
    const [secondName, setSecondName] = useState<string>(initData.displayName?.split(" ")[1] || "")
    const [email, setEmail] = useState<string>(initData.email)

    const secondNameRef = useRef<TextInputProps & TextInput>(null)
    const emailRef = useRef<TextInputProps & TextInput>(null)

    return (
        <View style={styles.container}>
            <CustomInput
                firstInput
                label={"Имя"}
                value={firstName}
                onChange={(e) => setFirstName(e.nativeEvent.text)}
                onSubmitEditing={() => secondNameRef.current?.focus()}
            />
            <CustomInput
                label={"Фамилия"}
                value={secondName}
                onChange={(e) => setSecondName(e.nativeEvent.text)}
                onSubmitEditing={() => emailRef.current?.focus()}
                ref={secondNameRef}
            />
            <CustomInput
                label={"E-mail"}
                value={email}
                onChange={(e) => setEmail(e.nativeEvent.text)}
                ref={emailRef}
            />
            <CustomButton
                title={"Сохранить"}
                mainStyles={{paddingTop: 10}}
                containerStyle={{width: device.width * .5}}
                onPress={handleSave}
                buttonType={"success"}
                icon={<Icon name={"check"} type={"feather"} color={"white"} style={{paddingRight: 10}} size={20}/>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%"
    }
})