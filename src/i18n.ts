import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        blog: 'Insights',
        about: 'About',
        contact: 'Contact'
      },
      seo: {
        home: {
          title: 'Haidi | AI Strategy & Digital Transformation Consulting',
          description: 'Expert AI strategy consulting to help your business discover use cases, navigate adoption, and enhance customer journeys.'
        },
        services: {
          title: 'AI Services | Discovery, Adoption & Customer Journeys',
          description: 'Explore our AI services including use case discovery, adoption strategy, and customer journey optimization.'
        },
        blog: {
          title: 'AI Insights & Strategy Blog | Haidi',
          description: 'Stay updated with the latest AI trends, implementation models, and strategic insights for business growth.'
        },
        about: {
          title: 'About Haidi | Bridging AI Technology and Business Value',
          description: 'Learn about our mission to help organizations navigate the complexities of AI adoption with a human-centered approach.'
        },
        contact: {
          title: 'Contact Haidi | Start Your AI Transformation',
          description: 'Ready to transform your business with AI? Get in touch today for a non-binding sparring session.'
        }
      },
      home: {
        latestHighlights: 'Latest Highlights',
        insightsDescription: 'Insights and strategies for the evolving AI landscape.',
        viewAllInsights: 'View all insights',
        readArticle: 'Read article'
      },
      hero: {
        titlePrefix: 'Transform your business with',
        strategy: 'AI Strategy',
        titleSuffix: '',
        description: 'I help companies discover AI use cases, navigate adoption challenges, and create enhanced customer journeys that drive real business value.',
        ctaStart: 'Start Your Journey',
        ctaExplore: 'Explore Services'
      },
      pillars: {
        discovery: {
          title: 'AI use case discovery',
          desc: 'Identify high-impact AI opportunities tailored to your business goals and industry landscape.'
        },
        adoption: {
          title: 'AI adoption strategy',
          desc: 'Navigate the complexities of AI implementation with proven frameworks and best practices.'
        },
        journey: {
          title: 'AI customer journey',
          desc: 'Enhance customer experiences with AI-powered touchpoints across the entire journey.'
        },
        learnMore: 'Learn more'
      },
      philosophy: {
        title: 'Tech-Forward Approach, Human-Centered Results.',
        description: 'With years of experience in AI strategy and digital transformation, I combine deep technical knowledge with a practical, human-centered approach.',
        points: [
          'Proven track record across multiple industries',
          'Hands-on experience with cutting-edge AI technologies',
          'Focus on measurable business outcomes',
          'Personalized consulting tailored to your needs'
        ],
        learnMore: 'Learn more about my approach'
      },
      blog: {
        title: 'Knowledge Center: Insights Hub',
        description: 'A fresh perspective on AI strategy, implementation models, and the evolution of customer experience.',
        notFound: 'Post not found',
        backToInsights: 'Back to Insights',
        cta: {
          title: 'Want to dive deeper into this topic?',
          description: 'I help companies navigate these shifts and map their AI blind spots. Let\'s discuss how this applies to your specific context.',
          button: 'Schedule a call'
        }
      },
      about: {
        title: 'Helping businesses thrive in the AI Era.',
        description: "I'm passionate about bridging the gap between cutting-edge AI technology and practical business value. With a background in technology consulting and digital transformation, I help organizations navigate the complexities of AI adoption.\n\nMy approach combines strategic thinking with hands-on expertise, ensuring that AI initiatives deliver measurable results while enhancing the human experience at every touchpoint.",
        philosophyTitlePrefix: 'My',
        philosophyTitleHighlight: 'philosophy',
        philosophy: [
          {
            title: "Human-Centered AI",
            desc: "Technology should enhance human capabilities, not replace them. I design AI solutions that augment human decision-making and creativity."
          },
          {
            title: "Practical Innovation",
            desc: "Innovation without execution is just imagination. I focus on solutions that can be implemented and deliver measurable business value."
          },
          {
            title: "Continuous Learning",
            desc: "The AI world never stands still. I follow the rapid developments within AI closely and translate them into advice that has proven its value in practice."
          }
        ]
      },
      services: {
        title: 'Expertise to strengthen your AI transformation',
        description: "Let's discuss how these services can help transform your business with AI.",
        main: [
          {
            id: "use-case-discovery",
            title: "AI use case discovery",
            description: "Identify high-impact AI opportunities tailored to your business goals and industry landscape.",
            image: "https://qeosmw0t4ezxbhtg.public.blob.vercel-storage.com/discovery.jpg",
            features: [
              "Assessment and opportunity analysis",
              "Industry-specific use case identification",
              "ROI and feasibility analysis",
              "Roadmap development and prioritization",
              "Spotting quick-wins"
            ]
          },
          {
            id: "adoption-programmes",
            title: "AI adoption strategy",
            description: "Navigate the complexities of AI adoption with proven blueprints, best practices, and hands-on guidance.",
            image: "https://qeosmw0t4ezxbhtg.public.blob.vercel-storage.com/laptop.jpg",
            features: [
              "AI-readiness inventory",
              "Technology stack recommendations",
              "Implementation roadmap development",
              "Change management strategy",
              "Team competency development"
            ]
          },
          {
            id: "customer-journeys",
            title: "AI customer journey",
            description: "Enhance customer experiences by integrating AI into all relevant touchpoints and create future-proof customer journeys.",
            image: "https://qeosmw0t4ezxbhtg.public.blob.vercel-storage.com/journey.jpg",
            features: [
              "Journey mapping and analysis",
              "Touchpoint optimization through AI deployment",
              "Implementation of conversational AI"
            ]
          }
        ],
        additionalTitle: 'Additional services',
        additional: [
          {
            title: "AI strategy workshops",
            description: "Interactive sessions to align stakeholders and sharpen your AI vision and objectives."
          },
          {
            title: "Advice & coaching",
            description: "Ongoing guidance and support throughout your entire AI transformation."
          },
          {
            title: "AI-audits & reviews",
            description: "Assess existing AI initiatives and identify concrete opportunities for optimization."
          }
        ],
        cta: {
          title: 'Ready to get started?',
          description: 'Schedule a non-binding sparring session today and start your AI transformation.',
          button: 'Get in touch'
        }
      },
      contact: {
        title: 'Together we build tomorrow.',
        description: 'From the first AI exploration to fine-tuning ongoing projects: I am happy to help you further.',
        email: 'Email',
        location: 'Location',
        locationValue: 'The Netherlands',
        social: 'Social',
        linkedin: 'LinkedIn profile',
        form: {
          successTitle: 'Message sent!',
          successMessage: 'Thank you for your message. I will contact you as soon as possible.',
          sendAnother: 'Send another message',
          name: 'Name',
          email: 'Email address',
          company: 'Company',
          challenge: 'What is your biggest AI challenge?',
          challengePlaceholder: 'Tell me about your goals and obstacles...',
          submitting: 'Sending...',
          submit: 'Send message',
          error: 'There was an error sending your message. Please try again or email me directly.'
        }
      }
    }
  },
  nl: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Diensten',
        blog: 'Inzichten',
        about: 'Over',
        contact: 'Contact'
      },
      seo: {
        home: {
          title: 'Haidi | AI Strategie & Digitale Transformatie Consulting',
          description: 'Expert AI strategie consulting om je bedrijf te helpen use cases te ontdekken, adoptie te navigeren en klantreizen te verbeteren.'
        },
        services: {
          title: 'AI Diensten | Discovery, Adoptie & Klantreizen',
          description: 'Ontdek onze AI-diensten inclusief use case discovery, adoptiestrategie en klantreisoptimalisatie.'
        },
        blog: {
          title: 'AI Inzichten & Strategie Blog | Haidi',
          description: 'Blijf op de hoogte van de nieuwste AI-trends, implementatiemodellen en strategische inzichten voor bedrijfsgroei.'
        },
        about: {
          title: 'Over Haidi | De Kloof Tussen AI-Technologie en Bedrijfswaarde Overbruggen',
          description: 'Leer meer over onze missie om organisaties te helpen bij het navigeren door de complexiteit van AI-adoptie met een mensgerichte aanpak.'
        },
        contact: {
          title: 'Contact Haidi | Start Je AI-Transformatie',
          description: 'Klaar om je bedrijf te transformeren met AI? Neem vandaag nog contact op voor een vrijblijvende sparringsessie.'
        }
      },
      home: {
        latestHighlights: 'Laatste inzichten',
        insightsDescription: 'Inzichten en strategieën voor het evoluerende AI-landschap.',
        viewAllInsights: 'Bekijk alle inzichten',
        readArticle: 'Lees artikel'
      },
      hero: {
        titlePrefix: '',
        strategy: 'AI strategie',
        titleSuffix: 'die werkt voor jouw business, je team en je klanten',
        description: 'Ik navigeer je door de complexiteit van AI-adoptie, help je de juiste use-cases te vinden en creëer klantreizen met impact.',
        ctaStart: 'Start nu',
        ctaExplore: 'Ontdek Diensten'
      },
      pillars: {
        discovery: {
          title: 'AI use case discovery',
          desc: 'Identificeer AI kansen met hoge impact, afgestemd op je bedrijfsdoelen en passend bij jouw branche.'
        },
        adoption: {
          title: 'AI adoptie strategie',
          desc: 'Navigeer door de complexiteit van AI-implementatie met bewezen kaders en best practices.'
        },
        journey: {
          title: 'AI customer journey',
          desc: 'Verrijk klantervaringen door AI te integreren in alle relevante touchpoints en creëer future proof klantreizen.'
        },
        learnMore: 'Lees meer'
      },
      philosophy: {
        title: 'Vooruitstrevende techniek, mensgerichte resultaten.',
        description: 'Ik combineer diepe technische kennis van AI en digitale transformatie met een nuchtere, mensgerichte werkwijze.',
        points: [
          'Bewezen staat van dienst in diverse sectoren',
          'Hands-on ervaring met de nieuwste AI-technologieën',
          'Focus op meetbare bedrijfsresultaten',
          'Persoonlijke begeleiding'
        ],
        learnMore: 'Meer over mijn aanpak'
      },
      blog: {
        title: 'Kenniscentrum: Insights Hub',
        description: 'Een nieuwe kijk op AI strategie, implementatiemodellen en de evolutie van customer experience.',
        notFound: 'Bericht niet gevonden',
        backToInsights: 'Terug naar Inzichten',
        cta: {
          title: 'Wil je dieper op dit onderwerp ingaan?',
          description: 'Ik help bedrijven bij het navigeren door deze verschuivingen en het in kaart brengen van hun AI-blindspots. Laten we bespreken hoe dit van toepassing is op jouw specifieke context.',
          button: 'Plan een gesprek'
        }
      },
      about: {
        title: 'Succesvol ondernemen in een wereld vol AI.',
        description: 'Mijn passie ligt in het overbruggen van de kloof tussen geavanceerde AI-technologie en concrete bedrijfswaarde. Vanuit mijn achtergrond in digitale transformatie help ik bedrijven slimme keuzes te maken in hun AI-reis. Mijn aanpak is zowel strategisch als hands-on: ik focus op resultaten die er toe doen, met oog voor de menselijke kant van technologie.',
        philosophyTitlePrefix: 'Mijn',
        philosophyTitleHighlight: 'filosofie',
        philosophy: [
          {
            title: "Mensgerichte AI",
            desc: "Technologie moet menselijke vermogens versterken, niet vervangen. Ik ontwerp AI-oplossingen die menselijke besluitvorming en creativiteit vergroten."
          },
          {
            title: "Praktische innovatie",
            desc: "Innovatie zonder uitvoering is slechts verbeelding. Ik richt me op oplossingen die kunnen worden geïmplementeerd en meetbare bedrijfswaarde leveren."
          },
          {
            title: "Continu leren",
            desc: "De AI-wereld staat nooit stil. Ik volg de snelle ontwikkelingen binnen AI op de voet en vertaal ze naar adviezen die hun waarde in de praktijk hebben bewezen."
          }
        ]
      },
      services: {
        title: 'Expertise om jouw AI-transformatie te versterken',
        description: "Laten we bespreken hoe deze diensten je bedrijf kunnen transformeren met AI.",
        main: [
          {
            id: "use-case-discovery",
            title: "AI use case discovery",
            description: "Identificeer AI kansen met hoge impact, afgestemd op je bedrijfsdoelen en passend bij jouw branche.",
            image: "https://qeosmw0t4ezxbhtg.public.blob.vercel-storage.com/discovery.jpg",
            features: [
              "Assesment en kansenanalyse",
              "Sector-specifieke use case identificatie",
              "ROI- en haalbaarheidsanalyse",
              "Opzetten van roadmaps en prioritering",
              "Spotten van quick-wins"
            ]
          },
          {
            id: "adoption-programmes",
            title: "AI adoptie strategie",
            description: "Navigeer door de complexiteit van AI-adoptie met bewezen blauwdrukken, best practices en hands-on begeleiding.",
            image: "https://qeosmw0t4ezxbhtg.public.blob.vercel-storage.com/laptop.jpg",
            features: [
              "AI-readiness inventarisatie",
              "Aanbevelingen voor de technology stack",
              "Ontwikkeling van de implementatie-roadmap",
              "Verandermanagement-strategie",
              "Ontwikkeling van teamcompetenties"
            ]
          },
          {
            id: "customer-journeys",
            title: "AI customer journey",
            description: "Verrijk klantervaringen door AI te integreren in alle relevante touchpoints en creëer future proof klantreizen.",
            image: "https://qeosmw0t4ezxbhtg.public.blob.vercel-storage.com/journey.jpg",
            features: [
              "Journey mapping en analyse",
              "Optimalisatie van touchpoints door AI inzet",
              "Implementatie van conversational AI"
            ]
          }
        ],
        additionalTitle: 'Aanvullende diensten',
        additional: [
          {
            title: "AI strategieworkshops",
            description: "Interactieve sessies om stakeholders op één lijn te krijgen en jullie AI-visie en doelstellingen scherp te stellen."
          },
          {
            title: "Advies & coaching",
            description: "Doorlopende begeleiding en ondersteuning tijdens jullie gehele AI transformatie."
          },
          {
            title: "AI-audits & reviews",
            description: "Beoordeel bestaande AI-initiatieven en identificeer concrete kansen voor optimalisatie."
          }
        ],
        cta: {
          title: 'Klaar om van start te gaan?',
          description: 'Plan dan vandaag nog een vrijblijvende sparringsessie en start je AI transformatie.',
          button: 'Neem contact op'
        }
      },
      contact: {
        title: 'Samen bouwen we aan morgen.',
        description: 'Van de eerste AI-verkenning tot het finetunen van lopende projecten: ik help je graag verder.',
        email: 'E-mail',
        location: 'Locatie',
        locationValue: 'Nederland',
        social: 'Social',
        linkedin: 'LinkedIn profiel',
        form: {
          successTitle: 'Bericht verzonden!',
          successMessage: 'Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.',
          sendAnother: 'Nog een bericht sturen',
          name: 'Naam',
          email: 'E-mailadres',
          company: 'Bedrijf',
          challenge: 'Wat is je grootste AI-uitdaging?',
          challengePlaceholder: 'Vertel me over je doelen en obstakels...',
          submitting: 'Verzenden...',
          submit: 'Bericht verzenden',
          error: 'Er is een fout opgetreden bij het verzenden van je bericht. Probeer het opnieuw of stuur me direct een e-mail.'
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
