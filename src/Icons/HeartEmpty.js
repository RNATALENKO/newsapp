import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import {View} from 'react-native';



 const HeartEmpty = ()=>{

    return (
        <View>
            <FontAwesome5 name="heart" size={18} color="black" />
        </View>
    )
}

export default HeartEmpty;