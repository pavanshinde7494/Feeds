import { Text, View } from "react-native";


// Imporing Screens

import HomeScreen from "../screens/HomeScreen";
import WeatherScreen from "../screens/WeatherScreen";
import DamScreen from "../screens/DamScreen";
import SoilMoistureSreen from '../screens/SoilMoistureScreen';
import TestScreen from '../screens/TestScreen';
import Crop from '../screens/CropScreen';
import Signup from "../screens/Signup";
import Login from "../screens/Login";

// Navigation Options

import { createStackNavigator, HeaderStyleInterpolators } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


// Importing Utilities
import color from "../constants/color";


const HomeScreenNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'red'
                }
            }}
        >
            <Stack.Screen
                name="HomeScreenNavigator"
                component={HomeScreen}
            />
        </Stack.Navigator>
    )
}

const WeatherScreenNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'purple'
                }
            }}
        >
            <Stack.Screen
                name="WeatherScreenNavigator"
                component={WeatherScreen}
            />
        </Stack.Navigator>
    )
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="HomeScreenNavigator"

            screenOptions={{
                drawerActiveTintColor: 'white',
                drawerActiveBackgroundColor: color.secondary,
                drawerInactiveTintColor: 'white',
                drawerStyle: {
                    backgroundColor: color.drawback
                },
                headerStyle: {
                    backgroundColor: color.primary,
                },
                headerTitleStyle: {
                    fontFamily: 'newrocker'
                },
                headerTintColor: 'white'

            }}
        >
            <Drawer.Screen
                name="Feeds"
                component={HomeScreen}
            />
            <Drawer.Screen
                name="Weather"
                component={WeatherScreen}
            />
            <Drawer.Screen
                name="DamScreen"
                component={DamScreen}
            />
            <Drawer.Screen
                name="SoilMoisture"
                component={SoilMoistureSreen}
            />
            <Drawer.Screen
                name="Crops"
                component={Crop}
            />
        </Drawer.Navigator>
    )
}

const Navigator = ()=>{
    return(
    <Stack.Navigator
        screenOptions={{
            headerShown : false,
            headerStyle: {
                backgroundColor: color.secondary,
            },
            headerTitleStyle: {
                fontFamily: 'newrocker'
            },
            headerTintColor: 'white'
        }}
        initialRouteName='Login'
    >
        <Stack.Screen
            name='Login'
            component={Login}
        />
        <Stack.Screen
            name='SignUp'
            component={Signup}
        />
        
        <Stack.Screen
            name='DrawerNavigator'
            component={DrawerNavigator}
        />
    </Stack.Navigator>
    )
}




export default Navigator