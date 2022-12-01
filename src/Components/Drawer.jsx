import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.webp";
import { useNavigate } from "react-router";

export default function TemporaryDrawer({ anchor }) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const nagivate = useNavigate();
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
