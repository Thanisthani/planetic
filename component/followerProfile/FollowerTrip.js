import { View, Text,StyleSheet,TouchableOpacity,ImageBackground, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { db } from '../../firebase';
import { collection, onSnapshot, query, where } from '@firebase/firestore'
import { useRoute } from '@react-navigation/native'
import { Entypo, AntDesign } from '@expo/vector-icons';
import Moment from 'moment';

const FollowerTrip = ({ navigation }) => {
    const route = useRoute();
    const { followerId } = route.params;
    const [fPlan, setFPlan] = useState([])

    const getPlan =  () =>
    {
        try {
            const plans = collection(db, "users", followerId, "user_plan")
            const q = query(plans, where("visible", "==", "public"))
            onSnapshot(q, (snapshot) =>
            setFPlan((snapshot.docs.map((place) => ({id: place.id, ...place.data()} ))))
            )
            // console.log(fPlan)
        } catch (error)
        {
console.log("notFetch")
        }
      

    }

    useEffect(() => {
        getPlan()
    },[])

  return (
      <View style={Styles.container}>
          <ScrollView>
      {fPlan && fPlan.map((plan) => (
                      
                      <TouchableOpacity key={plan.id}
                      onPress={() => {
                          navigation.navigate('TripPlanScreen',
                              {
                                  place_id: plan.placeId,
                                  imgURL: plan.imgURL,
                                  place_name: plan.placeName,
                                  budget: plan.budget
                              })
                          
                      }}
                  >
                      

                      <View style={{ marginLeft: 10, marginBottom: 10 }}>
                          
                          <ImageBackground style={Styles.suggestImg}                                
                              source={{ uri: plan.imgURL }}
                              imageStyle={{ borderRadius: 20 }} >
                              
                              <View style={Styles.suggestTextWrapper}>

                                  <Text></Text>
          
                                  <View style={[Styles.suggestPastplace, Styles.suggestPastBottom]}>
                                      
                                      <Entypo name="location-pin" size={24} color="#19B4BF" />
                                      <Text style={Styles.suggestplaceText}>{plan.placeName}</Text>
                                      
                                  </View>

                              </View>
                              
                          </ImageBackground>
                      
                      </View>
                      
                  </TouchableOpacity>
                      
      ))}
              </ScrollView>
    </View>
  )
}

const Styles = StyleSheet.create({
    // suggestplace: {
    //     width: 350,
    //     height: 150,
    //     borderTopLeftRadius: 10,
    //     borderTopRightRadius: 10,
    // //    marginRight:10
    // },
    // suggestBottom: {
    //     width: 350,
    //     backgroundColor: "white",
    //     // elevation: 2,
    //     paddingTop: 8,
    //     paddingBottom:5,
    //     paddingHorizontal:15,
    //     borderBottomLeftRadius: 10,
    //     borderBottomRightRadius: 10,
    //     borderWidth: 0.4,
    //     borderColor:"#19B4BF"
    // },
    // suggestText: {
    //     fontSize: 19,
    //     fontWeight: "bold",
    //     color: "#4c4c4b",
    // },
    // catogary: {
    //     fontSize: 15,
    //     color:"#19B4BF"
    // },
    container: {
        alignItems: "center",
        paddingTop:10
    },
    
    suggestImg: {
        width: 350,
        height: 200,
        marginRight:0
        
    },
    suggestTextWrapper: {
        flex:1,
        justifyContent: "space-between",
        marginHorizontal:0
    },
    suggestPastBottom: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        width: 170,
        
    },
    suggestPastplace: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingTop: 7,
       
    },
    suggestplaceText: {
        fontSize: 17,
        color: "white",
        fontWeight: "bold",
        paddingBottom:10
    }

})

export default FollowerTrip