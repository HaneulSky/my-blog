import React, { useEffect } from "react";
import Article from "./article";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import {
    getArticles,
    getArticlesLoadingStatus,
    loadArticlesList
} from "../store/articles";

const ArticlesListPage = () => {
    const dispatch = useDispatch();
    const articles = useSelector(getArticles());
    const isLoading = useSelector(getArticlesLoadingStatus());

    useEffect(() => {
        dispatch(loadArticlesList());
    }, []);
    console.log(articles);

    if (isLoading) return "Loading";

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
                justifyContent: "space-around"
            }}
        >
            {" "}
            {articles
                ? articles.map((article) => (
                      <Article
                          key={article._id}
                          {...article}
                          articles={articles}
                      />
                  ))
                : "Loading..."}
        </Box>
    );
};

export default ArticlesListPage;
