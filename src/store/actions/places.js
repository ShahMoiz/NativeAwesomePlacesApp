import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from './actionTypes'

export const addPlace = placeName => {
   return{
    type: ADD_PLACE,
    placeName: placeName
   }
}

export const deletePlace = () => {
    return {
        type: DELETE_PLACE
    }
}

export const selectPlace = id => {
    return {
        type: SELECT_PLACE
        id: id
    }
}

export const deselectPlace = () => {
    return {
        type: DESELECT_PLACE
    }
}