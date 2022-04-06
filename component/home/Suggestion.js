import React,{ useEffect,useState } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { db ,auth} from '../../firebase';
import { collection, onSnapshot,updateDoc,doc } from '@firebase/firestore'
import { useSelector } from 'react-redux'
import { SignInUser } from '../../Redux/Reducer/UserSlicer'
import {Roboto_400Regular_Italic} from '@expo-google-fonts/roboto';
import * as Font from 'expo-font';



const Suggestion = () => {


    
    const user = useSelector(SignInUser);
    

const [suggestPlace, setSuggestPlace] = useState(null)

const getPlace = async () =>
    {
        try{
            const plans = doc(db, "Suggested_place", auth.currentUser.uid)
           
          await  onSnapshot(plans, (snapshot) =>
            setSuggestPlace(snapshot.data())
            )
            }
            catch (error)
            {
                console.log(error)
            }
    }

    const getFonts = () =>
        Font.loadAsync({
            'Roboto-Italic': require('../../assets/fonts/Roboto-Italic.ttf'),
            'Roboto-BoldItalic': require('../../assets/fonts/Roboto-BoldItalic.ttf'),
            'Roboto-ThinItalic': require('../../assets/fonts/Roboto-ThinItalic.ttf'),
            
  });
    
    // update recommended places
    const updatePlace = async () =>
    {
        
        if (myPlan != null)
        {
            await updateDoc(doc(db,'Recommend_place',"one"), {
                placeName:myPlan[0].placeName
    
           })
        }
        
            
        }
        

    useEffect(() => {
    
       getFonts()
    // fetch('http://192.168.1.102:5000/', {
    //    method:'GET'
    // })   
    //     .then(resp => resp.json())
    //     .then(article =>
    //         console.log("Hi recommend" +article["hello"] ) 
    //      )
    // .catch(error => {console.log("suggestion  " + error)})
    getPlace()
    // updatePlace()
    // console.log("place details" + suggestPlace.TripPlace)
    
}, [])
    
    
    return (
        <View style={Styles.container}>
            
            <View style={Styles.headerWrapper}>
                <Text style={[Styles.header1]}>Suggestion</Text> 
                {/* ,{fontWeight:"bold"} */}
                <Text style={Styles.header2}> for You</Text>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>


                {/* Suggest place map */}


                {suggestPlace && suggestPlace.TripPlace.map((sPlace, index) =>
                (
                    <View key={index} style={{  marginLeft:20 }}>
                    <Image style={Styles.suggestplace}
                            source={require("../../assets/Ella.jpeg")} />
                        <View style={Styles.suggestBottom}>
        
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Text style={Styles.suggestText}>{ sPlace}</Text>
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

                    ))} 
      


                {/* <View style={{ marginBottom:10 }}>
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
                    
                </View> */}


            </ScrollView>
              
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        marginTop: 20,
        zIndex:-1
        // paddingHorizontal: 20,
       
    },
    headerWrapper: {
        marginTop: 10,
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
        borderWidth: 0.4,
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
