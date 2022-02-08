import React from "react";

const EditArticlePage = () => {
    return (
        <>
            {" "}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                        marginTop: 10,
                        width: 500,
                        marginBottom: 5,
                        border: 0.5,
                        borderColor: "lightblue",
                        p: 3,
                        boxShadow: 5
                    },
                    justifyContent: "center"
                }}
            >
                <h1>Редактирование статьи</h1>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Заголовок"
                        type="text"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                        // error={errors.title}
                        variant="standard"
                        sx={{ width: 450 }}
                    />
                    <TextField
                        label="Короткий текст"
                        type="text"
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        // error={errors.description}
                        variant="standard"
                        sx={{ width: 450 }}
                    />
                    <TextField
                        label="Текст"
                        type="text"
                        name="text"
                        value={data.text}
                        onChange={handleChange}
                        // error={errors.description}
                        variant="standard"
                        sx={{ width: 450 }}
                    />
                    <TextField
                        label="Ссылка"
                        type="text"
                        name="link"
                        value={data.link}
                        onChange={handleChange}
                        // error={errors.description}
                        variant="standard"
                        sx={{ width: 450 }}
                    />
                    <Button type="submit" disabled={!isValid}>
                        Опубликовать
                    </Button>
                </form>
            </Box>
        </>
    );
};

export default EditArticlePage;

// получить конкретную статью и вытащить данные из нее и впихнуть в значения полей
