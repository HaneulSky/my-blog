import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Header from "./components/header";
import Main from "./pages/main";
import ArticlesListPage from "./components/articlesListPage";
import About from "./pages/about";
import NotFound from "./components/notFound";
import ArticlePage from "./components/articlePage";
import Login from "./components/login";
import UserProfile from "./components/userProfile";

function App() {
    console.log(window.outerHeight, window.outerWidth);
    return (
        <>
            <Header />
            <Switch>
                <Route path="/articles/" component={ArticlesListPage} />
                <Route path="/articles/:articleId?" component={ArticlePage} />
                <Route path="/:?userId" component={UserProfile} />
                <Route path="/login" component={Login} />
                <Route path="/about" component={About} />
                <Route path="/" exact component={Main} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </>
    );
}

export default App;
