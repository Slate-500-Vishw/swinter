import { getAuth, signInWithPopup } from "firebase/auth";
import { google_provider } from "@/app/firebase/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const auth = getAuth();

export const GoogleLogin = () => {
  signInWithPopup(auth, google_provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      toast.success("Logged in Successfully!")
    })
    .catch((error) => {
      console.error(error);
      toast.error("There was error in login")
    });
};
