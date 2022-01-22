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
  const[tday,setTday] = useState([])

  const getplan = () =>
    {
    const places = collection(db, 'Destination', placeId, 'plan')
    const q = query(places,orderBy("day"))
        onSnapshot(q, (snapshot) =>
        {
            setTplace((snapshot.docs.map((place) => ({ id: place.id, ...place.data() }))))
        })
       
  }
  
  const days = tplace.map((place) => place.day)
  
  var newdays = [];
  var newdays = days.filter(function(elem, pos) {
          return days.indexOf(elem) == pos;
  });
    

    useEffect(() => {
      getplan();
      
    })
    
    return (
     
      <Tab.Navigator>
        {newdays.map((day,index) => (
          <Tab.Screen key={index} name={day}
            // options={{
            //   title: () => (
            //     <Text>Day { day}</Text>
            //   ),
            // }}
            children={() => <TripPlanlist day={day} />}
          />

        ))} 
    <Tab.Screen  name="example" component={ExampleScreen} />
            </Tab.Navigator>
     
  );
};

export default TopTabNavigation;
