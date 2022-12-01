import React, { useState } from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import logo from "../assets/logo.webp";

export default function TemporaryDrawer({ anchor }) {
  const nagivate = useNavigate();
  const [state, setState] = useState({
    left: false,
  });

  //Function to close Drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleLink = (page) => {
    nagivate(`/${page}`);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        component="img"
        src={logo}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      ></Box>
      <List>
        <Divider />
      </List>
      <List>
        {["Home", "Books", "Favorite"].map((text, index) => (
          <Box key={index}>
            <ListItem disablePadding>
              <ListItemButton sx={{ height: "23px" }}>
                <ListItemText primary={text} onClick={() => handleLink(text)} />
              </ListItemButton>
            </ListItem>
            <List>
              <Divider />
            </List>
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}>
          <MenuIcon sx={{ width: "100px", height: "40px" }} />
        </Button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
