import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/AccountScreen";
import { screen } from "../utils";

const stack = createNativeStackNavigator();

export function AccountStack() {
    return (
        <stack.Navigator>

            <stack.Screen
                name={screen.account.account}
                component={AccountScreen}
                options={{ title: "Account" }}
            />


        </stack.Navigator>
    )
}
