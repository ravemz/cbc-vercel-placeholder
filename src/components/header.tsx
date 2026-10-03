"use client";

import Image from "next/image";
import { Button } from "./button";

export default function Header() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sticky top-0 z-50 bg-white w-full border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 flex flex-row justify-between items-center">
          <Image src="/logo.svg" alt="CBCatalyst Logo" width={150} height={26} priority />
          <Button onClick={scrollToWaitlist} className="font-semibold">
            Join the Waitlist
          </Button>
        </div>
      </div>
    </div>
  );
}
