import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Camera} from '../../screens'

const CameraNavigator = createStackNavigator()

const CameraStack: React.FC = (props) => {
    return (
        <CameraNavigator.Navigator headerMode={"none"}>
            <CameraNavigator.Screen name={'Camera'} component={Camera}/>
        </CameraNavigator.Navigator>
    );
}

export default CameraStack