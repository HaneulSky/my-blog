import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NavBar = () => {
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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link
                        style={{ color: "inherit", textDecoration: "none" }}
                        to="/about"
                    >
                        Об авторе
                    </Link>
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;

/*         <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">
                    Главная
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/articles">
                    Статьи
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">
                    Об авторе
                </Link>
            </li>
        </ul> */
