import { View, Text, StatusBar,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React,{ useState,useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native'
import { updateDoc,doc,onSnapshot,arrayUnion,arrayRemove} from '@firebase/firestore'
import { db } from '../../firebase'
import { useSelector } from 'react-redux'
import { SignInUser } from '../../Redux/Reducer/UserSlicer'

const Header = ({ navigation }) => {
    const user = useSelector(SignInUser);
    const route = useRoute();
    const { followerId } = route.params;
    const [follower,setFollower] = useState()

    // getfolower details

    const getFollower = async () => {
        try {
            const ref = doc(db, "users", followerId)
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
      
    },[user])

    return (
      
    <View style={Styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons style={Styles.icon} name="chevron-back" size={35} color="black" />
          </TouchableOpacity>

          <View style={Styles.profile}>
              <Image style={Styles.img} source={require("../../assets/profile-pic.jpg")} />
                
                <View style={{marginLeft:20, alignItems:"center"}}>
                {follower? 
                <Text style={Styles.followername}>
                    {follower.username}
                    </Text>
                    : null
                }
                
                {/* Follow btn */}
                <TouchableOpacity onPress={() => handleClick()}>

                {follower && follower.follower.includes(user.email)?
                        <Text style={Styles.unfollowText}>Unfollow</Text> :
                        <Text style={Styles.followText}>Follow</Text>
                }
                    </TouchableOpacity>
                    </View>
               
          </View>
            {/* count */}
            
          <View style={Styles.details}>
                <View style={Styles.countWrapper}>
                    {follower?
                    <Text style={Styles.count}>
                        {follower.follower.length}
                     
                        </Text>
                        : null
                        }
                  <Text style={Styles.countText}>Followers</Text>

              </View>

                <View style={Styles.countWrapper}>
                    {follower?
                    <Text style={Styles.count}>
                        {follower.following.length}
                        
                        </Text>
                        :null
                        }
                  <Text style={Styles.countText}>Following</Text>

              </View>

              <View style={Styles.countWrapper}>
                  <Text style={Styles.count}>45</Text>
                  <Text style={Styles.countText}>Visited</Text>
                      <Text style={Styles.countText}>Places</Text>

              </View>

          </View>
          

    </View>
  )
}

const Styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 10,
        marginHorizontal:20
    },
    img: {
        width: 130,
        height: 130,
        borderRadius: 50,
     
      
    },
    profile: {
        // alignItems:"center",
        flexDirection:"row"
    },

    followername: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 10,
        letterSpacing: 1,
        marginBottom:20
    },
    followText: {
        fontSize: 20,
        borderColor: "#b6067f",
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 35,
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
        borderRadius: 10,
        paddingHorizontal: 35,
        paddingVertical: 8,
        color: "#900564",
        fontWeight: "bold",
        letterSpacing: 2,
    },

    details: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop:20
    },
    countWrapper: {
        alignItems:"center"
    },
    count: {
        fontSize: 25,
        fontWeight: "bold",
        color:"#19B4BF"
    },
    countText: {
        fontSize: 18,
        color:"#9b9b9e"
        
    }
    
})
export default Header