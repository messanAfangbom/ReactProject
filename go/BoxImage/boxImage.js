import * as React from 'react'
import { Image, View, ScrollView, StyleSheet, Text } from 'react-native'

const nb_image

const BoxImage = ({ navigation, route }) => {
    return (
        <ScrollView>
            for (let index = 0; index < ({route.params.count}); index++ {
                <Image source={require(`../imagesObjetAvendre/${route.path}/${route.path}_${index}.png`)}></Image>
            }
        </ScrollView>
    )
}
export default BoxImage;