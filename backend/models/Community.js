const mongoose = require("mongoose");

const CommunitySchema = new mongoose.Schema({
    heading: { type: String, required: true },
    type: { type: String, enum: ["Community", "NGO"], required: true },
    name: { type: String, required: true },
    members: { type: Number, required: true },
    serviceMode: { type: String, enum: ["Online", "Offline", "Hybrid"], required: true },
    category: { type: String, enum: ["Education", "Health", "Environment", "Social Welfare"], required: true },
    requirements: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Ensuring unique emails
    password: { type: String, required: true }, // ✅ Added password field
    phone: { type: String, required: true },
    communication: { type: String, enum: ["Email", "Phone", "WhatsApp"], required: true },
    website: { type: String },
    location: { type: String, required: true }, // Stores lat/lng as a string
}, { timestamps: true });

const Community = mongoose.model("Community", CommunitySchema);

module.exports = Community;
