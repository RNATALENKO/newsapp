import React from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';

// importing from same directory
import Card from '../Components/Card'






 const NewsListScreen = (props)=>{


    //show the auto navigation prop
    console.log(props);


  

    return (

        <View style={{padding:10}}>
            <Card navigation={props.navigation}></Card> 
        </View>
        
    )
}

const style = StyleSheet.create({


});


export default NewsListScreen;