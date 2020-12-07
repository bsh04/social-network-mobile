import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import {BottomTabs} from "../bottomMenu/BottomMenu";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={BottomTabs} />
        </Drawer.Navigator>
    );
}
