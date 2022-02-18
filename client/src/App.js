import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Header from "./components/ui/header";
import Main from "./layout/main";
import NotFound from "./layout/notFound";
import Login from "./layout/login";
import AddNewArticleForm from "./components/ui/addNewArticleForm";
import LogOut from "./layout/logOut";
import AdminPage from "./components/pages/adminPage";
import Articles from "./layout/articles";

function App() {
    console.log(window.outerHeight, window.outerWidth);
    return (
        <>
            <Header />
            <Switch>
                <Route
                    path="/articles/:articleId?/:edit?"
                    component={Articles}
                />
                <Route path="/login" component={Login} />
                <Route path="/addArticle" component={AddNewArticleForm} />
                <Route path="/:userId" component={AdminPage} />
                <Route path="/logout" component={LogOut} />

                <Route path="/404" component={NotFound} />
                <Route path="/" exact component={Main} />
                <Redirect to="/404" />
            </Switch>
        </>
    );
}

export default App;