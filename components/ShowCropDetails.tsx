import {
    Text, View,
    StyleSheet, 
  } from "react-native"
  import { TouchableOpacity } from "react-native-gesture-handler";
  
  export default function ShowCropDetails(props) {
    return (
        <View>
                <TouchableOpacity>
                    <Text style={styles.text}>
                        Scantime:{"\n"}
                        {props.data[2]} {"\n"}{"\n"}
                        Soil Temperature:
                        {props.data[0]}
                        {props.data[1]}
                        
                    </Text>
                </TouchableOpacity>
        </View>
    )
  }
  
  
  const styles = StyleSheet.create({
  
    text: {
        height: 200,
        margin: 15,
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 30,
        marginTop: 40,
        fontWeight: 'bold',
        fontSize: 20,
    },
  })