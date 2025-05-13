import { getAuth, signInWithPopup } from "firebase/auth";
const auth = getAuth();
import { provider } from "@/app/firebase/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export const GithubLogin = () => {
  const router = useRouter();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      router.push("/");
      toast.success("Logged in Successfully!");
    })
    .catch((error) => {
      console.error(error);
      toast.error("There was error in login");
    });
};
