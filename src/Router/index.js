import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../Home";

const { Navigator, Screen } = createNativeStackNavigator();

export const PATH = {
    HOME: "Home",
}

const Router = () => {
    return (
        <NavigationContainer>
            <Navigator >
                <Screen name={PATH.HOME} component={Home} />
            </Navigator>
        </NavigationContainer>
    )
}

export default Router