import { View, Text, TextInput, StyleSheet, TouchableOpacity,Pressable,ScrollView ,Platform} from 'react-native';
import React,{useState,useCallback} from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { FontAwesome5 } from '@expo/vector-icons';
import DateRangePicker from "react-native-daterange-picker";
import moment from 'moment';
import RangeSlider from 'rn-range-slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons'; 
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


const FormGetTrip = () => {
    
    // Date
    const [startdate, setStartDate] = useState()
    const[enddate,setEnddate] = useState()
    const [displayDates, setDisplayDates] = useState(moment())
    const [rangeValue, setRangeValue] = useState({ rangeLow: 1, rangeHigh: 10 })
    
    const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Mountain', value: 'mountain'},
        { label: 'Heritage', value: 'heritage' },
        { label: 'Sea', value: 'sea' },
        { label: 'Adventurous', value: 'adventurous' },
        {label: 'NightOut', value: 'nightout'},
    ]);

    var radio_props = [
        { label: 'Public', value: 'public' },
        {label:'Private', value:'private'}
      ];

    const [visibleOpen, setVisibleOpen] = useState()
    const [visibleValue, setVisibleValue] = useState()
    const [visibleItems, setVisibleItems] = useState([
        { label: 'Public', value: 'public' },
        {label:'Private', value:'private'}
    ])

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

        console.log(startdate)
    }
  return (
    <View>
          <Formik
           initialValues={{ place:"", endDate:null }}
        //    onSubmit={values =>{ uploadPic(values.caption,values.imageUrl)}}
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
                      <ScrollView>
                          <View style={Styles.formInput}>
                              
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
                                            max={100}
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
                              
                          <View style={Styles.catogary}> 
                              
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
                                  translation={{
                                    PLACEHOLDER: "Select a category"
                                  }}

                                  placeholderStyle={{
                                    fontSize: 20,
                                      fontWeight: "bold"
            
                                  }}

                                  style={{
                                      height: 70,
                                      borderRadius: 10,
                                  }}
                                  textStyle={{
                                    fontSize: 18
                                  }}
                                  />
                                  
                              </View> 
                              
                              {/* set visibility */}
                          
                              <View style={Styles.visiblity}>
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
                              
                              <TouchableOpacity style={Styles.button} >
                                  <Text style={Styles.buttonText}>Get plan</Text>
                              </TouchableOpacity>
                          </View>
                          
                      </ScrollView>
                      
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
