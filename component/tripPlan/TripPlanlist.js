import { View, Text,StyleSheet,Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect,useState}from 'react';
import Dash from 'react-native-dash';
import {Entypo,Fontisto } from '@expo/vector-icons'; 
import { collection, onSnapshot,query,orderBy,where } from '@firebase/firestore'
import { db } from "../../firebase"
import {useRoute} from '@react-navigation/native'

const TripPlanlist = ({navigation}) => {
    const route = useRoute();
    const { day,placeId } = route.params;
  
  const [tplace, setTplace] = useState([])

  const [tday, setTday] = useState(day)
  const [tplaceId, setPlaceId] = useState(placeId)
  
  
  const getplan = () =>
  {
  const places = collection(db, 'Destination', tplaceId, 'plan')
  const q = query(places,where("day", "==", tday),orderBy("order"))
      onSnapshot(q, (snapshot) =>
      {
          setTplace((snapshot.docs.map((place) => ({ id: place.id, ...place.data() }))))
      })

  }
  
  useEffect(() => {
    getplan();
  },[])


  return (
    <View style={Styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>
        {tplace.map((place) => (
           <View key={place.id} style={Styles.wrapper}>
            <Text style={Styles.time}>{place.time }</Text>
   
           <View style={Styles.iconWrapper}>
           <Entypo name="circle" size={20} color="#19B4BF" />
             <Dash style={{ width: 1, height: 85, flexDirection: 'column' }}
               dashColor="#19B4BF" dashThickness={2} dashLength={8} dashGap={8} />
           </View>
   
            <TouchableOpacity onPress={() => {
              navigation.navigate('PlaceDetailsScreen',
                {
                  place_name: place.p_name,
                  imgURL:place.image
            })
            }}>
           <View style={Styles.descriptionWrapper}>
    
             <Image style={Styles.placeimg} source={{uri:place.image}} />
   
             <View style={Styles.description}>
                <Text style={Styles.descriptionText} adjustsFontSizeToFit={true} numberOfLines={3}>{ place.p_name}</Text>            
             </View>
             
            </View>
            </TouchableOpacity>

         </View>

        ))}



    </ScrollView>

      <TouchableOpacity style={Styles.mapWrapper} onPress={() => {
        navigation.navigate('MapMarkerScreen',
          {
        placeId:placeId
      })
      }}>
        <View >
        <Fontisto style={Styles.mapIcon } name="map" size={30} color="white" />
        </View>
     
      </TouchableOpacity>
      
     

    

      
    </View>
  );
};


const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",  
    // #f3f5f9
    flex: 1,
    paddingLeft: 20,
    paddingTop:20
    
  },
  wrapper: {
    flexDirection: "row",
    // justifyContent:"space-around"
    alignItems:"flex-start"
  },
  time: {
    fontSize: 18,
    color: "#14939c",
    marginRight:30
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginRight:30
    
  },
  descriptionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ece7f5",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom:10,
    marginBottom: 10,
    marginRight: 10,
    // zIndex:100
  },
  description: {
    width:120,
    alignSelf: "flex-start"
    
  },
  descriptionText: {
    fontSize: 18,
    color: "#13838b",
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft:8
   
  },
  placeimg: {
    width: 80,
    height: 80,
    borderRadius:10
  },
  mapIcon: {
    backgroundColor:"#19B4BF",
    borderRadius: 50,
    // width: 63,
    // height: 63,
    padding: 15,
   
    // zIndex:300
    
  },
  mapWrapper: {
    position: "absolute",
    right: 30,
    bottom: 30,
  }
})

export default TripPlanlist;
