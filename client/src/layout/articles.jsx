import React from "react";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
// import ArticlesListPage from "../components/pages/articlesListPage";
import ArticlePage from "../components/pages/articlePage";
import EditArticlePage from "../components/pages/editArticlePage";
import AdminPage from "../components/pages/adminPage";
import ArticlesLoader from "../components/ui/hoc/articlesLoader";

const Articles = () => {
    const params = useParams();
    const { articleId, edit } = params;

    return (
        <>
            <ArticlesLoader>
                {articleId ? (
                    edit ? (
                        <EditArticlePage />
                    ) : (
                        <ArticlePage articleId={articleId} />
                    )
                ) : (
                    <AdminPage articleId={articleId} />
                )}
            </ArticlesLoader>
        </>
    );
};

export default Articles;
