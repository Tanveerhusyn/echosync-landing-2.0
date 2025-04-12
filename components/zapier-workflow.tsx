'use client';

import { useEffect, useRef } from 'react';

interface ZapierWorkflowProps {
  'sign-up-email': string;
  'sign-up-first-name': string;
  'sign-up-last-name': string;
  'client-id': string;
  theme: string;
  'intro-copy-display': string;
  'manage-zaps-display': string;
  'guess-zap-display': string;
  'app-search-bar-display': string;
  'template-ids': string;
  'template-cta-display': string;
  'zap-create-from-scratch-display': string;
}

export default function ZapierWorkflow(props: ZapierWorkflowProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const element = document.createElement('zapier-workflow');
      Object.entries(props).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
      ref.current.appendChild(element);
    }
  }, [props]);

  return <div ref={ref} />;
} 