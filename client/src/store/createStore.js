import articlesReducer from "./articles";
import userReducer from "./user";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    user: userReducer,
    articles: articlesReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
