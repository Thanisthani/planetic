import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const Popularplace = () => {
    return (
        <View style={Styles.container}>
            
            <View style={Styles.headerWrapper}>
                <Text style={[Styles.header,{fontWeight:"bold"}]}>Popular</Text> 
                <Text style={Styles.header}> places</Text>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>


            <View style={{marginLeft:20, marginBottom:10}}>
                <ImageBackground style={Styles.suggestImg} 
                    source={require("../../assets/suggest-kandy.jpg")}
                        imageStyle={{ borderRadius: 20 }} >
                        <View style={Styles.suggestTextWrapper}>

                            <Text></Text>

                            <View style={[Styles.suggestplace, Styles.suggestBottom]}>
                                <Entypo name="location-pin" size={24} color="#19B4BF" />
                                <Text style={Styles.suggestplaceText}>Kandy</Text>
                            </View>

                        </View>
                </ImageBackground> 
                </View>
                

                <View style={{ marginBottom:10}}>
                <ImageBackground style={Styles.suggestImg} 
                    source={require("../../assets/Ella.jpeg")}
                        imageStyle={{ borderRadius: 20 }} >
                        <View style={Styles.suggestTextWrapper}>

                            <Text></Text>

                            <View style={[Styles.suggestplace, Styles.suggestBottom]}>
                                <Entypo name="location-pin" size={24} color="#19B4BF" />
                                <Text style={Styles.suggestplaceText}>Badulla</Text>
                            </View>
                            
                        </View>
                </ImageBackground> 
                </View>
                

                <View style={{ marginBottom:10}}>
                <ImageBackground style={Styles.suggestImg} 
                    source={require("../../assets/suggest-kandy.jpg")}
                        imageStyle={{ borderRadius: 20 }} >
                        <View style={Styles.suggestTextWrapper}>

                            <Text></Text>

                            <View style={[Styles.suggestplace, Styles.suggestBottom]}>
                                <Entypo name="location-pin" size={24} color="#19B4BF" />
                                <Text style={Styles.suggestplaceText}>Kandy</Text>
                            </View>
                            
                        </View>
                </ImageBackground> 
            </View>

               
             
                </ScrollView>
            
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        marginTop: 20,
        // paddingHorizontal:20
      
    },
    headerWrapper: {
        flexDirection: "row",
        marginBottom: 20,
        marginLeft:20
    },
    header: {
        fontSize: 20,
        color:"#4c4c4b"
    },
    suggestImg: {
        width: 160,
        height: 200,
        marginRight:10
        
    },
    suggestTextWrapper: {
        flex:1,
        justifyContent: "space-between",
        marginHorizontal:0
    },
    suggestBottom: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        width: 160,
        
    },
    suggestText: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        paddingVertical:10,
        paddingHorizontal: 10,
        
    },
    suggestplace: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingTop: 7,
       
    },
    suggestplaceText: {
        fontSize: 17,
        color: "white",
        fontWeight: "bold",
        paddingBottom:10
    }
})

export default Popularplace
