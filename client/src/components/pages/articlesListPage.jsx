import React, { useEffect } from "react";
import Article from "../ui/article";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import {
    getArticles,
    getArticlesLoadingStatus,
    loadArticlesList
} from "../../store/articles";
import { LinearProgress } from "@mui/material";

const ArticlesListPage = () => {
    const dispatch = useDispatch();
    const articles = useSelector(getArticles());
    const isLoading = useSelector(getArticlesLoadingStatus());

    useEffect(() => {
        dispatch(loadArticlesList());
    }, [isLoading]);
    console.log(articles);

    if (isLoading) return <LinearProgress sx={{ mt: 6 }} color="info" />;

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="baseline"
            sx={{ mx: 3, my: 3 }}
        >
            {articles.map((article) => (
                <Grid key={article._id} item xs>
                    <Article key={article._id} {...article} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ArticlesListPage;

/* sx={{
                display: "flex",
                flexWrap: "wrap",
                p: 1,
                m: 1,
                bgcolor: "background.paper",
                justifyContent: "between-space"
            }} */
