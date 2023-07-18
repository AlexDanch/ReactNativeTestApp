import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface elementId  {
    likeId: undefined[],
 }
 
const initialState: elementId = {
    likedId: []
}

export const likedSlice = createSlice({
    name: "likes",
    initialState,
    reducers: {
          addLikedId: (state, action) => {
            if (!state.likedId.includes(action.payload)) {
                state.likedId.push(action.payload)
            }    
          },
          deleteLikedId: (state, action) => {
             let count = -1;   
             for(let i = 0; i < state.likedId.length; i++) {
                if (state.likedId[i] == action.payload) {
                    state.likedId.splice(i, 1)
                 }
             }  
        }
    }       
})

export const { addLikedId, deleteLikedId } = likedSlice.actions

export default likedSlice.reducer