import { View, Text,Animated,TouchableOpacity } from 'react-native';
import React,{useEffect,useState} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExampleScreen from '../../Screen/ExampleScreen';
import OverViewScreen from '../../Screen/OverViewScreen';
import { useRoute } from '@react-navigation/native'
import { collection, onSnapshot,query,orderBy } from '@firebase/firestore'
import { db } from "../../firebase"
import TripPlanlist from './TripPlanlist';


const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = ({placeId}) => {

  const [tplace, setTplace] = useState([])
  const [tday, setTday] = useState([])
  

  const getplan = () =>
    {
    const places = collection(db, 'Destination', placeId, 'plan')
    const q = query(places,orderBy("day"))
        onSnapshot(q, (snapshot) =>
        {
            setTplace((snapshot.docs.map((place) => ({ id: place.id, ...place.data() }))))
        })

  }
  
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
          component={TripPlanlist}
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
      width:90
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
      backgroundColor:"#00ebe8"
    },

    style: {
      backgroundColor: 'white',
      height: 60,
      paddingLeft: 10,
      margin: 0,
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
      fontWeight:"bold"
    },
    

}
  
  
  
  
  
    
    return (
     
      <Tab.Navigator initialRouteName="DAY 01" tabBarOptions={tabOptions }
      //   screenOptions={{
      //     tabBarActiveTintColor: '#1cc4d0',
      //   tabBarIndicatorStyle: {
      //     backgroundColor: '#1cc4d0',
      //     height: 2,

      //     },
         
      //   tabBarScrollEnabled: true,
      //   tabBarLabelStyle: {fontSize: 20},
      //   tabBarItemStyle: { width: 90, },
      //   tabBarStyle: {
      //     height: 80,
      //     backgroundColor: 'white',
      //   },
      // }} 
      >
        
        <Tab.Screen name="DAY 01"
          // children={() => <TripPlanlist day="01" placeId={placeId} />}
          initialParams={{ day:"01" ,placeId:placeId }} 
          component={TripPlanlist}
        />
       
        {rendrScreen()}
            </Tab.Navigator>
     
  );
};




export default TopTabNavigation;
