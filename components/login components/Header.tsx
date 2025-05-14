import React from "react";
import Link from "next/link";
import { ButtonShadcn } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="container flex mx-auto justify-between h-[50px] items-center">
        <Link href={"/"}>
          <h1 className="text-3xl font-semibold ml-2">
            Swinter<span className="accent-color">.</span>
          </h1>
        </Link>
        <div className="md:flex hidden mr-2">
          <div>
            <ul className="flex items-center gap-5">
              <li>
                <Link href={"/home"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/features"}>Features</Link>
              </li>
              <li>
                <Link href={"/login"}>
                  <ButtonShadcn variant={"secondary"}>Login</ButtonShadcn>
                </Link>{" "}
              </li>
              <li>
                <Link href={"/signup"}>
                  <ButtonShadcn variant={"secondary"}>Sign Up</ButtonShadcn>
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex md:hidden mr-2">
          <Sheet>
            <SheetTrigger>
              <IoIosMenu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div>
                <ul className="flex mr-5 items-end flex-col gap-5">
                  <li>
                    <Link href={"/home"}>Home</Link>
                  </li>
                  <li>
                    <Link href={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link href={"/features"}>Features</Link>
                  </li>
                  <li>
                    <Link href={"/login"}>
                      <ButtonShadcn variant={"secondary"}>Login</ButtonShadcn>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/signup"}>
                      <ButtonShadcn variant={"secondary"}>Sign Up</ButtonShadcn>
                    </Link>
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
