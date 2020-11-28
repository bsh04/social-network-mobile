import {Animated} from "react-native";

interface AnimatedHandlerParams {
    params: Array<Animated.AnimatedProps<Animated.ValueXY>>;
    duration: number,
    value: Array<number>;
}

export const AnimatedHandler: ({value, params, duration}: AnimatedHandlerParams) => void = ({duration, params, value}) => {
    params.map((item, index) => {
        Animated.timing(item, {
            toValue: value[index],
            duration: duration,
            useNativeDriver: false,
        }).start();
    })
}