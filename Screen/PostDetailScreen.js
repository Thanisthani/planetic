import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../component/postDetail/Header'
import PostContent from '../component/postDetail/PostContent'


const PostDetailScreen = ({ navigation }) => {

  return (
    <View style={Styles.container}>
      <Header navigation={navigation} />
      <PostContent navigation={navigation}/>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex:1
  }
})

export default PostDetailScreen