import {
    View, Text ,Image, TouchableOpacity, StyleSheet, Alert, TextInput, Pressable, ScrollView
} from 'react-native'
import React , { useState, useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik'
import * as yup from 'yup'
import { db, storage } from "../../firebase"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { collection, getDocs, setDoc, doc, serverTimestamp, query, where } from "firebase/firestore";
import { useSelector } from 'react-redux'
import { SignInUser } from '../../Redux/Reducer/UserSlicer'
 
const FormPost = ({navigation}) => {

    const user = useSelector(SignInUser);
    const uploadImage = 'https://cdn.iconscout.com/icon/premium/png-256-thumb/image-gallery-1733269-1478308.png'
    const [image, setImage] = useState(uploadImage);
    
    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
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
    };

    const AddSchema = yup.object().shape({
        caption: yup.string().required('required'),
        description: yup.string().required('required'),
      
    })

    const UploadPost = async (caption,description) =>
    {
        console.log("Upload post");
        
        let ImgUrl;
        
        if (image) {
            const response1 = await fetch(image);
            const blob1 = await response1.blob();
            const imgRef = ref(storage, `Blog_image/${new Date().getTime()}`);
            const snap = await uploadBytes(imgRef, blob1);
            const downloadUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
            ImgUrl = downloadUrl;
        }

        const userRef = collection(db, "users", user.uid, "post")
        await setDoc(doc(userRef),
        { 
            userId: user.uid,
            createAt: serverTimestamp(),
            caption: caption,
            description: description,
            imgURL: ImgUrl,
            likes_by_users: [],
            username: user.username,
            email: user.email,
            pic:user.pic
           
        }).then(() => {
            Alert.alert('Successfully Posted');
           navigation.goBack()
        }).catch((err) => console.log(err))

        }

    
  return (
      <View style={Styles.container}>
          <ScrollView>
          <View  >
              
              <TouchableOpacity onPress={pickImage} style={{alignItems:"center"}}> 
                  
                  <Image source={{ uri: image }} style={Styles.img} />
                  
              </TouchableOpacity>
              

              <Formik initialValues={
                {
                   caption: '',
                    description: '',
                   
                }
            }
                onSubmit={values => {
                    UploadPost(values.caption, values.description);
                }}
                validationSchema={AddSchema}
            // validateOnMount={true}
              >

                  {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (

                      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                          <TextInput onChangeText={handleChange('caption')} 
                              placeholder="Enter Caption"
                              style={Styles.placeInputholder}
                          />

                          <TextInput onChangeText={handleChange('description')}
                              multiline
                              style={Styles.placeInputholder}
                          placeholder="Enter Description"
                          />
                           <Pressable style={Styles.btn(isValid)} disabled={!isValid} onPress={handleSubmit}>
                            <Text style={Styles.buttonText}>Publish post</Text>
                        </Pressable>
                          
                      </View>
                  )}
                  </Formik>
              
          </View>
          </ScrollView>
    </View>
  )
}

const Styles = StyleSheet.create({
    container: {

    },
    img: {
        marginTop: 20,
        height: 230,
        width: 300,
        borderRadius: 5,
        marginLeft:20
    },
    textBox: {
        borderBottomWidth:1,
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 10,
  
        marginTop: 10,
        paddingHorizontal: 10,
    },
    placeInputholder: {
        fontSize: 17,
        borderBottomWidth:1,
        borderColor: '#afafb1',
        paddingVertical:20
    }, 
    btn: isValid =>( {
        backgroundColor:isValid? "#19B4BF" : "#85e8ef",
        width: "100%",
        padding: 12,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,

    }),

    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight:"bold"
    },
})

export default FormPost