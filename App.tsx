import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChoosePlatform from "./pages/ChoosePlatform";
import Platform from "./pages/Platform";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  ChoosePlatform: undefined;
  Platform: undefined;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ChoosePlatform" component={ChoosePlatform} />
        <Stack.Screen name="Platform" component={Platform} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
