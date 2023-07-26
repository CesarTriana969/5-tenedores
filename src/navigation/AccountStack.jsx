import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/Account/AccountScreen";
import { LoginScreen } from "../screens/Account/LoginScreen";
import { RegisterScreen } from "../screens/Account/RegisterScreen";
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

            <stack.Screen
                name={screen.account.login}
                component={LoginScreen}
                options={{ title: "Iniciar Sección" }}
            />

            <stack.Screen
                name={screen.account.register}
                component={RegisterScreen}
                options={{ title: "Crear cuenta" }}
            />

        </stack.Navigator>
    )
}
