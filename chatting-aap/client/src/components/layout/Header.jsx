import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, lazy, useState } from "react";
import { orange } from "../../constants/color";
import {
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
  Group as GroupIcon,
  Add as AddIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
const Search= lazy(()=>import("../specific/Search"));
const NotifiactionsDialog= lazy(()=>import("../specific/NotifiactionsDialog"));
const NewGroup= lazy(()=>import("../specific/NewGroup"));

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const navigate = useNavigate();
  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };
  const openSearch = () => {
    setIsSearch((prev) => !prev);
  };
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };
  const navigateToGroup = () => {
    navigate("/groups");
  };
  const logoutHanler = () => {
    console.log("clicked");
  };
  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Chatter
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" size="large" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                title={"Search"}
                onClick={openSearch}
                icon={<SearchIcon />}
              />
              <IconBtn
                title={"New Group"}
                onClick={openNewGroup}
                icon={<AddIcon />}
              />
              <IconBtn
                title={"Manage Group"}
                onClick={navigateToGroup}
                icon={<GroupIcon />}
              />
              <IconBtn
                title={"Logout"}
                onClick={logoutHanler}
                icon={<LogoutIcon />}
              />
              <IconBtn
                title={"Notifiactions"}
                onClick={openNotification}
                icon={<NotificationsIcon />}
              />
              <IconBtn
                title={"Notifiv="}
                onClick={logoutHanler}
                icon={<LogoutIcon />}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open/>}>
          <Search />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open/>}>
          <NotifiactionsDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open/>}>
          <NewGroup />
        </Suspense>
      )}
    </>
  );
};
const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
export default Header;
