import React from 'react';
import {StyleSheet, Text, View} from 'react-native';



const Header = ()=>{

    return(
        <View style={style.header}>
            <Text style={style.text}>NewsApp</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header:{
        padding:25,
        backgroundColor:"lightblue",
        textAlign: "Center",

    },

    text:{
        color:"white",
        
    }
})

export default Header; 