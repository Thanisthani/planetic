import { View, Text, StatusBar,StyleSheet, TouchableOpacity,ImageBackground,ScrollView } from 'react-native';
import React,{useEffect,useState} from 'react';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons'; 
import { collection,doc, onSnapshot,query ,where} from '@firebase/firestore'
import { db } from '../../firebase'
import {useRoute} from '@react-navigation/native'

const DestinationList = ({ navigation}) => {
    const [pPlace, setPPlace] = useState([])
    

    const route = useRoute();
    const { place_name} = route.params;

    const getPopularplace = () =>
    {
        const places = collection(db, 'Destination')
        const q = query(places,where("d_name","==",place_name))

        onSnapshot(q, (snapshot) =>
        {
            setPPlace((snapshot.docs.map((place) => ({id: place.id, ...place.data()} ))))
      
        })

        
        // console.log(place_name)
    }

    useEffect(() => {
        getPopularplace();
    })

  return (
      <View style={Styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons style={{paddingTop:10}} name="chevron-back" size={30} color="#4c4c4b" />
          </TouchableOpacity>

          <View style={Styles.headerWrapper}>
              <Text style={[Styles.heading, { fontWeight: "bold" }]}>Explore </Text> 
              <Text style={Styles.heading}>{ place_name}</Text>
          </View>

          <View style={Styles.destination}>

              <ScrollView >
                  {pPlace.map((place,index) => (
                      
                      <TouchableOpacity key={index} onPress={() => {
                          navigation.navigate('TripPlanScreen',
                              {
                                  place_id: place.id,
                                  imgURL: place.imgURL
                          })
                              
                      }
                      }   >

                      <ImageBackground  style={Styles.suggestImg}              
                    source={{uri:place.imgURL}}
                  imageStyle={{ borderRadius: 20 }} >
                  
                  <View style={Styles.suggestTextWrapper}>
                  
                      <View style={Styles.catogary}>
                                  <Text style={Styles.destinationText}>{place.category }</Text>
                      </View>

                      <View style={[Styles.suggestplace]}>
                          <Text style={Styles.suggestplaceText}>{ place.d_name}</Text>
                      </View>
                      
                      <View style={Styles.catogaryWrapper}>

                          <View style={[Styles.durationWrapper]}>
                              <AntDesign name="clockcircle" size={13} color="#19B4BF" />
                              <Text style={Styles.durationText}> {place.duration} Days</Text>
                          </View>
                          
                          <View style={Styles.budget}>
                                      <Text style={[Styles.destinationText, { fontSize: 17 }]}>${place.budget }</Text>
                          </View>
                        
                      </View>

                  </View>
                  
                          </ImageBackground>
                      </TouchableOpacity>
                      

                   ) )}


              
                  </ScrollView>
              
          </View> 
          
      </View>
      
  );
};

const Styles = StyleSheet.create(
    {
        container: {
            marginTop: StatusBar.currentHeight,
            marginHorizontal:10
        },
        
        headerWrapper: {
            flexDirection: "row",
            marginHorizontal: 10,
            marginBottom:10
        },
        heading: {
            paddingTop:5,
            fontSize: 28,
            fontWeight:'600',
            color: "black",
            // color:"#4c4c4b"
            
        },
        suggestImg: {
            width:380,
            height: 220,
            marginTop:10,
           
            
        },
        suggestTextWrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.2)',
            flex:1,
            justifyContent: "flex-end",
            borderRadius: 20,
            width:380,
        },
        catogaryWrapper: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems:"center"
        },
        catogary: {
            marginLeft:10,
            borderRadius: 20,
            backgroundColor: 'rgba(12, 100, 106, 0.7)',	
            width: 120,
            alignItems: "center", 
            marginTop:0
        },
        destinationText: {
            justifyContent: "center", 
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
            paddingVertical:5
        },
        budget: {
            marginRight:10,
            borderRadius: 20,
            backgroundColor: 'rgba(97, 96, 118, 0.7)',	
            width: 80,
            alignItems: "center", 
            marginBottom:10
        },
     
        suggestplace: {
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingTop: 3,
            alignItems: "baseline",
            marginLeft:10
           
        },
        suggestplaceText: {
            fontSize: 25,
            color: "white",
            fontWeight: "700",
           
        },

        durationWrapper: {
            flexDirection: "row",
            paddingHorizontal: 10,
            alignItems: "baseline",
            paddingLeft:20
           
        },
        
        durationText: {
            fontSize: 15,
            color: "#f4f4f6",
            // fontWeight: "700",
           
        },
        destination: {
            justifyContent: "center",
            alignItems:"center"
        }
    }
)

export default DestinationList;
