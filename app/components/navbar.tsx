"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Menu, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center -ml-2 sm:-ml-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer"
          >
            <Image
              src="/echosync-logo.png"
              alt="EchoSync Logo"
              width={140}
              height={37}
              priority
              className="object-contain w-[140px] sm:w-[200px]"
            />
          </button>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:text-primary"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium hover:text-primary"
          >
            How It Works
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#integrations"
            className="text-sm font-medium hover:text-primary"
          >
            Integrations
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-primary"
          >
            Pricing
          </Link>
          <Link href="#blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/login"
            className="text-sm font-medium hover:text-primary hidden sm:block"
          >
            Login
          </Link>
          <Button
            variant="outline"
            className="text-sm px-3 py-2 h-auto"
            asChild
          >
            <Link
              href="https://calendly.com/faizanmd/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Free Demo
            </Link>
          </Button>
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-blue-900 hover:from-blue-900 hover:to-primary text-sm px-3 sm:px-4 h-auto py-2"
          >
            <Link href="https://admin.echosync.ai/">Get Started</Link>
          </Button>
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="container px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#integrations"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Integrations
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#blog"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/login"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
