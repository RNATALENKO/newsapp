import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Card from '../Components/Card';



//in the favorites screen we will pull from the stores state of favorites articles
//REMINDER: if using curly braces in arrow function must include return keyword
//{item} allows you to extract a particular property containing the object you want, i.e. an inner object

import {useSelector} from 'react-redux'; //be able to fetch data from state of store




 const FavoriteScreen = ()=>{


    //get the store's global state, access reducer, get the favorites data
    const favoritesData = useSelector(state=>state.newsReducer.favoritesData);


    console.log("from favorites screen: ");
    console.log(favoritesData);

    return (

        <FlatList style={{padding:17}} data={favoritesData} keyExtractor={item=>item.url} renderItem={

            ({item})=>{

        
                console.log(item);
                
                return(

                    <Card url={item.url} title={item.title} description={item.description} imageUrl={item.urlToImage}></Card>

                )
            }
        }>

        </FlatList>
        

    )
}

export default FavoriteScreen;
