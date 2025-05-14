"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/firebase/config";


const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth User:", user);
      if (!user) {
        router.push("/login");
        localStorage.clear();
      } else {
        localStorage.clear();
        router.push("/theme")
      }
    });

    return () => unsubscribe();
  }, [router]);
  return (
    <>
    </>
  )
};

export default Page;
