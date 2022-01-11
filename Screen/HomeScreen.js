import React from 'react'
import { View, Text,StyleSheet, StatusBar, ScrollView } from 'react-native'
import BottomTabs from '../component/home/BottomTabs'
import Header from '../component/home/Header'
import Popularplace from '../component/home/Popularplace'
import Suggestion from '../component/home/Suggestion'

const HomeScreen = () => {
    return (
        <View style={Styles.container}>
            
            <ScrollView>
            <Header />
            <Suggestion />
            <Popularplace />

            </ScrollView>
            <BottomTabs />
         
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        // marginTop:StatusBar.currentHeight
    }
})
export default HomeScreen
