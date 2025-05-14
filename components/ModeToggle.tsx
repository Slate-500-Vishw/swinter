"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { ButtonShadcn } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function ModeToggle() {
  const { setTheme } = useTheme();

  const router = useRouter();

  const dark = () => {
    setTheme("dark");
    router.push("/home")
  }
  const light = () => {
    setTheme("light");
    router.push("/home");
  };
  const system = () => {
    setTheme("system");
    router.push("/home");
  };
  return (
    <>
      <div className="flex flex-col">
        <ButtonShadcn
          onClick={dark}
          className="bg-black text-white hover:bg-black/90"
        >
          Dark
        </ButtonShadcn>
        <ButtonShadcn
          onClick={light}
          className="bg-white text-black hover:bg-white/90"
        >
          Light
        </ButtonShadcn>
        <ButtonShadcn variant={"ghost"} onClick={system}>System</ButtonShadcn>
      </div>
      
    </>
  );
} 
