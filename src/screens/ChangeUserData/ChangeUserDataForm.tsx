import React, {useRef, useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView, TextInputProps, TextInput} from "react-native";
import {Header, MainLayout, FlexBox, CustomButton, CustomInput, device} from "../../components";
import {useSelector} from "react-redux";
import {userSelectors} from "../../redux/slices/userSlice"
import {Icon} from "react-native-elements";
import firebase from "firebase";
import {useNavigation} from "@react-navigation/native"
import {useSaveUserData} from "./useSaveUserData"

export const ChangeUserDataForm = () => {
    const initData = useSelector(userSelectors.getUser())

    const [firstName, setFirstName] = useState<string>(initData.displayName?.split(" ")[0] || "")
    const [secondName, setSecondName] = useState<string>(initData.displayName?.split(" ")[1] || "")
    const [email, setEmail] = useState<string>(initData.email)

    const {save} = useSaveUserData()

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
                mainStyles={{paddingTop: 10, paddingBottom: 10}}
                containerStyle={{width: device.width * .5}}
                onPress={() => save(firstName, secondName, email)}
                buttonType={"success"}
                icon={<Icon name={"check"} type={"feather"} color={"white"} style={{paddingRight: 10}} size={20}/>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flex: 1
    }
})