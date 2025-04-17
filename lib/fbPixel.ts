"use client";

import ReactPixel from "react-facebook-pixel";

const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "";

export const pixelInitialize = () => {
  // Don't initialize if no pixel ID or if not in browser
  if (!FACEBOOK_PIXEL_ID || typeof window === "undefined") return;

  const options = {
    autoConfig: true,
    debug: process.env.NODE_ENV !== "production",
  };

  ReactPixel.init(FACEBOOK_PIXEL_ID, undefined, options);
};

// Page view event
export const pageView = () => {
  if (!FACEBOOK_PIXEL_ID || typeof window === "undefined") return;
  ReactPixel.pageView();
};

// Standard events
export const event = (name: string, params = {}) => {
  if (!FACEBOOK_PIXEL_ID || typeof window === "undefined") return;
  ReactPixel.track(name, params);
};

// Custom events
export const trackCustom = (name: string, params = {}) => {
  if (!FACEBOOK_PIXEL_ID || typeof window === "undefined") return;
  ReactPixel.trackCustom(name, params);
};

// Facebook standard events for convenience
export const fbEvents = {
  addPaymentInfo: (params = {}) => event("AddPaymentInfo", params),
  addToCart: (params = {}) => event("AddToCart", params),
  addToWishlist: (params = {}) => event("AddToWishlist", params),
  completeRegistration: (params = {}) => event("CompleteRegistration", params),
  contact: (params = {}) => event("Contact", params),
  customizeProduct: (params = {}) => event("CustomizeProduct", params),
  donate: (params = {}) => event("Donate", params),
  findLocation: (params = {}) => event("FindLocation", params),
  initiateCheckout: (params = {}) => event("InitiateCheckout", params),
  lead: (params = {}) => event("Lead", params),
  purchase: (params = {}) => event("Purchase", params),
  schedule: (params = {}) => event("Schedule", params),
  search: (params = {}) => event("Search", params),
  startTrial: (params = {}) => event("StartTrial", params),
  submitApplication: (params = {}) => event("SubmitApplication", params),
  subscribe: (params = {}) => event("Subscribe", params),
  viewContent: (params = {}) => event("ViewContent", params),
};
