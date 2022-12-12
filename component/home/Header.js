import React, { useEffect, useState } from 'react'
import { View, Image, Text, ImageBackground, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import Modal from "react-native-modal";
import { collection, doc,onSnapshot } from '@firebase/firestore'
import { db } from '../../firebase'


const Header = ({ navigation, pic }) => {
    
    // modal
    const [visible, setVisible] = useState(false)
    const [listPlace, setListplace] = useState()    
    const [enter, setEnter] = useState(false);
    const [masterArray, setMasterArrary] = useState(null)
    const [filterArray, setFilterArray] = useState(null)
    const [search,setSearch] = useState()

  

// fetch destinations from firebase
  const getDestination = async () =>{  
const places = collection(db, 'Destination')
await onSnapshot(places, (snapshot) =>
{
    setListplace((snapshot.docs.map((place) => ({ id: place.id, ...place.data() }))))
    if (!masterArray)
    {
        setMasterArrary((snapshot.docs.map((place) => ({ id: place.id, ...place.data() }))))
    }
    if (!filterArray)
    {
        setFilterArray((snapshot.docs.map((place) => ({ id: place.id, ...place.data() }))))
        // console.log(users)
        }

})
      
    }
    
    useEffect(() => {
        getDestination()
    })


// search filter
    const SearchFilter = (text) => {
        if (text)
        {
            setEnter(true)
            const newData = masterArray.filter((item) => {
                const itemData = item.d_name ? item.d_name.toUpperCase()
                    : "".toUpperCase();
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            });
            setFilterArray(newData)
            setSearch(text)
        }
        else {
            setEnter(false)
            setFilterArray(masterArray)
            setSearch(text)
        }
    }

    // display list
    const ItemView = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                    navigation.navigate('DestinationScreen', {
                        place_name: item.d_name,
                         })   
                }}>
                <Text style={Styles.listText}>{item.d_name}</Text>
                
            </TouchableOpacity>
            
        )
        
    
    }
    
   

    return (
        <View style={Styles.container}>
            <ImageBackground style={Styles.img}
                imageStyle={{ borderBottomRightRadius: 30, borderBottomLeftRadius: 30, }}
                source={require("../../assets/heading3.jpg")} resizeMode="cover" >
                 
                
                <View style={Styles.imgWrapper}>

                    <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
                    <Image style={Styles.profile} source={{uri: pic}} /> 
                    </TouchableOpacity>
                
                     
                </View>
                
                    <View style={Styles.headingWrapper}>
                        <Text style={[Styles.heading, { fontWeight:'bold'}]}>Explore</Text>
                        <Text style={Styles.heading}>new places</Text>
                </View>
                
                {/* search  */} 
                <View style={Styles.searchWrapper}>
                   
                    <View style={Styles.search}>
                        <AntDesign name="search1" size={20} color="black" />
                            <TextInput pointerEvents="none"
                            style={Styles.searchtext} placeholder=' Where do you want to go?'

                            value={search}
                            underlineColorAndroid={"transparent"}
                            // onTouchStart={() => setEnter("hi")}
                            onChangeText={(value) => SearchFilter(value)}
                            // onFocus={(value) => console.log(value)}
                            // onEndEditing={() => setEnter(null)}
                        />
                       
                        
                    </View>
                    
                </View>
                  
            </ImageBackground>

            {enter ?
                <View style={Styles.searchList}>
                <FlatList
                    data={filterArray}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={ItemView}
                    // ItemSeparatorComponent={ItemSpearatorView}
                />
            </View> : null}
        
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        // flex: 1,
       
    },
    img: {
        height: 210,
        zIndex:200
        // borderBottomLeftRadius: 2,
        // borderBottomRightRadius:5

    },
    imgWrapper: {
        marginTop: StatusBar.currentHeight+10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight:20
    },
    profile: {
        marginTop: 5,
        marginLeft:20,
        height: 60,
        width: 60,
        borderRadius:50
    },
    getTrip: {
        backgroundColor: "#19B4BF",
        padding: 10,
        borderRadius: 30,
        color: "white",
        fontSize:15
    },
    headingWrapper: {
        flexDirection: "row",
        paddingLeft: 20,
        paddingTop: 20,
        
    },
    heading: {
        color: "white",
        fontSize: 28,
        paddingRight:5
    },
    searchWrapper: {
        alignItems:"center"
    },
    search: {
        alignItems: "center",
        marginTop: 30,
        flexDirection: "row",
        backgroundColor: "white",
        elevation: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        width: "87%",
        borderRadius: 13,
        
    },
    searchtext: {
        
        fontSize: 17,
        color: "#afafb1",
   
        
        
    },
    searchList: {
        backgroundColor: "#eff7fa",
        width: "80%",
        marginTop: 13,
        paddingLeft:25,
      marginLeft:40,
        zIndex:500
    },
    listText: {
        fontSize: 18,
        paddingBottom:5
    }
})

export default Header
