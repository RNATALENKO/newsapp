import { ADD_FAVORITES, GET_ARTICLES } from "../Actions/Actions";


//state is what gets returned
let initialState = {

    articleData: [], //will store objects of news data
    favoritesData: [], //will store news that we have as favorites, will store objects of articles
}

export const newsReducer = (state = initialState, action)=>{

        switch (action.type) {
            case GET_ARTICLES:
                return {
                    ...state,
                    articleData: action.payload, //setting the action's {article data},
                }

            case ADD_FAVORITES:

                //find index of matched item
                const index = state.favoritesData.findIndex(element=>element.url === action.payload);
                console.log(index);

                //does exist, remove item
                if(index >= 0){

                    const favoritesDataCopy = [...state.favoritesData];
                    
                    //for some reason using this statement to override in object failed {favoritesData: favoritesDataCopy.splice(index, 1)}
                    //but also you cant rewrite to the same one, favoritesDataCopy = favoritesDataCopy.Splice(index,1);

                    favoritesDataCopy.splice(index,1);

            
                    return{
                        ...state,
                        favoritesData: favoritesDataCopy
                    }

                } //add item
                else{

                    const article = state.articleData.articles.find(element=>element.url === action.payload);

                    return{
                        ...state,
                        favoritesData: state.favoritesData.concat(article)
                    }

                }
            }
            
        return state; 
}










  /*
                //get index of the matched element
               const index = state.favoritesData.findIndex(element=> element.url === action.payload);

               //if item exists, remove
               if(index >=0 ){

                    //remove the article
                    const favoritesDataCopy = [...state.favoritesData];
                    favoritesDataCopy.splice(index, 1); //index of item to remove, number of items to remove

                    //return updated state
                    return{
                        ...state,
                        favoritesData:favoritesDataCopy
                    }

               }
               //if item doesn't exist, add it
               else{
                    
                    //returns the array of the item
                    const article = state.articleData.articles.find(element => element.url === action.payload);
                    return {
                        ...state,
                        favoritesData: state.favoritesData.concat(article)
                    }

               }

*/ 


                //my way of doing it, this logic was wrong though

                /*
                console.log("from reducer");
                
                const favoritesDataCopy = [...state.favoritesData];

               
                //find index in favorite data if it exists i.e. url in array matches payload url
                let index = state.favoritesData.findIndex(element => element.url == action.payload);

                //retrieve the matching article from article data
                let article = state.articleData.articles.find(element => element.url == action.payload);
                    
                //if not in favorites, add to favorites
                if(index == -1){
                    
                    //add the element
                    favoritesDataCopy.push(article);   
                    console.log(favoritesDataCopy);
                    
                    //return updated state
                    return {
                            ...state,
                           favoritesData: favoritesDataCopy,
                        }    
                }

                //otherwise remove it
                else{

                    //remove the element 
                    //favoritesDataCopy = favoritesDataCopy.filter(element => element.url == action.payload)
                    console.log(favoritesDataCopy);

                    //return updated state
                    return {
                        ...state,
                        favoritesData:favoritesDataCopy,
                    }
                   
                }

                
            }

            */