import { View, Text, Button, StatusBar,StyleSheet } from 'react-native';
import React,{useEffect,useState} from 'react';
import * as Notification from "expo-notifications"
import NotifiCard from '../component/notification/NotifiCard'
import { auth, db } from '../firebase'
import { collection, orderBy, onSnapshot, query, where,setDoc,doc,serverTimestamp } from '@firebase/firestore'
import { useSelector } from 'react-redux'
import { SignInUser } from '../Redux/Reducer/UserSlicer'
import Moment from 'moment';


// Notification.setNotificationHandler({
//   handleNotification: async () => {
//     return {
//       shouldPlaySound: true,
//       shouldShowAlert: true
//     };
//   },
// });

const NotificationScreen = ({navigation}) => {

  const user = useSelector(SignInUser); 

  const date = new Date()
  const tomorrow = Moment(date).add(1, 'day').format('YYYY-MM-DD'); 

  const [myPlan, setMyPlan] = useState([null])

  const [notify, setNotify] = useState()
  
  // get notification from plan
  // const getPlan =  () =>
  // {
  //     const plans = collection(db, "users", user.uid, "user_plan")
  //     const q = query(plans, where("startDate", "==", tomorrow))
  //     onSnapshot(q, (snapshot) =>
  //     setMyPlan((snapshot.docs.map((place) => ({id: place.id, ...place.data()} ))))
  //     )

  //   if (myPlan[0] != null)
  //     {  
  //     console.log("fetched" + myPlan[0].placeName)
  //     uploadNotification()
  //         } 
  // }

  // upload notification

  // const uploadNotification = async () =>
  // {
  //   const userRef = collection(db, "users", user.uid, "notification")
  //   await setDoc(doc(userRef),
  //       { 
  //         createAt: serverTimestamp(), 
  //         placeName: myPlan[0].placeName,
  //         imgURL: myPlan[0].imgURL,
  //         placeId: myPlan[0].placeId,
  //         budget: myPlan[0].budget
           
           
  //       }).then(() => {
  //           console.log("upload notification")
           
  //       })

  //       }
    
  
  // get notification

  const getNotify = async () => {
    const notifications = collection(db, "users", user.uid, "notification")
    const q = query(notifications,where("startdate", "<=", tomorrow), orderBy('startdate', 'desc') )
    onSnapshot(q, (snapshot) =>
   setNotify((snapshot.docs.map((not) => ({id: not.id, ...not.data()} ))))
    )
  }
  
  useEffect(() => {
    
    getNotify()
      // console.log(tomorrow)
  }, [])
  

// Schedule notification
  // const handleNotification = () => 
  // {
  //   Notification.scheduleNotificationAsync(
  //     {
  //       content: {
  //         title: "Testing local Notification",
  //         body:"This is my local notification"
  //       },
  //       trigger: {
  //         seconds: 10,
  //       }
  //     }
  //   ).then(console.log("function wroked"))
  //   }
  
  return (
    <View style= {Styles.container}>
      <Text style = {Styles.heading}>Notification</Text>
      

      {/* <Button title={"Get notification"} onPress={handleNotification} /> */}
      {notify && notify.map((not) => (
        <NotifiCard key={not.id} navigation={navigation} image={not.imgURL}
          place={not.placeName} placeId={not.placeId} budget={not.budget}
          startdate={ not.startdate} />
      ))}
      
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 10,
    backgroundColor: '#f4f2fc',
    flex:1
  },
  heading: {
    // paddingTop:20,
    fontSize: 28,
    fontWeight:'600',
    color: "black",
    fontWeight: "bold",
    paddingLeft:20
    
    // color:"#4c4c4b"
    
},
  
})

export default NotificationScreen;
