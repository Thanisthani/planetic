import { View, Text,StyleSheet,TouchableOpacity,Image, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { SignInUser } from '../../Redux/Reducer/UserSlicer'
import { db } from '../../firebase';
import { collection, onSnapshot } from '@firebase/firestore'
import { Entypo, AntDesign } from '@expo/vector-icons';

const ProfileGuide = () => {
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
    <ScrollView>
            {fPost && fPost.map((post) => (

            
        <View key={post.id} style={Styles.postWrapper}>
                    <TouchableOpacity onPress={() => navigation.navigate("PostDetailScreen",
                        {
                        post:post
                    })} >
            <View style={Styles.postContainer}>
                <Image style={Styles.postImg} source={{uri:post.imgURL}} />
                            <Text style={Styles.title}>{ post.caption}</Text>
                    
                </View>
            </TouchableOpacity>
            </View>

            ))}
            
            </ScrollView>
  </View>
  )
}

const Styles = StyleSheet.create({
    container: {
        alignItems:"center"
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
        height: 230,
      width: 350,
      borderRadius:10
      },
      title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop:10
    },
})
export default ProfileGuide