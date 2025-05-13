import { getAuth, signInWithPopup } from "firebase/auth";
import { google_provider } from "@/app/firebase/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const auth = getAuth();

export const GoogleLogin = () => {
  const router = useRouter()
  signInWithPopup(auth, google_provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      router.push("/")
      toast.success("Logged in Successfully!")
    })
    .catch((error) => {
      console.error(error);
      toast.error("There was error in login")
    });
};
