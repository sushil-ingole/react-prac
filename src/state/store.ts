import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const store = configureStore({
    reducer: {
        counterReducer: reducer
    }
});

export default store;