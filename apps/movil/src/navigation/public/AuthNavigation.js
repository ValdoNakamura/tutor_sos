import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/auth/Login";
import RegisterScreen from "../../screens/auth/Register";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="login"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="register"
                component={RegisterScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}

export default AuthNavigation;