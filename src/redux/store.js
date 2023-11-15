import { createStore } from "redux";
import taskReducer from "./reducers/taskReducer";

const store = createStore(
    taskReducer
);

export default store;