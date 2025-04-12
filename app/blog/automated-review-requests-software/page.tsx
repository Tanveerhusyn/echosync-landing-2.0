"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      <main className="py-12">
        <article className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 rounded-full">
                  Guide
                </div>
                <span className="text-sm text-gray-500">12 min read</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">Feb 15, 2024</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold mb-6">
                Maximize Your Reviews with Automated Review Requests Software
              </h1>

              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <div className="flex-shrink-0">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/Profile pic.jpeg"
                      alt="Faizan M"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-medium">Written by Faizan M</div>
                  <div className="text-sm text-gray-500">
                    Founder & CEO at EchoSync
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src="/Blog 1.png"
                alt="Automated Review Requests Software"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-gray max-w-[680px] mx-auto prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6 prose-ul:my-6 prose-li:text-gray-600 prose-li:leading-relaxed">
              <p className="text-lg sm:text-xl !leading-relaxed text-gray-700 mb-8 max-w-[650px]">
                Automated review requests software is like having a little
                helper that nudges your customers to leave feedback without you
                lifting a finger. For busy business owners racing against time,
                this automation is a game-changer in building your online
                reputation.
              </p>

              <div className="bg-muted/50 p-6 sm:p-8 rounded-xl mb-12">
                <h2 className="!mt-0 !mb-6 text-xl sm:text-2xl">
                  Key Takeaways
                </h2>
                <ul className="space-y-4 !mt-0 !mb-0">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Automated review requests save time by handling customer
                      feedback prompts without manual effort
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      The software can boost a business&apos;s online presence
                      by ensuring a steady stream of customer reviews
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Features like trigger-based requests and data integration
                      make the process smooth and personalized
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Choosing the right platform is crucial for tailoring
                      review requests to fit your brand&apos;s voice
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      Automation helps businesses maintain consistent
                      communication with customers, enhancing loyalty
                    </span>
                  </li>
                </ul>
              </div>

              <section className="mb-12">
                <h2>Understanding Automated Review Requests Software</h2>
                <div className="h-4"></div>

                <div className="space-y-8">
                  <div>
                    <h3>What is Automated Review Requests Software?</h3>
                    <p>
                      <strong>
                        The Digital Assistant for Customer Feedback:
                      </strong>{" "}
                      Automated review requests software is like your digital
                      assistant, nudging customers to share their thoughts about
                      your product or service. Imagine having a review bot that
                      sends a message to every customer after they make a
                      purchase, asking them to leave a review.
                    </p>
                    <p>
                      <strong>Simplified Process:</strong> These tools can
                      simplify the process, making it easier for businesses to
                      collect feedback without manually reaching out to each
                      customer.
                    </p>
                  </div>

                  <div>
                    <h3>How Does It Work?</h3>
                    <p>
                      <strong>Trigger-Based Automation:</strong> The magic
                      happens when you set up triggers within the software. When
                      certain actions occur—like a purchase or the completion of
                      a service—the software automatically sends a review
                      request.
                    </p>
                    <p>
                      <strong>Personalization Features:</strong> You can
                      customize these messages to reflect your brand&apos;s
                      voice and even personalize them with customer details.
                      This automation ensures that every customer interaction
                      ends with a gentle prompt to share their experience,
                      making the process seamless.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>Benefits of Using Automated Review Requests Software</h2>
                <ul className="space-y-4 list-none !pl-0">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong>Saves Time:</strong> Forget about manually asking
                      each customer for a review. Automation handles it all,
                      freeing up your time for other tasks.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong>Increases Review Volume:</strong> With consistent
                      prompts, you&apos;ll likely see more reviews coming in,
                      boosting your online presence.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <strong>Enhances Customer Engagement:</strong> By using
                      tools like review automation, you show customers that
                      their feedback matters, which can improve their overall
                      experience with your brand.
                    </div>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <div className="bg-muted/50 p-6 sm:p-8 rounded-xl">
                  <h3 className="!mt-0 !mb-6">Pricing Comparison</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="font-medium">Platform</div>
                    <div className="font-medium">Monthly Cost</div>
                    <div>EchoSync</div>
                    <div>Starts at $29/mo</div>
                    <div>Birdeye</div>
                    <div>Starts at $199/mo</div>
                    <div>Podium</div>
                    <div>Starts at $399/mo</div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>Customizing Review Request Templates</h2>
                <div className="space-y-8">
                  <div>
                    <p>
                      <strong>Personalization Strategy:</strong> Once
                      you&apos;ve got your platform, it&apos;s time to tailor
                      your review requests. Personalization is key here. Use the
                      customer&apos;s name and mention their recent purchase to
                      make it feel genuine.
                    </p>
                    <p>
                      <strong>Keep It Simple:</strong> A simple, honest message
                      can go a long way. You don&apos;t need to write a
                      novel—just express a real interest in their feedback.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>Determining Timing and Frequency</h2>
                <div className="space-y-8">
                  <div>
                    <p>
                      <strong>Perfect Timing:</strong> Timing can make or break
                      your review request strategy. If you ask too soon, it
                      might seem pushy. Wait too long, and the moment&apos;s
                      lost. The sweet spot is usually a few days after the
                      customer&apos;s experience.
                    </p>
                    <p>
                      <strong>Finding the Right Balance:</strong> Keep an eye on
                      how often you send these requests. Overdoing it can annoy
                      customers and harm your reputation. It&apos;s all about
                      balance—enough to remind, but not enough to nag.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2>Wrapping It Up</h2>
                <div className="space-y-8">
                  <div>
                    <p>
                      <strong>The Power of Automation:</strong> Automated review
                      requests are like having a little helper that boosts your
                      business without you lifting a finger. They save time,
                      keep your online presence buzzing, and make sure your
                      customers feel heard.
                    </p>
                    <p>
                      <strong>Cost-Effective Solution:</strong> Plus, with tools
                      like EchoSync, it&apos;s affordable—less than what
                      you&apos;d spend on a coffee each day.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <div className="bg-primary/5 rounded-xl p-8 sm:p-10 mt-16">
                <h3 className="!mt-0 !mb-4 text-2xl">
                  Ready to Boost Your Reviews?
                </h3>
                <p className="!mb-8 text-lg">
                  Start collecting more reviews automatically with EchoSync. Try
                  it free for 14 days, no credit card required.
                </p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-blue-900 hover:from-blue-900 hover:to-primary"
                >
                  <Link href="/signup">Start Your Free Trial →</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Simple Footer */}
      <footer className="border-t bg-muted mt-12">
        <div className="container px-4 py-8 text-center text-sm text-gray-500">
          <p>© 2024 EchoSync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
