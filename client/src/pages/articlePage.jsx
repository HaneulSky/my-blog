import React from "react";
import { getArticlesByIds } from "../../store/articles";
import { useSelector } from "react-redux";
import { Box, Typography, LinearProgress, Button } from "@mui/material";
import PropTypes from "prop-types";
import { useHistory } from "react-router";

const ArticlePage = ({ articleId }) => {
    const ArticleById = useSelector(getArticlesByIds(articleId));
    console.log(articleId, ArticleById);

    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };
    const history = useHistory();

    if (ArticleById) {
        return (
            <Box
                elevation={3}
                sx={{
                    width: 70 + "%",
                    mx: "auto",
                    mt: 5
                }}
            >
                <Button variant="contained" onClick={handleClick}>
                    Редактировать
                </Button>

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
                <Button
                    style={{ textDecoration: "none", color: "inherit" }}
                    href={ArticleById.link}
                    variant="outlined"
                >
                    Источник
                </Button>
            </Box>
        );
    } else {
        return <LinearProgress sx={{ mt: 6 }} color="info" />;
    }
};

ArticlePage.propTypes = {
    articleId: PropTypes.string
};

export default ArticlePage;
