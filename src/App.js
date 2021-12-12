import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Header from "./components/header";
import Main from "./pages/main";
import Articles from "./components/articles";
import About from "./pages/about";
import NotFound from "./components/notFound";
import ArticleProvider from "./hooks/useArticle";

function App() {
    return (
        <>
            <Header />
            <Switch>
                <ArticleProvider>
                    <Route path="/" exact component={Main} />
                    <Route path="/articles/:articleId?" component={Articles} />
                </ArticleProvider>
                <Route path="/about" component={About} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </>
    );
}

export default App;
