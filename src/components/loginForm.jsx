import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { validator } from "../utils/validator";
// import { toast } from "react-toastify";

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    const [errors, setErrors] = useState(null);
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: { message: "Email введен не корректно" }
        },
        password: {
            isRequired: { message: "Пароль обязателен для заполнения" },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одну цифру"
            },
            min: { message: "Пароль должен быть не менее 8 символов", value: 8 }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validate();
        if (!isValid) return;

        console.log(data);
        console.log(e);
    };

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                    marginTop: 10,
                    width: 500,
                    border: 0.5,
                    borderColor: "lightblue",
                    p: 3,
                    boxShadow: 5
                },
                justifyContent: "center"
            }}
        >
            <form onSubmit={handleSubmit}>
                <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    sx={{ width: 450 }}
                    onChange={handleChange}
                />
                {errors ? <p style={{ color: "red" }}>{errors.email}</p> : null}
                <TextField
                    id="standard-basic"
                    type="password"
                    label="Password"
                    variant="standard"
                    sx={{ width: 450 }}
                    onChange={handleChange}
                />
                {errors ? (
                    <p style={{ color: "red" }}>{errors.password}</p>
                ) : null}

                <Button
                    sx={{ marginTop: 3, width: 200, marginLeft: 18 }}
                    variant="outlined"
                    color="primary"
                >
                    Войти
                </Button>
                <Button color="primary" sx={{ mt: 2, ml: 18 }}>
                    Зарегистрироваться
                </Button>
            </form>
        </Box>
    );
};

export default LoginForm;
