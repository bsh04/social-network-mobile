import React from "react";
import {StyleSheet, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {colors} from "../stylesheet";

interface ViewPersonsPickerProps {
    value: string
    setValue: (value: "all" | "none" | "selectively") => void
}

export const ViewPersonsPicker: React.FC<ViewPersonsPickerProps> = ({value, setValue}) => {
    return (
        <View style={styles.picker}>
            <Picker
                selectedValue={value}
                style={{width: "100%", color: colors.Black, height: 30}}
                onValueChange={(itemValue) => setValue(String(itemValue) as "all" | "none" | "selectively")}
                dropdownIconColor={colors.White}
            >
                <Picker.Item label={"Все"} value={"all"} />
                <Picker.Item label={"Никакие"} value={"none"}/>
                <Picker.Item label={"Выборочно"} value={"selectively"} />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    picker: {
        borderWidth: 2,
        borderColor: colors.BlueLagoon,
        borderRadius: 50,
        alignItems: "center",
        height: 30,
        justifyContent: "center"
    }
})