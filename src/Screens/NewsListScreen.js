import { useNavigation } from '@react-navigation/native';
import React, {useEffect} from 'react';

import {StyleSheet, View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';

//used to trigger redux actions
import {useSelector, useDispatch} from 'react-redux';

//imports everything from action.js page
import * as newsAction from '../Actions/Actions.js';

// importing from same directory
import Card from '../Components/Card'




 const NewsListScreen = (props)=>{

    const navigation = useNavigation();

    /*  dispatches an action to fetch articles and makes it available to store    */
    const dispatch = useDispatch();//get dispatch object

    //use effect function triggers when component is rendered
    useEffect(
      //function triggered
        ()=>{
            //execute dispatch action
            dispatch(newsAction.getArticles());
       }
    , [dispatch]); //this makes sure useEffect is not called on every render. We add dispatch as a dependency, 
    //so we run useEffect only when we initialize dispatch.






    /* get the available data from the store using useSelector    */
    const articleSet = useSelector(state=>state.newsReducer.articleData);





   //the renderItem only returns a card if the description or title is not null, thus skipping a card
    return (

            <FlatList style={{padding:17}} data={articleSet.articles} keyExtractor={item=>item.url} 
                renderItem={

                    ({item})=>{

                            if(item.description!=null && item.urlToImage!=null){
                                return <Card url={item.url} navigation={navigation} title={item.title} 
                                description={item.description} imageUrl={item.urlToImage}></Card>
                            }
                    }             
            }></FlatList>
            
        
    );

}

export default NewsListScreen;