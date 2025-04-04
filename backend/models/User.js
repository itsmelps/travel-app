const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  fullName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  interests: { type: [String], default: [] },
  newsletter: { type: Boolean, default: false },
  termsAccepted: { type: Boolean, required: true }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
