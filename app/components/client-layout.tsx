"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";

// Dynamically import client components with SSR disabled
const FacebookPixel = dynamic(() => import("./FacebookPixel"), {
  ssr: false,
});

const GoogleAnalytics = dynamic(() => import("./google-analytics"), {
  ssr: false,
});

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <GoogleAnalytics />
      <FacebookPixel />
      {children}
    </>
  );
}
