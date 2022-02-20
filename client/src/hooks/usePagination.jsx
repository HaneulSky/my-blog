import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import {
    getArticles,
    getArticlesLoadingStatus,
    loadArticlesList
} from "../store/articles";

const PaginationContext = React.createContext();

export const usePagination = () => {
    return useContext(PaginationContext);
};

const PaginationProvider = ({ children }) => {
    const articles = useSelector(getArticles());
    const dispatch = useDispatch();
    const pageSize = 4;
    const isLoading = useSelector(getArticlesLoadingStatus());

    useEffect(() => {
        dispatch(loadArticlesList());
    }, []);

    const itemsCount = articles.length;

    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;

    const pages = _.range(1, pageCount + 1);

    return (
        <PaginationContext.Provider value={{ pages }}>
            {!isLoading ? children : "Loading"}
        </PaginationContext.Provider>
    );
};

PaginationProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default PaginationProvider;
