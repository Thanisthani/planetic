import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../component/followerProfile/Header'
import TopTabDetails from '../component/followerProfile/TopTabDetails'

const FollowerProfileScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* <ScrollView> */}
      <Header navigation={navigation} />
        <TopTabDetails navigation={navigation}/>
        {/* </ScrollView> */}
    </View>
  )
}

export default FollowerProfileScreen