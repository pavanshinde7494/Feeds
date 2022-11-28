import {
    Text, View,
    StyleSheet, 
  } from "react-native"
  import { TouchableOpacity } from "react-native-gesture-handler";
  
  export default function ShowDetails(props) {
    return (
        <View>
                <TouchableOpacity>
                    <Text style={styles.text}>
                        Scantime:{"\n"}
                        2022-07-24 08:48:11 {"\n"}{"\n"}
                        Soil Temperature:
                        {props.data}
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