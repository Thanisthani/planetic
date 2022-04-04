import { View, Text,ScrollView,StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native'
import openMap from 'react-native-open-maps';

 
const PlaceOverview = ({navigation}) => {
    const route = useRoute();
    const { type, phone, open, lat, long, about } = route.params;
    
    //open google map

    const openGmap = () => {
        console.log("Open gmap")
        openMap({ latitude: lat, longitude:long})
        
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
        }
    }
)
export default PlaceOverview;
