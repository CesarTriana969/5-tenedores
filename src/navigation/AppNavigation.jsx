import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import RepositoryList from "../screens/RepositoryList";
import Home from "../screens/Home";
import About from "../screens/About";

const Tab = createBottomTabNavigator();


export function AppNavigation() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#00a680",
            tabBarInactiveTintColor: "#646464",
            tabBarIcon: ({ color, size }) =>
                screenOptions(route, color, size),
        })}>
            <Tab.Screen name='list' component={RepositoryList} />
            <Tab.Screen name='home' component={Home} />
            <Tab.Screen name='about us' component={About} />
        </Tab.Navigator>
    );
}


function screenOptions(route, color, size) {

    let iconName;

    if (route.name === "list") {
        iconName = "compass-outline";
    }

    if (route.name === "home") {
        iconName = "home-outline";
    }

    if (route.name === "about us") {
        iconName = "heart-outline";
    }

    return (
        <Ionicons
            type="material-community"
            name={iconName}
            color={color}
            size={size}
        />
    );

}

