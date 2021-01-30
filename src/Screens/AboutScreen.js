import React from 'react';
import {StyleSheet, View, Text} from 'react-native';




 const AboutScreen = (props)=>{

    console.log(props);

    return (
        <View style={{margin:"auto", display:"flex"}}>
            <Text style={{marginLeft:5}}>About Us</Text>
            <Text style={{flex:0, color:"#2c74e8", marginRight:10}} onPress={()=> props.navigation.navigate("News List")}> Read Front Page</Text>
            <Text style={{flex:0, color:"#2c74e8"}} onPress={()=> props.navigation.navigate("Favorite")}> My Favorites </Text>
        </View>
    )
}

export default AboutScreen;