import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import FavoriteScreen from "../screens/FavoriteScreen"

interface elementState  {
   favoriteElement: undefined[],
}

const initialState: elementState = {
    favoriteElement: []
}

export const contentManagerSlice = createSlice({
    name: "isUserLiked",
    initialState,
    reducers: {
          addFavoriteElement: (state, action) => {
              let isElementExist = false
              for(let i = 0; i < state.favoriteElement.length; i++) {
                 if (action.payload["item"].id == state.favoriteElement[i]["item"].id) {
                    isElementExist = true
                 }
              }
              if (!isElementExist) {
                state.favoriteElement.push(action.payload)
              }         
          },
          deleteFavoriteElement: (state, action) => {   
              let isElementLiked = false
              let count = -1
              for(let i = 0; i < state.favoriteElement.length; i++ ) {
                 count++
                 if (state.favoriteElement[i]["item"].id == action.payload) {
                    state.favoriteElement.splice(count, 1)
                 }
              }
           }
        }   
})

export const { addFavoriteElement, deleteFavoriteElement } = contentManagerSlice.actions


export default contentManagerSlice.reducer