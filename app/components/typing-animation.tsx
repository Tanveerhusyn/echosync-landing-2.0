"use client";

import React from "react";

interface TypingAnimationProps {
  lines: string[];
}

export default function TypingAnimation({ lines }: TypingAnimationProps) {
  return (
    <div className="typing-container">
      {lines.map((line, index) => (
        <span key={index} className="typing-line">
          {line}
        </span>
      ))}
      <style jsx global>{`
        .typing-container {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .typing-line {
          display: block;
          opacity: 0;
          animation: typingLine 0.5s forwards;
        }

        .typing-line:nth-child(1) {
          animation-delay: 0s;
        }
        .typing-line:nth-child(2) {
          animation-delay: 1.5s;
        }
        .typing-line:nth-child(3) {
          animation-delay: 3s;
        }
        .typing-line:nth-child(4) {
          animation-delay: 4.5s;
        }

        @keyframes typingLine {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
