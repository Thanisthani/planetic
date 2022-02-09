import { View, Text,StyleSheet,Image,TouchableOpacity,ImageBackground, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { db } from '../../firebase';
import { collection, onSnapshot,query,where } from '@firebase/firestore'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { SignInUser } from '../../Redux/Reducer/UserSlicer'
import Moment from 'moment';

const MyTrip = ({navigation}) => {
    const user = useSelector(SignInUser);

    const date = Moment().format('YYYY-MM-DD ')

    const [myPlan, setMyPlan] = useState([])

    
    const getPlan =  () =>
    {
        const plans = collection(db, "users", user.uid, "user_plan")
        const q = query(plans, where("startDate", ">=", date))
        onSnapshot(q, (snapshot) =>
        setMyPlan((snapshot.docs.map((place) => ({id: place.id, ...place.data()} ))))
        )

        if (myPlan)
        { 
            console.log(date)
            } 
    }
    
    useEffect(() => {
        getPlan()
    },[])

  return (
      <View style={Styles.container}>
              <View>
          <Text style={Styles.heading}>Upcoming</Text>
          
                  {/* Upcoming */}

                  {myPlan.map((plan) => (
                      
                      <TouchableOpacity key={ plan.id} onPress={() => {
                        navigation.navigate('TripPlanScreen',
                            {
                                place_id: plan.placeId,
                                imgURL: plan.imgURL,
                                place_name: plan.placeName,
                                budget:plan.budget
                        })
                            
                    }
                    } >
                      <View  style={{ marginBottom:10,alignItems:"center",justifyContent:"center" }}>
                      <Image style={Styles.suggestplace}
                                source={{uri:plan.imgURL}} />
                      <View style={Styles.suggestBottom}>
            
                                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                    <Text style={Styles.suggestText}>{plan.placeName}</Text>
                                </View>
                                
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <AntDesign name="clockcircle" size={13} color="#19B4BF" />
                                        <Text style={[Styles.catogary]}>  {plan.duration  } Days</Text>
                                    </View>
        
                                    <View style={{ flexDirection: "row" }}>
                                        
                                        <Text style={[Styles.catogary]}>From {Moment(plan.startDate).format(' MMM DD')}</Text>         
                                    </View>
                                    
                                </View>
        
                            </View>
                            
                          </View>
                      </TouchableOpacity>
                      
                  ) )}

  
                  
                  </View>
          
         
 
              
             
    </View>
  );
};

const Styles = StyleSheet.create({
    container: {
        paddingHorizontal:20
    },
    heading: {
        fontSize: 18,
        paddingTop: 20,
        fontWeight: "bold",
        paddingBottom:20
    },
    suggestplace: {
        width: 350,
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    //    marginRight:10
    },
    suggestBottom: {
        width: 350,
        backgroundColor: "white",
        // elevation: 2,
        paddingTop: 8,
        paddingBottom:5,
        paddingHorizontal:15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 0.4,
        borderColor:"#19B4BF"
    },
    suggestText: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#4c4c4b",
    },
    catogary: {
        fontSize: 15,
        color:"#19B4BF"
    },
    suggestImg: {
        width: 170,
        height: 140,
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
export default MyTrip;
