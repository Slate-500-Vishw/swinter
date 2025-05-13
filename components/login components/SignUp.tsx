"use client";
import React, { useState } from "react";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { GithubLogin } from "@/Logs/github";
import { AiOutlineGoogle } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import { GoogleLogin } from "@/Logs/google";
import { Button } from "../ui/button";
import { auth } from '@/app/firebase/config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    if (!username || !email || !password) {
      toast.error("Please enter both username ,email and password.");
      return;
    }

    // Add your signUpUser function call here
  };

  const createAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        toast.success("Account has been created! Please log in")
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("This email is already registered. Try logging in.");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email format.");
        } else if (error.code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters.");
        } else {
          toast.error("Something went wrong. Please try again.");
          console.error(error);
        }
      });

  }

  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "calc(100vh - 50px)" }}
    >
      <div className="h-auto bg-white md:1/2 w-full ml-10 mr-10 lg:w-1/3 py-5 px-5 rounded shadow">
        <div>
          <h1 className="accent-color text-4xl md:text-3xl">Sign Up</h1>
        </div>
        <div className="flex md:flex-row flex-col gap-1 mt-5">
          <p>Already have an account?</p>
          <Link href={"/login"} className="accent-color underline">
            Log in
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          {/* Username Field */}
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={() => setUsernameTouched(true)}
            error={usernameTouched && !username}
            helperText={
              usernameTouched && !username ? "Username is required" : ""
            }
          />

          {/* Email Field */}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setEmailTouched(true)}
            error={emailTouched && !email}
            helperText={emailTouched && !email ? "Email is required" : ""}
          />

          {/* Password Field */}
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => setPasswordTouched(true)}
            error={passwordTouched && !password}
            helperText={
              passwordTouched && !password ? "Password is required" : ""
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Signup Button */}
          <Button
            type="submit"
            color="primary"
            variant={"secondary"}
            className="mt-2"
            onClick={createAccount}
          >
            Sign Up
          </Button>
        </form>

        <div className="w-full mt-5">
          <Button variant={"outline"} className="w-full" onClick={GoogleLogin}>
            Sign up with Google <AiOutlineGoogle />
          </Button>
          <Button
            variant={"outline"}
            className="w-full mt-3"
            onClick={GithubLogin}
          >
            Sign up with Github <IoLogoGithub />
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
