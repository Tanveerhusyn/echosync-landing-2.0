declare namespace JSX {
  interface IntrinsicElements {
    'zapier-workflow': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        'sign-up-email'?: string;
        'sign-up-first-name'?: string;
        'sign-up-last-name'?: string;
        'client-id'?: string;
        'theme'?: string;
        'intro-copy-display'?: string;
        'manage-zaps-display'?: string;
        'guess-zap-display'?: string;
        'app-search-bar-display'?: string;
        'template-ids'?: string;
        'template-cta-display'?: string;
        'zap-create-from-scratch-display'?: string;
      },
      HTMLElement
    >;
  }
} 