"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

// Dynamically import client components with SSR disabled
const BlogHeader = dynamic(() => import("./blog-header"), {
  ssr: false,
  loading: () => <div className="border-b h-14 sm:h-16"></div>,
});

const BlogCTA = dynamic(() => import("./blog-cta"), {
  ssr: false,
  loading: () => (
    <div className="bg-primary/5 rounded-xl p-8 sm:p-10 mt-16 h-32"></div>
  ),
});

export function BlogHeaderWrapper() {
  return <BlogHeader />;
}

export function BlogCTAWrapper() {
  return <BlogCTA />;
}
