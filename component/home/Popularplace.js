import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView,TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { collection, onSnapshot } from '@firebase/firestore'
import {db} from '../../firebase'


const Popularplace = ({ navigation }) => {

    const [pPlace,setPPlace] = useState([])

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
        getPopularplace();
    })

    return (
        <View style={Styles.container}>
            
            <View style={Styles.headerWrapper}>
                <Text style={[Styles.header,{fontWeight:"bold"}]}>Popular</Text> 
                <Text style={Styles.header}> places</Text>
            </View>

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
