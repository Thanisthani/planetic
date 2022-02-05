import { View, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import React,{useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import { collection, setDoc, doc,serverTimestamp} from 'firebase/firestore';
import { db } from '../../firebase';
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { SignInUser } from '../../Redux/Reducer/UserSlicer'


const GiveFeedback = ({navigation}) => {
  const user = useSelector(SignInUser);
  const route = useRoute();
  const { place_name } = route.params;

  const [defaultRating, setDefaultRating] = useState(2)
  const [rating, setRating] = useState([1, 2, 3, 4, 5])

  const [review, setReview] = useState()
  
  const uploadFeedback = async () => {
   
    const placeRef = collection(db, "Tourists_places", place_name,"reviews")
    
    await setDoc(doc(placeRef),
      {
        u_name: user.username,
        review: review,
        rating: defaultRating,
        createAt: serverTimestamp(),
      }).then(
      navigation.goBack()
        
      ).catch((error) =>
        console.log(error))
    
  }

  return (
    <View style={Styles.container}>

      {/* Star rating */}
      <View>
        <View>
        <Text style={Styles.ratingText}>YOUR RATING</Text>
          <View style={Styles.star}>
            {rating.map((item, index) =>
            (
              <TouchableOpacity key={index} onPress={() => {setDefaultRating(item)}}>
                <AntDesign name="star" size={40} color={item <= defaultRating? "#ffcb82" : "#ffe2bd" } />
                
              </TouchableOpacity>
             

            ))}
          </View>
      </View>

      <View>
          <TextInput placeholder='Write your review' style={Styles.searchtext}
            multiline={true} pointerEvents="none" value={review}
            onChangeText={(value) => setReview(value)} />
      </View>
      </View>


      {/* btn */}
      
      <View >
      <TouchableOpacity style={Styles.btnWrapper} onPress={() => uploadFeedback()} >
        <Text style={Styles.btn}>Post a Review</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
};


const Styles = StyleSheet.create(
  {
    container: {
      paddingHorizontal: 20.0,
      paddingTop: 50,
     
    },
    star: {
      flexDirection:"row"
    },
    ratingText: {
      fontSize: 14,
      color: "#989898",
      paddingBottom:10
    },
    searchtext: {
      fontSize: 18,
      color: "#989898",
      marginTop: 30,
      paddingBottom:10,
      borderBottomWidth: 0.7,
      borderColor: "#b6b6b6", 
    },
    btn: {
      
     
      paddingHorizontal: 20,
      paddingVertical: 10,
 
      color: "white",
      fontSize: 18,
      fontWeight:"bold"
     
      
    },
    btnWrapper: {
      backgroundColor: "#0690ce",
      borderRadius: 10,
      // width:"90%",
      alignItems: "center",
      marginTop: 100,
     
     
  
    },
  }
)
export default GiveFeedback;
