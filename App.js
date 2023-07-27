import { NavigationContainer } from "@react-navigation/native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { initFirebase } from "./src/utils"

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>

      <Toast />
    </>
  );
}
