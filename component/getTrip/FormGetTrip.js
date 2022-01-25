import { View, Text, TextInput, StyleSheet, TouchableOpacity,Pressable,ScrollView ,Platform} from 'react-native';
import React,{useState,useCallback} from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { FontAwesome5 } from '@expo/vector-icons';
import DateRangePicker from "react-native-daterange-picker";
import Moment from 'moment';
import RangeSlider from 'rn-range-slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons'; 
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm from 'react-native-simple-radio-button';
import { collection, getDocs, collectionGroup, onSnapshot,query,where } from "firebase/firestore";
import { db } from "../../firebase"
import { extendMoment } from 'moment-range';


const FormGetTrip = ({ navigation }) => {
    const moments = extendMoment(Moment);

    const [pPlace, setPPlace] = useState([])
    
    // Date
    const [startdate, setStartDate] = useState()
    const[enddate,setEnddate] = useState()
    const [displayDates, setDisplayDates] = useState(Moment())
    
    
    const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Mountain', value: 'Mountain'},
        { label: 'Heritage', value: 'Heritage' },
        { label: 'Sea', value: 'Sea' },
        // { label: 'Adventurous', value: 'adventurous' },
        // {label: 'NightOut', value: 'nightout'},
    ]);

    var radio_props = [
        { label: 'Public', value: 'public' },
        {label:'Private', value:'private'}
      ];

    const multiSliderValuesChange = (values) => setMultiSliderValue(values)
    
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
        
        const duration = new Date(newEnddate) - new Date(newStartdate)
        const range = moments.range(new Date(newStartdate),new Date(newEnddate)).diff('days')+1;
        
        const places = collection(db, 'Destination')
        const q = query(places,
            where("d_name", "==", place_name),
            where("budget", "<=", multiSliderValue[1]),
            where("budget", ">=", multiSliderValue[0]),
            where("category", "==", value),
            where("duration", "==", range)
        )

        // onSnapshot(q, (snapshot) => {
        //     setPPlace((snapshot.docs.map((place) => ({ id: place.id, ...place.data() }))))
      
        // })

        const docSnap = await getDocs(q);
        setPPlace(docSnap.docs.map((doc) =>( {
            id: doc.id, ...doc.data()
            
        })))

        if (pPlace) {
            console.log(pPlace)
            pPlace.map((place, index) => {
                      
                navigation.navigate('TripPlanScreen',
                    {
                        place_id: place.id,
                        imgURL: place.imgURL,
                        place_name: place.d_name,
                        budget: place.budget
                    })
                    console.log( "kumar " +place.d_name)
            })
            
        }
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
                                          onPress={(value) => { console.log(value) }}
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
