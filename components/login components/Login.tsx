"use client";
import React, { useState, useEffect } from "react";
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
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '@/app/firebase/config'
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const router = useRouter();
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

  };
  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        toast.success("Logged in successfully!");
        router.push("/home");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          toast.error("User not found. Please sign up first.");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password. Try again.");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email address.");
        } else {
          toast.error("Login failed. Please try again.");
          console.error(error);
        }
      });
  }  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log("Auth User:", user);
        if (!user) {
          router.push("/login");
        } else {
          router.push("/home")
        }
      });
  
      return () => unsubscribe();
    }, [router]);
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "calc(100vh - 50px)" }}
    >
      <div className="h-auto bg-white md:1/2 w-full ml-10 mr-10 lg:w-1/3 py-5 px-5 rounded shadow">
        <div>
          <h1 className="accent-color text-4xl md:text-3xl">Log in</h1>
        </div>
        <div className="flex md:flex-row flex-col gap-1 mt-5">
          <p>Don&apos;t have an account?</p>
          <Link href={"/signup"} className="accent-color underline">
            Create an account
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
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

          {/* Login Button */}
          <Button
            type="submit"
            color="primary"
            variant={"secondary"}
            className="mt-2"
            onClick={signInUser}
          >
            Log In
          </Button>
        </form>
        <div className="w-full mt-5">
          <Button variant={"outline"} className="w-full" onClick={GoogleLogin}>
            Sign in with Google <AiOutlineGoogle />
          </Button>
          <Button variant={"outline"} className="w-full mt-3" onClick={GithubLogin}>
            Sign in with Github <IoLogoGithub />
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
