import { View, Text , StyleSheet,TouchableOpacity,StatusBar} from 'react-native'
import React,{useState} from 'react'
import { Ionicons, Feather } from '@expo/vector-icons';
import Modal from "react-native-modal";
import { auth } from '../../firebase';
import { signOut } from "firebase/auth"

const Header = ({ navigation }) => {
    const [visible, setVisible] = useState(false)

      // sign out
      const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("User sign out")
        }).catch((error) => {
            console.log(error)
        })
    }
    


  return (
    <View style={Styles.container}>
    
          <View style={Styles.headingWrapper}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons style={Styles.icon} name="chevron-back" size={35} color="black" />
              </TouchableOpacity>
              
              <Text style={Styles.heading}>Profile</Text>
              <TouchableOpacity onPress={() => setVisible(true)}>
                  <Feather name="more-horizontal" size={35} color="black" />
              </TouchableOpacity>

              {/* modal */}

              <Modal transparent isVisible={visible}
                  backdropOpacity={0.0}
              onBackdropPress={() => setVisible(false)}
              >
                  {/* <View style={Styles.modalBackGround}> */}
                      {/* <TouchableOpacity style={Styles.modalBackGround}
                          onPressOut={ () => setVisible(false)}> */}
                  <View style={Styles.modalWrapper}>
                      <View style={Styles.modalContainer}>
                          
                          <TouchableOpacity onPress={() => handleSignOut()}>
                              <Text style={Styles.modalText}>Log out</Text>
                          </TouchableOpacity>

                      </View>
                  </View>
                  
                        
                      {/* </TouchableOpacity> */}
                  {/* </View> */}
                  
              </Modal>
              
              

          </View>
          
    </View>
  )
}


const Styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 10,
        marginHorizontal:20
    },
    headingWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center"
    },
    heading: {
        // paddingTop:20,
        fontSize: 28,
        fontWeight:'600',
        color: "black",
        fontWeight: "bold",
        
        // color:"#4c4c4b"
        
    },
    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width:130,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 15,
        // borderRadius: 20,
        elevation: 10,
    },
    modalText: {
        fontSize: 18,
        fontWeight:"bold"
    },
    modalWrapper: {
        alignItems: "flex-end",
        justifyContent: "flex-start",
        flex: 1,
        marginTop:0
    }

}) 
export default Header