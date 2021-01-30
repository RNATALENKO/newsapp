import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';






 const DetailScreen = (props)=>{    

    //access the global route params and get the url
    const route = useRoute();
    const {paramUrl, isFavParam} = route.params;


    //find the article in global store state based on match with url 
    const article = useSelector(state=>state.newsReducer.articleData.articles.find(element=>element.url === paramUrl));
  

    console.log(props);
    
    return (
        
        <View> 
                <View>
                    <Text style={style.title}>{article.title}</Text>
                    <ImageBackground style={style.background} source={{uri:article.urlToImage}}>
                        <View style={style.authorWrapper}>
                            <Text style={style.author}>Author: {article.author}</Text>
                            <FontAwesome name={isFavParam ? 'heart' : 'heart-o'} size={17} color="white"></FontAwesome> 
                        </View>
                    </ImageBackground>
                </View>
                <ScrollView style={style.descriptionWrapper}>
                    <Text>{article.description}</Text>
                </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    title:{
        fontSize:19,
        padding:20,
        backgroundColor:"white",
        fontWeight:"600",
        
    },

    background:{
        height:200
    },

    authorWrapper: {
        display:"flex",
        flexDirection:"row",
        backgroundColor:"orange",
        padding:5,
        paddingRight:7,
        justifyContent:"flex-end",
    },

    author:{
        color:"white",
        marginRight:10,
        flex:1
    },

    descriptionWrapper:{
        padding:20,
        fontSize:16,
    },

    description:{

    }
})

export default DetailScreen;