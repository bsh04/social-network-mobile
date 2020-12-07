import React from 'react';
import {StyleSheet, View} from 'react-native'
import {Button, ButtonProps} from 'react-native-elements'
import {colors, device} from "../../stylesheet";

interface CustomButtonProps {
    buttonType?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
}

export const CustomButton: React.FC<ButtonProps & CustomButtonProps> = ({title, onPress, iconRight, type, buttonType, loading, containerStyle, buttonStyle}) => {
    return (
        <View style={styles.container}>
            <Button
                type={"solid"}
                title={title}
                onPress={onPress}
                iconRight={iconRight}
                loading={loading}
                containerStyle={[styles.containerStyle, containerStyle]}
                buttonStyle={[
                    styles.buttonStyles,
                    buttonStyle,
                    buttonType && {backgroundColor: colors.ButtonTypes.BGColor[buttonType]}
                ]}
                titleStyle={[
                    styles.titleStyle,
                    buttonType && {color: colors.ButtonTypes.TitleColor[buttonType]}
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
    containerStyle: {
        width: '100%',
        borderRadius: 50,
    },
    buttonStyles: {
        backgroundColor: colors.ButtonTypes.BGColor.primary,
    },
    titleStyle: {
        color: colors.ButtonTypes.TitleColor.primary,
    }
})