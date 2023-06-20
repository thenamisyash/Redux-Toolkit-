import { configureStore } from "@reduxjs/toolkit";

import userslice from "./slice/userslice";

const store = configureStore({
    reducer: {
        items: userslice
    }
})
export default store