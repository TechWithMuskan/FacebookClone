import { StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoginScreen from './src/screens/LoginScreen';
import { Colors } from './src/utils/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from './src/screens/RegisterScreen';
import MainScreen from './src/screens/MainScreen';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const App = () => {

  const [user, setUser] = useState();

  const onAuthStateChanged = (user: any) => setUser(user);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.white} barStyle='dark-content' />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ?
          <Stack.Screen name="MainScreen" component={MainScreen} />
          :
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;