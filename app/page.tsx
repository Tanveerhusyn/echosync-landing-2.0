"use client";
import Link from "next/link";
import {
  ArrowRight,
  BarChart2,
  Calendar,
  CheckCircle,
  Globe,
  Mail,
  MessageSquare,
  Play,
  Smartphone,
  Zap,
  Star,
  TrendingUp,
  ThumbsUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Globe className="h-6 w-6 text-primary" />
            <span>EchoSync</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-primary"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium hover:text-primary"
            >
              Login
            </Link>
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-blue-900 hover:from-blue-900 hover:to-primary"
            >
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Automate Your Review Collection Process
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Boost your online reputation with our powerful review
                    request system. Collect more reviews, improve customer
                    satisfaction, and grow your business.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="px-8 bg-gradient-to-r from-primary to-blue-900 hover:from-blue-900 hover:to-primary"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>14-day free trial</span>
                  </div>
                </div>
              </div>

              {/* EchoSync System Infographic - Clean Design */}
              <div className="mx-auto lg:mx-0 relative">
                <div className="relative w-full h-[450px] bg-[#f8fafc] dark:bg-gray-900/30 rounded-xl overflow-hidden border shadow-sm">
                  {/* Large Circle Background - Expanded */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[90%] h-[90%] rounded-full border border-gray-200 dark:border-gray-700/30"></div>
                  </div>

                  {/* Central Hub - Perfectly Centered with Animation */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-md transition-all duration-500 hover:shadow-lg hover:scale-105 animate-[subtle-pulse_3s_ease-in-out_infinite]">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <div className="mt-2 text-center w-full">
                      <span className="text-sm font-medium">
                        EchoSync Platform
                      </span>
                    </div>
                  </div>

                  {/* Top - Data Sources - With Animation */}
                  <div className="absolute top-[8%] left-1/2 transform -translate-x-1/2 text-center">
                    <div className="w-14 h-14 mx-auto bg-white dark:bg-gray-800 rounded-full shadow-sm flex items-center justify-center border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:scale-110 animate-[subtle-pulse_4s_ease-in-out_infinite_0.5s]">
                      <BarChart2 className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="mt-2">
                      <span className="text-sm font-medium">Data Sources</span>
                      <p className="text-xs text-gray-500 mt-1">
                        CRM & CSV Imports
                      </p>
                    </div>
                  </div>

                  {/* Right - Campaign Engine - With Animation */}
                  <div className="absolute top-1/2 right-[8%] transform -translate-y-1/2 text-center">
                    <div className="w-14 h-14 mx-auto bg-white dark:bg-gray-800 rounded-full shadow-sm flex items-center justify-center border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:scale-110 animate-[subtle-pulse_4s_ease-in-out_infinite_1s]">
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="mt-2">
                      <span className="text-sm font-medium">
                        Campaign Engine
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        Automated Workflows
                      </p>
                    </div>
                  </div>

                  {/* Bottom - Results - With Animation */}
                  <div className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2 text-center">
                    <div className="w-14 h-14 mx-auto bg-white dark:bg-gray-800 rounded-full shadow-sm flex items-center justify-center border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:scale-110 animate-[subtle-pulse_4s_ease-in-out_infinite_1.5s]">
                      <Star className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="mt-2">
                      <span className="text-sm font-medium">
                        Review Results
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        Growth & Insights
                      </p>
                    </div>
                  </div>

                  {/* Left - AI Response - With Animation */}
                  <div className="absolute top-1/2 left-[8%] transform -translate-y-1/2 text-center">
                    <div className="w-14 h-14 mx-auto bg-white dark:bg-gray-800 rounded-full shadow-sm flex items-center justify-center border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:scale-110 animate-[subtle-pulse_4s_ease-in-out_infinite_2s]">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="mt-2">
                      <span className="text-sm font-medium">AI Response</span>
                      <p className="text-xs text-gray-500 mt-1">
                        Smart Engagement
                      </p>
                    </div>
                  </div>

                  {/* Stats Card - With Animation */}
                  <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md animate-[fade-in_1s_ease-in-out]">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-xs font-medium">
                          92% Positive
                        </span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-xs font-medium">27% Growth</span>
                      </div>
                    </div>
                  </div>

                  {/* Add keyframes for animations */}
                  <style jsx global>{`
                    @keyframes subtle-pulse {
                      0% {
                        transform: scale(1);
                      }
                      50% {
                        transform: scale(1.01);
                      }
                      100% {
                        transform: scale(1);
                      }
                    }

                    @keyframes fade-in {
                      0% {
                        opacity: 0;
                      }
                      50% {
                        opacity: 0.5;
                      }
                      100% {
                        opacity: 1;
                      }
                    }
                  `}</style>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted to-background z-0"></div>

          {/* Header */}
          <div className="container relative z-10 px-4 md:px-6 mb-16">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Everything You Need to Boost Reviews
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive platform provides all the tools you need to
                  collect, manage, and leverage customer reviews.
                </p>
              </div>
            </div>
          </div>

          {/* Campaign Management - Interactive Interface */}
          <div className="container relative z-10 px-4 md:px-6 mb-24">
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
                    Effortlessly manage review campaigns from a single dashboard
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
                          Send review requests via email, SMS, or social media
                          messaging
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
                        <Zap className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-sm font-medium">
                            Zapier Integration
                          </div>
                          <div className="text-xs text-gray-500">
                            Connect with 5,000+ apps
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
                          <div className="flex items-center gap-2 p-2 border rounded bg-gray-50 dark:bg-gray-700">
                            <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-blue-600"
                              >
                                <path
                                  fill="currentColor"
                                  d="M18.354 4.646a2.5 2.5 0 0 0-3.536 0l-10 10a2.5 2.5 0 1 0 3.536 3.536l10-10a2.5 2.5 0 0 0 0-3.536zm-1.768 1.768l-10 10a.5.5 0 1 1-.708-.708l10-10a.5.5 0 0 1 .708.708z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M7.354 17.646a.5.5 0 1 0-.708.708.5.5 0 0 0 .708-.708zm3.292-3.292a.5.5 0 1 0-.708.708.5.5 0 0 0 .708-.708zm3.292-3.292a.5.5 0 1 0-.708.708.5.5 0 0 0 .708-.708zm3.292-3.292a.5.5 0 1 0-.708.708.5.5 0 0 0 .708-.708z"
                                />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium">
                                Salesforce
                              </div>
                              <div className="text-xs text-gray-500">
                                Connected • 1,245 contacts
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 p-2 border rounded bg-gray-50 dark:bg-gray-700">
                            <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-orange-500"
                              >
                                <path
                                  fill="currentColor"
                                  d="M4.698 3.5a1.198 1.198 0 1 0 0 2.396 1.198 1.198 0 0 0 0-2.396zm15.993 8.954c-.085-.206-.34-.338-.557-.338h-3.99c-.217 0-.472.132-.557.338l-1.838 4.43c-.085.206.023.376.24.376h1.6c.217 0 .472-.132.557-.338l.318-.764h3.34l.318.764c.085.206.34.338.557.338h1.6c.217 0 .325-.17.24-.376l-1.838-4.43zm-3.643 2.446l.799-1.924h.085l.799 1.924h-1.683zm-8.307-2.446c-.085-.206-.34-.338-.557-.338H4.194c-.217 0-.472.132-.557.338l-1.838 4.43c-.085.206.023.376.24.376h1.6c.217 0 .472-.132.557-.338l.318-.764h3.34l.318.764c.085.206.34.338.557.338h1.6c.217 0 .325-.17.24-.376l-1.838-4.43zm-3.643 2.446l.799-1.924h.085l.799 1.924H5.098zm8.307-2.446c-.085-.206-.34-.338-.557-.338h-3.99c-.217 0-.472.132-.557.338l-1.838 4.43c-.085.206.023.376.24.376h1.6c.217 0 .472-.132.557-.338l.318-.764h3.34l.318.764c.085.206.34.338.557.338h1.6c.217 0 .325-.17.24-.376l-1.838-4.43zm-3.643 2.446l.799-1.924h.085l.799 1.924h-1.683z"
                                />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium">HubSpot</div>
                              <div className="text-xs text-gray-500">
                                Connected • 876 contacts
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 p-2 border rounded bg-gray-50 dark:bg-gray-700">
                            <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-green-600"
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

          {/* Review Platforms Integration - NEW SECTION */}
          <div className="container relative z-10 px-4 md:px-6 mb-24">
            <div className="relative bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-900/10 rounded-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm mb-6">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">
                      Multi-Platform Integration
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    Collect and manage reviews across all major platforms
                  </h3>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold">
                          Google Reviews Integration
                        </h4>
                        <p className="text-gray-500">
                          Currently supporting Google Reviews with full
                          management capabilities
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold">Expansion roadmap</h4>
                        <p className="text-gray-500">
                          Support for Facebook, Yelp, and other platforms coming
                          soon
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold">Unified dashboard</h4>
                        <p className="text-gray-500">
                          Monitor and respond to all your Google reviews in one
                          place
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-bold">Review widgets</h4>
                        <p className="text-gray-500">
                          Showcase your best Google reviews on your website with
                          customizable widgets
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden border p-6">
                      <h4 className="font-medium mb-4">Platform Support</h4>

                      <div className="grid grid-cols-3 gap-4">
                        {/* Google */}
                        <div className="flex flex-col items-center justify-center p-3 rounded-lg border bg-white hover:shadow-md transition-shadow">
                          <div className="w-12 h-12 flex items-center justify-center mb-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="w-10 h-10"
                            >
                              <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                              />
                              <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                              />
                              <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                              />
                              <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                              />
                            </svg>
                          </div>
                          <div className="text-sm font-medium text-center">
                            Google
                          </div>
                          <div className="text-xs text-green-600 mt-1">
                            Available now
                          </div>
                        </div>

                        {/* Facebook */}
                        <div className="flex flex-col items-center justify-center p-3 rounded-lg border bg-white/60 hover:shadow-md transition-shadow opacity-70">
                          <div className="w-12 h-12 flex items-center justify-center mb-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="w-10 h-10"
                            >
                              <path
                                fill="#1877F2"
                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                              />
                            </svg>
                          </div>
                          <div className="text-sm font-medium text-center">
                            Facebook
                          </div>
                          <div className="text-xs text-blue-600 mt-1">
                            Coming soon
                          </div>
                        </div>

                        {/* Yelp */}
                        <div className="flex flex-col items-center justify-center p-3 rounded-lg border bg-white/60 hover:shadow-md transition-shadow opacity-70">
                          <div className="w-12 h-12 flex items-center justify-center mb-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="w-10 h-10"
                            >
                              <path
                                fill="#D32323"
                                d="M21.111 18.226c-.141.969-2.119 3.483-3.029 3.847-.311.124-.611.094-.85-.09-.154-.12-.314-.365-2.447-3.827l-.633-1.032c-.244-.37-.199-.857.104-1.229.297-.359.857-.494 1.255-.287l1.86.56c2.822.847 3.384 1.014 3.58 1.219.278.275.321.674.16 1.039zm.17-3.032c-.297.283-3.908.193-5.094.157-.346-.01-.699-.175-.799-.648-.099-.479.099-.957.347-1.167.245-.21 3.356-1.489 3.851-1.688.319-.129.646-.157.915-.015.33.173.509.484.509.847.001.53-.49 2.252-.729 2.514zm-8.965-7.988c.313-.395.355-.935.096-1.335-.233-.361-3.005-3.54-3.39-3.982-.316-.356-.656-.428-1.035-.212-.328.186-.656.479-.656 1.344 0 2.272.161 6.224.161 6.224.017.51.283.83.755.937.662.152 1.523-.346 1.81-.801l2.259-2.175zm.396 5.38c.078-.476-.05-1.069-.575-1.313-.396-.186-4.457-1.274-4.95-1.401-.545-.142-.93.044-1.111.5-.169.421-.04.861.407 1.229.407.336 4.328 3.133 4.809 3.438.385.245.847.196 1.111-.169.247-.345.428-.848.309-1.284zm-3.858 8.01c-.061-.52-.662-.809-1.156-.702-.488.106-1.127.034-1.127 1.478 0 .966.067 3.119.033 3.812-.035.7.244 1.127.825 1.193.577.064 1.371-.323 1.566-.917.191-.582.262-4.475-.141-4.864z"
                              />
                            </svg>
                          </div>
                          <div className="text-sm font-medium text-center">
                            Yelp
                          </div>
                          <div className="text-xs text-blue-600 mt-1">
                            Coming soon
                          </div>
                        </div>

                        {/* TripAdvisor */}
                        <div className="flex flex-col items-center justify-center p-3 rounded-lg border bg-white/60 hover:shadow-md transition-shadow opacity-70">
                          <div className="w-12 h-12 flex items-center justify-center mb-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="w-10 h-10"
                            >
                              <circle cx="12" cy="12" r="11" fill="#00AA6C" />
                              <circle cx="12" cy="12" r="9" fill="white" />
                              <circle cx="7" cy="12" r="2" fill="#00AA6C" />
                              <circle cx="17" cy="12" r="2" fill="#00AA6C" />
                              <circle cx="12" cy="12" r="3" fill="#00AA6C" />
                              <circle cx="12" cy="12" r="1.5" fill="white" />
                            </svg>
                          </div>
                          <div className="text-sm font-medium text-center">
                            TripAdvisor
                          </div>
                          <div className="text-xs text-blue-600 mt-1">
                            Coming soon
                          </div>
                        </div>

                        {/* Trustpilot */}
                        <div className="flex flex-col items-center justify-center p-3 rounded-lg border bg-white/60 hover:shadow-md transition-shadow opacity-70">
                          <div className="w-12 h-12 flex items-center justify-center mb-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="w-10 h-10"
                            >
                              <path
                                fill="#00B67A"
                                d="M22.94 11.34H15.2l-2.4-7.8-2.4 7.8H3.06l6.32 4.59-2.4 7.8 6.32-4.59 6.32 4.59-2.4-7.8 5.72-4.59z"
                              />
                            </svg>
                          </div>
                          <div className="text-sm font-medium text-center">
                            Trustpilot
                          </div>
                          <div className="text-xs text-blue-600 mt-1">
                            Coming soon
                          </div>
                        </div>

                        {/* BBB */}
                        <div className="flex flex-col items-center justify-center p-3 rounded-lg border bg-white/60 hover:shadow-md transition-shadow opacity-70">
                          <div className="w-12 h-12 flex items-center justify-center mb-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              className="w-10 h-10"
                            >
                              <path
                                fill="#0A549C"
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                              />
                              <path
                                fill="#0A549C"
                                d="M9.25 7.5h2c1.1 0 2 .9 2 2 0 .55-.22 1.05-.59 1.41.37.36.59.86.59 1.41 0 1.1-.9 2-2 2h-2c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1zm1 2.5h1v-1h-1v1zm0 3h1v-1h-1v1z"
                              />
                              <path
                                fill="#0A549C"
                                d="M14.75 7.5h2c1.1 0 2 .9 2 2 0 .55-.22 1.05-.59 1.41.37.36.59.86.59 1.41 0 1.1-.9 2-2 2h-2c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1zm1 2.5h1v-1h-1v1zm0 3h1v-1h-1v1z"
                              />
                            </svg>
                          </div>
                          <div className="text-sm font-medium text-center">
                            BBB
                          </div>
                          <div className="text-xs text-blue-600 mt-1">
                            Coming soon
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex justify-center">
                        <Button variant="outline" className="text-sm">
                          Learn About Our Platform Roadmap
                        </Button>
                      </div>
                    </div>

                    <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <div>
                          <div className="text-sm font-medium">
                            Google Reviews
                          </div>
                          <div className="text-xs text-gray-500">
                            Fully supported now
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI-Powered Review Responses - Split Design */}
          <div className="container relative z-10 px-4 md:px-6">
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
                          Automatically respond to new reviews within seconds,
                          24/7
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
                              <p className="text-sm text-gray-600 mt-1">
                                Thank you so much for your kind words, Sarah!
                                We&apos;re thrilled that you had such a positive
                                experience. Our team works hard to provide
                                exceptional service, and we&apos;re glad it
                                showed. We look forward to serving you again
                                soon!
                              </p>
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
        </section>

        <section id="how-it-works" className="py-20">
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
                  Watch how easy it is to set up campaigns, track performance,
                  and boost your reviews.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-10 mb-16">
              <div className="relative rounded-xl overflow-hidden border shadow-xl">
                {/* Video Thumbnail with Play Button Overlay */}
                <div className="relative aspect-video bg-black">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-black/80 flex items-center justify-center">
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <div className="w-3/4 max-w-2xl bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4 mb-8">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="h-5 w-40 bg-gray-200/20 rounded"></div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-1/4 space-y-2">
                            <div className="h-8 w-full bg-blue-500/30 rounded"></div>
                            <div className="h-8 w-full bg-blue-500/20 rounded"></div>
                            <div className="h-8 w-full bg-blue-500/20 rounded"></div>
                            <div className="h-8 w-full bg-blue-500/20 rounded"></div>
                          </div>
                          <div className="w-3/4 space-y-3">
                            <div className="h-10 w-full bg-gray-200/20 rounded-lg"></div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="h-24 bg-gray-200/10 rounded-lg border border-white/10"></div>
                              <div className="h-24 bg-gray-200/10 rounded-lg border border-white/10"></div>
                            </div>
                            <div className="h-32 w-full bg-gray-200/10 rounded-lg border border-white/10"></div>
                          </div>
                        </div>
                      </div>
                      <div className="text-white text-xl font-medium mb-2">
                        EchoSync Platform Demo
                      </div>
                      <div className="text-white/70 text-sm mb-6">
                        See how easy it is to boost your online reviews
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors duration-200 shadow-lg">
                      <Play className="h-10 w-10 text-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Video Controls Bar */}
                <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
                  <div className="text-sm font-medium">
                    EchoSync Platform Demo (3:45)
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-xs text-gray-400">HD</div>
                    <div className="text-xs text-gray-400">CC</div>
                    <div className="text-xs text-gray-400">1x</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-primary text-primary-foreground py-20"
          id="contact"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Contact Us
                </h2>
                <p className="text-primary-foreground/80 md:text-xl">
                  Have questions about our services? Get in touch with our team
                  and we&apos;ll be happy to help you.
                </p>

                <div className="space-y-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-xl">Email</h3>
                      <p className="text-primary-foreground/80 mt-1">
                        info@echosync.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-xl">Phone</h3>
                      <p className="text-primary-foreground/80 mt-1">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-xl">Office</h3>
                      <p className="text-primary-foreground/80 mt-1">
                        123 Review Street, San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Send us a message
                </h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-900 dark:text-gray-200"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-900 dark:text-gray-200"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-gray-900 dark:text-gray-200"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="How can we help you?"
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-gray-900 dark:text-gray-200"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      rows={4}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" id="blog">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Blog
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Latest Insights & Strategies
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the latest trends and best practices in customer
                  review management.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-background overflow-hidden shadow-sm">
                <div className="relative h-48 w-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-white/90 dark:bg-gray-800/90 p-3 shadow-lg">
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>March 15, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    7 Ways to Increase Customer Review Response Rates
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Learn proven strategies to encourage more customers to leave
                    reviews and boost your online reputation.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 text-primary"
                        >
                          <path
                            fill="currentColor"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Alex Morgan</span>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary/80"
                    >
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-background overflow-hidden shadow-sm">
                <div className="relative h-48 w-full bg-gradient-to-br from-red-100 to-orange-50 dark:from-red-900/30 dark:to-orange-800/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-white/90 dark:bg-gray-800/90 p-3 shadow-lg">
                      <MessageSquare className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>March 8, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    How to Handle Negative Reviews Professionally
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Turn negative feedback into an opportunity to showcase your
                    excellent customer service and commitment.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 text-primary"
                        >
                          <path
                            fill="currentColor"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Jamie Chen</span>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary/80"
                    >
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-background overflow-hidden shadow-sm">
                <div className="relative h-48 w-full bg-gradient-to-br from-green-100 to-teal-50 dark:from-green-900/30 dark:to-teal-800/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-white/90 dark:bg-gray-800/90 p-3 shadow-lg">
                      <BarChart2 className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>March 1, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    The Impact of Reviews on Local SEO Performance
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Discover how customer reviews directly influence your local
                    search rankings and visibility.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 text-primary"
                        >
                          <path
                            fill="currentColor"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 0 1-6 3.22z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">Taylor Wilson</span>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary/80"
                    >
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                View all articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-muted py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Boost Your Reviews?
                </h2>
                <p className="text-gray-500 md:text-xl">
                  Join thousands of businesses that are already using our
                  platform to improve their online reputation.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="px-8 bg-gradient-to-r from-primary to-blue-900 hover:from-blue-900 hover:to-primary"
                  >
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule Demo
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0">
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-800/30">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 max-w-md bg-white/90 dark:bg-gray-800/90 rounded-lg p-6 shadow-lg">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                            <Star className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-bold">
                              Start collecting reviews today
                            </h3>
                            <p className="text-sm text-gray-500">
                              Set up your first campaign in minutes
                            </p>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-8 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
                          <div className="h-8 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
                          <div className="h-8 w-3/4 bg-primary rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <Globe className="h-6 w-6 text-primary" />
                <span>EchoSync</span>
              </div>
              <p className="text-sm text-gray-500 max-w-xs">
                Automate your review collection process and boost your online
                reputation with our powerful review request system.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Product</h3>
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
              <h3 className="text-sm font-medium mb-4">Company</h3>
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
              <h3 className="text-sm font-medium mb-4">Legal</h3>
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
          <div className="mt-12 border-t pt-8 text-center text-sm text-gray-500">
            <p>© 2025 EchoSync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
