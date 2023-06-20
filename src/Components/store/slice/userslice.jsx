import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        addItem(state, action) {
            state.push(action.payload)
            // console.log(action.payload)
        },
        removeItem(state, action) {
            state.splice(action.payload, 1)
        },
        clearAllItems(state, action) {
            return []
        }
    },
});

export default userSlice.reducer
export const { addItem, removeItem, clearAllItems } = userSlice.actions
