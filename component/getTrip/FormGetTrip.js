import { View, Text, TextInput, StyleSheet, TouchableOpacity ,Platform} from 'react-native';
import React,{useState,useEffect} from 'react';
import { Formik } from 'formik';
import { FontAwesome5 } from '@expo/vector-icons';
import DateRangePicker from "react-native-daterange-picker";
import Moment from 'moment';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm from 'react-native-simple-radio-button';
import { collection, getDocs,setDoc,doc, serverTimestamp,query,where } from "firebase/firestore";
import { db,auth } from "../../firebase"
import { extendMoment } from 'moment-range';
import { onAuthStateChanged } from "firebase/auth";


const FormGetTrip = ({ navigation }) => {

// current user
    const [currentUser, setCurrentUser] = useState(null)

    const userHandler = (user) => {
        user ? setCurrentUser(user) : setCurrentUser(null);
    }
   
    useEffect(() => 
         onAuthStateChanged(auth, user => userHandler(user))
      
        , [])
    
    // date range
    const moments = extendMoment(Moment);

    // get values from firestore
    const [pPlace, setPPlace] = useState(null)
    
    // Date
    const [startdate, setStartDate] = useState()
    const[enddate,setEnddate] = useState()
    const [displayDates, setDisplayDates] = useState(Moment())
    
    // budget slider
    const [multiSliderValue, setMultiSliderValue] = useState([0, 100])

    // dropdown
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Mountain', value: 'Mountain'},
        { label: 'Heritage', value: 'Heritage' },
        { label: 'Sea', value: 'Sea' },
        { label: 'Adventurous', value: 'adventurous' },
        {label: 'NightOut', value: 'nightout'},
    ]);

    // visibility radio
    const[visibility,setVisibility] = useState('public')
    var radio_props = [
        { label: 'Public', value: 'public' },
        {label:'Private', value:'private'}
      ];

    // budget slider value
    const multiSliderValuesChange = (values) => setMultiSliderValue(values)

    // calender date value
    const onChangeDates = (dates) => {

        if (dates.displayedDate) {
            setDisplayDates(dates.displayedDate)
}
        if (dates.startDate)
        {
            setStartDate(dates.startDate)
        }
        
        if (dates.endDate)
        {
            setEnddate(dates.endDate)
            }  
    }


// firestore
    
    
    const gettrip = async (place_name) => {
    
        const newStartdate = Moment(startdate).format().toString().slice(0, 10);
        const newEnddate = Moment(enddate).format().toString().slice(0, 10);
        const range = moments.range(new Date(newStartdate),new Date(newEnddate)).diff('days')+1;
        
        const places = collection(db, 'Destination')
        const q = query(places,
            where("d_name", "==", place_name),
            where("budget", "<=", multiSliderValue[1]),
            where("budget", ">=", multiSliderValue[0]),
            where("category", "==", value),
            where("duration", "==", range)
        )

        const docSnap = await getDocs(q);
        setPPlace(docSnap.docs.map((doc) =>( {
            id: doc.id, ...doc.data()
            
        })))


        if (docSnap) {
            pPlace.map((place, index) => {
                      uploadPlan(place.id,place.d_name,place.imgURL,place.budget,newStartdate,newEnddate)
            })  
        }
    }

    // upload plan
    const uploadPlan = async (place_id,place_name,imgURL,budget,startdate,enddate) =>
    {
        const userRef = collection(db, "users", currentUser.uid, "user_plan")
        
        await setDoc(doc(userRef),
            { 
                userId: currentUser.uid,
                placeId: place_id,
                placeName: place_name,
                createAt: serverTimestamp(),
                startDate: startdate,
                endDate: enddate,
                budget: budget,
                visible:visibility
                
        
            }).then(() => 
            {
                
                console.log("Sucesssfully plan posted")
                navigation.navigate('TripPlanScreen',
                    {
                        place_id: place_id,
                        imgURL: imgURL,
                        place_name: place_name,
                        budget:budget
                    })
                }
            
        )

    }   



  return (
    <View>
          <Formik
           initialValues={{ place:""}}
           onSubmit={values =>{ gettrip(values.place)}}
        //    validationSchema={uploadPostSchema}
              validateOnMount={true}>
              
              {({
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  values,
                  errors,
                  isValid
              }) =>
              (
                  <>
                  
                      <View style={Styles.formInput}>
                          {/* <ScrollView> */}
                              
                              {/* Enter place */}
                          <View style={Styles.placeInput}>
                              <Text style={Styles.placeInputText}>Where to?  </Text>
                              <TextInput style={Styles.placeInputholder} placeholder="eg: Kandy, Badulla, Matale"
                                      placeholderTextColor='grey'
                                      value={values.place}
                                      onChangeText={handleChange('place')}
                                      onblur={handleChange('place')}
                                  />
                          </View>

                              {/* set date */}

                          <DateRangePicker
                              onChange={onChangeDates}
                              endDate={enddate}
                              startDate={startdate}
                              displayedDate={displayDates}
                              range={true}
                         
                              selectedStyle={{
                                backgroundColor: "#19B4BF",
                              }}

                              selectedTextStyle={{
                                  color: "white",
                                  fontWeight:"bold"
                              }}
                             
                          >
            
                                  <View style={Styles.calenderWrapper}>
                                      <Text style={Styles.placeInputText}>Dates</Text>
                                      <View style={Styles.dateWrapper}>
                                          <View style={Styles.date}>
                                              <FontAwesome5 name="calendar-alt" size={24} color="black" />
                                              <Text> Start Date
                                              </Text>
                                              {/* <Text>
                                                  {startdate
                                                      
                                                      ? `${startdate}`
                                                      
                                                      : "Start Date"}
             
                                                  
                                              </Text> */}
                                              
                                              
                                          </View>

                                          <View style={Styles.date}>
                                              <FontAwesome5 name="calendar-alt" size={24} color="black" />
                                              <Text> End Date
                                              {/* {enddate} */}
                                              </Text>
                                          </View>
                                          
                                  
                                      </View>
                                      
                                  </View>
                              </DateRangePicker>
                              
                              {/* Set budget */}
                          
                          <View style={Styles.budgetwrapper}>
                              <Text style={Styles.placeInputText}>Budget</Text>

                              <View style={Styles.slider}>   
                                  
                                  <MultiSlider
                                      markerStyle={{
                                          ...Platform.select({
                                              android: {
                                                    
                                                    height: 20,
                                                    width: 20,
                                                    borderRadius: 50,
                                                    backgroundColor: '#19B4BF'
                                                }
                                                })
                                            }}
                                      pressedMarkerStyle={{
                                                ...Platform.select({
                                                    android: {
                                                    height: 20,
                                                    width: 20,
                                                    borderRadius: 20,
                                                    backgroundColor: '#19B4BF'
                                                }
                                                })
                                            }}
                                            selectedStyle={{
                                                backgroundColor: '#19B4BF'
                                            }}
                                            trackStyle={{
                                                backgroundColor: '#CECECE'
                                            }}
                                            touchDimensions={{
                                                height: 40,
                                                width: 40,
                                                borderRadius: 20,
                                                slipDisplacement: 40
                                            }}
                                            values={[multiSliderValue[0], multiSliderValue[1]]}
                                            sliderLength={260}
                                            onValuesChange={multiSliderValuesChange}
                                            min={0}
                                            max={200}
                                            allowOverlap={false}
                                            minMarkerOverlapDistance={10}
                                  />
                                   <View style={Styles.sliderValue}>
                                      <Text>$ {multiSliderValue[0]}</Text>
                                      <Text>$ {multiSliderValue[1]}</Text>
                                  </View>
                                  
                                  </View>
                                  
                          </View>
                          
                         
                              {/* set catogary */}
                              
                          <View
                            //   style={Styles.catogary}
                          > 
                              
                              <DropDownPicker
                              open={open}         
                              value={value}
                              items={items}
                              setOpen={setOpen}
                              setValue={setValue}
                                  setItems={setItems}
                                  
                                  onChangeValue={(value) => {
                                    console.log(value);
                                  }}
                                  closeAfterSelecting={true}
                              
                                  selectedItemContainerStyle={{
                                    backgroundColor: "#19B4BF"
                                  }}
                                  selectedItemLabelStyle={{
                                      color:"white"
                                  }}
                                  translation={{
                                    PLACEHOLDER: "Select a category"
                                  }}

                                  placeholderStyle={{
                                    fontSize: 20,
                                      fontWeight: "bold"
            
                                  }}

                                  listMode="SCROLLVIEW"
                                  
                                  style={{
                                      height: 70,
                                      borderRadius: 10,
                                      width: 330,
                                      marginTop:20
                                  }}
                                  textStyle={{
                                    fontSize: 18
                                  }}
                                //   onSelectItem={(item) => {
                                //     console.log(item);
                                //   }}
                                //   labelProps={{
                                //       color: "#19B4BF",
                                      
                                //       fontWeight:"bold"
                                //   }}
                                //   disabled={false}
                                  autoScroll={true}
                                //   onPress={(value) => console.log('was the picker open?', value)}
                                  />
                                  
                              </View> 
                              
                              {/* set visibility */}
                          
                              <View style={[Styles.visiblity,
                                  { paddingTop: open ? 100 : 0}]}>
                                  <Text style={Styles.placeInputText}>Visible</Text>
                                  <View >
                                      <RadioForm
                                          style={Styles.radionIcon}
                                          radio_props={radio_props}
                                          initial={0}
                                          onPress={(value) => { setVisibility(value) }}
                                          buttonColor={'#19B4BF'}
                                          animation={true}
                                          buttonInnerColor={'#19B4BF'}
                                          labelColor={'black'}
                                          selectedButtonColor={'#19B4BF'}
                                      />
                                      </View>
                              </View>
                              
                              {/* submit btn */}
                              
                              <TouchableOpacity style={Styles.button} onPress={handleSubmit}>
                                  <Text style={Styles.buttonText}>Get plan</Text>
                              </TouchableOpacity>

                              {/* </ScrollView> */}
                          </View>
                          
                  </>
              )}

          </Formik>
          
    </View>
  );
};


const Styles = StyleSheet.create(
    {
        placeInput: {
            flexDirection: "row",
            borderWidth: 1,
            borderRadius: 10,
            padding: 20,
            alignItems: "center",
            marginBottom: 20,
            width: 330,
        },
        formInput: {
            // paddingHorizontal: 30,
            paddingLeft:40,
            marginTop:20
        },
        placeInputText: {
            fontSize: 20,
            fontWeight:"bold"
        },
        placeInputholder: {
            fontSize:15,
        },
        calenderWrapper: {
            borderRadius: 10,
            borderWidth: 1,
            width: 330,
            paddingVertical: 7,
            paddingLeft:20
            
        },
        dateWrapper: {
            flexDirection: "row",
            paddingTop:3
           
            
            
        },
        date: {
            flexDirection: "row",
            paddingLeft: 10,
            paddingRight: 50,
            alignItems:"center"
        },
        sliderValue: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingRight: 28,
            paddingTop:0
        },
        slider: {
            paddingLeft:20
        },
        budgetwrapper: {
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 20,
            paddingVertical: 7,
            paddingLeft: 20,
            width: 330,
        },
        catogary: {
            marginTop: 20,
            width: 330,
            zIndex:100
        },
        visiblity: {
            marginTop: 20,
            zIndex: 50,
            marginLeft:10
        },
        button: {
            backgroundColor:"#19B4BF" ,
            width: "80%",
            padding: 12,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
           marginLeft:20
        },
        buttonText: {
            color: "#fff",
            fontSize: 20,
            fontWeight:"bold"
        },
        radionIcon: {
            flexDirection: "row",
            justifyContent:"space-around",
            paddingTop: 20,
            paddingRight:50
        }
    }



)
export default FormGetTrip;