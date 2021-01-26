import React from 'react';


import {MaterialIcons} from '@expo/vector-icons';



import DetailScreen from '../Screens/DetailScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
import NewsListScreen from '../Screens/NewsListScreen';
import AboutScreen from '../Screens/AboutScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';


import { NavigationContainer, useNavigation } from "@react-navigation/native";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


//method that returns a pressable method that opens the drawer
const HambergerMenu = ()=>{
    const navigation = useNavigation(); //provides access to all navigation props

    //open drawer when hamberger menu pressed
    return (
        <MaterialIcons name="menu" size={30} onPress={()=>{navigation.openDrawer()}} style={{marginLeft:15}}></MaterialIcons>
    )
}

//method that returns property for headerTintColor of screenOptions
const setTint = ()=>{

    if(10 < 20){
        return 'eeeeee'
    }
    else{
        return '#3234a8';
    }
}


//becareful with returning like this {HambergerMenu}, {<HambergerMenu}, these did not work, because it was incorrect syntax for JSX
//you can also call it like this headerLeft:() => Hambergermenu() (returns jsx)
const StackNav = () =>{
  return(
    <Stack.Navigator>
                    <Stack.Screen name="News List" component={NewsListScreen} options={{title: "Front Page", headerLeft:HambergerMenu}}></Stack.Screen>
                    <Stack.Screen name="Details" component={DetailScreen} options={{title: "Full Details"}}></Stack.Screen>
                    <Stack.Screen name="Favorite" component={FavoriteScreen} options={{title: "My Favorites"}}></Stack.Screen>
                    <Stack.Screen name="About" component={AboutScreen} options={{title: "About Us"}}></Stack.Screen>
    </Stack.Navigator>
  )
}

const FavoritesNav = ()=>{

    return(
        <Stack.Navigator screenOptions={{headerLeft:HambergerMenu}}>
            <Stack.Screen name="favorites" component={FavoriteScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}


//use screenoptions to set icons
const TabsNav =()=>{

    return (
        
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
    )
  }


  const AboutNav = ()=>{
      return(
        <Stack.Navigator screenOptions={{headerLeft:HambergerMenu}}>
            <Stack.Screen name="About" component={AboutScreen}></Stack.Screen>
        </Stack.Navigator> 
      )
  }



  //drawer takes in the tabs nav for it's home component
  const Navigation = ()=>{


    return(

        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={TabsNav}></Drawer.Screen>
                <Drawer.Screen name="About" component={AboutNav}></Drawer.Screen>
            </Drawer.Navigator>
               
        </NavigationContainer>
    )
  }

  export default Navigation; 