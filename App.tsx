/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/screens/Home';
import AddInvoice from './src/screens/AddInvoice';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
function App(): JSX.Element {
  
  const Stack = createNativeStackNavigator();

  return (
    <View >
      <ScrollView>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
                name="home"
                component={Home}
                options={{headerShown: false}}
              />
               <Stack.Screen
                name="addinvoice"
                component={AddInvoice}
                options={{headerShown: false}}
              />
              </Stack.Navigator>
        </NavigationContainer>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
