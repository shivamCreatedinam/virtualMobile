// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import UpperSheetContainer from './src/UpperSheetContainer';
import SettingsScreen from './src/SettingsScreen';
import GlyphInterface from './src/GlyphInterface';
import Apps from './src/Apps';
import Ringtones from './src/Ringtones';
import SelectRingtone from './src/SelectRingtone';
import Network from './src/Network';
import AboutPhone from './src/AboutPhone';
import ExperimentalFeatures from './src/ExperimentalFeatures';



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
        <Stack.Screen name="ringtone" component={Ringtones} />
        <Stack.Screen name="selectRingtone" component={SelectRingtone} />
        <Stack.Screen name="network" component={Network} />
        <Stack.Screen name="about" component={AboutPhone} />
        <Stack.Screen name="experimental" component={ExperimentalFeatures} />
   
   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;