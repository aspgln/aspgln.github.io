// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed journal publications and conference abstracts.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education and background. Full CV available as a PDF (icon, top right).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-connect",
          title: "Connect",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "news-our-first-authored-paper-volumetric-thermometry-in-moving-tissues-using-stack-of-radial-mri-and-an-image-navigated-multi-baseline-proton-resonance-frequency-shift-method-was-published-in-magnetic-resonance-in-medicine-read-more",
          title: 'Our first-authored paper “Volumetric Thermometry in Moving Tissues Using Stack-of-Radial MRI and an...',
          description: "",
          section: "News",},{id: "news-our-co-first-authored-paper-thermoresponsive-polymer-modified-sio-gadolinium-diethylenetriamine-pentaacetic-acid-composite-nanoparticles-for-magnetic-resonance-imaging-guided-ultrasound-modulated-contrast-enhancement-at-human-body-temperatures-was-published-in-acs-applied-nano-materials-read-more",
          title: 'Our co-first-authored paper “Thermoresponsive Polymer-Modified SiO₂/Gadolinium-Diethylenetriamine Pentaacetic Acid Composite Nanoparticles for Magnetic Resonance...',
          description: "",
          section: "News",},{id: "news-our-co-authored-paper-keypoint-detection-network-for-needle-localization-on-intra-procedural-mri-in-mri-guided-liver-interventions-was-published-in-ijcars-read-more",
          title: 'Our co-authored paper “Keypoint Detection Network for Needle Localization on Intra-Procedural MRI in...',
          description: "",
          section: "News",},{id: "news-received-a-magna-cum-laude-merit-award-at-ismrm-2026-cape-town-for-our-computational-modeling-abstract-on-pulsed-microwave-ablation",
          title: 'Received a Magna Cum Laude Merit Award at ISMRM 2026 (Cape Town) for...',
          description: "",
          section: "News",},{id: "news-our-first-authored-paper-active-electromagnetic-interference-suppression-for-mr-thermometry-during-mr-guided-microwave-ablation-was-published-in-magnetic-resonance-in-medicine-read-more",
          title: 'Our first-authored paper “Active Electromagnetic Interference Suppression for MR Thermometry During MR-Guided Microwave...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/cv/", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%71%64%61%69@%75%63%6C%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/qing-dai", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=hfJK554AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
