import {
    Text, View, TextInput, ImageBackground,
    StyleSheet, Dimensions
} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function SoilMoistureScreen() {
    return (
        <View>
            

            
            <ImageBackground
                source={
                    require('../assets/SoilMoistureBackground.jpg')
                }
                resizeMode="stretch"
                style={styles.img}>
                <TouchableOpacity>
                    <Text style={styles.text}>
                        Scantime:{"\n"}
                        2022-07-24 08:48:11 {"\n"}{"\n"}
                        Soil Temperature:
                        24.2499938964843 {"\n"}{"\n"}
                        Soil Moisture: 29
                    </Text>
                </TouchableOpacity>
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