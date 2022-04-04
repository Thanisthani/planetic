import { View, Text,ScrollView,StyleSheet, Linking,TouchableOpacity } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native'
import openMap from 'react-native-open-maps';
import {MaterialIcons } from '@expo/vector-icons'; 

 
const PlaceOverview = ({navigation}) => {
    const route = useRoute();
    const { type, phone, open, lat, long, about,destination } = route.params;
    
    //open google map
    const direct = () => {
  console.log(destination)
          Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${destination}`)
      .catch(err => console.error('An error occurred', err));
        // geo:0,0?q=${lat},${long}
    }
    

    const openGmap = () => {
        // console.log("Open gmap")
        // openMap({ latitude: lat, longitude:long})
        Linking.openURL(`geo:0,0?q=${lat},${long}`)
        .catch(err => console.error('An error occurred', err));
        
    }
    
  return (
    <View style={Styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>

              <View style={Styles.wrapper}>
                  <Text style={Styles.leftText}>Type</Text>
                  <Text style={Styles.rightText}>{type}</Text>
              </View>

              <View style={Styles.wrapper}>
                  <Text style={Styles.leftText}>Open</Text>
                  <Text style={Styles.rightText}>{ open}</Text>
              </View>

              <View style={Styles.wrapper}>
                  <Text style={Styles.leftText}>Phone</Text>
                  <Text style={Styles.rightText}>{ phone}</Text>
              </View>

              <View style={{marginBottom:20}}>
                  <Text style={Styles.leftText}>Location</Text>
                  <View style={{alignItems:"center"}}>
              <TouchableOpacity onPress={openGmap} style={Styles.mapWrapper} >
                  <MapView style={Styles.map} 
                      initialRegion={{
                          /*Kandy 7.2906° N, 80.6337° E - Dambulla 7.903092	80.670837*/
                          latitude: lat,
                          longitude:long,
                          latitudeDelta:  0.2,
                          longitudeDelta:  0.205,
                          }}    
                         
                  >
                   <Marker
                          coordinate={{
                              latitude: lat,
                              longitude: long,
                          }}
                      />
                      
                  </MapView>
                  
                      </TouchableOpacity>
                  </View>
                  

              </View>
      
              <View style={Styles.wrapper}>
                  <Text style={Styles.leftText}>About</Text>
                  
              </View>
              <Text style={Styles.aboutText}>{ about}</Text>


          </ScrollView>
          

          {/* Direction */}
          <TouchableOpacity style={Styles.mapfloat} onPress={direct}>
        <View >
        <MaterialIcons style={Styles.mapIcon } name="directions" size={30} color="white" />
        </View>
     
      </TouchableOpacity>

    </View>
  );
};

const Styles = StyleSheet.create(
    {
        container: {
            paddingHorizontal: 20,
            
            backgroundColor: "#feffff",
            flex:1
        },
        wrapper: {
            paddingTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom:20
        },
        leftText: {
            fontSize: 18,
            fontWeight:"bold"
        },
        rightText: {
            fontSize: 18,
            color:"#989898"
        },
        map: {
          
            width: 330,
            height: 200,
        },
        mapWrapper: {
            alignItems: "center",
            marginTop: 10,
            overflow: 'hidden',
            borderRadius: 15,
            borderWidth: 0.4,
            borderColor:"#19B4BF",
            width: 330,
            // height: 200,
            
        },
        aboutText: {
            textAlign: "justify",
            fontSize: 18,
            color:"#989898"
        },
        mapfloat: {
            position: "absolute",
            right: 30,
            bottom: 30,
        },
        mapIcon: {
            backgroundColor:"#19B4BF",
            borderRadius: 50,
            // width: 63,
            // height: 63,
            padding: 10,
           
            // zIndex:300
            
          },
    }
)
export default PlaceOverview;
