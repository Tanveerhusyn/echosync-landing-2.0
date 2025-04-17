"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogHeader() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/echosync-logo.png"
            alt="EchoSync Logo"
            width={140}
            height={37}
            priority
            className="object-contain w-[140px] sm:w-[200px]"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/blog" className="gap-2">
              Blog
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
