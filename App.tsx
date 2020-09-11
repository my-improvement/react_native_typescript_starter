import 'react-native-gesture-handler'

import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { StackNavigatorParametersListType } from './sources/references/types/navigator'

import SplashScreen from './sources/screens/splash-screen'
import Home from './sources/screens/home'
import Detail from './sources/screens/detail'

const Stack = createStackNavigator<StackNavigatorParametersListType>()

type PropsType = {
}

export default (props: PropsType) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions = {{
          headerShown: false
        }}
      >
        <Stack.Screen
          component = {SplashScreen}
          name = 'SplashScreen'
        />

        <Stack.Screen
          component = {Home}
          name = 'Home'
        />

        <Stack.Screen
          component = {Detail}
          name = 'Detail'
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}