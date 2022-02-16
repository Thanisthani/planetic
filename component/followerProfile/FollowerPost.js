import { View, Text ,StyleSheet,ScrollView,ImageBackground,TouchableOpacity} from 'react-native'
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
      <ScrollView showsVerticalScrollIndicator={false}>
              {fPost && fPost.map((post) => (

              
          <View key={post.id} style={Styles.postWrapper}>
                      <TouchableOpacity onPress={() => navigation.navigate("PostDetailScreen",
                          {
                          post:post
                      })} >

                    <ImageBackground borderRadius={20} style={Styles.postImg} source={{ uri: post.imgURL }} >
                      <View style={{ justifyContent:"space-between", flex:1}}>

                        <Text> </Text>
                        
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
    height: 230,
  width: 350,
  borderRadius:10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    color: "white",
    marginBottom:10
  },
  suggestPastBottom: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    width: 350,
    
},
})
export default FollowerPost