import {Animated} from "react-native";

interface AnimatedHandlerParams {
    params: Array<any>;
    duration: number,
    value: Array<number>;
}

export const useAnimatedGroup: ({value, params, duration}: AnimatedHandlerParams) => void = ({duration, params, value}) => {
    params.map((item, index) => {
        Animated.timing(item, {
            toValue: value[index],
            duration: duration,
            useNativeDriver: false,
        }).start();
    })
}