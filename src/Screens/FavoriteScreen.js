import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {Card} from '../Components/Card';


//in the favorites screen we will pull from the stores state of favorites articles

import {useSelector} from 'react-redux'; //be able to fetch data from state of store



 const FavoriteScreen = ()=>{


    //get the store's global state, access reducer, get the favorites data
    const favoritesData = useSelector(state=>{state.newsReducer.favoritesData})


    return (
        
        //use flatlist to display the data
        <FlatList data={favoritesData} keyExtractor={(item)=>{item.url}} renderItem={
            ({item}) => {
                if(item.description!=null && item.urlToImage!=null){
                    return <Card url={item.url} navigation={navigation} title={item.title} 
                    description={item.description} imageUrl={item.urlToImage}></Card>
                }
            }
        }></FlatList>
    )
}

export default FavoriteScreen;