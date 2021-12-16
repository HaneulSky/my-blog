import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// import { toast } from "react-toastify";

const RegisterForm = () => {
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
            <form>
                <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    sx={{ width: 500 }}
                />
                <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    sx={{ width: 500 }}
                />
                <TextField
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    sx={{ width: 500 }}
                />
                <Button
                    sx={{ marginTop: 3, width: 200, marginLeft: 18 }}
                    variant="outlined"
                    color="primary"
                >
                    Зарегистрироваться
                </Button>
            </form>
        </Box>
    );
};

export default RegisterForm;
