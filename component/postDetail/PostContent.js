import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import { useRoute } from '@react-navigation/native'
import { updateDoc,doc,onSnapshot,arrayUnion,arrayRemove} from '@firebase/firestore'
import { db } from '../../firebase'
import { useSelector } from 'react-redux'
import { SignInUser } from '../../Redux/Reducer/UserSlicer'


const PostContent = () => {
    const user = useSelector(SignInUser);
    const route = useRoute();
    const { post } = route.params;
    const [follower,setFollower] = useState()


    // getfolower details

    const getFollower = async () => {
        try {
            const ref = doc(db, "users", post.userId)
            onSnapshot(ref, (snapshot) => {
                // console.log(snapshot.data())

                setFollower(snapshot.data())
                       
                })
            
        }
        catch (error)
        {
            let follow = []
            // setFollower(follow)
            console.log(error)
        }
            
       
    }

     // update follow

     const handleClick = async () =>
     {
         const currentFollowStatus = !follower.follower.includes(
             user.email
         )
 
         await updateDoc(doc(db,'users',follower.uid), {
             follower: currentFollowStatus ? arrayUnion(
                 user.email
             ) : arrayRemove(
                 user.email
             )
 
         }).then(
             await updateDoc(doc(db,'users',user.uid), {
                 following: currentFollowStatus ? arrayUnion(
                     follower.email
                 ) : arrayRemove(
                     follower.email
                 )
     
             })
         )
    }
    

    useEffect(() => {
    
        getFollower()
  
    }, [user])
    

  return (
      <View>
          <View style={Styles.followWrapper}>
              <View style={Styles.profileWrapper}>
                  <Image style={Styles.logo} source={require("../../assets/profile-pic.jpg")} />
                  <Text style={Styles.name}>{ post.username}</Text>
              </View>
              
              {/* follow btn */}
              <TouchableOpacity onPress={() => handleClick()}>

                  {follower && follower.follower.includes(user.email) ?
                      <Text style={Styles.unfollowText}>Unfollow</Text> :
                      <Text style={Styles.followText}>Follow</Text>
                  }
                  
              </TouchableOpacity>
              
          </View>
          <View>
              <Text style={Styles.paragh}>
             {post.description}
              </Text>
          </View>
      </View>
      
  )
}

const Styles = StyleSheet.create({
    logo: {
        height: 50,
        width: 50,
        borderRadius: 25,
      
       
    },
    followWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        justifyContent: "space-between",
        marginHorizontal: 30,
        backgroundColor:"#ffffff"
    },
    // followText: {
    //     fontSize: 18,
    //     borderColor: "#b6067f",
    //     borderWidth: 2,
    //     borderRadius: 30,
    //     paddingHorizontal: 13,
    //     paddingVertical: 3,
    //     color:"#900564"
    // },

    followText: {
        fontSize: 20,
        borderColor: "#b6067f",
        borderWidth: 2,
        borderRadius: 30,
        paddingHorizontal: 23,
        paddingVertical: 8,
        color: "white",
        fontWeight: "bold",
        letterSpacing: 2,
        backgroundColor:"#b6067f"
    },
    unfollowText: {
        fontSize: 20,
        borderColor: "#b6067f",
        borderWidth: 2,
        borderRadius: 30,
        paddingHorizontal: 23,
        paddingVertical: 8,
        color: "#900564",
        fontWeight: "bold",
        letterSpacing: 2,
    },
    profileWrapper: {
        flexDirection: "row",
        alignItems:"center"
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft:10
    },
    paragh: {
        fontSize: 18,
        color: "#565659",
        textAlign: 'justify',
        marginHorizontal: 20,
        marginTop:20
    }
})
export default PostContent