import { View, Text,StyleSheet,Image ,TouchableOpacity} from 'react-native'
import React,{ useState,useEffect }  from 'react'
import { Entypo } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import { SignInUser } from '../../Redux/Reducer/UserSlicer'
import { onSnapshot, updateDoc, doc, collection, } from 'firebase/firestore';
import { db, storage } from '../../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import * as ImagePicker from 'expo-image-picker';



const ProfileDetails = () => {
    const user = useSelector(SignInUser);
    const [cUser, setCuser] = useState()
    const [tCount, setTcount] = useState()
    
    const [image, setImage] = useState(user.pic);

    // Pick image

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
              });
          
              console.log(result);
          
              if (!result.cancelled) {
                  setImage(result.uri);
                  
                
            }
            let ImgUrl;
        
            if (image != user.pic) {
                const response1 = await fetch(image);
                const blob1 = await response1.blob();
                const imgRef = ref(storage, `Profile_image/${new Date().getTime()}`);
                const snap = await uploadBytes(imgRef, blob1);
                const downloadUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
                ImgUrl = downloadUrl;
               
                }
           if(ImgUrl)  
           { await updateDoc(doc(db,'users',user.uid), {
                pic:ImgUrl
    
           })
           
           console.log("uploaded")}

        }
        catch(error) {
            console.log(error)
        }
       
    };
    

    
    // Get currentuser details
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


    // visited place count
    const getCount = async () => {
        try {
            
            const ref = collection(db, "users", user.uid, "user_plan")
            onSnapshot(ref, (snapshot) =>
            {
                setTcount((snapshot.docs.map((place) => ({ id: place.id, ...place.data() }))))
          
            })
        }
        catch {
            
        }
    }
    
    useEffect(() => {
        getUser()
        getCount()
    },[])

  return (
      <View>
          <View style={{ alignItems:"center"}}>
            { cUser && <Image style={Styles.img} source={{uri:image}} />}
              {/* Edit pic */}
              <TouchableOpacity onPress={pickImage} style={Styles.pen}>
              <Entypo  name="pencil" size={25} color="black" />
              </TouchableOpacity>
              </View>
              {/* count */}

              <View style={Styles.details}>
                <View style={Styles.countWrapper}>
                    
                 {cUser && <Text style={Styles.count}>
                        {cUser.follower.length}
                        </Text> }   
                        
                  <Text style={Styles.countText}>Followers</Text>

              </View>

                <View style={Styles.countWrapper}>
                  
                {cUser && <Text style={Styles.count}>
                        {cUser.following.length}
                        </Text> }
                       
                  <Text style={Styles.countText}>Following</Text>

              </View>

              <View style={Styles.countWrapper}>
                  <Text style={Styles.count}>{tCount && tCount.length}</Text>
                  <Text style={Styles.countText}>Visited</Text>
                      <Text style={Styles.countText}>Places</Text>

              </View>

          </View>
      
         
          
          
    </View>
  )
}

const Styles = StyleSheet.create({
    img: {
        width: 160,
        height: 160,
        borderRadius: 80,
        marginTop: 20,
        borderWidth: 0.5,
        borderColor:"#19B4BF"
      
    },
    pen: {
        backgroundColor: "#19B4BF",
        padding: 6,
        borderRadius: 25,
        position: "absolute",
        top: 130,
        right:130
    },
    details: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        marginHorizontal:20
    },
    countWrapper: {
        alignItems: "center",
        marginBottom:10
    },
    count: {
        fontSize: 25,
        fontWeight: "bold",
        color:"#19B4BF"
    },
    countText: {
        fontSize: 16,
        color: "#9b9b9e",
        letterSpacing: 2,
        
        
    }

})
export default ProfileDetails