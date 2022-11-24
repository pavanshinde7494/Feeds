import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native"
import React, { useState, useEffect, useRef } from 'react'
// import CardFlip from 'react-native-card-flip';


export default function DamScreen() {
  const cardFlip = useRef();
  return (
    <View style={styles.container}>
      {/* <CardFlip style={styles.cardContainer} ref={cardFlip}> */}
        <TouchableOpacity  >
          <Text>Dam Screen</Text>
        </TouchableOpacity>
        
      {/* </CardFlip> */}
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
})