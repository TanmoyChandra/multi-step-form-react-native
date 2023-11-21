import React from "react";
import store from "./src/redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import Form1 from "./src/screens/Form1/Form1";
import Form2 from "./src/screens/Form2/Form2";
import Form3 from "./src/screens/Form3/Form3";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Form1">
            <Stack.Screen name="Form1" component={Form1} />
            <Stack.Screen name="Form2" component={Form2} />
            <Stack.Screen name="Form3" component={Form3} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
