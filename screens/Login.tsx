import React , {useState,useEffect} from 'react'
import { Text, View ,TextInput,Dimensions ,StyleSheet,TouchableOpacity,Alert ,Image,ImageBackground} from 'react-native'
import Colors from '../constants/color'
import * as Location from 'expo-location';

const screenHeight = Dimensions.get('window').height+30;
const screenWidth = Dimensions.get('window').width;

export default function Login() {
  const [email , setEmail] = useState('');
  const [pass,setPass] = useState('');

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);


  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
    Alert.alert(
        "Alert Title",
        text,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
  } 

  return (
    <ImageBackground
                source={
                    require('../assets/signup.jpeg')
                }
                resizeMode="stretch"
                style={styles.img}>
    <View style={styles.container}>
   
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="Email" 
          placeholderTextColor="#888"
          onChangeText={(text)=>{setEmail(text)}}
          value={email}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="Password" 
          placeholderTextColor="#888"
          onChangeText={(text) => {setPass(text)}}
          value={pass}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity 
        style={styles.loginBtn}
        onPress={()=>{}}
      >
          <Text style={{...styles.loginText ,color : 'white'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{}}
      >
          <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
      
    </View>
    </ImageBackground>
   
  )
}


const styles = StyleSheet.create({
  img: {
    height: screenHeight,
    width: screenWidth,

},  
  container: {
    flex: 1,
    // backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:"rgba(255,255,255,0.6)",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    fontFamily : 'open-sans' 
  },
  loginBtn:{
    width:"80%",
    backgroundColor: 'rgba(0,0,0,0.9)' ,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    marginBottom:10
  },
  loginText : {
    fontFamily : 'open-sans' , 
    fontSize : 15,
  }
})