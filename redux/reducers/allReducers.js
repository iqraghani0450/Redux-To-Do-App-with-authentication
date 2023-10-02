import { combineReducers } from "redux";
import Post from "./Post";
import Username from "./Username";


const allReducers = combineReducers({
    posts: Post,
    credentials: Username,
})

export default allReducers;



