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
            <View>
                <ImageBackground style={Styles.suggestImg} 
                    source={require("../../assets/suggest-kandy.jpg")}
                    imageStyle={{ borderRadius: 20 }} >
                    <View style={Styles.suggestTextWrapper}>
                        <Text></Text>
                    <View style={Styles.suggestBottom}>
                    {/* <Text style={Styles.suggestText}>Kandy</Text> */}
                            <Text style={Styles.suggestText}>Heritage</Text>
                            <Text style={Styles.suggestText}>05 Days</Text>
                            
                        </View>
                        </View>
                </ImageBackground>
                <View style={Styles.suggestplace}>
                <Entypo name="location-pin" size={24} color="#19B4BF" />
                <Text style={Styles.suggestplaceText}>Kandy</Text>
                    </View>
                    
                
                </View>
                <View>
                <ImageBackground style={Styles.suggestImg}
                    source={require("../../assets/suggest-kandy.jpg")}
                    imageStyle={{ borderRadius: 20 }} >
                    <View style={Styles.suggestTextWrapper}>
                        <Text></Text>
                    <View style={Styles.suggestBottom}>
                    {/* <Text style={Styles.suggestText}>Kandy</Text> */}
                            <Text style={Styles.suggestText}>Heritage</Text>
                            <Text style={Styles.suggestText}>05 Days</Text>
                            
                        </View>
                        </View>
                </ImageBackground>
                <View style={Styles.suggestplace}>
                <Entypo name="location-pin" size={24} color="#19B4BF" />
                <Text style={Styles.suggestplaceText}>Kandy</Text>
                    </View>
                    
                
                </View>
                <View>
                <ImageBackground style={Styles.suggestImg}
                    source={require("../../assets/suggest-kandy.jpg")}
                    imageStyle={{ borderRadius: 20 }} >
                    <View style={Styles.suggestTextWrapper}>
                        <Text></Text>
                    <View style={Styles.suggestBottom}>
                    {/* <Text style={Styles.suggestText}>Kandy</Text> */}
                            <Text style={Styles.suggestText}>Heritage</Text>
                            <Text style={Styles.suggestText}>05 Days</Text>
                            
                        </View>
                        </View>
                </ImageBackground>
                <View style={Styles.suggestplace}>
                <Entypo name="location-pin" size={24} color="#19B4BF" />
                <Text style={Styles.suggestplaceText}>Kandy</Text>
                    </View>
                    
                
                </View>
                </ScrollView>
            
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal:20
    },
    headerWrapper: {
        flexDirection: "row",
        marginBottom:20
    },
    header: {
        fontSize: 20,
        color:"#4c4c4b"
    },
    suggestImg: {
    width: 160,
        height: 200,
        marginRight:20
        
    },
    suggestTextWrapper: {
        flex:1,
        justifyContent: "space-between",
        marginHorizontal:0
    },
    suggestBottom: {
        flexDirection:"row",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        width: 160,
        justifyContent:"space-between"
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
        paddingTop:7
    },
    suggestplaceText: {
        fontSize: 17,
        color: "#19B4BF",
        fontWeight:"bold"
    }
})

export default Popularplace
