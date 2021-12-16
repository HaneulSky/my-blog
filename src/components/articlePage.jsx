import React from "react";
import PropTypes from "prop-types";
// import { useArticle } from "../hooks/useArticle";
// import { useParams } from "react-router";

const ArticlePage = ({ title, link, content }) => {
    // const articleId = useParams();
    // const { articles } = useArticle();

    // const toShow = articles
    //     ? articles.find((item) => item._id === articleId)
    //     : "Loading";
    // console.log(toShow);
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <a>{link}</a>
        </div>
    );
};
ArticlePage.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    link: PropTypes.string
};

export default ArticlePage;
