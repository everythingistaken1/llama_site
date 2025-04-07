var klaroConfig = {
    version: 1,
    elementID: 'klaro',
    noAutoLoad: false,
    htmlTexts: true,
    embedded: false,
    storageMethod: 'cookie',
    cookieName: 'klaro',
    cookieExpiresAfterDays: 120,
    default: false,
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    services: [
      {
        name: 'google-analytics',
        default: false,
        purposes: ['analytics'],
        cookies: [/^_ga/, /^_gid/],
        required: false,
        optOut: false,
        onlyOnce: false,
      },
    ],
    translations: {
      en: {
        privacyPolicyUrl: '/privacy',
        consentModal: {
          title: 'Privacy settings',
          description: 'Here you can see and customize the information that we collect about you.',
        },
        google-analytics: {
          description: 'Google Analytics is used to collect site usage statistics.',
        },
      },
    },
  };
  