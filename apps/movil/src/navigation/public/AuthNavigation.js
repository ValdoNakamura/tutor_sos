import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Login";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="login"
                component={Login}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}