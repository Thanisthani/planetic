import { View, Text,StyleSheet,Pressable,TextInput, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as EmailValidator from 'email-validator';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';

const ForgotPassword = ({ navigation }) => {
  

  const LoginSchema = Yup.object().shape(
    {
        email: Yup.string().email().required("An email is required"),
    }
  )
  
  const onReset = (email) => {
    sendPasswordResetEmail(auth, email)

    .then((re) => { Alert.alert('Hey!!', "Email sent, Check your mail") },
    )
    .then((re) =>{navigation.push('SignInScreen')})
  
    .catch((error) => {
        Alert.alert('Hey!!', "Email provided is incorrect")
    })

  }

  return (
    <View style={Styles.wrapper}>
      <View style={Styles.headerwrapper}>
                <Text style={[Styles.header,{fontWeight:"bold"}]}>Recover</Text>
                <Text style={Styles.header}>Password</Text>
            </View>
            <View style={Styles.subtitlewrapper}>
            <Text style={Styles.subtitle}>Let's reset your password</Text>
      </View>
      <View style={Styles.subwrapper}>
        <Text style={Styles.subtext}>Enter Email Address</Text>
      </View>
      

      {/* Form */}


        
      <Formik
                initialValues={{ email: ""}}
                onSubmit={values => {
                    // console.log(values.email,values.password)
                    onReset(values.email)
                }}
                validationSchema={LoginSchema}
                validateOnMount={true}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          isValid
                    
        }) =>
        (
          <>
            <View style={[Styles.inputfield,
            { borderColor: values.email.length < 1 || EmailValidator.validate(values.email) ? "#ccc" : "red" }]}>
              <TextInput style={Styles.inputfieldText}
                placeholder='Email'
                placeholderTextColor='#c3c3c4'
                keyboardType='email-address'
                textContentType='emailAddress'
                // autoFocus={true}
                onChangeText={handleChange('email')}
                onblur={handleChange('email')}
                value={values.email}
              />
            </View>


            <TouchableOpacity style={Styles.backTO} onPress={() => navigation.push("SignInScreen")}>
              <Text style={Styles.backToText}>Back to sign in</Text>
            </TouchableOpacity>

            <Pressable style={Styles.button(isValid)} onPress={handleSubmit}>
                <Text style={Styles.buttonText}>Send</Text>
            </Pressable>
          </>
        )
        }
      </Formik>
      
      <View style={Styles.wrapperSignup}>
                            <Text style={Styles.signUP}>Don't have an account ? </Text>
                            <TouchableOpacity onPress={() =>navigation.push('SignUpScreen')}>
                                <Text style={[Styles.signUP,{ color: "#19B4BF",fontWeight:"bold" }]}>Sign Up</Text>
                                </TouchableOpacity>
                        </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  wrapper: {
    marginHorizontal:40
  },
  headerwrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
marginTop:30
},
header: {
    color: "#19B4BF",
    fontSize: 30,
    paddingLeft:5
},
subtitlewrapper: {
    paddingTop:10,
    alignItems: "center",
    paddingBottom:80
  },
  subwrapper: {
    paddingTop:0,
    alignItems: "center",
    paddingBottom:20
},
subtitle: {
    fontSize:17
  },
  subtext: {
    fontSize: 17,
    fontWeight:'bold'
  },
  inputfield: {
    // backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    
  },
  inputfieldText: {
    fontSize:15  
  },
  button: isValid =>( {
    backgroundColor:isValid? "#19B4BF" : "#85e8ef",
    width: "100%",
    padding: 12,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
   marginTop:30
}),
buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight:"bold"
  },

  backTO: {
    paddingTop:10,
    alignItems: "center",
  },
  backToText: {
    color: "#87878b",
    fontSize:16
  },
  wrapperSignup: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "center",
   
},
signUP: {
    fontSize:15
}
})

export default ForgotPassword