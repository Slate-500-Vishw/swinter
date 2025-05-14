"use client";
import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { ButtonShadcn } from "@/components/ui/button";
import { AiOutlineGithub } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GithubLogin = () => {
  const auth = getAuth();
  const router = useRouter();

  const handleGithubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      toast.success("Logged in Successfully!");
      router.push("/theme");
    } catch (error) {
      console.error(error);
      toast.error("There was an error in login");
    }
  };

  return (
    <ButtonShadcn
      variant={"outline"}
      className="w-full mt-5"
      onClick={handleGithubLogin}
    >
      Sign in with GitHub <AiOutlineGithub />
    </ButtonShadcn>
  );
};
