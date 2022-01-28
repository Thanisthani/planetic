import { View, Text, TouchableOpacity,StyleSheet, Image } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Feedback = () => {
  return (
    <View style={Styles.container}>
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
      <View>
        <View style={Styles.reviewHeader}>

          <Image style={Styles.pic} source={require("../../assets/profile-pic.jpg")} />
       
          <View>
            <Text style={Styles.username}>John William</Text>
        <View style={Styles.star}>
            <AntDesign name="star" size={15} color="#ffcb82" />
            <AntDesign name="star" size={15} color="#ffcb82" />
            <AntDesign name="star" size={15} color="#ffcb82" />
            <AntDesign name="star" size={15} color="#ffebd1" />
            <AntDesign name="star" size={15} color="#ffebd1" />
          </View>
          
          </View>
          <Text>                </Text>
          <Text style={Styles.reviewDate}>1 week ago</Text>
          
        </View>

      </View>
      {/* review */}
      <Text style={Styles.review}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make</Text>

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
