import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled(({ expand, onClick, ...other }) => (
  <IconButton onClick={onClick} {...other} />
))(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? "rotate(180deg)" : "rotate(0deg)",
}));

export default function EventCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <Card sx={{ maxWidth: 450, margin: "auto", mt: 4, boxShadow: 3 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], width: 56, height: 56 }}
            aria-label="event"
          >
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography variant="h6">Free Music Teaching Session</Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary">
            Hosted by Harmony for All - August 20, 2024
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Join us for an engaging music teaching session where professional
          musicians will provide free lessons on guitar and piano. No prior
          experience needed!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
          <FavoriteIcon color={liked ? "error" : "inherit"} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Event Details:
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            📍 Location: City Community Hall
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            ⏰ Time: 3:00 PM - 6:00 PM
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            🎶 Instruments: Guitar, Piano
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            👨‍🏫 Instructors: Professional Musicians
          </Typography>
          <Typography>
            Don't miss this opportunity to learn and explore music for free!
            Register now to secure your spot.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
