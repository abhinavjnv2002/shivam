import React, { memo } from "react";
import { Link } from "../styles/StyledComponents";
import { Stack, Typography } from "@mui/material";
const ChatItem = () => {
  (avatar = []),
    name,
    _id,
    (groupChat = false),
    sameSender,
    isOnline,
    newMessageAlert,
    (index = 0),
    handDeleteChatOpen;
  return (
    <Link to={`/chat/${_id}`} onContextMenu={(e)=>handDeleteChatOpen(e,_id,groupChat)}>
      <div
        style={{
          display: "flex",
          gap:"1rem",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "black": "unset",
          color:sameSender ? "white":"black",
         position:"relative"
        }}
      >
        <Stack>
          <Typography>{name}</Typography>
          {
            newMessageAlert  && (<Typography>{newMessageAlert.count}New Message</Typography>)
          }
        </Stack>
        {
          isOnline &&(<Box sx={{
            width:"10px",
            height:"10px",
            borderRadius:"50%",
            backgroundColor:"green",
            position:"absolute",
            top:"50%",
            right:"1rem",
            transform:"translateY(-50%)"
          }}></Box>)
        }
      </div>
    </Link>
  );
};

export default memo(ChatItem);
