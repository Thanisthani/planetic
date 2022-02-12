import { View, Text } from 'react-native'
import React from 'react'
import Header from '../component/followerProfile/Header'

const FollowerProfileScreen = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
          <Header navigation={ navigation}/>
    </View>
  )
}

export default FollowerProfileScreen