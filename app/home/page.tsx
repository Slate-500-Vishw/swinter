"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import {SideBar} from "@/components/home components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

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
        <SidebarProvider>
          <SideBar />
          <main>
            <SidebarTrigger />
            Hello
          </main>
        </SidebarProvider>
      </div>
    </>
  );
};

export default Page;
