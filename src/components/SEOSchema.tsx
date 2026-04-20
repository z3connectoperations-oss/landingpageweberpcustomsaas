export function SEOSchema() {
  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Z3Connect",
    "url": "https://z3connect.com",
    "email": "hello@z3connect.com",
    "description": "Z3Connect builds custom SaaS, ERP systems, and web apps for US companies at fixed price with senior engineers.",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": ["Custom Software Development", "SaaS Development", "ERP Development", "Web Application Development"],
    "founder": {
      "@type": "Person",
      "name": "Ahamed Shafeek",
      "jobTitle": "Founder & CEO",
      "url": "https://www.linkedin.com/in/ahamedshafeek/"
    },
    "priceRange": "$$"
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Z3 Sprint System™",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Z3Connect",
      "url": "https://z3connect.com"
    },
    "description": "Fixed-scope, fixed-price custom software sprints. Live preview in 10 days. Production in 10 weeks.",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "5000",
        "priceCurrency": "USD"
      }
    }
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What if I don't know exactly what I want to build yet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "That's exactly why we start with a deep-dive workflow audit in Phase 1. We don't write a single line of code until we've fully mapped your operations and delivered interactive wireframes that solve the core business problem."
        }
      },
      {
        "@type": "Question",
        "name": "What does working with you actually look like week by week?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's highly structured and fiercely predictable. You get actual working software pushed to a live staging server every single Friday. We hop on a quick review async video or call, integrate your feedback, and immediately deploy the next iteration."
        }
      },
      {
        "@type": "Question",
        "name": "Who builds the product — is it outsourced?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No PM layers. No outsourcing to cheap talent mills. You work directly with our execution-obsessed, highly senior core engineering unit. We own the codebase natively and ship at a completely different velocity because of it."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after launch — are we on our own?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Every sprint includes 30 days of post-launch support. We handle all server configurations, domains, automated scaling rules, and any unexpected bugs while you focus on onboarding your users."
        }
      },
      {
        "@type": "Question",
        "name": "How is this different from hiring a freelancer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Freelancers are a single point of failure with massive key-person risk. If they get sick or ghost you, your product dies. We are a unified full-stack engineering factory with established playbooks, rigorous QA, and an ironclad 10-week delivery timeline."
        }
      },
      {
        "@type": "Question",
        "name": "What if I need changes after the sprint ends?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build using extremely clean, modern tech stacks (React, Node, Python) and hand over 100% of the IP, documentation, and code to you. You can retain us on an expansion contract, or seamlessly hand it off to any internal engineering team."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Book a 20-minute scoping call. No sales pressure or account executives. We'll map your problem in real-time and tell you immediately if our sprint system is the right fit for your velocity."
        }
      }
    ]
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://z3connect.com/"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
