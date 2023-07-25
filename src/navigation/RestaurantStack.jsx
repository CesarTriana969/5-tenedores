import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screen } from '../utils'
import RestaurantsScreen from '../screens/Restaurants/RestaurantsScreen';
import AddRestaurantScreen from '../screens/Restaurants/AddRestaurantScreen';



const stack = createNativeStackNavigator();

export function RestaurantStack() {
    return (
        <stack.Navigator>

            <stack.Screen
                name={screen.restaurant.restaurants}
                component={RestaurantsScreen}
                options={{ title: "Restaurants" }}
            />

            <stack.Screen
                name={screen.restaurant.addRestaurant}
                component={AddRestaurantScreen}
                options={{ title: "Add Restaurants" }}
            />
            
        </stack.Navigator>
    )
}