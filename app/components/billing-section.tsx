"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function BillingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
          <div className="space-y-2 sm:space-y-3">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Pricing
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter px-4">
              Choose Your Plan
            </h2>
            <p className="max-w-[900px] text-gray-500 text-base sm:text-lg md:text-xl px-4">
              Simple, transparent pricing that grows with your business
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="bg-background rounded-full p-1 inline-flex items-center mt-6 sm:mt-8 border">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm transition-all ${
                !isAnnual
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-3 sm:px-4 py-2 rounded-full flex items-center text-sm transition-all ${
                isAnnual
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Annual
              <span className="ml-1 sm:ml-2 bg-green-500 text-white text-xs px-1.5 sm:px-2 py-0.5 rounded-full">
                Save 40%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="relative bg-background rounded-2xl border p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Starter
            </h3>
            <div className="flex items-baseline gap-1">
              {isAnnual && (
                <span className="text-gray-500 line-through text-base sm:text-lg">
                  $29
                </span>
              )}
              <span className="text-3xl sm:text-4xl font-bold">
                ${isAnnual ? "17" : "29"}
              </span>
              <span className="text-gray-500">/mo</span>
            </div>
            <div className="text-xs sm:text-sm mt-2">
              {isAnnual ? (
                <span className="text-green-500">
                  Annual billing saves you $144
                </span>
              ) : (
                "Monthly billing"
              )}
            </div>
            <div className="mt-3 sm:mt-4 text-gray-500 text-sm">
              ~4 review requests a day
            </div>
            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  100 review requests/month
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">10 AI responses</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">Zapier automation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">24/7 email support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">Free setup call</span>
              </li>
            </ul>
            <Link
              href="https://admin.echosync.ai/"
              className="w-full mt-6 sm:mt-8 bg-gradient-to-r from-primary to-blue-900 hover:from-blue-900 hover:to-primary text-sm sm:text-base py-2.5 h-auto"
            >
              Start 14-day Free Trial →
            </Link>
          </div>

          {/* SMB Plan */}
          <div className="relative bg-background rounded-2xl border p-6 sm:p-8">
            <div className="absolute -top-3 right-4 sm:right-8 bg-gradient-to-r from-primary to-blue-900 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
              RECOMMENDED
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">SMB</h3>
            <div className="flex items-baseline gap-1">
              {isAnnual && (
                <span className="text-gray-500 line-through text-base sm:text-lg">
                  $79
                </span>
              )}
              <span className="text-3xl sm:text-4xl font-bold">
                ${isAnnual ? "47" : "79"}
              </span>
              <span className="text-gray-500">/mo</span>
            </div>
            <div className="text-xs sm:text-sm mt-2">
              {isAnnual ? (
                <span className="text-green-500">
                  Annual billing saves you $384
                </span>
              ) : (
                "Monthly billing"
              )}
            </div>
            <div className="mt-3 sm:mt-4 text-gray-500 text-sm">
              ~25 review requests a day
            </div>
            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  750 review requests/month
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">
                  Unlimited AI responses
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">Zapier automation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">24/7 email support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">Free setup call</span>
              </li>
            </ul>
            <Link
              href="https://admin.echosync.ai/"
              className="w-full mt-6 sm:mt-8 bg-gradient-to-r from-primary to-blue-900 hover:from-blue-900 hover:to-primary text-sm sm:text-base py-2.5 h-auto"
            >
              Start 14-day Free Trial →
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="relative bg-background rounded-2xl border p-6 sm:p-8 flex flex-col">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                Enterprise
              </h3>
              <div className="flex items-baseline gap-1">
                {isAnnual && (
                  <span className="text-gray-500 line-through text-base sm:text-lg">
                    $199
                  </span>
                )}
                <span className="text-3xl sm:text-4xl font-bold">
                  ${isAnnual ? "119" : "199"}
                </span>
                <span className="text-gray-500">/mo</span>
              </div>
              <div className="text-xs sm:text-sm mt-2">
                {isAnnual ? (
                  <span className="text-green-500">
                    Annual billing saves you $960
                  </span>
                ) : (
                  "Monthly billing"
                )}
              </div>
              <div className="mt-3 sm:mt-4 text-gray-500 text-sm">
                Ideal for high customer volume
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    3000 review requests/month
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    Everything in SMB Plan
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Priority support</span>
                </li>
              </ul>
              <div className="flex-1"></div>
              <Link
                href="https://admin.echosync.ai/"
                className="w-full mt-6 sm:mt-8 bg-gradient-to-r from-primary to-blue-900 hover:from-blue-900 hover:to-primary text-sm sm:text-base py-2.5 h-auto"
              >
                Start 14-day Free Trial →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
