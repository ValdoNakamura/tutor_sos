import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SosForm from "../../components/SoSForm";


const Home = () => {
    return (
        <SafeAreaView style={style.container}>
            <SosForm/>
        </SafeAreaView>
    );
}

export default Home;


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    }
})