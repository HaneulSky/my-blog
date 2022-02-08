import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Header from "./components/header";
import Main from "./layout/main";
import ArticlesListPage from "./pages/articlesListPage";
import NotFound from "./components/notFound";
// import ArticlePage from "./components/articlePage";
import Login from "./components/login";
import UserProfile from "./components/userProfile";
import AddNewArticleForm from "./components/addNewArticleForm";
import ArticlePage from "./components/articlePage";
// import Article from "./components/article";

function App() {
    console.log(window.outerHeight, window.outerWidth);
    return (
        <>
            <Header />
            <Switch>
                <Route path="/articles/:articleId" component={ArticlePage} />
                <Route path="/articles/" component={ArticlesListPage} />

                <Route path="/:?userId" component={UserProfile} />
                <Route path="/login" component={Login} />
                <Route path="/addArticle" component={AddNewArticleForm} />
                <Route path="/404" component={NotFound} />
                <Route path="/" exact component={Main} />
                <Redirect to="/404" />
            </Switch>
        </>
    );
}

export default App;
