import React from "react";
import {ProfileHeaderProps} from "../ProfileInterfaces";
import {useNavigation} from "@react-navigation/native";
import {Avatar, Icon, Overlay} from "react-native-elements";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {colors, CustomButton, device, EmptyUserAvatar, FlexBox} from "../../../components";

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({userData}) => {

    const navigation = useNavigation()

    const handleOpenPhoto = () => {
        if (userData.photoURL) {
            return (
                <Overlay isVisible>
                    <Text>Photo</Text>
                </Overlay>
            )
        }
        return (
            <Overlay isVisible>
                <Text>Photo</Text>
            </Overlay>
        )
    }

    return (
        <>
            <FlexBox flex={{directionRow: true, justifyContent: "space-between", alignItems: "center"}}>
                <FlexBox flex={{directionRow: true}}>
                    <TouchableOpacity
                        onPress={handleOpenPhoto}
                    >
                        {
                            userData.photoURL ?
                                <Avatar/>
                                :
                                <EmptyUserAvatar/>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("UserData")}>
                        <Text style={styles.userName}>{userData.displayName}</Text>
                        <Text style={styles.role}>Студент</Text>
                    </TouchableOpacity>
                </FlexBox>
                <Icon name={"arrow-right"} type={"simple-line-icon"} onPress={() => navigation.navigate("UserData")}/>
            </FlexBox>
            <View>
                <CustomButton
                    title={"Изменить данные"}
                    buttonType={"info"}
                    containerStyle={{width: device.width * .8}}
                    icon={<Icon name={"edit"} type={"antdesign"} color={"white"} size={15} style={{paddingRight: 10}}/>}
                    mainStyles={{marginTop: 20}}
                    onPress={() => navigation.navigate('ChangeUserData')}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    userName: {
        fontWeight: "bold",
        fontSize: 18,
        paddingLeft: 10,
        color: colors.Black
    },
    role: {
        fontSize: 14,
        paddingLeft: 10
    }
})