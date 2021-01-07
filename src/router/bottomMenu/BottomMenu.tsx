import React, {useRef} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Icon} from "react-native-elements";
import {colors} from '../../components/stylesheet'
import {Loading} from "../../components/ui/Loading/Loading";

const DialogsStack = React.lazy(() => import("../stacks/DialogsStack"))
const CameraStack = React.lazy(() => import("../stacks/CameraStack"))
const HomeStack = React.lazy(() => import("../stacks/HomeStack"))
const ProfileStack = React.lazy(() => import("../stacks/ProfileStack"))
const ChannelsStack = React.lazy(() => import("../stacks/ChannelsStack"))

const Tab = createBottomTabNavigator();

export const BottomTabs: React.FC = () => {

    return (
        <React.Suspense fallback={<Loading/>}>
            <Tab.Navigator
                lazy
                tabBarOptions={{
                style: {backgroundColor: colors.BlueLagoon, paddingVertical: 5, height: 65},
                tabStyle: {justifyContent: 'center', alignItems: "center", height: 50},
                activeTintColor: colors.WhiteSmoke,
                inactiveTintColor: colors.WhiteGray
            }}
            >
                <Tab.Screen name="Главная" component={HomeStack} options={{
                    tabBarIcon: ({color, size}) => <Icon name={"home"} type={"entypo"} color={color} size={size}/>,
                }}/>
                <Tab.Screen name="Каналы" component={ChannelsStack} options={{
                    tabBarIcon: ({color, size}) => <Icon name={"chat"} type={"entypo"} color={color} size={size}/>,
                    tabBarBadge: '1',
                    tabBarBadgeStyle: {paddingTop: 1.5},
                }}/>
                <Tab.Screen name="Профиль" component={ProfileStack} options={{
                    tabBarIcon: ({color, size}) => <Icon name={"person"} type={"material"} color={color} size={size}/>
                }}/>
                <Tab.Screen name="Диалоги" component={DialogsStack} options={{
                    tabBarIcon: ({color, size}) => <Icon name={"message"} type={"material"} color={color} size={size}/>,
                    tabBarBadge: '9+',
                    tabBarBadgeStyle: {paddingTop: 1.5},
                }}/>
                <Tab.Screen name="Камера" component={CameraStack} options={{
                    tabBarIcon: ({color, size}) => <Icon name={"camera"} type={"font-awesome"} color={color} size={size}/>
                }}/>
            </Tab.Navigator>
        </React.Suspense>
    );
}