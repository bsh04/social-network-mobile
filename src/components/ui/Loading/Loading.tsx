import React from 'react';
import {ActivityIndicator, View} from "react-native"
import {colors} from "../../stylesheet";
export const Loading: React.FC = () => {
    return (
        <View style={{flex: 1}}>
            <ActivityIndicator size={100} color={colors.Allports}/>
        </View>
    );
};