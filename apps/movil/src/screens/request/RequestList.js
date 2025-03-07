import { StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Card from '../../components/Card';






const RequestList = () => {
    return (
        <>
        <SafeAreaView style={style.container}> 
            <ScrollView>
                <Card/>
            </ScrollView>
        </SafeAreaView>
        </>
    );
}

export default RequestList;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 81,
        paddingHorizontal: 5
    }
})