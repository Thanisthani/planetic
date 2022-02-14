import { View,TextInput, StyleSheet, StatusBar, Image,Text, TouchableOpacity } from 'react-native'
import { AntDesign ,Feather} from '@expo/vector-icons';
import React,{useEffect,useState} from 'react'
import { collection, doc,onSnapshot } from '@firebase/firestore'
import { db } from '../../firebase'
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux'
import { SignInUser } from '../../Redux/Reducer/UserSlicer'


const Header = ({ navigation }) => {
    const [users, setUsers] = useState()
    const user = useSelector(SignInUser);
    const [cUser, setCuser] = useState()

    // get Current user
    const getCurrentuser = async () =>
    {
        const ref = doc(db, 'users',user.uid)
        onSnapshot(ref, (snapshot) => {

            setCuser(snapshot.data())
        console.log(snapshot.data())
               
        })
        }

    // search

    const [enter, setEnter] = useState(null);
    const [masterArray, setMasterArrary] = useState(null)
    const [filterArray, setFilterArray] = useState(null)
    const [search,setSearch] = useState()
    

    // get users
    const getUsers = async () => {
        try {
            const ref = collection(db, "users")
            onSnapshot(ref, (snapshot) =>
            {
                setUsers((snapshot.docs.map((user) => ({ id: user.id, ...user.data() }))))
                if (!masterArray)
                {
                    setMasterArrary((snapshot.docs.map((user) => ({ id: user.id, ...user.data() }))))
                }
                if (!filterArray)
                {
                    setFilterArray((snapshot.docs.map((user) => ({ id: user.id, ...user.data() }))))
                    // console.log(users)
                    }
          
            })
            // console.log(masterArray)

        
        }
        catch (error)
        {

            console.log("user not fetched")
        }
       
    }
    
    // search filter
    const SearchFilter = (text) => {
        if (text)
        {
            const newData = masterArray.filter((item) => {
                const itemData = item.username ? item.username.toUpperCase()
                    : "".toUpperCase();
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            });
            setFilterArray(newData)
            setSearch(text)
        }
        else {
            setFilterArray(masterArray)
            setSearch(text)
        }
    }

        // display list
        const ItemView = ({ item }) => {
            return (
                <TouchableOpacity onPress={() => {
                        navigation.navigate('FollowerProfileScreen', {
                            followerId: item.uid,
                             })   
                    }}>
                    <Text style={Styles.listText}>{item.username}</Text>
                    
                </TouchableOpacity>
                
            )
            
        
        }


    useEffect(() => {
        getCurrentuser()
        getUsers()
        console.log("user wroking")
        
},[])

  return (
    <View style={Styles.container}>
         {cUser && <Image style={Styles.logo} source={{uri:cUser.pic}} />}

          {/* search */}
          <View style={Styles.searchWrapper}>
                    
              <View style={Styles.search}>
                  
                  <AntDesign name="search1" size={20} color="black" />
                  
                  <TextInput pointerEvents="none"
                      style={Styles.searchtext} placeholder='   Search traveler'
                      value={search}
                      onTouchStart={() => setEnter("hi")}
                      onChangeText={(value) => SearchFilter(value)}
                      onEndEditing={() => setEnter(null)}
                  >

                      </TextInput>
                   
              </View>
              
              {enter ? <View style={Styles.searchList}>
                <FlatList
                    data={filterArray}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={ItemView}
                    // ItemSeparatorComponent={ItemSpearatorView}
                />
            </View> : null}
              
          </View>
          

          {/* add post */}

          <TouchableOpacity style={{ marginTop:10}} onPress={() => navigation.navigate("AddPostScreen")}>
              <Feather name="plus-square" size={33} color="black" />
              
          </TouchableOpacity>
          
    </View>
  )
}

const Styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 10,
        flexDirection: "row",
        // alignItems: "center",
        marginBottom:10
    },
    logo: {
        height: 55,
        width: 55,
        borderRadius: 30,
        marginLeft: 20,
        marginRight: 10,
     
        
    },
    searchWrapper: {
        alignItems: "center",
        marginRight: 20,
        marginTop:3
    },
    search: {
        alignItems: "center",
        // marginTop: 30,
        flexDirection: "row",
        backgroundColor: "#f4f4f4",
        // elevation: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 250,
        borderRadius: 10,
        
    },
    searchtext: {
        
        fontSize: 20,
        color: "#afafb1",
   
        
        
    },
    searchList: {
        backgroundColor: "#eff7fa",
        width: 250,
        marginTop:0,
        paddingLeft:25,
    //   marginLeft:40,
        zIndex:500
    },
    listText: {
        fontSize: 18,
        paddingBottom: 5,
        color:"black"
    }
})
export default Header