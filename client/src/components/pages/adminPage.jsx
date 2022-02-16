import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserData, loadUser, getIsLoggedIn } from "../../store/user";
import {
    getArticles,
    getArticlesLoadingStatus,
    loadArticlesList,
    removeArticle
} from "../../store/articles";
import { LinearProgress, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const backColor = blue[50];

const AdminPage = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const currentUser = useSelector(getCurrentUserData());
    const articles = useSelector(getArticles());
    const isLoading = useSelector(getArticlesLoadingStatus());

    useEffect(() => {
        dispatch(loadUser());
        dispatch(loadArticlesList());
    }, []);

    const userArticles =
        articles && isLoggedIn
            ? articles.filter((a) => a.userId === currentUser._id)
            : "Loading";

    console.log(userArticles);

    const handleRemoveArticle = (id) => {
        dispatch(removeArticle(id));
    };

    if (!isLoading && isLoggedIn) {
        return (
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="baseline"
                sx={{ mx: 3, my: 3 }}
            >
                {userArticles.map((article) => (
                    <Grid key={article._id} item xs>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                                width: 345,
                                height: 130,
                                bgcolor: backColor,
                                marginBottom: 5,
                                p: 1,
                                position: "relative"
                            }}
                        >
                            {article.title}
                            <IconButton
                                aria-label="exit"
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0
                                }}
                                onClick={() => handleRemoveArticle(article._id)}
                            >
                                <HighlightOffIcon />
                            </IconButton>
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        );
    } else {
        return <LinearProgress sx={{ mt: 6 }} color="info" />;
    }
};

export default AdminPage;

// получить статьи отдельного пользователя со всем функционалом - удаление, редактирование

/* articles.find((a)=> a.userId === currentUser._id) */
