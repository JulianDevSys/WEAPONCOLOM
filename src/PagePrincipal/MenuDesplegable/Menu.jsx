import React, { useState } from "react";
import "./StyleMenu.css";
import { Box, Container,Button,List,ListItem,ListItemText} from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail"

export default function Menu () {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <Container maxWidth="sm">
        
      <Button  onClick={toggleSidebar}>
        ☰
        </Button>
        <List>
        <ListItem>
          <ListItemText> Dashboard</ListItemText >
        </ListItem>

        <ListItem>
        <ListItemText>PISTOLA</ListItemText >
        </ListItem>

        <ListItem>
          <ListItemText>FUSIL</ListItemText >
        </ListItem>

        <ListItem>
          <ListItemText>ametralladoras</ListItemText >
        </ListItem>

        <ListItem>
          <ListItemText>Granadas</ListItemText >
        </ListItem>

        <ListItem>
          <i><ContactMailIcon/></i> <ListItemText>Contactanos</ListItemText >
          </ListItem>
      </List>

      </Container>

    </Box>
  );
};

