import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, View } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import TabNav from "../../components/TabNav";
import Home from "../../screens/start/Home";
import RequestNav from './request/RequestNav';

//import Header from '../../components/Header';

const Material = createMaterialTopTabNavigator();

export default function TabNavigate() {
    const tabs = [
        { id: 1, title: 'Home', screen: 'home', icon: 'home', Component: Home },
        { id: 2, title: 'Request', screen: 'requestlist', icon: 'mail', Component: RequestNav },
    ];

    const getTabBarStyle = (route) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'home';

        if (['requestinfo'].includes(routeName)) {
            return { display: 'none' };
        }
        return styles.TabBar;
    };

    const getSwipeEnabled = (route) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'home';

        if (['requestinfo'].includes(routeName)) {
            return false;
        }
        return true;
    };

    return (
        <Material.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                swipeEnabled: getSwipeEnabled(route),
                tabBarStyle: getTabBarStyle(route),
                tabBarIndicatorStyle: { backgroundColor: '#fff' },
                tabBarItemStyle:{height: 130}
            })}
            >
            {tabs.map((item, index) => (
                <Material.Screen
                key={index}
                name={item.screen}
                component={item.Component}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <TabNav
                        key={index}
                        item={item}
                        accessibilityState={{ selected: focused }}
                        />
                    )
                    }}
                />
            ))}
        </Material.Navigator>
    );
}

const styles = StyleSheet.create({
    TabBar: {
        height: 120,
        paddingTop: 40,
        backgroundColor: '#561C24',
        borderBottomWidth: 0.5,
        borderColor: '#ddd',
        
    },
});
