import { createSlice } from "@reduxjs/toolkit";
import tuits from "../data/tuits.json";

// Object that represents currently logged in user
const currentUser = {
    "userName": "MaceeQi",
    "handle": "@maceeqi",
    "image": "profile-photo.png",
};

// Default values and copy over fields from current user
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: "tuits",
    initialState: tuits,
    reducers: {
        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }
});
export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;