// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './Src/Screen/Login';
import GroupsScreen from './Src/Screen/GroupsScreen';
import {Provider} from 'react-redux';
import store from './Redux/store';
import Contacts from './Src/Screen/contacts';
import GroupDetailScreen from './Src/Screen/GroupDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Groups"
            component={GroupsScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Contacts"
            component={Contacts}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="GroupDetail"
            component={GroupDetailScreen}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
