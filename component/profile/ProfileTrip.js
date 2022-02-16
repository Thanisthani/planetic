import { View, Text,StyleSheet,TouchableOpacity,ImageBackground, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { SignInUser } from '../../Redux/Reducer/UserSlicer'
import { db } from '../../firebase';
import { collection, onSnapshot } from '@firebase/firestore'
import { Entypo, AntDesign } from '@expo/vector-icons';

const ProfileTrip = ({navigation}) => {
    const user = useSelector(SignInUser);
    const [fPlan, setFPlan] = useState([])

    // get plan

    const getPlan =  () =>
    {
        try {
            const plans = collection(db, "users",user.uid, "user_plan")
            // const q = query(plans, where("visible", "==", "public"))
            onSnapshot(plans, (snapshot) =>
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
          <ScrollView showsVerticalScrollIndicator={false}>
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
                      

                      <View style={{ marginLeft: 10, }}>
                          
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
    container: {
        alignItems: "center",
        // paddingTop: 10,
        backgroundColor: "white",
        flex:1
    },
    
    suggestImg: {
        width: 350,
        height: 200,
        marginRight: 0,
        marginTop:20
        
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

export default ProfileTrip