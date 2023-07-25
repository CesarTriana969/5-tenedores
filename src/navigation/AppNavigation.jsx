import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
// import RepositoryList from "../screens/RepositoryList";
// import Home from "../screens/Home";
// import About from "../screens/About";
import { screen } from "../utils"
import { RestaurantStack } from "./RestaurantStack"
import { FavoritesStack } from "./FavoritesStack";
import { RankingStack } from "./RankingStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";


const Tab = createBottomTabNavigator();


export function AppNavigation() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: "#00a680",
            tabBarInactiveTintColor: "#646464",
            tabBarIcon: ({ color, size }) =>
                screenOptions(route, color, size),
        })}>
            {/* <Tab.Screen name='list' component={RepositoryList} />
            <Tab.Screen name='home' component={Home} />
            <Tab.Screen name='about us' component={About} /> */}

            <Tab.Screen
                name={screen.restaurant.tab}
                component={RestaurantStack}
                options={{ title: "Restaurants" }}
            />

            <Tab.Screen
                name={screen.favorites.tab}
                component={FavoritesStack}
                options={{ title: "Favorites" }}
            />

            <Tab.Screen
                name={screen.ranking.tab}
                component={RankingStack}
                options={{ title: "Ranking" }}
            />

            <Tab.Screen
                name={screen.search.tab}
                component={SearchStack}
                options={{ title: "Search" }}
            />

            <Tab.Screen
                name={screen.account.tab}
                component={AccountStack}
                options={{ title: "Account" }}
            />

        </Tab.Navigator>
    );
}


function screenOptions(route, color, size) {

    let iconName;

    if (route.name === screen.restaurant.tab) {
        iconName = "compass-outline";
    }

    if (route.name === screen.favorites.tab) {
        iconName = "heart-outline";
    }

    if (route.name === screen.ranking.tab) {
        iconName = "star-outline";
    }

    if (route.name === screen.search.tab) {
        iconName = "search-outline";
    }

    if (route.name === screen.account.tab) {
        iconName = "home-outline";
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

