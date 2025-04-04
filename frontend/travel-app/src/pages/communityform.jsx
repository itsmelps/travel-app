import React, { useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Container,
  Paper,
} from "@mui/material";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: { main: "#d4a373" },
    background: { default: "#f8f5f2", paper: "#ffffff" },
  },
  typography: { fontFamily: "Poppins, Arial, sans-serif" },
});

function LocationPicker({ onLocationSelect }) {
  const [markerPosition, setMarkerPosition] = useState(null);
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      setMarkerPosition({ lat, lng });
      onLocationSelect({ lat, lng });
    },
  });
  return markerPosition ? <Marker position={markerPosition} /> : null;
}

function CommunityForm() {
  const navigate = useNavigate(); // ✅ Ensure navigation works after submission

  const [formData, setFormData] = useState({
    heading: "",
    type: "",
    name: "",
    members: "",
    serviceMode: "",
    requirements: "",
    description: "",
    email: "",
    password: "", // ✅ Added password field
    phone: "",
    location: "",
    website: "",
    category: "",
    communication: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleLocationSelect = (location) => {
    setFormData((prevData) => ({
      ...prevData,
      location: { lat: location.lat, lng: location.lng }, // ✅ Keep as an object
    }));
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.email || !formData.password || !formData.name) {
      alert("Please fill all required fields!");
      return;
    }
  
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }
  
    const submissionData = {
      ...formData,
      location: formData.location ? `${formData.location.lat}, ${formData.location.lng}` : "", // ✅ Convert location to a string
    };
  
    try {
      console.log("Submitting formData:", submissionData);
      const response = await axios.post("http://localhost:5000/api/community/register", submissionData);
  
      if (response.status === 201) {
        alert("Registration successful! Redirecting to login...");
        navigate("/login");
      } else {
        alert("Something went wrong. Please try again.");
      }
  
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(error.response?.data?.message || "An error occurred while registering.");
    }
  };
  
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        {/* Heading at the top */}
        <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center", margin: "20px 0" }}>
          Join Us as a Community
        </Typography>

        {/* Scrollable Form */}
        <Paper elevation={3} sx={{ padding: "20px", borderRadius: "12px", marginBottom: "30px" }}>
          <Typography variant="h5" sx={{ textAlign: "center", marginBottom: "20px" }}>
            Community Registration Form
          </Typography>

          <Box sx={{ maxHeight: "70vh", overflowY: "auto", paddingRight: "10px" }}>
            <form onSubmit={handleSubmit}>
              <TextField label="Community Heading" name="heading" value={formData.heading} onChange={handleChange} fullWidth required sx={{ marginBottom: "16px" }} />
              
              <FormControl fullWidth required sx={{ marginBottom: "16px" }}>
                <InputLabel>Registration Type</InputLabel>
                <Select name="type" value={formData.type} onChange={handleChange}>
                  <MenuItem value="Community">Community</MenuItem>
                  <MenuItem value="NGO">NGO</MenuItem>
                </Select>
              </FormControl>

              <TextField label="Community/Organization Name" name="name" value={formData.name} onChange={handleChange} fullWidth required sx={{ marginBottom: "16px" }} />

              <TextField label="Number of Members" name="members" type="number" value={formData.members} onChange={handleChange} fullWidth required sx={{ marginBottom: "16px" }} />

              <FormControl fullWidth required sx={{ marginBottom: "16px" }}>
                <InputLabel>Mode of Service</InputLabel>
                <Select name="serviceMode" value={formData.serviceMode} onChange={handleChange}>
                  <MenuItem value="Online">Online</MenuItem>
                  <MenuItem value="Offline">Offline</MenuItem>
                  <MenuItem value="Hybrid">Hybrid</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth required sx={{ marginBottom: "16px" }}>
                <InputLabel>Category</InputLabel>
                <Select name="category" value={formData.category} onChange={handleChange}>
                  <MenuItem value="Education">Education</MenuItem>
                  <MenuItem value="Health">Health</MenuItem>
                  <MenuItem value="Environment">Environment</MenuItem>
                  <MenuItem value="Social Welfare">Social Welfare</MenuItem>
                </Select>
              </FormControl>

              <TextField label="Requirements" name="requirements" value={formData.requirements} onChange={handleChange} fullWidth multiline rows={2} required sx={{ marginBottom: "16px" }} />

              <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth required sx={{ marginBottom: "16px" }} />

              {/* ✅ Added Password Field */}
              <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} fullWidth required sx={{ marginBottom: "16px" }} />

              <TextField label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} fullWidth required sx={{ marginBottom: "16px" }} />

              <FormControl fullWidth required sx={{ marginBottom: "16px" }}>
                <InputLabel>Preferred Mode of Communication</InputLabel>
                <Select name="communication" value={formData.communication} onChange={handleChange}>
                  <MenuItem value="Email">Email</MenuItem>
                  <MenuItem value="Phone">Phone</MenuItem>
                  <MenuItem value="WhatsApp">WhatsApp</MenuItem>
                </Select>
              </FormControl>

              <TextField label="Website / Social Media Links" name="website" value={formData.website} onChange={handleChange} fullWidth sx={{ marginBottom: "16px" }} />

              <TextField label="Description" name="description" value={formData.description} onChange={handleChange} fullWidth multiline rows={2} required sx={{ marginBottom: "16px" }} />

              <Typography variant="h6" sx={{ marginBottom: "10px" }}>Select Location</Typography>
              <MapContainer center={[20, 78]} zoom={4} style={{ height: "300px", width: "100%", marginBottom: "16px", borderRadius: "10px" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationPicker onLocationSelect={handleLocationSelect} />
              </MapContainer>

              <TextField
  label="Selected Location"
  name="location"
  value={formData.location ? `Lat: ${formData.location.lat}, Lng: ${formData.location.lng}` : ""}
  fullWidth
  disabled
  sx={{ marginBottom: "16px" }}
/>


              <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: "primary.main", color: "#fff", '&:hover': { backgroundColor: "#bf9060" } }}>
                Submit
              </Button>
            </form>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default CommunityForm;
