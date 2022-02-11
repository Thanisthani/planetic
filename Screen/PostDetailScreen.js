import { View, Text } from 'react-native'
import React from 'react'
import Header from '../component/postDetail/Header'
import PostContent from '../component/postDetail/PostContent'

const PostDetailScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <PostContent />
    </View>
  )
}

export default PostDetailScreen