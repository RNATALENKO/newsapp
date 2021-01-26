import React from 'react';

import {StyleSheet, Text, View, Image, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import HeartEmpty from '../Icons/HeartEmpty';


const Card = (props) => {


    //method to navigate to details page
    let toDetails = ()=>{
        props.navigation.navigate("Details");
    }


    return (

        //on press of the opacity of the card, go to details
        <TouchableOpacity onPress={toDetails}>
            <View style={style.cardcontainer} >
                <View style={style.imagewrapper} >
                    <Image style={style.image} source={{
                        uri:props.imageUrl}}>
                    </Image>
                </View>
                <View style={style.titlewrapper}>
                    <View style={style.titleinnerwrapper}>
                        <Text style={style.titletext}>
                            {props.title.length > 25 ? props.title.slice(0,25) + "...": props.title} 
                            </Text>
                    </View>
                    <View style={style.iconwrapper}>
                        <HeartEmpty style={style.icon}></HeartEmpty>
                    </View>
                </View>
                <View style={style.descriptionwrapper}>
                    <Text style={style.descriptiontext}>{props.description.length > 75 ? props.description.slice(0,75) +"..." : props.description} </Text>
                </View>
            </View>
         </TouchableOpacity>
    );
}

const style = StyleSheet.create({

    cardcontainer:{
        marginBottom:17,
        borderWidth:.5,
        borderRadius:5,
        borderColor:"lightgrey",
        display:"flex",
        flexBasis:275,
        backgroundColor:"white"
    },

    imagewrapper:{
        borderWidth:.5,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderBottomColor:"lightgrey",
        overflow:'hidden',
        flex:2
    },

    image:{
        height:"100%",
        width:"100%",

    },

    titlewrapper:{

        display:"flex",
        borderWidth:.5,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderBottomColor:"lightgrey",
        flexDirection:'row',
    },

    titleinnerwrapper:{
        flex:1.5,
        padding:15,
    },

    titletext:{
        fontSize:16,
        fontWeight:700
    },

    iconwrapper:{
        padding:15
    },

    icon:{
        
        marginTop:10,
    },

    descriptionwrapper:{
        padding:10,
    },

    descriptiontext:{
        
    }
});

export default Card; 