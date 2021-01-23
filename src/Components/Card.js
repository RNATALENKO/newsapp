import React from 'react';

import {StyleSheet, Text, View, Image, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native';
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
                        uri:"https://images.unsplash.com/photo-1503453363464-743ee9ce1584?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                    }}>
                    </Image>
                </View>
                <View style={style.titlewrapper}>
                    <View style={style.titleinnerwrapper}>
                        <Text style={style.titletext}>title view</Text>
                    </View>
                    <View style={style.iconwrapper}>
                        <HeartEmpty style={style.icon}></HeartEmpty>
                    </View>
                </View>
                <View style={style.descriptionwrapper}>
                    <Text style={style.descriptiontext}>descriptionview</Text>
                </View>
            </View>
         </TouchableOpacity>
    );
}

const style = StyleSheet.create({

    cardcontainer:{
        marginBottom:10,
        borderWidth:.5,
        borderRadius:5,
        borderColor:"lightgrey",
        display:"flex",
        flexBasis:275
    },

    imagewrapper:{
        borderWidth:.5,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderBottomColor:"lightgrey",
        overflow:'hidden',
        flex:2,
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
        padding:10,
    },

    titletext:{
        fontSize:16,
    },

    iconwrapper:{
    },

    icon:{

        marginTop:10,

    },

    descriptionwrapper:{
        padding:5
    }
});

export default Card; 