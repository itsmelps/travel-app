import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import LandscapeIcon from "@mui/icons-material/Landscape";
import ParkIcon from "@mui/icons-material/Park";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function FolderList() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Anil" src="https://i.pravatar.cc/150" />
          </ListItemAvatar>
          <ListItemText primary="Hosted by Anil" secondary="3 years hosting" />
        </ListItem>

        {/* Divider with spacing */}
        <Box sx={{ px: 2 }}>
          <Divider />
        </Box>

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LandscapeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Mountain and garden views"
            secondary="Soak up the views during your stay."
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ParkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="1-hour drive to Rajaji National Park"
            secondary="This home is near the national park."
          />
        </ListItem>

        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <HomeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Room in a villa"
            secondary="Your own room in a home, plus access to shared spaces."
          />
        </ListItem>
      </List>
    </Box>
  );
}
