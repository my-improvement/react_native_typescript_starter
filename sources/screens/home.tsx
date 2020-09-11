import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'

import { StackNavigatorParametersListType } from '../references/types/navigator'
import HomeBanner from '../components/home-banner'

type PropsType = {
    navigation: StackNavigationProp<StackNavigatorParametersListType, 'Home'>
}

const Home = (props: PropsType) => {
    const { navigation } = props

    return (
        <View
            style = {{
                backgroundColor: 'white',
                flex: 1
            }}
        >
            <HomeBanner
                backgroundColor = 'teal'
            >
                <Text
                    style = {{
                        color: 'white',
                        fontSize: 24,
                        fontWeight: 'bold'
                    }}
                >
                    Home Banner
                </Text>
            </HomeBanner>

            <View
                style = {{
                    alignItems: 'center',
                    flex: 1,
                    justifyContent: 'center'
                }}
            >
                <TouchableOpacity
                    onPress = {() => navigation.navigate('Detail')}
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
                        Go To Details
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home