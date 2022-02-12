import { View, Text } from 'react-native'
import React from 'react'
import Header from '../component/addPost/Header'
import FormPost from '../component/addPost/FormPost'

const AddPostScreen = ({navigation}) => {
  return (
    <View style={{flex:1,
        backgroundColor:"white"}}>
          <Header navigation={navigation} />
          <FormPost navigation={navigation} />
    </View>
  )
}

export default AddPostScreen