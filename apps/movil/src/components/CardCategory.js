import { Text, View, StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

const CardCategory = () => {
    return (
        <>
            <View style={style.containercategory}>
                <Text style={style.namecategory}>
                    Educacion
                </Text>
                <View style={style.category}>
                    <Icon
                        name="school"
                        size={30}
                        color={"#fff"}
                    />
                </View>
            </View>
        </>
    );
}

export default CardCategory;


const style = StyleSheet.create({
    containercategory: {
        backgroundColor: "red",
        width: 320,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 15,
        marginVertical: 10,
        backgroundColor: "#EAD196"
    },
    namecategory: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#5A2424"
    },
    category: {
        width: 50,
        height: 50,
        backgroundColor: "#5A2424",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginLeft: 70,
    }
})