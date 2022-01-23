import { View, Text } from 'react-native';
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
        return <Tab.Screen key={index} name={"Day " + day} children={() => <TripPlanlist day={day} placeId={placeId} />} />
        }
        

      })
  
      return result
 
 }
    

    useEffect(() => {
      getplan();
      
    })
  
  const tabOptions={
    activeTintColor: '#19B4BF',
    inactiveTintColor: '#637175',
    showIcon: true,
    pressColor: '#9BC9E2',
    scrollEnabled: true,
    tabStyle: {
      borderRadius: 0,
      margin: 0,
      alignContent: 'center'
    },
    
    indicatorStyle: {
      borderColor: "#19B4BF",
      borderWidth:2,
      height: 40,
      borderRadius: 20,
      marginBottom: 10,
      marginTop: 10,
      marginLeft:30,
      width: 100,
      alignContent: 'center',
      backgroundColor:"transparent"
    },

    style: {
      backgroundColor: 'rgba(	203,245,248,0.8)',
      height: 60,
      paddingLeft: 0,
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
      padding:0
    },

}
  
  
  
  
  
    
    return (
     
      <Tab.Navigator initialRouteName="DAY 01"  >
        {/* tabBarOption={tabOptions} */}
        <Tab.Screen name="DAY 01" children={() => <TripPlanlist day="01" placeId={placeId} />} />
        {rendrScreen()}
            </Tab.Navigator>
     
  );
};




export default TopTabNavigation;
