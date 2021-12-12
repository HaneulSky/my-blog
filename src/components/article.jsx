import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { blue } from "@mui/material/colors";

const backColor = blue[50];

const Article = ({ title, content }) => {
    const cutContent = content ? content.slice(0, 58) + "..." : "Loading...";
    if (content) {
        return (
            <Card
                sx={{
                    maxWidth: 345,
                    bgcolor: backColor
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
                    <Button size="small" color="primary">
                        Открыть
                    </Button>
                </CardActions>
            </Card>
        );
    } else return null;
};

Article.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
};

export default Article;
