import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'

import { StackNavigatorParametersListType } from '../references/types/navigator'

type PropsType = {
    navigation: StackNavigationProp<StackNavigatorParametersListType, 'SplashScreen'>
}

const SplashScreen = (props: PropsType) => {
    const { navigation } = props

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 1500)
    }, [])

    return (
        <View
            style = {{
                alignItems: 'center',
                backgroundColor: 'white',
                flex: 1,
                justifyContent: 'center'
            }}
        >
            <Text
                style = {{
                    color: 'black',
                    fontSize: 24,
                    fontWeight: 'bold'
                }}
            >
                React Native Typescript Starter
            </Text>
        </View>
    )
}

export default SplashScreen