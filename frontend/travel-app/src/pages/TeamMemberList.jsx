import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

const teamMembers = [
  { name: "Remy Sharp", img: "https://randomuser.me/api/portraits/men/1.jpg" },
  {
    name: "Travis Howard",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Agnes Walker",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Trevor Henderson",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

export default function TeamAvatars() {
  const [selectedMember, setSelectedMember] = React.useState(null);

  return (
    <Card
      sx={{
        maxWidth: 450,
        margin: "auto",
        mt: 4,
        boxShadow: 3,
        padding: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom fontWeight={400}>
        Our Team
      </Typography>
      <AvatarGroup sx={{ justifyContent: "center" }}>
        {teamMembers.map((member, index) => (
          <Tooltip key={index} title={member.name} arrow>
            <Avatar
              alt={member.name}
              src={member.img}
              onClick={() => setSelectedMember(member.name)}
              sx={{ cursor: "pointer" }}
            />
          </Tooltip>
        ))}
        <Avatar sx={{ bgcolor: "gray" }}>{`+${teamMembers.length}`}</Avatar>
      </AvatarGroup>
      {selectedMember && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          {selectedMember}
        </Typography>
      )}
    </Card>
  );
}
