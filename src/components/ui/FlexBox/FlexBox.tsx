import React from 'react';
import {StyleProp, ViewStyle, TouchableOpacityProps, TouchableOpacity} from "react-native"

interface FlexBoxProps {
    flex?: {
        directionRow?: boolean,
        alignItems?: "center" | "left" | "right",
        justifyContent?: "center" | "space-between" | "left" | "right" | "space-around"
    }
    styles?: StyleProp<ViewStyle>

}

export const FlexBox: React.FC<FlexBoxProps & TouchableOpacityProps> = ({
    children,
    flex,
    styles,
    onPress,
    activeOpacity
}) => {
    return (
        <TouchableOpacity style={[
            {
                flexDirection: flex?.directionRow ? flex?.directionRow ? "row" : "column" : undefined,
                alignItems: flex?.alignItems ? flex?.alignItems === "right" ? "flex-end" : flex?.alignItems === "left" ? "flex-start" : flex?.alignItems : undefined,
                justifyContent: flex?.justifyContent ? flex?.justifyContent === "right" ? "flex-end" : flex?.justifyContent === "left" ? "flex-start" : flex?.justifyContent : undefined
            },
            styles
        ]}
            onPress={onPress}
            activeOpacity={activeOpacity || 1}
        >
            {children}
        </TouchableOpacity>
    );
};
