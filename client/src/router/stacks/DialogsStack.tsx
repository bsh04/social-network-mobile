import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Dialogs} from '../../screens'

const DialogsNavigator = createStackNavigator()

export const DialogsStack: React.FC = (props) => {
    return (
        <DialogsNavigator.Navigator headerMode={"none"}>
            <DialogsNavigator.Screen name={'Dialogs'} component={Dialogs}/>
        </DialogsNavigator.Navigator>
    );
}