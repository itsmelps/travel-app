import React, { useState } from "react";
import { TextField, Button, Typography, Paper, Container, Grid, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        userType: "user", // Default to 'user'
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        try {
            const endpoint =
                formData.userType === "user"
                    ? "http://localhost:5000/api/users/login"
                    : "http://localhost:5000/api/community/login"; // Different API based on type

            const response = await axios.post(endpoint, {
                email: formData.email,
                password: formData.password,
            });

            console.log("Login successful:", response.data);
            alert("Login successful!");

            // Save token (optional)
            localStorage.setItem("token", response.data.token);

            // Redirect based on user type
            navigate(formData.userType === "user" ? "/user-dashboard" : "/community-dashboard");
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
            setError(error.response?.data?.message || "Invalid login credentials");
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Welcome Back
            </Typography>
            <Paper elevation={3} sx={{ padding: 4, maxHeight: "60vh", overflowY: "auto" }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Login to Your Account
                </Typography>

                {error && <Typography color="error" align="center" sx={{ mb: 2 }}>{error}</Typography>}

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {/* User Type Selector */}
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>User Type</InputLabel>
                                <Select
                                    name="userType"
                                    value={formData.userType}
                                    onChange={handleChange}
                                    required
                                >
                                    <MenuItem value="user">User</MenuItem>
                                    <MenuItem value="community">Community</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="email"
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="password"
                                label="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button fullWidth variant="contained" color="primary" type="submit">
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </form>

                <Typography align="center" sx={{ mt: 2 }}>
                    Don't have an account?{" "}
                    <a href="/signup" style={{ color: "#1976d2", fontWeight: "bold" }}>
                        Sign Up
                    </a>
                </Typography>
            </Paper>
        </Container>
    );
};

export default Login;
