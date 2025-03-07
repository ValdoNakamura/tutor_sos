import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";


const Card = () => {
    const navigation = useNavigation();
    return (
        <>
        <Pressable onPress={() => navigation.navigate("requestinfo")} style={styles.card}>
            <View style={styles.containeCategory}>
                <Text style={styles.date}>07/03/2025</Text>
                <Text style={styles.title}>Cesar Uvaldo Rodriguez Cordova</Text>
                <View style={styles.category}>
                    <Icon
                        name="school"
                        size={30}
                        color={"#fff"}
                    />
                </View>
            </View>
            <Text style={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit soluta
            cum nam non beatae. Exercitationem eveniet sint nobis ea labore
            dolore dignissimos repellendus? Voluptates sapiente consequuntur
            voluptatem dolore numquam odio. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quae, eligendi aliquid doloremque ipsum
            quos corporis illum? Id autem, quisquam totam ullam repellat alias,
            ipsum voluptas aspernatur excepturi, rem incidunt aliquid!
            </Text>
            <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Leer Respuesta</Text>
            </Pressable>
        </Pressable>
        </>
    );
};


export default Card;


    const styles = StyleSheet.create({
    card: {
        maxWidth: 350,
        padding: 16,
        backgroundColor: "#EAD196",
        borderWidth: 1,
        borderColor: "#D1D5DB",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginTop: 20,
    },
    title: {
        marginBottom: 8,
        fontSize: 20,
        fontWeight: "bold",
        color: "#111827",
    },
    description: {
        marginBottom: 12,
        fontSize: 14,
        color: "#000",
        textAlign: "left",
    },
    button: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: "#561C24",
        borderRadius: 8,
        alignSelf: "flex-start",
    },
    buttonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    containeCategory: {
        flexDirection: "row",
        position: "relative",
        width: 220,
        paddingTop: 10
    },
    category: {
        width: 50,
        height: 50,
        backgroundColor: "#5A2424",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginLeft: 35,
        marginTop: 10
    },
    date: {
        position: "absolute",
        top: -10,
        right: -90,
        fontSize: 14,
        color: "#555"
    }
});

