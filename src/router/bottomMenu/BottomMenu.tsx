import React, {useRef} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CameraStack, DialogsStack, HomeStack, ProfileStack, NewsStack} from '../stacks'
import {Icon} from "react-native-elements";
import {colors} from '../../components/stylesheet'
import {Animated} from 'react-native'

const Tab = createBottomTabNavigator();

export const BottomTabs: React.FC = () => {

    // const iconSize = useRef(new Animated.Value(5)).current;

    return (
        <Tab.Navigator tabBarOptions={{
            style: {backgroundColor: colors.BlueLagoon, paddingVertical: 5, height: 65},
            tabStyle: {justifyContent: 'center', alignItems: "center", height: 50},
            activeTintColor: colors.WhiteSmoke,
            inactiveTintColor: colors.WhiteGray
        }}
        >
            <Tab.Screen name="Главная" component={HomeStack} options={{
                tabBarIcon: ({color, size}) => <Icon name={"home"} type={"entypo"} color={color} size={size}/>,
                tabBarBadge: '1',
                tabBarBadgeStyle: {paddingTop: 1.5},
            }}/>
            <Tab.Screen name="Новости" component={NewsStack} options={{
                tabBarIcon: ({color, size}) => <Icon name={"news"} type={"entypo"} color={color} size={size}/>
            }}/>
            <Tab.Screen name="Диалоги" component={DialogsStack} options={{
                tabBarIcon: ({color, size}) => <Icon name={"message"} type={"material"} color={color} size={size}/>,
                tabBarBadge: '9+',
                tabBarBadgeStyle: {paddingTop: 1.5},
            }}/>
            <Tab.Screen name="Профиль" component={ProfileStack} options={{
                tabBarIcon: ({color, size}) => <Icon name={"person"} type={"material"} color={color} size={size}/>
            }}/>
            <Tab.Screen name="Камера" component={CameraStack} options={{
                tabBarIcon: ({color, size}) => <Icon name={"camera"} type={"font-awesome"} color={color} size={size}/>
            }}/>
        </Tab.Navigator>
    );
}