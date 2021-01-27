import React from 'react';

import {StyleSheet, Text, View, Image, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import HeartEmpty from '../Icons/HeartEmpty';
import {useDispatch, useSelector} from 'react-redux'; //import use dispatch allows to dispatch events
import {addFavorite} from '../Actions/Actions'; //import action we want to execute



const Card = (props) => {

    //if you get an error saying it's not an object, add curly braces, the export was not default
    let dispatch = useDispatch();

    const favoritesData = useSelector(state=>state.newsReducer.favoritesData);
    

    //method to navigate to details page
    let toDetails = ()=>{
        props.navigation.navigate("Details");
    }

    //executes the add favorite dispatch
    let dispatchFav = ()=>{

        //dispatch the favorite method, since addfavorite takes url, use the props from the key
        dispatch(addFavorite(props.url));  

        console.log(favoritesData); //log the previous data
        
    }


    return (

        //on press of the opacity of the card, go to details
    
        <TouchableOpacity onPress={()=>{props.navigation.navigate("Details"); alert("card pressed in component")}}>
            <View style={style.cardcontainer} onPress={console.log("card pressed")}>
                <View style={style.imagewrapper}>
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
                        <TouchableOpacity onPress={dispatchFav} >
                            <HeartEmpty style={style.icon}></HeartEmpty>
                        </TouchableOpacity>
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
        fontWeight:"700",
    },

    iconwrapper:{
        padding:15,
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