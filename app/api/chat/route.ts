import { NextResponse } from "next/server";
import { getLandingPageContent } from "../../../lib/landing-page-content";
import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 10; // requests per minute
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds

// Landing page content for context
const landingPageContent = getLandingPageContent();

export async function POST(req: Request) {
  try {
    console.log("Received chat request");

    // Get IP address for rate limiting
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    console.log("IP:", ip);

    // Check rate limit
    const now = Date.now();
    const rateLimitData = rateLimitMap.get(ip) || {
      count: 0,
      resetTime: now + RATE_LIMIT_WINDOW,
    };

    if (now > rateLimitData.resetTime) {
      // Reset if window has passed
      rateLimitData.count = 0;
      rateLimitData.resetTime = now + RATE_LIMIT_WINDOW;
    }

    if (rateLimitData.count >= RATE_LIMIT) {
      console.log("Rate limit exceeded for IP:", ip);
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Increment request count
    rateLimitData.count++;
    rateLimitMap.set(ip, rateLimitData);

    const { message } = await req.json();
    console.log("Received message:", message);

    if (!message) {
      console.log("No message provided");
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Generate response using OpenAI
    console.log("Calling OpenAI API...");
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant for EchoSync, a review management platform. Use the following context to answer questions:
          
          ${JSON.stringify(landingPageContent, null, 2)}
          
          Format your responses using these guidelines:
          1. Start with a clear, concise answer (1-2 sentences)
          2. Use proper paragraph breaks (double newline) between sections
          3. For lists, use precise bullet points with proper indentation:
             • First item
             • Second item
             • Third item
          4. Keep total response under 500 characters
          5. Use proper spacing and formatting
          6. Format example:
             "EchoSync helps businesses collect more reviews through automated processes.

             Key features include:
             • Automated review requests
             • AI-powered response generation
             • Multi-channel delivery options

             Start with a 14-day free trial to see the benefits."
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 200,
    });

    console.log("OpenAI response received");
    let response = completion.choices[0].message.content || "";

    // Ensure response is under 500 characters
    if (response.length > 500) {
      response = response.substring(0, 497) + "...";
    }

    return NextResponse.json({
      response,
      rateLimit: {
        remaining: RATE_LIMIT - rateLimitData.count,
        reset: rateLimitData.resetTime,
      },
    });
  } catch (error: unknown) {
    console.error("Detailed error in chat API:", {
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : "UnknownError",
    });
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
        details:
          process.env.NODE_ENV === "development" && error instanceof Error
            ? error.stack
            : undefined,
      },
      { status: 500 }
    );
  }
}
