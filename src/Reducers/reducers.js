import { GET_ARTICLES } from "../Actions/Actions";


let initialState = {

    articleData: [], //will store objects of news data
    favorites: [], //will store news that we have as favorites

}

const newsReducer = (state = initialState, action)=>{

        switch (action.type) {
            case GET_ARTICLES:
                return{
                    ...state,
                    articleData: action.payload, //setting the action's {article data},
                }
                break;
        
            default:
                break;
        }




        return state; 
}


export default newsReducer; 
