import { createSlice } from "@reduxjs/toolkit";
import articleService from "../services/articles.service";

const articlesSlice = createSlice({
    name: "articles",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        articlesRequested: (state) => {
            state.isLoading = true;
        },
        articlesReceved: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        articlesRequestFiled: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { actions, reducer: articlesReducer } = articlesSlice;
const { articlesReceved, articlesRequestFiled, articlesRequested } = actions;

function isOutDated(date) {
    if (Date.now() - date > 10 * 60 * 1000) {
        return true;
    }
    return false;
}

export const loadArticlesList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().articles;
    if (isOutDated(lastFetch)) {
        dispatch(articlesRequested());
        try {
            const { content } = await articleService.get();
            dispatch(articlesReceved(content));
        } catch (error) {
            dispatch(articlesRequestFiled(error.message));
        }
    }
};

export const getArticles = () => (state) => state.articles.entities;
export const getArticlesLoadingStatus = () => (state) =>
    state.articles.isLoading;
export const getArticlesByIds = (artId) => (state) => {
    return state.articles.entities.find((a) => a._id === artId);
};

export default articlesReducer;
