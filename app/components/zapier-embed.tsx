'use client';
import { useEffect } from 'react';
import Script from 'next/script';

export default function ZapierEmbed() {
  useEffect(() => {
    // Add the stylesheet dynamically
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.zapier.com/packages/partner-sdk/v0/zapier-elements/zapier-elements.css';
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <Script 
        src="https://cdn.zapier.com/packages/partner-sdk/v0/zapier-elements/zapier-elements.esm.js"
        type="module"
        strategy="lazyOnload"
      />
      
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <zapier-workflow
              sign-up-email="email_of_your_user@example.com"
              sign-up-first-name="first_name_of_your_user"
              sign-up-last-name="last_name_of_your_user"
              client-id="tkQbnGPhWY3uJb2LNi5SNG9QXG0kDNWiAntuMwIj"
              theme="light"
              intro-copy-display="show"
              manage-zaps-display="hide"
              guess-zap-display="hide"
              app-search-bar-display="show"
            ></zapier-workflow>
          `
        }}
      />
    </>
  );
} 