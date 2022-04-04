import { View, Text } from 'react-native';
import React,{useState,useEffect} from 'react';
import Header from '../component/PlaceDetails/Header';
import TopTabPlace from '../component/PlaceDetails/TopTabPlace';
import { useRoute } from '@react-navigation/native'
import { collection, onSnapshot,getDoc,doc } from '@firebase/firestore'
import { db } from "../firebase"

const PlaceDetailsScreen = ({ navigation }) => {
  const route = useRoute();
  const { place_name ,imgURL} = route.params;
  
  const [tplace, setTplace] = useState()

  // const getplace = () =>
  // {
  // const places = collection(db, 'Tourists_places', place_name)

  //     onSnapshot(places, (snapshot) =>
  //     {
  //         setTplace((snapshot.docs.map((place) => ({ id: place.id, ...place.data() }))))
  //     })

  // }


  const getplace = async () => {
    const posts = doc(db, "Tourists_places", place_name)
    const querySnapshot = await getDoc(posts);
    if (querySnapshot.exists())
    {
      setTplace(querySnapshot.data())
      if (tplace) {
        // console.log(tplace)
      }
    }
    
    else {
      console.log("no data")
    }
}
  
  useEffect(() => {
    getplace();
    
  })
  return (
    <>
      
      {tplace ? 
        <>
          <Header navigation={navigation} imgURL={imgURL}
        place_name={place_name} category={tplace.category} amount={tplace.amount }/>
          <TopTabPlace type={tplace.type} place_name={place_name} phone={tplace.phone} open={tplace.open}
            lat={tplace.latitude} long={tplace.longitude} about={tplace.about} destination={tplace.destination}/>
        </>
        
     
       :
        <></>}
      
    </>
  );
};

export default PlaceDetailsScreen;
