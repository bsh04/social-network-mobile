import {Animated} from "react-native";

export const animatedHandler = (items: Array<Animated.Value>, value: Array<number>) => {
    items.map((item, index) => {
        Animated.timing(item, {
            toValue: value[index],
            duration: 200,
            useNativeDriver: false,
        }).start();
    })
}