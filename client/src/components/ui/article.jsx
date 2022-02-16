import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getArticlesByIds } from "../../store/articles";

const backColor = blue[50];

const Article = ({ _id, title, content, link }) => {
    const ArticlesById = useSelector(getArticlesByIds(_id));
    const cutContent = ArticlesById.content
        ? ArticlesById.content.slice(0, 58) + "..."
        : "Loading...";

    return (
        <Card
            sx={{
                width: 345,
                height: 220,
                bgcolor: backColor,
                marginBottom: 5
            }}
        >
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {ArticlesById.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {cutContent}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link
                    size="small"
                    color="primary"
                    to={`/articles/${ArticlesById._id}`}
                >
                    Открыть
                </Link>
            </CardActions>
        </Card>
    );
};

Article.propTypes = {
    _id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    content: PropTypes.string,
    link: PropTypes.string
};

export default Article;
