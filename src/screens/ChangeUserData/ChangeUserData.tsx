import React from 'react';
import {Header, MainLayout, FlexBox, CustomButton, CustomInput, device} from "../../components";
import {Text} from "react-native";
import {ChangeUserDataForm} from "./ChangeUserDataForm";
import {Icon} from "react-native-elements";
import firebase from "firebase";

export const ChangeUserData: React.FC = () => {
    return (
        <>
          <Header title={"Изменение данных"}/>
          <MainLayout>
              {{
                  body: <ChangeUserDataForm/>,
              }}
          </MainLayout>
        </>
    );
};