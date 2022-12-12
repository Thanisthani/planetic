import React, { useEffect,useState } from 'react'
import { View,StyleSheet, ScrollView } from 'react-native'
import Header from '../component/home/Header'
import Popularplace from '../component/home/Popularplace'
import Suggestion from '../component/home/Suggestion'
import { onSnapshot,doc, collection,query,where } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useDispatch } from 'react-redux';
import { SetSignInUsers } from '../Redux/Reducer/UserSlicer'

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [cUser, setCuser] = useState()
 

    // current users details
    const getCurrentUser = () => {
        const ref = doc(db, 'users', auth.currentUser.uid);
        console.log(auth.currentUser.uid);
        onSnapshot(ref, (snapshot) => {

            setCuser(snapshot.data())
        // console.log(snapshot.data())
               
                dispatch(SetSignInUsers({
                    SignInUserDetail: snapshot.data()
                }))

            
            console.log(cUser);
        })
    
    }
    

    // get trip plan
    
    

    useEffect(() => {
        getCurrentUser()
       
       
        
    }, [])
    

    return (
        <View style={Styles.container}>
            
            
            <ScrollView showsVerticalScrollIndicator={false}>
                {cUser && <Header navigation={navigation} pic={ cUser.pic}/>}
                <Suggestion navigation={navigation} />
                <Popularplace navigation={navigation} />
            </ScrollView>
            {/* <BottomTabs/> */}
       
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        // marginTop:StatusBar.currentHeight
    }
})
export default HomeScreen
