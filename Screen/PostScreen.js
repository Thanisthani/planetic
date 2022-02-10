import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import Header from '../component/post/Header';
import Post from '../component/post/Post';

const PostScreen = () => {
  return (
    <View style={Styles.container}>
      <Header />
      <Post />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  }
})
export default PostScreen;
