import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CardInfo = () => {
    return (
        <>
        <View style={styles.messageCard}>
            <View style={styles.info}>
                <View style={styles.textContainer}>
                    <Text style={styles.sender}>
                        <Text style={styles.bold}>De: </Text>
                        Cesar Uvaldo Rodriguez Cordova
                    </Text>
                    
                    <Text style={styles.receiver}>
                        <Text style={styles.bold}>Para:</Text> David Rey Garcia Cedillo
                    </Text>
                </View>
                
                <View style={styles.iconContainer}>
                    <Icon
                        name="school"
                        size={30}
                        color={"#fff"}
                    />
                </View>
            </View>
            <Text style={styles.message}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            exercitationem, rerum fugit temporibus, eligendi cumque voluptatum
            numquam, praesentium est repudiandae tempora autem nostrum. Maxime ut
            voluptates, dolor facere culpa nobis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repellat amet velit iste ex nulla quas
            eum, tempora eligendi, odit totam eos quo doloremque quis fuga a
            blanditiis explicabo asperiores laudantium!
            </Text>
            <View style={styles.attachment}>
            <Text style={styles.attachmentText}>Evidencia medica.pdf</Text>
            <Pressable style={styles.openButton}>
                <Text>Abrir</Text>
            </Pressable>
            </View>
        </View>
        </>
    );
    };

    const styles = StyleSheet.create({
    messageCard: {
        backgroundColor: "#E5C78A",
        padding: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#D1D5DB",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginTop: 20,
        marginBottom: 10
    },
    textContainer: {
        flexDirection: "column",
        width: 200
    },
    info: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 140,
    },
    iconContainer: {
        width: 50,
        height: 50,
        backgroundColor: "#5A2424",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginLeft: 70,
    },
    
    sender: {
        fontSize: 16,
        
    },
    receiver: {
        fontSize: 14,
        color: "#374151",
    },
    bold: {
        fontWeight: "bold",
    },
    message: {
        marginTop: 10,
        fontSize: 14,
        color: "#1F2937",
    },
    attachment: {
        marginTop: 10,
        padding: 8,
        backgroundColor: "#FEF3C7",
        borderRadius: 8,
        alignItems: "flex-start",
    },
    attachmentText: {
        fontSize: 14,
        color: "#374151",
    },
    openButton: {
        marginTop: 6,
        backgroundColor: "#D1D5DB",
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 6,
    },
});

export default CardInfo;
