import { View, Text,StyleSheet,TouchableOpacity,ImageBackground, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { SignInUser } from '../../Redux/Reducer/UserSlicer'
import { db } from '../../firebase';
import { collection, onSnapshot } from '@firebase/firestore'
import { Entypo, AntDesign } from '@expo/vector-icons';

const ProfileGuide = ({navigation}) => {
    const user = useSelector(SignInUser);

    const [fPost, setFpost] = useState()

    // get post

  const getPost = async () =>
  {
    try {
      
      const ref = collection(db,"users", user.uid, "post")
      onSnapshot(ref, (snapshot) =>
      setFpost((snapshot.docs.map((post) => ({id: post.id, ...post.data()} ))))
      )

    } catch (error)
    {
      console.log(error)
      
    }
    
    }
    
    useEffect(() => {
        getPost()
    }, [])
    
  return (
    <View style={Styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
            {fPost && fPost.map((post) => (

            
        <View key={post.id} style={Styles.postWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate("PostDetailScreen",
                        {
                        post:post
                    })} >
          
                    <ImageBackground style={Styles.postImg} source={{ uri: post.imgURL }} borderRadius={15} >
                    <View style={{ justifyContent: "space-between", flex: 1 }}>
                      
                      <Text>   </Text>
                      <View style={Styles.suggestPastBottom}>
                        <Text style={Styles.title}>{post.caption}</Text>
                        </View>

                      </View>
                </ImageBackground>
                           
                    
       
            </TouchableOpacity>
            </View>

            ))}
            
            </ScrollView>
  </View>
  )
}

const Styles = StyleSheet.create({
    container: {
    alignItems: "center",
    backgroundColor: "white",
    flex:1
      },
      postContainer: {
        backgroundColor: "white",
        paddingBottom: 10,
        borderRadius:10
    },
    postWrapper: {
        marginTop:20
    },
    postImg: {
        height: 200,
      width: 350,
 
  },
  suggestPastBottom: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    width: 350,
    
},
      title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 10,
        color: "white",
        marginBottom:10
    },
})
export default ProfileGuide