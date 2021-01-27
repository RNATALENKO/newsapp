import { ADD_FAVORITES, GET_ARTICLES } from "../Actions/Actions";



let initialState = {

    articleData: [], //will store objects of news data
    favoritesData: [], //will store news that we have as favorites, will store objects of articles
}

export const newsReducer = (state = initialState, action)=>{

        switch (action.type) {
            case GET_ARTICLES:
                return{
                    ...state,
                    articleData: action.payload, //setting the action's {article data},
                }

            case ADD_FAVORITES:
                console.log("test");
                const favoritesCopy = [...state.favoritesData];

                /*logic to add to favorites array if doesn't exist*/
                let index = state.favoritesData.findIndex( article=> {article.url == action.payload});

                if(index == -1){
                    
                    console.log(state.articleData);
                    //how to extract data from article data
                    
                    console.log(state.articleData.articles);

                    let article = state.articleData.articles.find()

                    

                   
                    
                    

                }
               
        }

        return state; 
}










 /*
                //logic if url exists then remove, if it doesn't add
                let index = state.favoritesData.findIndex((article)=>{article.url=== action.payload}) //checks if url payload exists in favorites array of article objects
                if(index >-1){

                    //remove from favorites, but make copy of state instead
                    favoritesCopy = favoritesData.filter( (item)=>{ item != action.payload});
                    return {
                        ...state,
                        favoritesData:favoritesCopy
                    }
                }

                else{
                    
                    //find the article based on the URL
                    const article = state.articleData.articles.find( (article)=> {article.url == action.paylaod})

                    //add it to the state array
                    return{
                        ...state.favorites, 
                        favoritesData: state.favoritesData.concat(article)
                    }

                }
                */