import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import {Home, Dialogs, Profile} from '../../screens'

const Tab = createBottomTabNavigator();

export const BottomTabs:React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Dialogs" component={Dialogs} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}