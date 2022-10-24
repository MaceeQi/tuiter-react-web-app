import { createSlice } from "@reduxjs/toolkit";     // import slice
import whoArray from "../data/who.json";            // import data from JSON file

// Create the slice - name the reducer, initialize reducer's state
const whoSlice = createSlice({
    name: "who",
    initialState: whoArray
});
export default whoSlice.reducer;