"use client";

import { useState } from "react";

import dynamic from "next/dynamic";

const ZapierEmbed = dynamic(() => import("./zapier-embed"), {
  ssr: false,
});
export default function ZapierWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ZapierEmbed />
    </div>
  );
}
