import React from "react";
import ArticleProvider, { useArticle } from "../hooks/useArticle";
import Article from "./article";
import Box from "@mui/material/Box";

const Articles = () => {
    const { articles } = useArticle();
    console.log(articles);

    return (
        <ArticleProvider>
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
                          <Article key={article._id} {...article} />
                      ))
                    : "Loading..."}
            </Box>
        </ArticleProvider>
    );
};

export default Articles;
