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
  mustConsent: true,
  acceptAll: true,
  hideDeclineAll: false,
  callback: function(consent, service) {
    console.log(`Global update: ${service.name} is now ${consent ? 'enabled' : 'disabled'}`);
  },
  services: [
    {
      name: 'google-analytics',
      title: 'Google Analytics',
      default: false,
      purposes: ['analytics'],
      cookies: [/^_ga/, /^_gid/],
      required: false,
      optOut: false,
      onlyOnce: false
    },
    {
      name: 'ad-storage',
      title: 'Ad Storage',
      purposes: ['advertising'],
      cookies: [/^_fbp/, /^_gads/], // Example ad-related cookies
      required: false,
      optOut: false,
      onlyOnce: false
    },
    {
      name: 'functional-storage',
      title: 'Functional Storage',
      purposes: ['functional'],
      cookies: [/^_session/, /^_preferences/], // Example functional cookies
      required: false,
      optOut: true,
      onlyOnce: true
    },
    {
      name: 'personalization-storage',
      title: 'Personalization Storage',
      purposes: ['personalization'],
      cookies: [/^_user/, /^_lang/], // Example personalization cookies
      required: false,
      optOut: false,
      onlyOnce: false
    },
    {
      name: 'security-storage',
      title: 'Security Storage',
      purposes: ['security'],
      cookies: [/^_csrf/, /^_secure/], // Example security-related cookies
      required: true, // Security cookies are usually required
      optOut: false,
      onlyOnce: false
    }
  ],
  translations: {
    zz: {
      privacyPolicyUrl: '/privacy'
    },
    en: {
      privacyPolicyUrl: '/privacy',
      consentModal: {
        title: 'Privacy Settings',
        description: 'Here you can see and customize the information that we collect about you.'
      },
      consentNotice: {
        description: 'We use cookies to enhance your experience on our website.',
        learnMore: 'Details'
      },
      ok: 'Accept',
      decline: 'Decline',
      'google-analytics': {
        description: 'Google Analytics is used to collect site usage statistics.'
      },
      'ad-storage': {
        description: 'Ad storage is used to display personalized advertisements and track ad performance.'
      },
      'functional-storage': {
        description: 'Functional cookies are necessary for the basic functionality of the website.'
      },
      'personalization-storage': {
        description: 'Personalization storage helps us offer a personalized user experience based on your preferences.'
      },
      'security-storage': {
        description: 'Security cookies are essential for protecting the website and securing your data.'
      }
    }
  }
};
