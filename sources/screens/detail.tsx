import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'

import { StackNavigatorParametersListType } from '../references/types/navigator'

type PropsType = {
    navigation: StackNavigationProp<StackNavigatorParametersListType, 'Detail'>
}

const Detail = (props: PropsType) => {
    const { navigation } = props

    return (
        <View
            style = {{
                alignItems: 'center',
                backgroundColor: 'white',
                flex: 1,
                justifyContent: 'center',
            }}
        >
            <TouchableOpacity
                onPress = {() => navigation.navigate('Home')}
                style = {{
                    marginTop: 20
                }}
            >
                <Text
                    style = {{
                        color: 'deepskyblue',
                        fontSize: 24,
                        textDecorationLine: 'underline'
                    }}
                >
                    Back To Home
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Detail