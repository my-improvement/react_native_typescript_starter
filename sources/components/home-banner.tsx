import React from 'react'
import { Dimensions, View } from 'react-native'

type HomeBannerPropsType = {
    backgroundColor?: string,
    children?: React.ReactNode
}

const HomeBanner = (props: HomeBannerPropsType) => {
    const { backgroundColor } = props

    return (
        <View
            style = {{
                alignItems: 'center',
                backgroundColor,
                height: (Dimensions.get('window').width - 40) / 16 * 10,
                justifyContent: 'center',
                margin: 20,
                width: Dimensions.get('window').width - 40
            }}
        >
            {props.children}
        </View>
    )
}

export default HomeBanner