import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation, FontAwesome,Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen'
import GetTripScreen from './GetTripScreen';
import NotificationScreen from './NotificationScreen'
import PostScreen from "./PostScreen"
import MyTripScreen from './MyTripScreen'
import ExampleScreen from './ExampleScreen';


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        ...Styles.shadow
    }}
    onPress={onPress}>

        <View style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor:"#19B4BF"
        }}>
            {children}

        </View>
    </TouchableOpacity>
)

const BottomNavigation = () => {
  return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: 60 }
      }} >
          <Tab.Screen name="Home" component={HomeScreen} options={{ 
              tabBarIcon: ({ color, size, focused }) => (
                  <View  style={Styles.iconWrapper}>
                      <Foundation name="home" size={37}
                          color={focused ? "#19B4BF" : "#9b9b99"} />
                      <Text style={[Styles.bottomText,{color:focused ? "#19B4BF" : "#9b9b99"}]}>Home</Text>
                  </View>
                    
                )
          }} />
          
          <Tab.Screen name="My Trip" component={ExampleScreen} options={{
              tabBarIcon: ({ color, size, focused }) => (
                  <View  style={Styles.iconWrapper}>
                      <Ionicons name="md-map" size={32}
                          color={focused ? "#19B4BF" : "#9b9b99"} />
                      <Text style={[Styles.bottomText, { color: focused ? "#19B4BF" : "#9b9b99", }]}>My Trip</Text>
                  </View>
                    
                )
          }} />

           <Tab.Screen name="Get Trip" component={GetTripScreen} options={{
              tabBarIcon: ({  focused }) => (
                   
                   <View style={{paddingBottom:0}}>
                       <Entypo name="plus" size={35}
                        color={focused ? "white" : "white"} />
                     
                   </View>
                    
              ),
              tabBarButton: (props) => (
                   <CustomTabBarButton {...props} />
               )
          }} />
          
          <Tab.Screen name="Post" component={PostScreen} options={{
              tabBarIcon: ({ color, size, focused }) => (
                  <View  style={Styles.iconWrapper}>
                      <MaterialCommunityIcons name="post-outline" size={35}
                          color={focused ? "#19B4BF" : "#9b9b99"} />
                       <Text style={[Styles.bottomText,{color:focused ? "#19B4BF" : "#9b9b99"}]}>Post</Text>
                  </View>
                    
                )
          }} />
          
          <Tab.Screen name="Notification" component={NotificationScreen} options={{
              tabBarIcon: ({ color, size, focused }) => (
                  <View  style={Styles.iconWrapper}>
                      <Ionicons name="notifications" size={32}
                        color={focused ? "#19B4BF" : "#9b9b99"} />
                      <Text style={[Styles.bottomText, { color: focused ? "#19B4BF" : "#9b9b99" }]}>Notification</Text>
                  </View>
                    
                )
            }} />
          
   </Tab.Navigator>
  );
};

const Styles = StyleSheet.create({
    iconWrapper: {
        padding: 5,
        alignItems: "center",
        justifyContent:"center"
   
    },
    bottomText: {
        fontSize: 11,
        color: "#9b9b99",
        fontWeight: "bold",
        
    },
    shadow: {
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height:10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation:10
    }
})
export default BottomNavigation;
