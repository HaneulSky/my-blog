import React from "react";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ArticlesListPage from "../components/pages/articlesListPage";
import ArticlePage from "../components/pages/articlePage";
import EditArticlePage from "../components/pages/editArticlePage";

const Articles = () => {
    const params = useParams();
    const { articleId, edit } = params;
    console.log(params);

    return (
        <>
            {articleId ? (
                edit ? (
                    <EditArticlePage />
                ) : (
                    <ArticlePage articleId={articleId} />
                )
            ) : (
                <ArticlesListPage articleId={articleId} />
            )}
        </>
    );
};

export default Articles;
