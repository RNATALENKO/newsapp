

//action names
export const GET_ARTICLES = "GET_ARTICLES"; //fetches article data
export const ADD_FAVORITES = "ADD_FAVORITES"; //adds to favorites


//actions return an object with payload and type



/* non aysnc
export const getArticles = ()=>{
    return{
        type: "GET_ARTICLES",
        payload:{
            id:1, 
            title:"article title",
            description:'sports news is on'
        }
    }
}

*/

//async call to server
//async await makes sure our request is completed before we call the dispatch function
export const getArticles= ()=>{
    
    //return dispatch method
    return async dispatch => {

        /* make http requests to the database or api */
        //logic to fetch data
       const results = await fetch("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=MYAPIKEY");

       //convert result from request to JSON format
       //this is the data that gets passed to payload, i.e. the array of objects
       const resultData = await results.json();
    
       //execute the dispatch
        dispatch({
            type:"GET_ARTICLES",
            payload: resultData
        })
    }
}




//usually we use Id to find the data we want to add, but since there's no id in the articles set
//we will use the url 
export const addFavorite = (url)=> {
    return {
        type:"ADD_FAVORITES",
        payload:url
    }
}