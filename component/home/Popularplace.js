import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView,TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { collection, onSnapshot } from '@firebase/firestore'
import { db } from '../../firebase'
import * as Font from 'expo-font';


const Popularplace = ({ navigation }) => {

    const [fontLoaded,setFontLoaded] = useState(false)

    const [pPlace,setPPlace] = useState([])


    const getFonts = async () =>{
        await Font.loadAsync({
            'Roboto-Italic': require('../../assets/fonts/Roboto-Italic.ttf'),
            'Roboto-BoldItalic': require('../../assets/fonts/Roboto-BoldItalic.ttf'),
            'Roboto-ThinItalic': require('../../assets/fonts/Roboto-ThinItalic.ttf'),
            
        })
setFontLoaded(true)

    }
    

    const getPopularplace = () =>
    {
        const places = collection(db, 'Destination')
        onSnapshot(places, (snapshot) =>
        {
            setPPlace((snapshot.docs.map((place) => ({ id: place.id, ...place.data() }))))
      
        })
        
    }

    const handleData = (dplace) =>
    {
        console.log(dplace)
        }
    
    useEffect(() => {
        getFonts()
        getPopularplace();
    })

    return (
        <View style={Styles.container}>
            
            {fontLoaded &&<View style={Styles.headerWrapper}>
                <Text style={[Styles.header1]}>Popular</Text> 
                <Text style={Styles.header2}> places</Text>
            </View>}

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                {pPlace.map((place) => (
                    <TouchableOpacity key={place.id}
                        onPress={() => {
                            navigation.navigate('DestinationScreen', {
                                place_name: place.d_name,
                                 })   
                          }}>
                      
                    <View  style={{ marginLeft: 10, marginBottom: 10 }}>
                        
                <ImageBackground style={Styles.suggestImg} 
                    source={{uri:place.imgURL}}
                        imageStyle={{ borderRadius: 20 }} >
                        <View style={Styles.suggestTextWrapper}>

                            <Text></Text>

                            <View style={[Styles.suggestplace, Styles.suggestBottom]}>
                                <Entypo name="location-pin" size={24} color="#19B4BF" />
                                    <Text style={Styles.suggestplaceText}>{ place.d_name}</Text>
                            </View>

                        </View>
                            </ImageBackground>
                       
                        
                    </View>
                    </TouchableOpacity>

                ))}                
             
                </ScrollView>
            
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom:20
        // paddingHorizontal:20
      
    },
    headerWrapper: {
        flexDirection: "row",
        marginBottom: 20,
        marginLeft:20
    },
    header1: {
        fontSize: 20,
        color: "#4c4c4b",
        fontFamily:"Roboto-BoldItalic"   
    },
    header2: {
        fontSize: 20,
        color: "#4c4c4b",
        fontFamily:"Roboto-Italic",
        fontWeight:'normal'
    },
    suggestImg: {
        width: 160,
        height: 200,
        marginRight:0
        
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
