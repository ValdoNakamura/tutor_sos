import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

const RequestInfo = () => {
    return(
        <SafeAreaView>
            <View style={style.container}>
                <View style={style.containerinfo}>
                    <View>
                        <Text style={style.name}>
                            De: Cesar Uvaldo Rodriguez Cordova
                        </Text>
                        <Text style={style.name}>
                            Para: Sergio Ulises Galvan
                        </Text>
                    </View>
                    <View style={style.category}>
                        <Icon
                            name="school"
                            size={50}
                            color={"#fff"}
                        />
                    </View>
                </View>

                <View>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quo exercitationem, rerum fugit temporibus, eligendi cumque
                        voluptatum numquam, praesentium est repudiandae tempora autem
                        nostrum. Maxime ut voluptates, dolor facere culpa nobis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat amet velit iste ex nulla quas eum, tempora eligendi,
                        odit totam eos quo doloremque quis fuga a blanditiis explicabo
                        asperiores laudantium!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quo exercitationem, rerum fugit temporibus, eligendi cumque
                        voluptatum numquam, praesentium est repudiandae tempora autem
                        nostrum. Maxime ut voluptates, dolor facere culpa nobis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat amet velit iste ex nulla quas eum, tempora eligendi,
                        odit totam eos quo doloremque quis fuga a blanditiis explicabo
                        asperiores laudantium!
                    </Text>
                </View>

                <View style={style.containerfile}>
                    <View style={style.preview}>
                        <Text>Vista Previa</Text>
                    </View>
                    <Text>Archivo Adjunto.pdf</Text>

                </View>

            </View>
        </SafeAreaView>
    );
}

export default RequestInfo;

const style = StyleSheet.create({
    container:{
        width: "100%",
        padding: 10,
        backgroundColor: "#fff"
    },
    containerinfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    name: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "left",
        color: "#5A2424"
    },
    category: {
        width: 80,
        height: 80,
        backgroundColor: "#5A2424",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    containerfile: {
        width: 250,
        height: 150,
        marginTop: 20,
        backgroundColor: "yellow",
        padding: 10,
        borderRadius: 10
    },
    preview: {
        height: 80,
        backgroundColor: "purple",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    }
})
