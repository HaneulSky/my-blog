import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserData, getIsLoggedIn, loadUser } from "../store/user";
import { Button, IconButton } from "@mui/material";

const NavBar = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const logout = () => {
        console.log("button for logout");
    };
    const currentUser = useSelector(getCurrentUserData());
    useEffect(() => {
        dispatch(loadUser());
    }, []);

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                        to="/"
                    >
                        Главная
                    </Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                        to="/articles"
                    >
                        Статьи
                    </Link>
                </Typography>
                {isLoggedIn && (
                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                        to="/addArticle"
                    >
                        <Button variant="contained" color="info">
                            Добавить статью
                        </Button>
                    </Link>
                )}

                {isLoggedIn && currentUser ? (
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, ml: 6 }}
                    >
                        {currentUser.name}
                        <IconButton aria-label="exit" onClick={logout}>
                            <ExitToAppIcon />
                        </IconButton>
                    </Typography>
                ) : (
                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                        to="/login"
                    >
                        Войти
                    </Link>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
