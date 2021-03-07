import React, {useState, useRef, useEffect} from 'react';
import {Icon, Input, InputProps} from "react-native-elements"
import {StyleSheet, View, Animated, Text} from 'react-native'
import {colors} from '../../stylesheet'
import {useAnimatedGroup} from '../../../hooks/useAnimatedGroup'
import {WrappedFieldProps} from "redux-form";

interface CustomInputProps extends InputProps, WrappedFieldProps {
    firstInput?: boolean
    additional?: string
    withClean?: boolean
    setValue?: (value: string) => void
}

export const CustomInput: React.FC<CustomInputProps> = ({
   label,
   onSubmitEditing,
   rightIcon,
   secureTextEntry,
   firstInput,
   additional,
   withClean,
   setValue,
   ...others
}) => {
    const {onChange, value} = others.input

    const [labelColorAnim] = useState<Animated.AnimatedProps<any>>(new Animated.Value(0))

    const labelPositionAnim = useRef(new Animated.Value(5)).current;
    const labelSizeAnim = useRef(new Animated.Value(18)).current;

    const boxInterpolationColor = labelColorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.BlueLagoon, colors.Blue]
    })

    const focusHandler = () => {
        useAnimatedGroup({
            duration: 200,
            params: [labelPositionAnim, labelSizeAnim, labelColorAnim],
            value: [-20, 14, 1]
        })
    }

    useEffect(() => {
        if (value) {
            useAnimatedGroup({
                duration: 0,
                params: [labelPositionAnim, labelSizeAnim, labelColorAnim],
                value: [-20, 14, 0]
            })
        }
    }, [])

    const blurHandler = () => {
        if (!value) {
            useAnimatedGroup({
                duration: 200,
                params: [labelPositionAnim, labelSizeAnim, labelColorAnim],
                value: [5, 18, 0]
            })
        } else {
            useAnimatedGroup({
                duration: 200,
                params: [labelColorAnim],
                value: [0]
            })
        }
    }

    return (
        <View style={[styles.component, firstInput && {marginTop: 25}]}>
            <Animated.Text style={[styles.label, {
                top: labelPositionAnim,
                fontSize: labelSizeAnim,
                color: boxInterpolationColor
            }]}>{label}</Animated.Text>
            <Input
                {...others}
                onFocus={focusHandler}
                onBlur={blurHandler}
                containerStyle={styles.containerStyle}
                inputStyle={styles.inputStyle}
                style={styles.mainStyles}
                inputContainerStyle={[styles.inputContainerStyle, {
                    borderColor: boxInterpolationColor
                }]}
                rightIcon={
                    rightIcon ?
                        rightIcon :
                        withClean && value ?
                            <Icon
                                name={"close"}
                                type={"antdesign"}
                                onPress={() => {
                                    setValue!("")
                                }}
                            /> :
                            undefined
                }
                rightIconContainerStyle={{position: "absolute", right: 0}}
                onChangeText={onChange}
                value={value}
                onSubmitEditing={onSubmitEditing}
                selectionColor={colors.BlueLagoon}
                secureTextEntry={secureTextEntry}
            />
            <Text style={styles.additional}>{additional}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    component: {
        width: '100%',
        height: 65,
        justifyContent: 'flex-end',
    },
    containerStyle: {},
    inputStyle: {
        paddingHorizontal: 10,
        color: colors.BlueLagoon,
    },
    inputContainerStyle: {
        borderRadius: 10,
        borderBottomWidth: 1,
    },
    mainStyles: {},
    label: {
        position: "absolute",
        left: 25,
    },
    additional: {
        position: "absolute",
        fontSize: 10,
        paddingHorizontal: 20
    }
})