import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart2,
  Calendar,
  CheckCircle,
  Globe,
  Mail,
  MessageSquare,
  Smartphone,
  Zap,
  Star,
  TrendingUp,
  ThumbsUp,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chatbot } from "./components/chatbot";
import BillingSection from "./components/billing-section";
import Navbar from "./components/navbar";
import ZapierWrapper from "./components/zapier-wrapper";
import TypingAnimation from "./components/typing-animation";

export default async function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="pt-8 sm:pt-12 md:pt-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[0.8fr,1.2fr] lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-1">
                <div className="space-y-4">
                  <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2">
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium text-center sm:text-left">
                      Increase Your Review Count by 500%
                    </p>
                    <div className="flex items-center justify-center">
                      <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400 animate-pulse-1" />
                      <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400 animate-pulse-2" />
                      <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400 animate-pulse-3" />
                      <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400 animate-pulse-4" />
                      <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400 animate-pulse-5" />
                    </div>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center sm:text-left">
                    Collect Customer Reviews on Autopilot
                  </h1>
                  <p className="text-muted-foreground">
                    Don&apos;t let your competitors outshine you. Start
                    collecting more reviews today.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-blue-900 hover:from-blue-900 hover:to-primary text-sm sm:text-base h-auto"
                  >
                    Start 14-day Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base h-auto"
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
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                    <span>14-day free trial</span>
                  </div>
                </div>
              </div>

              {/* Video Section */}
              <div className="mx-auto w-full order-2 lg:order-2 mt-6 sm:mt-8 lg:mt-0">
                <video
                  className="w-full h-auto rounded-xl object-contain"
                  autoPlay
                  muted
                  playsInline
                >
                  <source src="/Payment Successful.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 3-1.75 3v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 dark:text-white mb-6">
                  &quot;They help set it up and every customer gets a review
                  request automatically!&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-medium text-primary">B</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Bibi
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Small business owner
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-12 sm:py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  See EchoSync in Action
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Watch how easy it is automate review requests. Set once and
                  forget!
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-10 mb-16">
              <div className="relative rounded-xl overflow-hidden border shadow-xl">
                <div className="relative aspect-video">
                  <iframe
                    src="https://www.loom.com/embed/87e57c17d0fc4cd58d1cddb37843eab9?sid=d5c48772-b661-41d6-b006-584e6d36e3da"
                    frameBorder="0"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </div>

                {/* Video Controls Bar */}
                <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
                  <div className="text-sm font-medium">
                    EchoSync Platform Demo
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-xs text-gray-400">HD</div>
                    <div className="text-xs text-gray-400">1x</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-muted to-background z-0"></div>

          {/* Header */}
          <div className="container relative z-10 px-4 md:px-6 mb-12 sm:mb-16">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 sm:space-y-3">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter px-4">
                  Everything You Need to Boost Reviews
                </h2>
                <p className="max-w-[900px] text-gray-500 text-base sm:text-lg md:text-xl px-4"></p>
              </div>
            </div>
          </div>

          {/* Campaign Management - Interactive Interface */}
          <div className="container relative z-10 px-4 md:px-6 mb-16 sm:mb-20">
            <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/10 rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm mb-6">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">
                      Campaign Management
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    Set once and never worry about collecting reviews again
                  </h3>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold">Multiple data sources</h4>
                        <p className="text-gray-500">
                          Upload CSV files or connect directly to your CRM via
                          Zapier
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold">Automated workflows</h4>
                        <p className="text-gray-500">
                          Set up triggers to automatically send review requests
                          after purchases
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold">Multi-channel delivery</h4>
                        <p className="text-gray-500">
                          Send review requests via email or SMS
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold">
                          Real-time campaign analytics
                        </h4>
                        <p className="text-gray-500">
                          Track open rates, response rates, and conversion
                          metrics
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-10">
                      <div className="flex items-center gap-2">
                        <BarChart2 className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm font-medium">
                            Campaign Analytics
                          </div>
                          <div className="text-xs text-gray-500">
                            Track performance metrics
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden border">
                      <div className="bg-gray-100 dark:bg-gray-700 p-3 border-b">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Campaign Dashboard</h4>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-xs">Active</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h5 className="font-medium">Import Contacts</h5>
                          <div className="flex gap-2">
                            <div className="px-2 py-1 bg-primary/10 rounded text-xs font-medium text-primary">
                              Upload CSV
                            </div>
                            <div className="px-2 py-1 bg-primary/10 rounded text-xs font-medium text-primary">
                              Connect CRM
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3 mb-4">
                          {/* Hubspot */}
                          <div className="flex items-center gap-2 p-2 border rounded bg-gray-50 dark:bg-gray-700">
                            <div className="w-8 h-8 rounded bg-[#FF7A59]/10 flex items-center justify-center">
                              <svg
                                viewBox="0 0 512 512"
                                className="w-5 h-5 text-[#FF7A59]"
                              >
                                <path
                                  fill="currentColor"
                                  d="M473.6 256c0-120.2-97.4-217.6-217.6-217.6S38.4 135.8 38.4 256S135.8 473.6 256 473.6S473.6 376.2 473.6 256zM256 419.2c-89.9 0-163.2-73.3-163.2-163.2S166.1 92.8 256 92.8S419.2 166.1 419.2 256S345.9 419.2 256 419.2z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M256 149.3c-58.9 0-106.7 47.8-106.7 106.7c0 58.9 47.8 106.7 106.7 106.7c58.9 0 106.7-47.8 106.7-106.7C362.7 197.1 314.9 149.3 256 149.3z"
                                />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium">Hubspot</div>
                              <div className="text-xs text-gray-500">
                                Connect your CRM
                              </div>
                            </div>
                          </div>

                          {/* Jobber */}
                          <div className="flex items-center gap-2 p-2 border rounded bg-gray-50 dark:bg-gray-700">
                            <div className="w-8 h-8 rounded bg-[#31B0D5]/10 flex items-center justify-center">
                              <svg
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-[#31B0D5]"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12 2L2 7l10 5l10-5l-10-5zM2 17l10 5l10-5M2 12l10 5l10-5"
                                />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium">Jobber</div>
                              <div className="text-xs text-gray-500">
                                Sync field service data
                              </div>
                            </div>
                          </div>

                          {/* Quickbooks */}
                          <div className="flex items-center gap-2 p-2 border rounded bg-gray-50 dark:bg-gray-700">
                            <div className="w-8 h-8 rounded bg-[#2CA01C]/10 flex items-center justify-center">
                              <svg
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-[#2CA01C]"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 15c-2.48 0-4.5-2.02-4.5-4.5h9c0 2.48-2.02 4.5-4.5 4.5z"
                                />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium">
                                Quickbooks
                              </div>
                              <div className="text-xs text-gray-500">
                                Import customer data
                              </div>
                            </div>
                          </div>

                          {/* CSV Import */}
                          <div className="flex items-center gap-2 p-2 border rounded bg-gray-50 dark:bg-gray-700">
                            <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-blue-600"
                              >
                                <path
                                  fill="currentColor"
                                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 4h7v5h5v11H6V4zm8 3.5L16.5 10H14V7.5z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M8 12h8v1H8zm0 2h8v1H8zm0 2h5v1H8z"
                                />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium">
                                CSV Import
                              </div>
                              <div className="text-xs text-gray-500">
                                Last import • 532 contacts
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <Button className="w-full bg-gradient-to-r from-primary to-blue-900 hover:from-blue-900 hover:to-primary text-sm">
                            Create New Campaign
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                      <div className="flex items-center gap-2">
                        <BarChart2 className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm font-medium">
                            Response Rate
                          </div>
                          <div className="text-xs text-gray-500">
                            42% average conversion
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Local SEO Section */}
          <div className="container relative z-10 px-4 md:px-6 mb-16 sm:mb-20">
            <div className="relative bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-900/10 rounded-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>

              <div className="grid grid-cols-1 lg:grid-cols-[0.8fr,1.2fr] gap-6 sm:gap-8 p-6 sm:p-8 md:p-12">
                <div className="order-1 lg:order-1 space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Local SEO</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold">
                    Boost Your Local SEO
                  </h3>

                  <ul className="space-y-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg">
                          Rank higher on Google Maps
                        </h4>
                        <p className="text-gray-500 text-sm sm:text-base mt-1">
                          Improve your visibility in local search results with
                          strategic review management
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg">
                          Dominate local search results
                        </h4>
                        <p className="text-gray-500 text-sm sm:text-base mt-1">
                          Stand out from competitors with a strong review
                          profile and consistent ratings
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg">
                          Businesses with 200+ reviews earn 2x more
                        </h4>
                        <p className="text-gray-500 text-sm sm:text-base mt-1">
                          Higher review volume directly correlates with
                          increased revenue and customer trust
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg">
                          Local search optimization
                        </h4>
                        <p className="text-gray-500 text-sm sm:text-base mt-1">
                          Leverage customer reviews to improve your local search
                          rankings and visibility
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="order-2 lg:order-2">
                  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
                    <Image
                      src={encodeURI("/Plumber near me.svg")}
                      alt="Plumber working under sink with Google search results showing high ratings"
                      width={1600}
                      height={1000}
                      className="w-full h-auto object-contain scale-100 sm:scale-110"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI-Powered Review Responses */}
          <div className="container relative z-10 px-4 md:px-6 mb-16 sm:mb-20">
            <div className="relative bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm mb-6">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">
                      AI-Powered Responses
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    Respond to reviews using AI that sounds authentically human
                  </h3>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold">Instant AI responses</h4>
                        <p className="text-gray-500">
                          Respond to reviews within seconds using AI
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold">
                          Trained on your brand voice
                        </h4>
                        <p className="text-gray-500">
                          Our AI learns your unique communication style for
                          consistent responses
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold">
                          Professional handling of negative feedback
                        </h4>
                        <p className="text-gray-500">
                          De-escalate issues and showcase your excellent
                          customer service
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-10">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm font-medium">
                            Revenue Impact
                          </div>
                          <div className="text-xs text-gray-500">
                            35% more revenue for businesses that respond
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden border">
                      <div className="bg-gray-100 dark:bg-gray-700 p-3 border-b">
                        <div className="flex items-center gap-2">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                          <Star className="h-5 w-5 text-yellow-400" />
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="w-6 h-6 text-gray-600"
                            >
                              <path
                                fill="currentColor"
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">Sarah Johnson</div>
                            <p className="text-sm text-gray-600 mt-1">
                              Absolutely love this service! The staff was
                              incredibly helpful and the results exceeded my
                              expectations.
                            </p>
                          </div>
                        </div>

                        <div className="border-t pt-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 overflow-hidden flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-6 h-6 text-primary"
                              >
                                <path
                                  fill="currentColor"
                                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-primary">
                                Your Business
                              </div>
                              <div className="text-sm text-gray-600 mt-1">
                                <TypingAnimation
                                  lines={[
                                    "Thank you so much for your kind words, Sarah!",
                                    "We're thrilled that you had such a positive experience.",
                                    "Our team works hard to provide exceptional service, and we're glad it showed.",
                                    "We look forward to serving you again soon!",
                                  ]}
                                />
                              </div>
                              <div className="text-xs text-gray-400 mt-1">
                                AI-generated response • 2 minutes ago
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm font-medium">
                            Customer Satisfaction
                          </div>
                          <div className="text-xs text-gray-500">
                            92% positive sentiment
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integrations Section */}
          <div
            id="integrations"
            className="container relative z-10 px-4 md:px-6"
          >
            <div className="relative bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/20 dark:to-purple-900/10 rounded-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>

              <div className="p-6 sm:p-8 md:p-12">
                <div className="text-center mb-8 sm:mb-12">
                  <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm mb-4">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Integrations</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    Connect with Your Favorite Tools
                  </h3>
                  <p className="text-gray-500 max-w-2xl mx-auto">
                    Seamlessly integrate EchoSync with your existing workflow
                    using our Zapier integration. Connect with 5,000+ apps
                    including CRMs, email marketing tools, and more.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                  <ZapierWrapper />
                </div>
              </div>
            </div>
          </div>
        </section>

        <BillingSection />

        {/* Blog Section */}
        <section id="blog" className="py-12 sm:py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-2 text-center mb-8">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Resources
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
                Latest from Our Blog
              </h2>
              <p className="text-gray-500 text-base max-w-[600px]">
                Expert insights and strategies to help grow your business
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <article className="bg-background rounded-xl overflow-hidden border transition-all hover:shadow-lg">
                <div className="grid md:grid-cols-[1fr,1.2fr] gap-6">
                  <div className="relative h-full md:h-[300px]">
                    <Image
                      src="/Blog 1.png"
                      alt="Automated Review Requests Software"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <div className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 rounded-full">
                          Guide
                        </div>
                        <span className="text-sm text-gray-500">
                          12 min read
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground hover:text-primary transition-colors">
                        <Link href="/blog/automated-review-requests-software">
                          Maximize Your Reviews with Automated Request Software
                        </Link>
                      </h3>

                      <p className="text-gray-600 line-clamp-3 mb-4">
                        Automated review requests software is like having a
                        little helper that nudges your customers to leave
                        feedback without you lifting a finger. For busy business
                        owners racing against time, this automation is a
                        game-changer in building your online reputation.
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden">
                          <Image
                            src="/Profile pic.jpeg"
                            alt="Faizan M"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-sm">
                          <div className="font-medium">Faizan M</div>
                          <div className="text-gray-500">Feb 15, 2024</div>
                        </div>
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        className="text-primary hover:text-primary/90"
                      >
                        <Link
                          href="/blog/automated-review-requests-software"
                          className="inline-flex items-center gap-1"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted">
        <div className="container px-4 py-8 sm:py-12 md:px-6">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <Image
                  src="/echosync-logo.png"
                  alt="EchoSync Logo"
                  width={160}
                  height={42}
                  priority
                  className="object-contain min-w-[160px] sm:min-w-[200px]"
                />
              </div>
              <p className="text-sm text-gray-500 max-w-xs">
                AI-powered review management
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3 sm:mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#features"
                    className="text-gray-500 hover:text-primary"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-gray-500 hover:text-primary"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3 sm:mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3 sm:mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-primary">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 border-t pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-500">
            <p>© 2025 EchoSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <Chatbot />
    </div>
  );
}
