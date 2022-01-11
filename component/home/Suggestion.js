import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native'
import { Entypo, AntDesign } from '@expo/vector-icons';


const Suggestion = () => {
    return (
        <View style={Styles.container}>
            
            <View style={Styles.headerWrapper}>
                <Text style={[Styles.header,{fontWeight:"bold"}]}>Suggestion</Text> 
                <Text style={Styles.header}> for You</Text>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                
            <View style={{  marginLeft:20 }}>
                <Image style={Styles.suggestplace}
                        source={require("../../assets/Ella.jpeg")} />
                    <View style={Styles.suggestBottom}>
    
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Text style={Styles.suggestText}>Ella</Text>
                        </View>
                        
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <AntDesign name="clockcircle" size={13} color="#19B4BF" />
                                <Text style={[Styles.catogary]}>  04 Days</Text>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Entypo name="location-pin" size={20} color="#19B4BF" />
                                <Text style={[Styles.catogary]}>Nature</Text>         
                            </View>
                            
                        </View>

                    </View>
                    
                </View>


                <View style={{ marginBottom:10 }}>
                <Image style={Styles.suggestplace}
                        source={require("../../assets/suggest-kandy.jpg")} />
                    <View style={Styles.suggestBottom}>

                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Text style={Styles.suggestText}>Kandy</Text>
                        </View>
                        
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <AntDesign name="clockcircle" size={13} color="#19B4BF" />
                                <Text style={[Styles.catogary]}>  05 Days</Text>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Entypo name="location-pin" size={20} color="#19B4BF" />
                                <Text style={[Styles.catogary]}>Heritage</Text>         
                            </View>
                            
                        </View>

                    </View>
                    
                </View>

                
                <View style={{  }}>
                <Image style={Styles.suggestplace}
                        source={require("../../assets/suggest-kandy.jpg")} />
                    <View style={Styles.suggestBottom}>
    
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Text style={Styles.suggestText}>Kandy</Text>
                        </View>
                        
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <AntDesign name="clockcircle" size={13} color="#19B4BF" />
                                <Text style={[Styles.catogary]}>  05 Days</Text>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Entypo name="location-pin" size={20} color="#19B4BF" />
                                <Text style={[Styles.catogary]}>Heritage</Text>         
                            </View>
                            
                        </View>

                    </View>
                    
                </View>


            </ScrollView>
              
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        marginTop: 20,
        // paddingHorizontal: 20,
       
    },
    headerWrapper: {
        marginTop: 10,
        flexDirection: "row",
        marginBottom: 20,
        marginLeft:20
    },
    header: {
        fontSize: 20,
        color:"#4c4c4b"
    },
    suggestplace: {
        width: 250,
        height: 130,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
       marginRight:10
    },
    suggestBottom: {
        width: 250,
        backgroundColor: "white",
        // elevation: 2,
        paddingTop: 8,
        paddingBottom:5,
        paddingHorizontal:15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 0.2,
        borderColor:"#19B4BF"
    },
    suggestText: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#4c4c4b",
    },
    catogary: {
        fontSize: 15,
        color:"#19B4BF"
    }
})
export default Suggestion
