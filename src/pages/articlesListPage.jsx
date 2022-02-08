import React, { useEffect } from "react";
import Article from "../components/article";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import {
    getArticles,
    getArticlesLoadingStatus,
    loadArticlesList
} from "../store/articles";
import { LinearProgress } from "@mui/material";

const ArticlesListPage = () => {
    const dispatch = useDispatch();
    const articles = useSelector(getArticles());
    const isLoading = useSelector(getArticlesLoadingStatus());

    useEffect(() => {
        dispatch(loadArticlesList());
    }, []);
    console.log(articles);

    if (isLoading) return <LinearProgress sx={{ mt: 6 }} color="info" />;

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
            {articles.map((article) => (
                <Article key={article._id} {...article} />
            ))}
        </Box>
    );
};

export default ArticlesListPage;
