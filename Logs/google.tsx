"use client";
import { getAuth, signInWithPopup } from "firebase/auth";
import { google_provider } from "@/app/firebase/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AiOutlineGoogle } from "react-icons/ai";

export const GoogleLogin = () => {
  const auth = getAuth();
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, google_provider);
      const user = result.user;
      console.log(user);
      toast.success("Logged in Successfully!");
      router.push("/home");
    } catch (error) {
      console.error(error);
      toast.error("There was an error in login");
    }
  };

  return (
    <>
      <Button variant={"outline"} className="w-full" onClick={handleGoogleLogin}>
        Sign in with Google <AiOutlineGoogle/>
      </Button>
    </>
  );
};
