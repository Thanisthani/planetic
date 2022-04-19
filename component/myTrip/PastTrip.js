import { View, Text,StyleSheet,TouchableOpacity,ImageBackground, ScrollView } from 'react-native';
import React,{useEffect,useState} from 'react';
import { Entypo } from '@expo/vector-icons';
import { db } from '../../firebase';
import { collection, onSnapshot,query,where } from '@firebase/firestore'
import { useSelector } from 'react-redux'
import { SignInUser } from '../../Redux/Reducer/UserSlicer'
import Moment from 'moment';

const PastTrip = ({navigation}) => {
    const user = useSelector(SignInUser);

    const date = Moment().format('YYYY-MM-DD ')

    const [myPlan, setMyPlan] = useState([])

    const getPlan =  () =>
    {
        const plans = collection(db, "users", user.uid, "user_plan")
        const q = query(plans, where("startDate", "<", date))
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
     {/* Past */}
            { myPlan && myPlan.length > 0 ?
                <Text style={Styles.heading}>Past</Text>
                : null
}
            <View style={{ flexDirection: "row" }}>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {myPlan && myPlan.map((plan) => (

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

        </View>
        
  );
};

const Styles = StyleSheet.create({
    container: {
        marginHorizontal:20
    },
    heading: {
        fontSize: 18,
        paddingTop: 20,
        fontWeight: "bold",
        paddingBottom:20
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

export default PastTrip;
