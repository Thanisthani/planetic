import { View, Text, Button, Linking } from 'react-native';
import React from 'react';
import createMapLink from 'react-native-open-maps';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { Marker } from 'react-native-maps';

// createOpenLink 
const ExampleScreen = () => {

// const doop = createOpenLink()

// const origin = {latitude: 7.2906, longitude:80.6337};
//   const destination = { latitude: 8.755926069762058, longitude: 80.50740118391202 };
//   const GOOGLE_MAPS_APIKEY = 'AIzaSyDManby2L9M12RO5yx1yp7k45AaU8Z7KU8'
  
const openMaps = () => {
  
  const lat = 7.2906
  const long = 80.6337
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&origin=Sri%20Dalada%20Veediya%2C%20Kandy%2020000%2C%20Sri%20Lanka%0A%0A&destination=Embekka%20Pilimatalawa%20Road%2C%20Embekka%2C%20Sri%20Lanka%0A&travelmode=driving`)
.catch(err => console.error('An error occurred', err));
  // geo:0,0?q=${lat},${long}
}
  
  
  
  const openGmap = () => {
  console.log("Open gmap")
    // openMap({ latitude: 8.755926069762058, longitude: 80.50740118391202 });
    createMapLink({ provider: 'google', start: 'Temple of the Sacred Tooth Relic', end:'Kataragama Devalaya'})

}
  return (
    <View>
      <Text>Hello Guysss</Text>  
    {/* <MapView style={{width:"100%",
            height: "100%"}} 
                      initialRegion={{ */}
                          {/* /*Kandy 7.2906° N, 80.6337° E - Dambulla 7.903092	80.670837 */}
                          {/* latitude: 7.2906,
                          longitude:80.6337,
                          latitudeDelta:  0.3,
                          longitudeDelta:  0.305,
                          }}    
                         
      >

<MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
  />
        </MapView> */}
      <Button
        color={'#bdc3c7'}
        onPress={openMaps}
        title="Click To Open Maps summ 🗺" />
    </View>
  );
};

export default ExampleScreen;
