"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pixelInitialize, pageView } from "@/lib/fbPixel";

export default function FacebookPixel(): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize Facebook Pixel
    pixelInitialize();
  }, []);

  useEffect(() => {
    // Track page views when the route changes
    if (pathname) {
      pageView();
    }
  }, [pathname, searchParams]);

  return null;
}
