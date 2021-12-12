import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import articleService from "../services/articles.service";
import { toast } from "react-toastify";

const ArticleContext = React.createContext();

export const useArticle = () => {
    return useContext(ArticleContext);
};

const ArticleProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
    console.log(articles, isLoading);

    useEffect(() => {
        getArticles();
    }, []);
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    async function getArticles() {
        try {
            const { content } = await articleService.get();
            setArticles(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
        setLoading(false);
    }

    return (
        <ArticleContext.Provider value={{ articles }}>
            {!isLoading ? children : "Loading..."}
        </ArticleContext.Provider>
    );
};

ArticleProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ArticleProvider;
