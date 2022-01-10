import React from 'react'
import { View, TextInput,Text, StyleSheet, Pressable, TouchableOpacity,Alert } from 'react-native'
import * as Yup from 'yup';
import { Formik } from 'formik';
import * as EmailValidator from 'email-validator';


const SignupSchema = Yup.object().shape(
    {
        email: Yup.string().email().required("An email is required"),
        username: Yup.string().required().min(2,"Your username has to have at least 2 character"),
        password: Yup.string().required().min(6,'Your password has to have at least 6 characters')
    }
)

const SignUp = () => {
    return (
        <View style={Styles.wrapper}>
            <View style={Styles.headerwrapper}>
                <Text style={[Styles.header,{fontWeight:"bold"}]}>Join Us To Start </Text>
                <Text style={Styles.header}>planning your trip</Text>
            </View>
            <View style={Styles.subtitlewrapper}>
            <Text style={Styles.subtitle}>Registration allows to get extra features</Text>
            </View>
            <Formik
                initialValues={{ email: "", username:"",password: "" }}
                onSubmit={values => { console.log(values) }}
                validationSchema={SignupSchema}
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
                        {borderColor:values.email.length < 1 || EmailValidator.validate(values.email) ? "#ccc" : "red"}]}>
                            <TextInput style={Styles.inputfieldText}
                                placeholder='Email'
                    placeholderTextColor='#c3c3c4'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                                onChangeText={handleChange('email')}
                                onblur={handleChange('email')}
                                value={values.email}
                            />
                        </View>
                        
                        <View style={[Styles.inputfield,
                        {borderColor: 1>values.username.length || values.username.length >=2 ? "#ccc" : "red"}]}>
                            <TextInput style={Styles.inputfieldText}
                                placeholder='Username'
                    placeholderTextColor='#c3c3c4'
                    textContentType='username'
                                onChangeText={handleChange('username')}
                                onblur={handleChange('username')}
                                value={values.username}
                            />
                        </View>
                        
                        <View style={[Styles.inputfield,
                        {borderColor:1>values.password.length || values.password.length >=6 ?"#ccc" : "red"}]}>
                            <TextInput style={Styles.inputfieldText}
                                placeholder='Password'
                                placeholderTextColor='#c3c3c4'
                                textContentType='password'
                                secureTextEntry={true}
                                onChangeText={handleChange('password')}
                                onblur={handleChange('password')}
                                value={values.password}
                            />
                           
            </View>
           
            <Pressable style={Styles.button(isValid)} onPress={handleSubmit}>
                <Text style={Styles.buttonText}>Sign Up</Text>
            </Pressable>
            <View style={Styles.wrapperSignup}>
                            <Text style={Styles.signUP}>Already do you have an account ? </Text>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={[Styles.signUP,{ color: "#19B4BF",fontWeight:"bold" }]}>Log In</Text>
                                </TouchableOpacity>
                        </View>
                        
                    </>
                    )}
                </Formik>
            
        </View>
    )
}


const Styles = StyleSheet.create({
    wrapper: {
        marginTop: 40,
        paddingHorizontal:20
    },
    headerwrapper: {
        alignItems: "center",
        // flexDirection: "row",
    justifyContent:"center"
    },
    header: {
        color: "#19B4BF",
        fontSize: 30,
        paddingLeft:5
    },
    subtitlewrapper: {
        paddingTop:10,
        alignItems: "center",
        paddingBottom:70
    },
    subtitle: {
        fontSize:17
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
    wrapperforgotpass: {
        alignItems: "flex-end",
    },
    forgotpass: {
        color: "#19B4BF",
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
    wrapperSignup: {
        flexDirection: "row",
        marginTop: 25,
        justifyContent: "center",
       
    },
    signUP: {
        fontSize:15
    }
})
export default SignUp
