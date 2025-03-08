import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../../context/AuthContext';
import TabNavigate from '../private/TabNavigation';
import AuthNavigate from "../public/AuthNavigation"

export default function PrincipalNav() {
    const Stack = createNativeStackNavigator();
    const { isAuthenticated } = useAuth();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
                <Stack.Screen name="inicio" component={TabNavigate} />
            ) : (
                <Stack.Screen name="auth" component={AuthNavigate} />
            )}
        </Stack.Navigator>
    );
}
