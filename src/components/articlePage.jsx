import React from "react";
import PropTypes from "prop-types";
import { getArticlesByIds } from "../store/articles";
import { useSelector } from "react-redux";
import { Box, Typography, Link, LinearProgress } from "@mui/material";

const ArticlePage = ({ match }) => {
    console.log(match.params.articleId);
    const articleId = match.params.articleId;
    const ArticleById = useSelector(getArticlesByIds(articleId));

    if (!ArticleById) return <LinearProgress sx={{ mt: 6 }} color="info" />;
    return (
        <Box
            elevation={3}
            sx={{
                width: 70 + "%",
                mx: "auto",
                mt: 5
            }}
        >
            <Typography
                sx={{ mt: 3 }}
                variant="h2"
                gutterBottom
                component="div"
            >
                {ArticleById.title}
            </Typography>
            <Typography sx={{ my: 5 }} variant="body1" gutterBottom>
                {ArticleById.content}
            </Typography>
            <Link href={ArticleById.link}>{ArticleById.link}</Link>
        </Box>
    );
};
ArticlePage.propTypes = {
    match: PropTypes.object,
    title: PropTypes.string,
    content: PropTypes.string,
    link: PropTypes.string
};

export default ArticlePage;
