import { View, Text, TouchableOpacity,StyleSheet, Image } from 'react-native';
import React, { useEffect,useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native'
import { collection, onSnapshot,query,orderBy,where } from '@firebase/firestore'
import { db } from "../../firebase"
import { ScrollView } from 'react-native-gesture-handler';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const Feedback = () => {
  const route = useRoute();
  const { place_name } = route.params;

  const [treview, setTreview] = useState([])

  const getReview = async () => {
    const reviews = collection(db, "Tourists_places", place_name, 'reviews')
    const q = query(reviews,orderBy("createAt", "desc"))
    await onSnapshot(q, (snapshot) =>
    {
        setTreview((snapshot.docs.map((review) => ({ id: review.id, ...review.data() }))))
    })

  }

  // // const updateReview = async () => {
 
  // }

  useEffect(() => {
    getReview();
  },[db])
  
  
  return (
    <View style={Styles.container}>
 <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={Styles.btnWrapper}>
        <Text style={Styles.btn}>Give feedback</Text>
      </TouchableOpacity>

      {/* rating */}
      <View style={Styles.rating}>

        <Text style={Styles.rate}>3.9</Text>
        <View>
          <View style={Styles.star}>
            <AntDesign name="star" size={24} color="#ffcb82" />
            <AntDesign name="star" size={24} color="#ffcb82" />
            <AntDesign name="star" size={24} color="#ffcb82" />
            <AntDesign name="star" size={24} color="#ffcb82" />
            <AntDesign name="star" size={24} color="#ffebd1" />
          </View>
          <Text style={Styles.reviewNo}>10 reviews</Text>
        </View>
      </View>

      {/* Review profile */}
     
      {treview.map((review) => (

<View key={review.id}>
<View>
  <View style={Styles.reviewHeader}>

    <Image style={Styles.pic} source={require("../../assets/profile-pic.jpg")} />
 
    <View>
                <Text style={Styles.username}>{ review.u_name}</Text>
  <View style={Styles.star}>
      <AntDesign name="star" size={15} color="#ffcb82" />
      <AntDesign name="star" size={15} color="#ffcb82" />
      <AntDesign name="star" size={15} color="#ffcb82" />
      <AntDesign name="star" size={15} color="#ffebd1" />
      <AntDesign name="star" size={15} color="#ffebd1" />
    </View>
    
    </View>
    <Text>                </Text>
              <Text style={Styles.reviewDate}>{ Moment(review.createAt.Date).format().toString().slice(0, 10)}</Text>
    
  </View>

</View>
{/* review */}
          <Text style={Styles.review}>{review.review }</Text>

</View>

      ))}
        
        </ScrollView>

      

    </View>
  );
};

const Styles = StyleSheet.create(
  {
    container: {
      paddingHorizontal: 20,
      flex: 1,
      backgroundColor:"white"
    },
    btn: {
      
     
      paddingHorizontal: 20,
      paddingVertical: 10,
 
      color: "white",
      fontSize: 18,
     
      
    },
    btnWrapper: {
      backgroundColor: "#0690ce",
      borderRadius: 10,
      // width:"90%",
      alignItems: "center",
      marginTop:10,
    },
    rating: {
      flexDirection: "row",
      backgroundColor: "#ecf6fa",
      height: 80,
      borderRadius: 10,
      marginTop: 10,
      alignItems: "center",
      paddingHorizontal:20
    },
    rate: {
      fontSize: 39,
      marginRight:20
    },
    star: {
      flexDirection:"row"
    },
    reviewNo: {
      fontSize: 13,
      color:"#989898"
    },
    reviewHeader: {
      flexDirection: "row",
      padding: 20,
      alignItems: "center",
      justifyContent:"space-between"
      
    },
    pic: {
      width: 50,
      height: 50,
      borderRadius: 50,
      marginRight:10
    },
    username: {
      fontSize: 17,
      fontWeight:"bold"
    },
    reviewDate: {
      fontSize: 16,
      color: "#989898",
      
    },
    review: {
      textAlign: "justify",
      fontSize: 16,
      color: "#989898",
      paddingHorizontal:30
    }
  }
)

export default Feedback;
