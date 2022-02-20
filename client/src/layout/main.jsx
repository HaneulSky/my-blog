import React from "react";
import ArticlesListPage from "../components/pages/articlesListPage";
const Main = () => {
    return (
        <>
            <h1
                style={{
                    marginTop: 2 + "em",
                    marginBottom: 1 + "em",
                    textAlign: "center"
                }}
            >
                Привет, рада видеть Вас в моем блоге!
            </h1>
            <p>
                Для того, чтобы почитать статьи вы можете кликнуть по ссылке Все
                статьи в меню.
            </p>
            <p>
                Для добавления новой статьи нужно авторизоваться, если аккаунта
                еще нет зарегистрируйтесь.
            </p>
            <p>Приятного чтения! :)</p>
            <ArticlesListPage />
        </>
    );
};

export default Main;
