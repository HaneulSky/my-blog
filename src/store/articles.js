import { createAction, createSlice } from "@reduxjs/toolkit";
import articleService from "../services/articles.service";
import { nanoid } from "nanoid";
import { getCurrentUserId } from "./user";

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
        },
        articleCreated: (state, action) => {
            state.entities.push(action.payload);
        }
    }
});

const { actions, reducer: articlesReducer } = articlesSlice;
const {
    articlesReceved,
    articlesRequestFiled,
    articlesRequested,
    articleCreated
} = actions;

const articleCreateRequested = createAction("articles/articleCreateRequested");
const createArticleFailed = createAction("articles/createArticleFailed");

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

export const createNewArticle = (payload) => async (dispatch, getState) => {
    dispatch(articleCreateRequested());
    try {
        const { content } = await articleService.create({
            ...payload,
            _id: nanoid(),
            userId: getCurrentUserId()(getState())
        });
        dispatch(articleCreated(content));
    } catch (error) {
        dispatch(createArticleFailed(error.message));
    }
};

export const getArticles = () => (state) => state.articles.entities;
export const getArticlesLoadingStatus = () => (state) =>
    state.articles.isLoading;
export const getArticlesByIds = (artId) => (state) => {
    if (state.articles.entities) {
        return state.articles.entities.find(
            (a) => String(a._id) === String(artId)
        );
    } else return null;
};

export default articlesReducer;
