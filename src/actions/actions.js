
//add item action
export const ADD_FEATURE = "ADD-FEATURE";

export const addFeature = () => {
    console.log("add action creator called")
    return { type: ADD_FEATURE };
} 

//remove item action
export const REMOVE_FEATURE = "REMOVE-FEATURE";

export const removeFeature = () => {
    console.log("remove action creator called")
    return { type: REMOVE_FEATURE };
} 
