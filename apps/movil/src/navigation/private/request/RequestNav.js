import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RequestList from '../../../screens/request/RequestList';
import RequestInfo from '../../../screens/request/RequestInfo';

const Stack = createNativeStackNavigator();

const RequestNav = () => {

    return(
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="request"
                component={RequestList}
            />

            <Stack.Screen
                name="requestinfo"
                component={RequestInfo}
            />

        </Stack.Navigator>
    );
}

export default RequestNav;