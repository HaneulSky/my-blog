import React, { useEffect, useState } from "react";
import Article from "../ui/article";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { getArticles, loadArticlesList } from "../../store/articles";
import { LinearProgress } from "@mui/material";
import { paginate } from "../../utils/paginate";
import Pagination from "../common/Pagination";
import PaginationProvider from "../../hooks/usePagination";

const ArticlesListPage = () => {
    const dispatch = useDispatch();
    const articles = useSelector(getArticles());
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;

    useEffect(() => {
        dispatch(loadArticlesList());
    }, []);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const articlesCrop = paginate(articles, currentPage, pageSize);

    if (!articles) {
        return <LinearProgress sx={{ mt: 6 }} color="info" />;
    }

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="baseline"
                sx={{ mx: 3, my: 3 }}
            >
                {articles &&
                    articlesCrop.map((article) => (
                        <Grid key={article._id} item xs>
                            <Article key={article._id} {...article} />
                        </Grid>
                    ))}
            </Grid>
            <PaginationProvider>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    {articles && (
                        <Pagination
                            onPageChange={handlePageChange}
                            currentPage={currentPage}
                        />
                    )}
                </div>
            </PaginationProvider>
        </>
    );
};

export default ArticlesListPage;
