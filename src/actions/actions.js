
//add item action
export const ADD_FEATURE = "ADD-FEATURE";

export const addFeature = (id) => {
    console.log("add action creator called")
    return { type: ADD_FEATURE, payload: id };
}

//remove item action
export const REMOVE_FEATURE = "REMOVE-FEATURE";

export const removeFeature = (id) => {
    console.log("remove action creator called")
    return { type: REMOVE_FEATURE, payload: id };
}

//new price action
