import React, {useState} from 'react'
import {Filters} from "../../components/modals/Filters"
import {createStackNavigator} from '@react-navigation/stack'
import {Home} from '../../screens'
import {createDrawerNavigator} from "@react-navigation/drawer";
import {colors} from "../../components/stylesheet";
import {useNavigation} from "@react-navigation/native"

const HomeNavigator = createStackNavigator()

const Drawer = createDrawerNavigator();

const HomeWrap = () => {
    return (
        <HomeNavigator.Navigator headerMode={"none"}>
            <HomeNavigator.Screen name={'Home'} component={Home}/>
        </HomeNavigator.Navigator>
    )
}

const HomeDrawer = () => {
    const navigation = useNavigation()

    return (
        <Drawer.Navigator
            lazy
            drawerPosition={"right"}
            drawerType={"slide"}
            drawerContent={() => <Filters navigation={navigation} />}>
            <Drawer.Screen name={"Home"} component={HomeWrap}/>
        </Drawer.Navigator>
    )
}

const HomeStack: React.FC = (props) => {
    return (
        <HomeNavigator.Navigator
            screenOptions={{
            headerStyle: {backgroundColor: colors.BlueLagoon},
            headerTitleStyle: {color: colors.WhiteSmoke, fontWeight: "bold", fontSize: 18, paddingLeft: 14.5, fontFamily: "Roboto"},
        }}
        >
            <HomeNavigator.Screen name={"Главная"} component={HomeDrawer}/>
        </HomeNavigator.Navigator>
    );
}

export default HomeStack