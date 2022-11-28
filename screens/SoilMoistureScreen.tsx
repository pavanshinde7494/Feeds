import {
    Text, View, TextInput, ImageBackground,
    StyleSheet, Dimensions
} from "react-native";
import React, { useState } from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";
import Dropdown_soil from '../components/Dropdown';
import ShowDetails from '../components/ShowDetails';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function SoilMoistureScreen() {
    //to show the details component
    const [show, setShow] = useState(false);
    //to set the details of showdetails component
    const [details, setDetails] = useState('')

    //to handle select value of dropdown1
    const handelDropDown1 = (val) => {
        console.log(val)
        setDetails("drop1")
        setShow(true)
    }

    //to handle select value of dropdown2
    const handelDropDown2 = (val) => {
        console.log(val)
        setDetails("drop2")
        setShow(true)
    }


    return (
        <View>
            <ImageBackground
                source={
                    require('../assets/SoilMoistureBackground.jpg')
                }
                resizeMode="stretch"
                style={styles.img}>
                    {/* <Text style={styles.text}>
                        Scantime:{"\n"}
                        2022-07-24 08:48:11 {"\n"}{"\n"}
                        Soil Temperature:
                        24.2499938964843 {"\n"}{"\n"}
                        Soil Moisture: 29
                    </Text> */}
                    <Dropdown_soil
                        title="Soil Temperatue"
                        handleSelect={handelDropDown1}
                    />
                    <Dropdown_soil
                        title="Soil Moisture"
                        handleSelect={handelDropDown2}
                    />
                    {show && <ShowDetails data={details} />}
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    img: {
        height: screenHeight,
        width: screenWidth,

    },
    text: {
        height: 250,
        margin: 15,
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 30,
        marginTop: 80,
        fontWeight: 'bold',
        fontSize: 20,
    },
})