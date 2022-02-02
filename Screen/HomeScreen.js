import React, { useEffect } from 'react'
import { View, Text,StyleSheet, StatusBar, ScrollView } from 'react-native'
import BottomTabs from '../component/home/BottomTabs'
import Header from '../component/home/Header'
import Popularplace from '../component/home/Popularplace'
import Suggestion from '../component/home/Suggestion'
import { collection, onSnapshot,doc, query, where } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useDispatch } from 'react-redux';
import { SetSignInUsers } from '../Redux/Reducer/UserSlicer'

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    useEffect(() => {
     
        const ref = doc(db, 'users',auth.currentUser.uid)
        onSnapshot(ref, (snapshot) => {

        console.log(snapshot.data())
               
                dispatch(SetSignInUsers({
                    SignInUserDetail: snapshot.data()
                }))

            

        })
        
    },[])

    return (
        <View style={Styles.container}>
            
             <Header navigation={ navigation }/>
            <ScrollView showsVerticalScrollIndicator={false}>
           
            <Suggestion />
            <Popularplace navigation={ navigation }/>

            </ScrollView>
            <BottomTabs/>
       
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        // marginTop:StatusBar.currentHeight
    }
})
export default HomeScreen
