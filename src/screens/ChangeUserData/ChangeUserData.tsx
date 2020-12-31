import React from 'react';
import {Header, MainLayout, FlexBox, CustomButton, CustomInput, device} from "../../components";
import {Text} from "react-native";
import {ChangeUserDataForm} from "./ChangeUserDataForm";
import {Icon} from "react-native-elements";

export const ChangeUserData: React.FC = () => {
    const handleSave = () => {

    }

    return (
        <>
          <Header title={"Изменение данных"}/>
          <MainLayout>
              {{
                  body: <ChangeUserDataForm/>,
                  footer: (
                      <CustomButton
                        title={"Сохранить"}
                        containerStyle={{width: device.width * .5}}
                        onPress={handleSave}
                        buttonType={"success"}
                        icon={<Icon name={"check"} type={"feather"} color={"white"} style={{paddingRight: 10}} size={20}/>}
                      />
                  )
              }}
          </MainLayout>
        </>
    );
};