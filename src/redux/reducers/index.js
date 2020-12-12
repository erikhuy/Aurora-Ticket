import { combineReducers } from "redux";
import listNowPlayingReducer from "../../containers/GuestLayout/HomePage/modules/reducers";


//Create rootReducer to use in store. This manages CHILD REDUCERS in the project
const rootReducer = combineReducers({
    listNowPlayingReducer
});

export  default rootReducer;