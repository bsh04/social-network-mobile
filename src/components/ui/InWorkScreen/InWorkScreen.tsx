import React from 'react';
import {View, Text} from "react-native";
import {Icon} from "react-native-elements";

export const InWorkScreen: React.FC = () => {
    return (
        <>
            <View style={{alignItems: "center", justifyContent: "center", flex: 1, paddingHorizontal: 10}}>
                <Text style={{fontSize: 20, textAlign: "center", paddingBottom: 20}}>Извините, данный экран находится в разработке</Text>
                <Icon name={"progress-wrench"} type={"material-community"} size={45} />
            </View>
        </>
    );
};
