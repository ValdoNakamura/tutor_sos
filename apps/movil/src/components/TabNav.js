import { useEffect, useRef } from "react";
import { StyleSheet, Animated } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function TabNav({ item, accessibilityState }) {
    const translate = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(1)).current;

    const selected = accessibilityState ? accessibilityState.selected : false;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(translate, {
                toValue: selected ? -20 : 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(scale, {
                toValue: selected ? 1.2 : 1,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();
    }, [selected]);

    return (
        <Animated.View style={[styles.button, { transform: [{ translateY: translate }] }]}>
            {selected && <Animated.View style={[styles.circuloinvisible, { transform: [{ scale }] }]} />}
            <Icon
                name={item.icon}
                size={30}
                color={selected ? "#fff" : "#fff"}
            />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    circuloinvisible: {
        width: 50,
        height: 50,
        borderRadius: 30,
        position: "absolute",
        backgroundColor: "#EAD196",
        opacity: 0.8,
    }
});
