import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Header from "./components/header";
import Main from "./pages/main";
import Articles from "./components/articles";
import About from "./pages/about";
import NotFound from "./components/notFound";
import ArticleProvider from "./hooks/useArticle";
import LoginForm from "./components/loginForm";
import ArticlePage from "./components/articlePage";

function App() {
    console.log(window.outerHeight, window.outerWidth);
    return (
        <>
            <Header />
            <Switch>
                <ArticleProvider>
                    <Route path="/" exact component={Main} />

                    <Route path="/articles/" component={Articles} />
                    <Route
                        path="/articles/:articleId?"
                        component={ArticlePage}
                    />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/about" component={About} />
                    <Route path="/404" component={NotFound} />
                    <Redirect to="/404" />
                </ArticleProvider>
            </Switch>
        </>
    );
}

export default App;
