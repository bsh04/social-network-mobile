import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from "react-native";
import {Header, MainLayout, FlexBox, CustomButton, CustomInput, device} from "../../components";

export const ChangeUserDataForm = () => {
    return (
        <View style={styles.container}>
            <CustomInput
                label={"Имя"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    }
})