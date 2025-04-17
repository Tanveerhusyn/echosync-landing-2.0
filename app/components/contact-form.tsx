"use client";

import { useState } from "react";
import { Mail, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <section
      className="bg-primary text-primary-foreground py-12 sm:py-16 md:py-20"
      id="contact"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Contact Us
            </h2>
            <p className="text-primary-foreground/80 text-base sm:text-lg md:text-xl">
              Have questions about our services? Get in touch with our team and
              we&apos;ll be happy to help you.
            </p>

            <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-white/10 p-2.5 sm:p-3 rounded-full">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg sm:text-xl">Email</h3>
                  <p className="text-primary-foreground/80 text-sm sm:text-base mt-0.5 sm:mt-1">
                    faizan@echosync.ai
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-white/10 p-2.5 sm:p-3 rounded-full">
                  <Smartphone className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg sm:text-xl">Phone</h3>
                  <p className="text-primary-foreground/80 text-sm sm:text-base mt-0.5 sm:mt-1">
                    215-205-9732
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-white/10 p-2.5 sm:p-3 rounded-full">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg sm:text-xl">Office</h3>
                  <p className="text-primary-foreground/80 text-sm sm:text-base mt-0.5 sm:mt-1">
                    2302 E Dakota St, Philadelphia PA 19125
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-5 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-5 sm:mb-6">
              Send us a message
            </h3>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const name = (
                  document.getElementById("name") as HTMLInputElement
                ).value;
                const email = (
                  document.getElementById("email") as HTMLInputElement
                ).value;
                const subject = (
                  document.getElementById("subject") as HTMLInputElement
                ).value;
                const message = (
                  document.getElementById("message") as HTMLTextAreaElement
                ).value;

                const mailtoLink = `mailto:faizan@echosync.ai?subject=${encodeURIComponent(
                  subject
                )}&body=${encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                )}`;
                window.location.href = mailtoLink;
              }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
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

                <div className="space-y-1.5">
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

              <div className="space-y-1.5">
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

              <div className="space-y-1.5">
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

              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 h-auto text-sm sm:text-base">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
