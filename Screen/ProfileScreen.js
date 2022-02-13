import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../component/profile/Header'
import ProfileDetails from '../component/profile/ProfileDetails'
import TopTabprofile from '../component/profile/TopTabprofile'

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      
          <Header navigation={navigation} />
      <ProfileDetails />
        <TopTabprofile />
        
    </View>
  )
}

export default ProfileScreen