import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { blue } from "@mui/material/colors";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
import ArticlePage from "./articlePage";

const backColor = blue[50];

const Article = ({ _id, title, content, link, articles }) => {
    const cutContent = content ? content.slice(0, 58) + "..." : "Loading...";
    // const goToArticlePage = () => {
    //     console.log("id", _id, "title", title);
    //     return <ArticlePage title={title} link={link} content={content} />;
    // };

    if (content) {
        return (
            <Card
                sx={{
                    maxWidth: 345,
                    bgcolor: backColor,
                    marginBottom: 5
                }}
            >
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {cutContent}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => {
                            if (!_id) {
                                console.log("что-то не так");
                            } else {
                                return (
                                    <ArticlePage
                                        title={title}
                                        link={link}
                                        content={content}
                                    />
                                );
                            }
                        }}
                    >
                        Открыть
                    </Button>
                </CardActions>
            </Card>
        );
    } else return null;
};

Article.propTypes = {
    _id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    link: PropTypes.string,
    articles: PropTypes.array
};

export default Article;
