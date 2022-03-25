import { View, Text, Button } from 'react-native';
import React from 'react';
import * as Notification from "expo-notifications"

const NotificationScreen = () => {

  const handleNotification = () => 
  {
    Notification.scheduleNotificationAsync(
      {
        content: {
          title: "Testing local Notification",
          body:"This is my local notification"
        },
        trigger: {
          seconds: 10,
        }
      }
    ).then(console.log("function wroked"))
    }
  return (
    <View>
      <Text>Notification</Text>
      <Text>nldhdsfhuudiushgp hfsouhfoshfsgoiuhbibi   ufshfhsfu</Text>

      <Button title={"Get notification"} onPress={ handleNotification}/>
    </View>
  );
};

export default NotificationScreen;
