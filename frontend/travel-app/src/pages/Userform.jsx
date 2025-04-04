import React, { useState } from "react";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Typography,
  Container,
  Paper,
  Grid
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Make sure this is imported

const UserRegistration = () => {
  const navigate = useNavigate(); // ✅ Moved inside the component function

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    fullName: "",
    dob: "",
    gender: "",
    country: "",
    city: "",
    interests: [],
    newsletter: false,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Password:", formData.password);
    console.log("Confirm Password:", formData.confirmPassword);
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/api/users/register", {
        ...formData, // ✅ sends everything including confirmPassword
      });
  
      console.log("Registration successful:", response.data);
      alert("User registered successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      alert("Error during registration");
    }
  };
  
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Join Us as a User
      </Typography>
      <Paper elevation={3} sx={{ padding: 4, maxHeight: "80vh", overflowY: "auto" }}>
        <Typography variant="h5" align="center" gutterBottom>
          User Registration Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Username" name="username" value={formData.username} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth type="email" label="Email" name="email" value={formData.email} onChange={handleChange} required />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth type="password" label="Password" name="password" value={formData.password} onChange={handleChange} required />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth type="password" label="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth type="date" label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} required InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select name="gender" value={formData.gender} onChange={handleChange}>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                  <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Country" name="country" value={formData.country} onChange={handleChange} required />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="City" name="city" value={formData.city} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required />} label="I agree to Terms & Conditions" />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" color="primary" type="submit">
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default UserRegistration;
