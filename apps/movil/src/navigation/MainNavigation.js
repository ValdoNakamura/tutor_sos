import { NavigationContainer } from "@react-navigation/native";
import PrincipalNav from "./principal/PrincipalNav";


export default function MainNavigation() {
    return (
        <NavigationContainer>
            <PrincipalNav/>
        </NavigationContainer>
    )
} 