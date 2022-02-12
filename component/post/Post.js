import { View, Text,StyleSheet,Image, TouchableOpacity, ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import { SignInUser } from '../../Redux/Reducer/UserSlicer'
import { db } from '../../firebase'
import {  collectionGroup,onSnapshot,updateDoc,arrayUnion,arrayRemove, query,doc,getDoc, where } from 'firebase/firestore';


const Post = ({ navigation }) => {
    const user = useSelector(SignInUser);
    const [fPost, setFpost] = useState()
    const [cUser,setCuser] = useState()
    
    // get current user
    const getUser = async () =>
    {
        try {

            const ref = doc(db, "users", user.uid)
            onSnapshot(ref, (snapshot) => {
                // console.log(snapshot.data())

                setCuser(snapshot.data())
                       
                })
            console.log(cUser)
            
        }
        catch (error) {
            console.log(error)
        }
        }

    // get follower post
    const getPost = async () => {
        try { 
            const ref = collectionGroup(db, 'post')
            const q = query(ref, where("email", "in",cUser.following))
            onSnapshot(q, (snapshot) =>
            { 
                setFpost((snapshot.docs.map((post) => ({id: post.id, ...post.data()} ))))
          
            })
// console.log(fPost)
            
        }
        catch (error) {
            console.log(cUser)
            console.log("getpost error")
            let FollowingBlog = [];
            setFpost(FollowingBlog)

        }
    }


    // like

    const handleClick = async (post) =>
    {
        const currentLikeStatus = !post.likes_by_users.includes(
            cUser.email
        )

        await updateDoc(doc(db,'users', post.userId,'post', post.id), {
            likes_by_users: currentLikeStatus ? arrayUnion(
                cUser.email
            ) : arrayRemove(
                cUser.email
            )

        })
    }
    

    useEffect(() => {
        getUser()
        
    }, [])

    useEffect(() => {
        
        getPost()
    }, [cUser])
    

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
                              <Text style={Styles.content} numberOfLines={2}>{ post.description}</Text>
                      <View style={Styles.postBottom}>
                                  <TouchableOpacity onPress={() => navigation.navigate("FollowerProfileScreen", {
                                    followerId:post.userId
                                })}>
                              <View style={{ flexDirection: "row", alignItems: "center" }}>
                                  <Image style={Styles.profilePic} source={require("../../assets/profile-pic.jpg")} />
                                          <Text style={Styles.name}>{ post.username}</Text>
                              </View>
                              
                          </TouchableOpacity>
                          
                                  {/* like btn */}
                                  
                                  <View style={{flexDirection:"row"}}>
                                  <TouchableOpacity onPress={() => handleClick(post)}>
                                      {post.likes_by_users.includes(cUser.email)?
                                          <AntDesign name="heart" size={24} color="#900564" /> :
                                          <AntDesign name="hearto" size={24} color="black" />
                                          
                                      }
                                      
                                  </TouchableOpacity>

                                      <Text style={Styles.likeText}>{post.likes_by_users.length} Likes</Text>
                                  </View>
                                  
                                  
                      

                      </View>
                      
                      <View>
                          
                      </View>
                      
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
        flex: 1,
        backgroundColor: "#f4f2fc",

        
    },
    postContainer: {
        backgroundColor: "white",
        paddingBottom:10
    },
    postWrapper: {
        marginTop:20
    },
    postImg: {
        height: 230,
        width:"100%"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop:10
    },
    content: {
        fontSize: 18,
        color: "#afafb1",
        marginHorizontal:20
    },
    postBottom: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop:10
     },
    profilePic: {
        height: 50,
        width: 50,
        borderRadius: 30,   
    },
    name: {
        fontSize: 17,
        fontWeight: "bold",
        paddingLeft:10
    },
    likeText: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight:"bold"
    }
})
export default Post