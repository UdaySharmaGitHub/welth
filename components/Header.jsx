import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50 border-b">
      <nav className="container flex justify-between mx-auto px-4 py-4 items-center">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="WELTH LOGO"
            className="rounded-2xl h-14 w-auto object-contain"
            width={250}
            height={100}
          />
        </Link>

        {/* Login and Sign In Button */}
        <div className="flex items-center space-x-2">
          
          {/* If user is Signed In */}
          <SignedIn>
            {/* Dashboard Link */}
            <Link
              href={"/dashboard"}
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            {/* Transaction Link */}
            <Link href={"/transaction/create"}>
              <Button>
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          {/* If user is not Signed In */}
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
            <div className="hidden md:inline">
              <SignUpButton forceRedirectUrl="/dashboard">
                <Button>Get Started</Button>
              </SignUpButton>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-12 h-12",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};
