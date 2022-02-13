import { View, Text } from 'react-native'
import React from 'react'
import Header from '../component/profile/Header'
import ProfileDetails from '../component/profile/ProfileDetails'

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
          <Header navigation={navigation} />
          <ProfileDetails />
    </View>
  )
}

export default ProfileScreen