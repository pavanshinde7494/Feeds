import { StyleSheet , View , Text, Image, Dimensions , FlatList, ScrollView } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Button } from '@rneui/themed';
import { useState , useRef } from "react";


import color from "../constants/color";


import BottomSheet, { BottomSheetRefProps } from '../components/BottonSheet';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height ;

let images = [
  'https://static.vecteezy.com/system/resources/previews/002/251/495/large_2x/taj-mahal-on-a-sunny-day-in-agra-uttar-pradesh-india-photo.jpg',
  'https://img.freepik.com/free-photo/high-angle-closeup-shot-isolated-green-leaf-puddle-rainy-day_181624-12619.jpg?auto=format&h=200',
  'https://newsus.cgtn.com/news/3567544d79596a4d3363544f77596a4d34637a4e31457a6333566d54/img/59c9a396656c414480e9950dc39b9b2b/59c9a396656c414480e9950dc39b9b2b.JPG',
  'https://www.collegesearch.in/upload/institute/images/small/190430124850_walchand.jpg'
]



export default function Weather() {

  const [tempUnit , setTempUnit] = useState('°C');

  const date = new Date();
  let day = date.getDay().toString();
  let hr = date.getHours().toString();
  let mn = date.getMinutes().toString();
  let mon = date.getMonth().toString();
  let dt = date.getDate().toString();


  switch(mon){
    case '0' :
      mon = 'Jan'
      break;
    case '1' :
      mon = 'Feb'
      break;
    case '2' :
      mon = 'Mar'
      break;
    case '3' :
      mon = 'Apr'
      break;
    case '4' :
      mon = 'May'
      break;
    case '5' :
      mon = 'Jun'
      break;
    case '6' :
      mon = 'Jul'
      break;
    case '7' :
      mon = 'Aug'
      break;
    case '8' :
      mon = 'Sept'
    break;
    case '9' :
      mon = 'Oct'
      break;
    case '10' :
      mon = 'Nov'
      break;
    case '11' :
      mon = 'Dec'
      break;
  }


  switch(day){
    case '0':
      day = 'Sun'
      break;
    case '1':
      day = 'Mon'
      break;
    case '2':
      day = 'Tue'
      break;
    case '3':
      day = 'Wed'
      break;
    case '4':
      day = 'Thu'
      break;
    case '5':
      day = 'Fri'
      break;
    case '6':
      day = 'Sat'
      break;

  }
  
  const ref = useRef<BottomSheetRefProps>(null);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View>
      
        {/*1. Background Image According to data from back end */}
          <View>
          <Image
              source={{uri : images[2]} }
              style={{width ,height , resizeMode : 'cover'}}
            />
          </View>
            
          

        {/*2. Date and Time Section */}

          <View style={{
              position : 'absolute' , 
              top : '10%' , 
              justifyContent : 'center'  , 
              width : '90%' ,  
              marginHorizontal : '5%'
            }} >

              <View style={{ width : '50%'}}>

                <View style={{justifyContent : 'center' , alignItems : 'center' }}>
                  <Text style={{fontSize : 20 , color : 'white'}}>{day}, {dt} {mon}</Text>
                </View> 
                <View style={{justifyContent : 'center' , alignItems : 'center' }}>
                  <Text style={{fontSize : 40 , color : 'white'}}>{hr} : {mn}</Text>
                </View> 
              </View>
          </View>

          {/*3. Temperature Section */}

          <View style={{
              position : 'absolute' , 
              top : '27%' , 
              justifyContent : 'center'  , 
              width : '90%' ,  
              marginHorizontal : '5%'
            }} >

              {/* 3.1 Tempetature and Icon  */}
            <View style={{flexDirection : 'row' , width : '100%'}}>

              <View style={{marginLeft : '0%' , marginBottom : '4%'}}>
                <MaterialCommunityIcons name="thermometer" size={80} color="white" />
              </View>

              <View style={{flexDirection : 'column' , width : '100%'}}>

              <View style= {{flexDirection : 'row'}}>
                <View style={{justifyContent : 'center' }}>
                  <Text style={{fontSize : 40 , color : 'white'}}>29{tempUnit} / </Text> 
                </View> 
                <View>
                  <Button type="solid" radius={100} size='md' onPress={()=>{
                    if(tempUnit == '°C')setTempUnit('°F');
                    else setTempUnit('°C');
                  }} ><Text style={{fontSize : 40 , color: 'white'}}> {tempUnit == '°C' ? '°F' : '°C' } </Text> </Button>
                </View>
              </View>
                

                <View style={{flexDirection : 'row' }}>

                  <View style={{justifyContent : 'center' , alignItems : 'center'}}>
                    <Text style={{fontSize : 20 , color : 'white'}}>Sunny</Text>
                  
                  </View> 

                

                </View>
                
              </View>
            </View>

              {/* 3.2 Min Max Avg of Temperature */}

            <View style={{
              borderWidth : 2,
              borderColor : 'white'  , 
              borderRadius : 1000,
              opacity : 1,
              justifyContent : 'center' , 
              paddingHorizontal : '2.5%' , 
              flexDirection:'row',
              padding : '1%'
              }}>
              <View style={{ width : '33%' , alignItems : 'center'}}>
                <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 20}} >
                    22.34
                </Text>
                <Text style={{color : 'white', fontFamily : 'merriweather' , fontSize : 20}} >
                    Avg.
                </Text>
              </View>

              <View style={{ width : '33%' , alignItems : 'center'}}>
                <Text style={{color : 'white', fontFamily : 'merriweather' , fontSize : 20}} >
                    0
                </Text>
                <Text style={{color : 'white', fontFamily : 'merriweather' , fontSize : 20}} >
                    Min
                </Text>
              </View>
              <View style={{ width : '33%' , alignItems : 'center'}}>
                <Text style={{color : 'white', fontFamily : 'merriweather' , fontSize : 20}} >
                    100
                </Text>
                <Text style={{color : 'white', fontFamily : 'merriweather' , fontSize : 20}} >
                    Max
                </Text>
              </View>
            </View> 


          </View>


          
              
          {/*4. Humidity Section */}
          <View style={{
              position : 'absolute' , 
              top : '55%' , 
              justifyContent : 'center'  , 
              width : '90%' ,  
              marginHorizontal : '5%'
            }} >
              
              {/* 4.1 Humidity And Icon */}
            <View style={{flexDirection : 'row'}}>
              <View style={{marginLeft : '0%' , marginBottom : '4%'}}>
              <Entypo name="drop" size={80} color="white" />
              </View>
              <View style={{flexDirection : 'column'}}>
                <View style={{justifyContent : 'center' , alignItems : 'center'}}>
                  <Text style={{fontSize : 40 , color : 'white'}}>62%</Text>
                </View> 
                <View style={{justifyContent : 'center' , alignItems : 'center'}}>
                  <Text style={{fontSize : 20 , color : 'white'}}>Humid</Text>
                </View> 
              </View>
            </View>

              {/* 4.2 Min Max Avg Humidity */}
            <View style={{
              borderWidth : 2,
              borderColor : 'white'  , 
              borderRadius : 1000,
              opacity : 1,
              justifyContent : 'center' , 
              paddingHorizontal : '2.5%' , 
              flexDirection:'row',
              padding : '1%'
              }}>
              <View style={{ width : '33%' , alignItems : 'center'}}>
                <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 20}} >
                    22.34
                </Text>
                <Text style={{color : 'white', fontFamily : 'merriweather' , fontSize : 20}} >
                    Avg.
                </Text>
              </View>

              <View style={{ width : '33%' , alignItems : 'center'}}>
                <Text style={{color : 'white', fontFamily : 'merriweather' , fontSize : 20}} >
                    0
                </Text>
                <Text style={{color : 'white', fontFamily : 'merriweather' , fontSize : 20}} >
                    Min
                </Text>
              </View>
              <View style={{ width : '33%' , alignItems : 'center'}}>
                <Text style={{color : 'white', fontFamily : 'merriweather' , fontSize : 20}} >
                    100
                </Text>
                <Text style={{color : 'white', fontFamily : 'merriweather' , fontSize : 20}} >
                    Max
                </Text>
              </View>
            </View> 

          </View>


          {/* Modal Content */}
        <BottomSheet ref={ref}>
          <View style={{height : '100%', backgroundColor : color.secondary}}>
              

              {/* 1st  Prediction*/}
              <View style={{height :'10%' ,borderWidth : 2 , borderColor :'white', margin : 20 , borderRadius : 20 , flexDirection : 'row'}}>
                <View style={{width : '33%' , justifyContent : 'center' , alignItems : 'center'}}>
                  <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 15}} >Fri</Text>
                  <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 15}} >25 Nov</Text>
                </View>
                <View style={{width : '33%' , justifyContent : 'center' , alignItems : 'center'}}>
                  <Ionicons name="sunny-sharp" size={50} color="yellow" />
                </View>
                <View style={{width : '33%'  , justifyContent : 'center' , alignItems : 'center'}}>
                  <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 20}} >20°C/56%</Text>
                  <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 15}} >Sunny</Text>
                </View>
              </View>

              {/* 2nd Prediction */}

              <View style={{height :'10%' ,borderWidth : 2 , borderColor :'white', margin : 20 , borderRadius : 20 , flexDirection : 'row'}}>
                <View style={{width : '33%' , justifyContent : 'center' , alignItems : 'center'}}>
                  <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 15}} >Sat</Text>
                  <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 15}} >26 Nov</Text>
                </View>
                <View style={{width : '33%' , justifyContent : 'center' , alignItems : 'center'}}>
                <FontAwesome5 name="cloud-rain" size={50} color="lightblue" />
                </View>
                <View style={{width : '33%'  , justifyContent : 'center' , alignItems : 'center'}}>
                  <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 20}} >20°C/56%</Text>
                  <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 15}} >Rainy</Text>
                </View>
              </View>

              {/* 3rd Prediction */}

              <View style={{height :'10%' ,borderWidth : 2 , borderColor :'white', margin : 20 , borderRadius : 20 , flexDirection : 'row'}}>
                <View style={{width : '33%' , justifyContent : 'center' , alignItems : 'center'}}>
                  <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 15}} >Sun</Text>
                  <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 15}} >27 Nov</Text>
                </View>
                <View style={{width : '33%' , justifyContent : 'center' , alignItems : 'center'}}>
                  <AntDesign name="cloud" size={50} color="lightblue" />
                </View>
                <View style={{width : '33%'  , justifyContent : 'center' , alignItems : 'center'}}>
                  <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 20}} >20°C/56%</Text>
                  <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 15}} >Overcast</Text>
                </View>
              </View>

              {/* 4th Prediction */}

              <View style={{height :'10%' ,borderWidth : 2 , borderColor :'white', margin : 20 , borderRadius : 20 , flexDirection : 'row'}}>
                <View style={{width : '33%' , justifyContent : 'center' , alignItems : 'center'}}>
                  <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 15}} >Mon</Text>
                  <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 15}} >28 Nov</Text>
                </View>
                <View style={{width : '33%' , justifyContent : 'center' , alignItems : 'center'}}>
                  <Ionicons name="sunny-sharp" size={50} color="yellow" />
                </View>
                <View style={{width : '33%'  , justifyContent : 'center' , alignItems : 'center'}}>
                  <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 20}} >20°C/56%</Text>
                  <Text style={{color : 'white' , fontFamily : 'merriweather' , fontSize : 15}} >Sunny</Text>
                </View>
              </View>


          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  )
}


const styles = StyleSheet.create({

})