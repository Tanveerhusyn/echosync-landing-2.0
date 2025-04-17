"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogCTA() {
  return (
    <div className="bg-primary/5 rounded-xl p-8 sm:p-10 mt-16">
      <h3 className="!mt-0 !mb-4 text-2xl">Ready to Boost Your Reviews?</h3>
      <p className="!mb-8 text-lg">
        Start collecting more reviews automatically with EchoSync. Try it free
        for 14 days, no credit card required.
      </p>
      <Button
        asChild
        className="bg-gradient-to-r from-primary to-blue-900 hover:from-blue-900 hover:to-primary"
      >
        <Link href="/signup">Start Your Free Trial →</Link>
      </Button>
    </div>
  );
}
