import React, { useState } from "react";
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import {useFileHandler, useInputValidation,useStrongPassword} from "6pp";
import { usernameValidator } from "../utils/vallidators";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    setIsLogin((prev)=>!prev);
  };
  const username =useInputValidation("",usernameValidator);
  const name =useInputValidation("");
  const password =useStrongPassword();
  const bio =useInputValidation("");

  const avatar = useFileHandler("single");
  const handleLogin=(e)=>{
    e.preventDefault();
  }
  const handleSignUp=(e)=>{
    e.preventDefault();
  }
  return (
<div style={{
  backgroundImage:"linear-gradient(rgb(255,225,209),rgb(549,159,159))",
}}>
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleLogin}>
              <TextField
                required
                fullWidth
                label="username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              {
                username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )
              }
              <TextField
                required
                fullWidth
                label="password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button
                variant="text"
                color="secondary"
                onClick={toggleLogin}
                fullWidth
              >
                sign up instead
              </Button>
            </form>
          </>
        ) : (
          <>
          <Typography variant="h5">Sign Up</Typography>
          <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleSignUp}>
            <Stack position={"relative"} width={"10rem"} margin={"auto"}>
              <Avatar sx={{
                width:"10rem",
                height:"10rem",
                ObjectFit:"contain",
                
              }}
              src={avatar.preview} />
              {
                avatar.error && (
                  <Typography m={"1rem"} color="error" variant="caption">
                    {avatar.error}
                  </Typography>
                )
              }
              <IconButton
              sx={{
                position:"absolute",
                bottom:"0",
                right:"0",
                color:"white",
                bgcolor:"rgba(0,0,0,0.5)",
                ":hover":{
                  bgcolor:"rgba(0,0,0,0.7)"
                },
              }}
              component="label">
                <>
                <CameraAltIcon/>
                <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>
                </>
              </IconButton>
            </Stack>
            <TextField
              required
              fullWidth
              label="name"
              margin="normal"
              variant="outlined"
              value={name.value}
                onChange={name.changeHandler}
            />
            <TextField
              required
              fullWidth
              label="bio"
              margin="normal"
              variant="outlined"
              value={bio.value}
                onChange={bio.changeHandler}
            />
            <TextField
              required
              fullWidth
              label="username"
              margin="normal"
              variant="outlined"
              value={username.value}
                onChange={username.changeHandler}
            />
            {
                username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )
              }
            <TextField
              required
              fullWidth
              label="password"
              type="password"
              margin="normal"
              variant="outlined"
              value={password.value}
                onChange={password.changeHandler}
            />
            {
                password.error && (
                  <Typography color="error" variant="caption">
                    {password.error}
                  </Typography>
                )
              }
            <Button
              sx={{
                marginTop: "1rem",
              }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Sign Up
            </Button>
            <Typography textAlign={"center"} m={"1rem"}>
              OR
            </Typography>
            <Button
              variant="text"
              color="secondary"
              onClick={toggleLogin}
              fullWidth
            >
              Login instead
            </Button>
          </form>
        </>
        )}
      </Paper>
    </Container>
    </div>
  );
};

export default Login;
