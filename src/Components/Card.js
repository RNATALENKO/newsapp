import React from 'react';

import {StyleSheet, Text, View, Image, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native';
import {useDispatch, useSelector} from 'react-redux'; //import use dispatch allows to dispatch events
import {addFavorite} from '../Actions/Actions'; //import action we want to execute
import { FontAwesome } from '@expo/vector-icons'; 



const Card = (props) => {

    //if you get an error saying it's not an object, add curly braces, the export was not default
    let dispatch = useDispatch();

    const favoritesData = useSelector(state=>state.newsReducer.favoritesData);


    //return true or false if item exists in favorites, since props have the url passed down to this card
    //some returns true or false if it finds an element that passes condition
    const isFav =  useSelector(state=>state.newsReducer.favoritesData.some(element=>element.url === props.url));
    /*
    console.log(isFav);
    console.log(props.url);
    console.log("test");
    */
    

    //method to navigate to details page
    let toDetails = ()=>{
        props.navigation.navigate("Details");
    }

    //executes the add favorite dispatch
    let dispatchFav = ()=>{
        //dispatch the favorite method, since addfavorite takes url, use the props from the key
        dispatch(addFavorite(props.url));     
    }


    return (

        //on press, navigate to details screen, and pass params data to it
        //note: sends to global route object
        <TouchableOpacity onPress={()=>{props.navigation.navigate("Details", {
            paramUrl:props.url,
            isFavParam: isFav
        })}}>
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
                           <FontAwesome name={isFav ? 'heart' : 'heart-o'} style={style.icon} size={19} onPress={dispatchFav}></FontAwesome> 
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
        marginTop:5,
    },


    descriptionwrapper:{
        padding:10,
    },

});

export default Card; 