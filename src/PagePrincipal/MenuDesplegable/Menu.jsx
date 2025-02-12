import React, { useState } from "react";
import "./StyleMenu.css";
import { Box, Container,Button,List,ListItem,ListItemText} from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail"
import MenuIcon from "@mui/icons-material/Menu"

export default function Menu () {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      
      <Container maxWidth="sm">
        
      <i onClick={toggleSidebar}><MenuIcon/></i>

        <List>
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

    </div>
  );
};

