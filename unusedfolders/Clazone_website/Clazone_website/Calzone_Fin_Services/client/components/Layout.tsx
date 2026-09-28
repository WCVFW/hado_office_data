import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import Hero from "@/pages/Hero";

export default function Layout({ children }: { children: ReactNode }) {

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <HeaderNav logout={function (): void {
        throw new Error("Function not implemented.");
      } }  />
      <Hero/>
      <Footer />
    </div>
  );
}
