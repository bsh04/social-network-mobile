import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import {Channels} from '../../screens'

const ChannelsNavigator = createStackNavigator()

const ChannelsStack: React.FC = () => {
    return (
        <ChannelsNavigator.Navigator headerMode={"none"}>
            <ChannelsNavigator.Screen name={'Channels'} component={Channels}/>
        </ChannelsNavigator.Navigator>
    )
}

export default ChannelsStack