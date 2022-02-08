import React from "react";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ArticlesListPage from "../pages/articlesListPage";
import ArticlePage from "./articlePage";
// import { getArticles } from "../store/articles";

const Articles = () => {
    const params = useParams();
    const articleId = params;
    // const articles = useSelector(getArticles());
    console.log(articleId);
    return <>{!articleId ? <ArticlePage /> : <ArticlesListPage />}</>;
};

export default Articles;

/*
    const params = useParams();
    const { userId, edit } = params;
    const currentUserId = useSelector(getCurrentUserId());

    return (
        <>
            <UsersLoader>
                {userId ? (
                    edit ? (
                        userId === currentUserId ? (
                            <EditUserPage />
                        ) : (
                            <Redirect to={`/users/${currentUserId}/edit`} />
                        )
                    ) : (
                        <UserPage userId={userId} />
                    )
                ) : (
                    <UsersListPage />
                )}
            </UsersLoader>
        </>
    );
};*/
