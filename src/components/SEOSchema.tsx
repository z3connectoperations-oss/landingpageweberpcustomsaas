export function SEOSchema() {
  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Z3Connect",
    "url": "https://z3connect.in",
    "email": "support@z3connect.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nagercoil",
      "postalCode": "629002",
      "addressCountry": "IN"
    },
    "description": "Z3Connect builds custom SaaS, ERP systems, and web apps for Indian startups and SMEs with senior engineers.",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": ["Custom Software Development", "SaaS Development", "ERP Development", "Web Application Development"],
    "founder": {
      "@type": "Person",
      "name": "Ahamed Shafeek",
      "jobTitle": "Founder & CEO",
      "url": "https://www.linkedin.com/in/ahamedshafeek/"
    }
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Z3 Sprint System™",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Z3Connect",
      "url": "https://z3connect.in"
    },
    "description": "Fixed-scope custom software sprints. Live preview in 10 days. Production in 3-4 weeks.",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What if I don't know exactly what I want built?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "That's literally Phase 1. We sit with you, map your workflow, build wireframes, and define every feature — before we write a single line of code. You don't need a spec doc. You need a problem worth solving. We handle the rest."
        }
      },
      {
        "@type": "Question",
        "name": "How is this different from a traditional freelancer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your friend's freelancer is one person. If they get sick, get a better offer, or just lose interest — your entire product dies. We're a full senior engineering team with established playbooks, rigorous QA, and a 3–4 week delivery guarantee. We don't disappear. We ship."
        }
      },
      {
        "@type": "Question",
        "name": "Why not just hire an in-house developer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When you hire in-house, you face months of recruitment, onboarding, and the risk of attrition. We provide a full senior engineering team that ships a production-ready system in 3–4 weeks for a predictable fixed cost. No hiring friction, no management overhead."
        }
      },
      {
        "@type": "Question",
        "name": "Who actually builds my product?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Senior engineers who've shipped 50+ production systems. You meet them on the kickoff call. No account manager layer. No PM playing telephone. You talk directly to the people writing your code."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every project includes 30 days of post-launch support. We handle bugs, server configurations, scaling, and deployment issues. After that, you can retain us for ongoing work or hand the codebase to your own team — it's yours, fully documented, on your GitHub."
        }
      },
      {
        "@type": "Question",
        "name": "What tech stack do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "React, Next.js, Node.js, Python, Firebase, Supabase, PostgreSQL, React Native. We pick what's right for your scale and your budget — not what's trendy. Every stack decision is justified in the scoping phase."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Book a 20-minute scoping call. No sales deck. No 'let me loop in my manager.' We'll map your problem live, tell you if we're the right fit, and send a customized proposal within 24 hours."
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
        "item": "https://z3connect.in/"
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
