import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import bookingMovieSlice from "./slices/bookingMovieSlice";
import modalMovie from "./slices/modalMovie";


const store = configureStore({
  reducer: {
    modalMovie: modalMovie,
    user: userReducer,
    bookingMovieSlice: bookingMovieSlice,
  },
});

export default store;