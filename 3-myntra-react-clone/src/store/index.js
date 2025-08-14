
import {configureStore} from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./BagSlice";


const myntrastore=configureStore({
  reducer:{
    items:itemSlice.reducer,
    fetchStatus:fetchStatusSlice.reducer,
    bag:bagSlice.reducer
  }
});

export default myntrastore;