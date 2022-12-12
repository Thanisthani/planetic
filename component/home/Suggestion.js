import React,{ useEffect,useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { db ,auth} from '../../firebase';
import { collection, onSnapshot,doc,query,where,limit } from '@firebase/firestore'
import { useSelector } from 'react-redux'
import { SignInUser } from '../../Redux/Reducer/UserSlicer'
import * as Font from 'expo-font';




const Suggestion = ({navigation}) => {

    const [fontLoaded, setFontLoaded] = useState(false);

    const [suggestPlace, setSuggestPlace] = useState(null);
    const [fPlace, setFplace] = useState(null);

    const getPlace = async () => {
        try {
            const plans = doc(db, "Suggested_place", auth.currentUser.uid)
           
            await onSnapshot(plans, (snapshot) =>
                setSuggestPlace(snapshot.data())
            )
            console.log(suggestPlace + "suggested place" + auth.currentUser.uid);

           
        }
        catch (error) {
            console.log(error)
        }
    }


    // Get details

    const getSuggested = async () =>
    {
        try{
        await suggestPlace.TripPlace.map( async (sPlace, index) => {
            const details = collection(db, 'Destination')
            const q =  query(details, where("d_name", "==", sPlace),limit(1))

            onSnapshot(q, (snapshot) => setFplace(old => [...old, (snapshot.docs.map((place) => ({ id: place.id, ...place.data() })))]))

        }
            ) 
            
        console.log(fPlace); 
        }
        catch (error)
        {
            console.log(error + "ssss")
        }
        } 

    // font
    const getFonts = async () =>{
        await Font.loadAsync({
            'Roboto-Italic': require('../../assets/fonts/Roboto-Italic.ttf'),
            'Roboto-BoldItalic': require('../../assets/fonts/Roboto-BoldItalic.ttf'),
            'Roboto-ThinItalic': require('../../assets/fonts/Roboto-ThinItalic.ttf'),
            'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
            'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf'),
        })
setFontLoaded(true)

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
        // console.log(fPlace[2])
    
    }, [])
    
    useEffect(() => {
        if (suggestPlace) {
            setFplace([])
            getSuggested()
     
        }
    },[suggestPlace])
    
    
    return (
        <View style={Styles.container}>
            
         { fontLoaded &&  <View style={Styles.headerWrapper}>
                <Text style={[Styles.header1]}>Suggestion</Text> 
                {/* ,{fontWeight:"bold"} */}
                <Text style={Styles.header2}> for You</Text>
            </View>}

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>


                {/* Suggest place map */}


                {fPlace && fPlace.map((sPlace, index) =>
                (
                    <TouchableOpacity key={index} style={{  marginLeft:10 }} onPress={() => {
                        navigation.navigate('TripPlanScreen',
                              {
                                  place_id:sPlace[0].id,
                                  imgURL:sPlace[0].imgURL,
                                  place_name: sPlace[0].d_name,
                                  budget:sPlace[0].budget
                          })  
                      }}>
                    <Image style={Styles.suggestplace}
                            source={{uri:sPlace[0].imgURL}} />
                        <View style={Styles.suggestBottom}>
        
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Text style={Styles.suggestText}>{sPlace[0].d_name}</Text>
                            </View>
                            
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <AntDesign name="clockcircle" size={13} color="#19B4BF" />
                                    <Text style={[Styles.catogary]}> 0{sPlace[0].duration} Days</Text>
                                </View>
    
                                <View style={{ flexDirection: "row" }}>
                                    <Entypo name="location-pin" size={20} color="#19B4BF" />
                                    <Text style={[Styles.catogary]}>{sPlace[0].category}</Text>         
                                </View>
                                
                            </View>
    
                        </View>
                        
                    </TouchableOpacity>

                    ))} 
         {/* <View style={{ marginLeft:20 }}>
                <Image style={Styles.suggestplace}
                        source={require("../../assets/jaffna2.jpg")} />
                    <View style={Styles.suggestBottom}>
    
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Text style={Styles.suggestText}>Jaffna</Text>
                        </View>
                        
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <AntDesign name="clockcircle" size={13} color="#19B4BF" />
                                <Text style={[Styles.catogary]}>  05 Days</Text>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Entypo name="location-pin" size={20} color="#19B4BF" />
                                <Text style={[Styles.catogary]}>Beach</Text>         
                            </View>
                            
                        </View>

                    </View>
                    
                </View>


                <View style={{ marginBottom:10,marginLeft:10 }}>
                <Image style={Styles.suggestplace}
                        source={require("../../assets/Haputale.png")} />
                    <View style={Styles.suggestBottom}>

                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Text style={Styles.suggestText}>Haputale</Text>
                        </View>
                        
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <AntDesign name="clockcircle" size={13} color="#19B4BF" />
                                <Text style={[Styles.catogary]}>  03 Days</Text>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Entypo name="location-pin" size={20} color="#19B4BF" />
                                <Text style={[Styles.catogary]}>Mountain</Text>         
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




