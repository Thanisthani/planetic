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
            <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{marginRight:20,marginBottom:10}}>
                <Image style={Styles.suggestplace}
                    source={require("../../assets/suggest-kandy.jpg")} />
                <View style={Styles.suggestBottom}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>
                        <View style={{flexDirection: "row"}}>
                    <Entypo name="location-pin" size={24} color="#19B4BF" />
                            <Text style={Styles.suggestText}>Kandy</Text>
                        </View>
                            <Text style={[Styles.catogary]}>Heritage</Text>         
                </View>
                <View style={{flexDirection: "row",alignItems:"center"}}>
                        <AntDesign name="clockcircle" size={13} color="#19B4BF" />
                        <Text style={[Styles.catogary]}>  05 Days</Text>
                        </View>
                </View>
                
                </View>

                <View style={{marginRight:20}}>
                <Image style={Styles.suggestplace}
                    source={require("../../assets/suggest-kandy.jpg")} />
                <View style={Styles.suggestBottom}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>
                        <View style={{flexDirection: "row"}}>
                    <Entypo name="location-pin" size={24} color="#19B4BF" />
                            <Text style={Styles.suggestText}>Kandy</Text>
                        </View>
                            <Text style={[Styles.catogary]}>Heritage</Text>         
                </View>
                <View style={{flexDirection: "row",alignItems:"center"}}>
                        <AntDesign name="clockcircle" size={13} color="#19B4BF" />
                        <Text style={[Styles.catogary]}>  05 Days</Text>
                        </View>
                </View>
                
                </View>

                <View style={{marginRight:20}}>
                <Image style={Styles.suggestplace}
                    source={require("../../assets/suggest-kandy.jpg")} />
                <View style={Styles.suggestBottom}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>
                        <View style={{flexDirection: "row"}}>
                    <Entypo name="location-pin" size={24} color="#19B4BF" />
                            <Text style={Styles.suggestText}>Kandy</Text>
                        </View>
                            <Text style={[Styles.catogary]}>Heritage</Text>         
                </View>
                <View style={{flexDirection: "row",alignItems:"center"}}>
                        <AntDesign name="clockcircle" size={13} color="#19B4BF" />
                        <Text style={[Styles.catogary]}>  05 Days</Text>
                        </View>
                </View>
                
                </View>

                <View style={{marginRight:20}}>
                <Image style={Styles.suggestplace}
                    source={require("../../assets/suggest-kandy.jpg")} />
                <View style={Styles.suggestBottom}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>
                        <View style={{flexDirection: "row"}}>
                    <Entypo name="location-pin" size={24} color="#19B4BF" />
                            <Text style={Styles.suggestText}>Kandy</Text>
                        </View>
                            <Text style={[Styles.catogary]}>Heritage</Text>         
                </View>
                <View style={{flexDirection: "row",alignItems:"center"}}>
                        <AntDesign name="clockcircle" size={13} color="#19B4BF" />
                        <Text style={[Styles.catogary]}>  05 Days</Text>
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
        paddingHorizontal: 20,
       
    },
    headerWrapper: {
        flexDirection: "row",
        marginBottom:20
    },
    header: {
        fontSize: 20,
        color:"#4c4c4b"
    },
    suggestplace: {
        width: 250,
        height: 130,
        borderTopLeftRadius: 10,
       borderTopRightRadius:10
    },
    suggestBottom: {
        width: 250,
        backgroundColor: "white",
        elevation: 3,
        paddingVertical: 5,
        paddingHorizontal:15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius:10
    },
    suggestText: {
        fontSize: 19,
        fontWeight:"bold"
    },
    catogary: {
        fontSize: 15,
        color:"#19B4BF"
    }
})
export default Suggestion
