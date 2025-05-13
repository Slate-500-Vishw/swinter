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
      } else {
        return <>Welcome to Swinter</>;
      }
    });

    return () => unsubscribe();
  }, [router]);
  return (
    <>
      <div>
        <h1 className="text-3xl accent-color mt-40 flex justify-center">
          Welcome to Swinter
        </h1>
      </div>
    </>
  );
};

export default Page;
