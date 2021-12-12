import React from "react";
import Articles from "../components/articles";
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
            <Articles />
        </>
    );
};

export default Main;
