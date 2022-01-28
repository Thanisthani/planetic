import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import { Foundation,FontAwesome ,MaterialCommunityIcons ,Ionicons} from '@expo/vector-icons';

const BottomTabs = () => {
    return (
        <View style={Styles.wrapper}>
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.iconWrapper}>
                <Foundation name="home" size={30} color="#19B4BF" />

                <Text style={[Styles.bottomText,{color:"#19B4BF"}]}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.iconWrapper}>
                <FontAwesome name="map" size={23} color="#9b9b99" />
                <Text style={Styles.bottomText}>My trip</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.iconWrapper}>
                <MaterialCommunityIcons name="post-outline" size={29} color="#9b9b99" />
                <Text style={Styles.bottomText}>Post</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.iconWrapper}>
                <Ionicons name="notifications" size={28} color="#9b9b99" />
                <Text style={Styles.bottomText}>Notification</Text>
            </TouchableOpacity>
            
            </View>
            </View>
    )
}

const Styles = StyleSheet.create({
    wrapper: {
        
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderTopWidth: 0.5,
        alignItems: "baseline",
        
    },
    iconWrapper: {
        padding: 5,
        alignItems: "center",
   
    },
    bottomText: {
        fontSize: 11,
        color: "#9b9b99",
        fontWeight:"bold"
    }
})

export default BottomTabs
