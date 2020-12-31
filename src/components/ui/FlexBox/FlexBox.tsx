import React from 'react';
import {StyleProp, ViewStyle, View} from "react-native"

interface FlexBoxProps {
    flex?: {
        directionRow?: boolean,
        alignItems?: "center" | "left" | "right",
        justifyContent?: "center" | "space-between" | "left" | "right" | "space-around"
    }
    styles?: StyleProp<ViewStyle>
}

export const FlexBox: React.FC<FlexBoxProps> = ({children, flex, styles}) => {
    return (
        <View style={[
            {
                flexDirection: flex?.directionRow ? flex?.directionRow ? "row" : "column" : undefined,
                alignItems: flex?.alignItems ? flex?.alignItems === "right" ? "flex-end" : flex?.alignItems === "left" ? "flex-start" : flex?.alignItems : undefined,
                justifyContent: flex?.justifyContent ? flex?.justifyContent === "right" ? "flex-end" : flex?.justifyContent === "left" ? "flex-start" : flex?.justifyContent : undefined
            },
            styles
        ]}>
            {children}
        </View>
    );
};
