import { View, Text } from 'react-native';
import React,{useEffect,useState} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { collection, onSnapshot,query,orderBy } from '@firebase/firestore'
import { db } from "../../firebase"
import MapList from './MapList';
import {useRoute} from '@react-navigation/native'

const Tab = createMaterialTopTabNavigator();

const TopTabMap = () => {

  const [tplace, setTplace] = useState([])

  const route = useRoute();
  const { placeId } = route.params;


  // get data
  const getplan = () =>
  {
  const places = collection(db, 'Destination', placeId, 'plan')
  const q = query(places,orderBy("day"))
      onSnapshot(q, (snapshot) =>
      {
          setTplace((snapshot.docs.map((place) => ({ id: place.id, ...place.data() }))))
      })

  }

  // render screen
  const rendrScreen = () => {
    const days = tplace.map((place) => place.day)
    var newdays = [];
    var newdays = days.filter(function(elem, pos) {
      return days.indexOf(elem) == pos;
    });
      // console.log("render Screen")
    const result = newdays.map((day, index) => {
      if (day != 1) {
        return <Tab.Screen key={index} name={"Day " + day}
          // children={() => <TripPlanlist day={day} placeId={placeId} />}
          initialParams={{ day:day ,placeId:placeId }} 
          component={MapList}
        />
        }
      })
  
      return result
 
  }
  
  useEffect(() => {
    getplan();
    
  })

  const tabOptions={
    activeTintColor: 'white',
    inactiveTintColor: '#637175',
    showIcon: true,
    pressColor: '#9BC9E2',
    scrollEnabled: true,
    tabStyle: {
      borderRadius: 0,
      margin: 0,
      alignContent: 'center',
      width: 90,
      
    },
    
    indicatorStyle: {
      borderColor: "#19bfbc",
      borderWidth:0,
      height: 40,
      borderRadius: 20,
      marginBottom: 10,
      marginTop: 10,
      marginLeft:15,
      width: 80,
      alignContent: 'center',
      backgroundColor:"#00d7d5"
    },

    style: {
      backgroundColor: '#f3f5f9',
      height: 60,
      paddingLeft: 10,
      width: '100%',
      alignContent: 'center',
      justifyContent: 'center',
    },

    labelStyle: {
      fontSize: 14,
      justifyContent: 'center',
      alignContent: 'center',
      margin: 0,
      padding: 0,
      fontWeight: "bold",
   
    },
    

}
  



  return (
    <Tab.Navigator initialRouteName="DAY 01"
      tabBarOptions={tabOptions}
      // screenOptions={{
      //   tabBarStyle: {
            
      //         backgroundColor: 'transparent',
      //       },
      // }}
      >
        
        <Tab.Screen name="DAY 01"
          initialParams={{ day:"01" ,placeId:placeId }} 
          component={MapList}
        />
       
        {rendrScreen()}
            </Tab.Navigator>
  );
};

export default TopTabMap;
