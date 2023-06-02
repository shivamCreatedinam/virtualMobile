// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Src/HomeScreen';
import UpperSheetContainer from './Src/UpperSheetContainer';
import SettingsScreen from './Src/SettingsScreen';
import GlyphInterface from './Src/GlyphInterface';
import Apps from './Src/Apps';



const Stack = createNativeStackNavigator();


function Routes() {
  const options = { headerShown: false, gestureEnabled: false };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={options}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="upper" component={UpperSheetContainer} />
        <Stack.Screen name="setting" component={SettingsScreen} />
        <Stack.Screen name="glyph" component={GlyphInterface} />
        <Stack.Screen name="apps" component={Apps} />
   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;