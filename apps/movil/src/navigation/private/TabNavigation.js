import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "../../screens/start/Home";

export default function TabNavigation() {
    const Material = createMaterialTopTabNavigator();

    const tabs = [
        { id: 1, title: 'Home', screen: 'home', Component: Home }
    ];

    return (
        <Material.Navigator>
            {tabs.map((item) => (
                <Material.Screen
                    key={item.id}
                    name={item.screen}
                    component={item.Component}
                />
            ))}
        </Material.Navigator>
    );
}
