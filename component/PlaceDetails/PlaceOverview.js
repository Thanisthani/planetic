import { View, Text,ScrollView,StyleSheet } from 'react-native';
import React from 'react';
import MapView,{ Marker } from 'react-native-maps';


const PlaceOverview = () => {
  return (
    <View style={Styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>

              <View style={Styles.wrapper}>
                  <Text style={Styles.leftText}>Type</Text>
                  <Text style={Styles.rightText}>Temple</Text>
              </View>

              <View style={Styles.wrapper}>
                  <Text style={Styles.leftText}>Open</Text>
                  <Text style={Styles.rightText}>5.30 AM - 6.00 PM</Text>
              </View>

              <View style={Styles.wrapper}>
                  <Text style={Styles.leftText}>Phone</Text>
                  <Text style={Styles.rightText}>+94 77 711 1223</Text>
              </View>

              <View style={{marginBottom:20}}>
                  <Text style={Styles.leftText}>Location</Text>
                  <View style={{alignItems:"center"}}>
              <View style={Styles.mapWrapper} >
                  <MapView style={Styles.map} 
                      initialRegion={{
                          /*Kandy 7.2906° N, 80.6337° E - Dambulla 7.903092	80.670837*/
                          latitude: 7.95,
                          longitude: 80.670837,
                          latitudeDelta:  0.2,
                          longitudeDelta:  0.205,
                          }}    
                         
                  >
                   <Marker
                          coordinate={{
                              latitude: 7.95,
                              longitude: 80.670837,
                          }}
                      />
                      
                  </MapView>
                  
                      </View>
                  </View>
                  

              </View>
      
              <View style={Styles.wrapper}>
                  <Text style={Styles.leftText}>About</Text>
                  
              </View>
              <Text style={Styles.aboutText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. </Text>


          </ScrollView>
          
    </View>
  );
};

const Styles = StyleSheet.create(
    {
        container: {
            paddingHorizontal: 20,
            paddingTop: 20,
            backgroundColor: "#feffff",
            flex:1
        },
        wrapper: {
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
