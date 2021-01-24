import React from 'react';
import { StyleSheet, Text, Modal ,View , TextInput , TouchableOpacity, Alert ,Image } from 'react-native';
import db from '../config'
import firebase from 'firebase'

export default class LoginSreen extends React.Component {
    constructor(){
        super();
        this.state = {
        emailId : "",
        password : "",
     




       }
    }

    userlogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
         // this.props.navigation.navigate('Donate')
        })
       .catch((error)=>{
       var errorcode=error.code; 
       var errorMessage=error.message; 
       return Alert.alert(errorMessage)
       
         })
      }
   
      usersignup=(emailId,password)=>{
       firebase.auth().createUserWithEmailAndPassword(emailId,password)
       .then((response)=>{
           return Alert.alert('user has signed up')
       })
      .catch((error)=>{
      var errorcode=error.code; 
      var errorMessage=error.message; 
      return Alert.alert(errorMessage)
        })
     }

    render(){
     return (
       
        <View>

       <TextInput style={styles.formTextInput}
      placeholder = " plzEntertheGmail@gmail.com"
      keyboardType = "email-address"
      onChangeText = {(text)=> {
      this.setState({
        emailId : text

      })
      }}
      
      />


      
      <TextInput style={styles.formTextInput}
      placeholder = "Password"
      secureTextEntry = {true}
      onChangeText = {(text)=> {
      this.setState({
        password : text

      })
      }}
      
      />
 

     <View>
          <TouchableOpacity onPress = {()=>{
           
       }}>
      <Text>  Sign Up </Text>
      </TouchableOpacity>


      <TouchableOpacity onPress = {()=>{
           this.userlogin(this.state.emailId,this.state.password)
       }}>
      <Text>  log in  </Text>
      </TouchableOpacity>

       </View>

     </View>




    )
   }
  }


const styles = StyleSheet.create({
   
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10
    }
  
  })