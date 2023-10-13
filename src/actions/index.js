// {
//     type: 'INCREASE_COUNT',
// }
// {
//     type: 'DECREASE_COUNT'
// }


export const ADD_MOVIES = 'ADD_MOVIES';


//Action creators
export function ADD_MOVIES(movies){
return{
    type: ADD_MOVIES,
    movies
}
}
