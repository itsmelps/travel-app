const Community = require("../models/Community");

// Register a new community
exports.registerCommunity = async (req, res) => {
  try {
    console.log("Received data:", req.body);
    const {
      heading,
      type,
      name,
      members,
      serviceMode,
      requirements,
      description,
      email,
      password,
      phone,
      location,
      website,
      category,
      communication,
    } = req.body;

    // Check if email already exists
    const existingCommunity = await Community.findOne({ email });
    if (existingCommunity) {
      return res.status(400).json({ error: "Email already registered!" });
    }

    // Create new community
    const community = new Community({
      heading,
      type,
      name,
      members,
      serviceMode,
      requirements,
      description,
      email,
      password,
      phone,
      location,
      website,
      category,
      communication,
    });

    await community.save();

    res.status(201).json({ message: "Community registered successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login community
exports.loginCommunity = async (req, res) => {
    try {
      console.log("Login route hit!"); // Debugging log
      const { email, password } = req.body;
  
      // Check if community exists
      const community = await Community.findOne({ email });
  
      if (!community) {
        return res.status(400).json({ error: "Invalid email or password!" });
      }
  
      console.log("Stored Password:", community.password); // Debugging
      console.log("Entered Password:", password); // Debugging
  
      // Compare passwords (since it's stored in plain text)
      if (community.password !== password) {
        return res.status(400).json({ error: "Invalid email or password!" });
      }
  
      res.status(200).json({ message: "Login successful!", communityId: community._id });
    } catch (error) {
      res.status(500).json({ error: "Error logging in!" });
    }
  };
  
// Get all communities
exports.getAllCommunities = async (req, res) => {
  try {
    const communities = await Community.find();
    res.status(200).json(communities);
  } catch (error) {
    res.status(500).json({ error: "Error fetching communities" });
  }
};

// Get a single community by ID
exports.getCommunityById = async (req, res) => {
  try {
    const community = await Community.findById(req.params.id);
    if (!community) return res.status(404).json({ error: "Community not found" });

    res.status(200).json(community);
  } catch (error) {
    res.status(500).json({ error: "Error fetching community details" });
  }
};

// Update a community
exports.updateCommunity = async (req, res) => {
  try {
    const updatedCommunity = await Community.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCommunity) return res.status(404).json({ error: "Community not found" });

    res.status(200).json({ message: "Community updated successfully!", updatedCommunity });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a community
exports.deleteCommunity = async (req, res) => {
  try {
    const deletedCommunity = await Community.findByIdAndDelete(req.params.id);
    if (!deletedCommunity) return res.status(404).json({ error: "Community not found" });

    res.status(200).json({ message: "Community deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting community" });
  }
};
