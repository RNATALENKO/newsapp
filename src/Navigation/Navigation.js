import React from 'react';


import {MaterialIcons} from '@expo/vector-icons';


import AboutScreen from '../Screens/AboutScreen';
import DetailScreen from '../Screens/DetailScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
import NewsListScreen from '../Screens/NewsListScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const StackNav = () =>{
  return(
    <Stack.Navigator>
                    <Stack.Screen name="News List" component={NewsListScreen} options={{title: "Front Page"}}></Stack.Screen>
                    <Stack.Screen name="Details" component={DetailScreen} options={{title: "Full Details"}}></Stack.Screen>
                    <Stack.Screen name="Favorite" component={FavoriteScreen} options={{title: "My Favorites"}}></Stack.Screen>
                    <Stack.Screen name="About" component={AboutScreen} options={{title: "About Us"}}></Stack.Screen>
    </Stack.Navigator>
  )
}


const FavoritesNav = ()=>{

    return(

        <Stack.Navigator>
            <Stack.Screen name="favorites" component={FavoriteScreen}></Stack.Screen>
        </Stack.Navigator>

    )
}


//use screenoptions to set icons
const Navigation =()=>{

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route})=>({
                tabBarIcon:()=>{
                    let iconName;
                    if(route.name=="Home"){ //name of the screen
                        iconName = "home" //from vector icon directory
                    } 
                    else if(route.name=="Favorites"){
                        iconName= "favorite" //icon we can get from expo
                    }
                    
                    return <MaterialIcons name={iconName} size={24}></MaterialIcons>;
                }
            })}
            >
                  <Tab.Screen name="Home" component={StackNav}></Tab.Screen>
                  <Tab.Screen name= "Favorites" component={FavoritesNav}></Tab.Screen>    
            </Tab.Navigator>
        </NavigationContainer>
    )
  }

  export default Navigation; 