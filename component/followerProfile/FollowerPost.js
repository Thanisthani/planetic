import { View, Text ,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native'
import React,{useEffect,useState} from 'react'
import { db } from '../../firebase';
import { collection, onSnapshot, query, where } from '@firebase/firestore'
import { useRoute } from '@react-navigation/native'


const FollowerPost = () => {
  const route = useRoute();
  const { followerId } = route.params;

  const [fPost, setFpost] = useState()
  
  // get post

  const getPost = async () =>
  {
    try {
      
      const ref = collection(db,"users", followerId, "post")
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
  },[])

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
export default FollowerPost