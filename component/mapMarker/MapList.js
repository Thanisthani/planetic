import { View, Text, StyleSheet } from 'react-native';
import React, {useEffect,useState }from 'react';
import { useRoute } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps';
import { collection, onSnapshot,query,orderBy,where } from '@firebase/firestore'
import { db } from "../../firebase"

const MapList = () => {
    const route = useRoute();
    const { day, placeId } = route.params;
    
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
  }, [])
    
    
    
    return (
        <View style={Styles.container}>
      <MapView style={Styles.map} 
                      initialRegion={{
                          /*Kandy 7.2906° N, 80.6337° E - Dambulla 7.903092	80.670837*/
                          latitude: 7.2906,
                          longitude:80.6337,
                          latitudeDelta:  0.3,
                          longitudeDelta:  0.305,
                          }}    
                         
            >
                
                {tplace.map((place, index) => (
                    
                    <Marker key={index}
                          coordinate={{
                              latitude:place.lat,
                              longitude:place.long,
                        }}
                        title={place.p_name}
                        description={place.time}
                        
                   />
                        
                ))}
                   
                      
                  </MapView>
    </View>
  );
};

const Styles = StyleSheet.create({
    container: {
        alignItems: "center",
       
        overflow: 'hidden',
        
      
     
        width:"100%",
    },
    map: {
        width:"100%",
            height: "100%",
    }
})

export default MapList;
