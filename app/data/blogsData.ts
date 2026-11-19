export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: "Phone Repairs" | "Buying Tips" | "Vape Hub 18+";
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  featured?: boolean;
  sections: BlogSection[];
  faqs: BlogFAQ[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "same-day-iphone-samsung-screen-repairs-cashel",
    title: "Same-Day iPhone & Samsung Screen Repairs in Cashel: What You Need to Know",
    category: "Phone Repairs",
    date: "Nov 16, 2026",
    readTime: "5 min read",
    image: "ROX Tech Solutions Phone Repair.png",
    excerpt:
      "Cracked screen? Learn what to check before arranging a repair, what affects turnaround times, and how to protect your phone.",
    featured: true,
    sections: [
      {
        heading: "How Fast Can a Cracked Screen Be Repaired in Cashel?",
        paragraphs: [
          "Most common iPhone and Samsung Galaxy screen replacements take between 45 minutes and 2 hours at our Cashel Town Shopping Centre and Bank Place repair labs. Because we keep high-demand OLED and LCD assemblies in local stock, you rarely have to wait days for parts to ship.",
          "Before handing over your device, our technicians run a quick multi-point diagnostic to verify Face ID, True Tone, front camera alignment, and touch responsiveness."
        ],
        bullets: [
          "Walk-in express service available 7 days a week in Cashel",
          "No data wipe required for standard screen or battery replacements",
          "Full warranty included on replacement display assemblies"
        ]
      },
      {
        heading: "OLED vs. Standard LCD Replacement Displays",
        paragraphs: [
          "Not all replacement screens are built the same. Modern iPhones (iPhone X and newer) and Samsung S-Series devices ship with OLED panels that deliver deep blacks, higher brightness, and lower battery drain.",
          "At ROX Tech Solutions, we explain the exact grade options upfront so you can choose between original-spec OLED performance or a budget-friendly LCD option without hidden surprises."
        ]
      },
      {
        heading: "3 Steps to Protect Your New Display",
        paragraphs: [
          "Once your phone is restored, pairing it with a shock-absorbing bumper case and a 9H tempered glass screen protector prevents up to 90% of future edge-impact cracks."
        ],
        bullets: [
          "Fit a full-coverage tempered glass protector immediately after repair",
          "Avoid keeping your phone in the same pocket as keys or coins",
          "Use a raised-lip case to protect the display when placed face down"
        ]
      }
    ],
    faqs: [
      {
        question: "Do I lose my photos or WhatsApp chats during a screen repair?",
        answer:
          "No. Screen replacements are hardware-only repairs and do not erase your personal photos, apps, or messages."
      },
      {
        question: "Where can I drop off my phone in Cashel?",
        answer:
          "You can visit either of our Cashel locations—Cashel Town Shopping Centre or Bank Place, Cashel, Co. Tipperary."
      }
    ]
  },
  {
    id: 2,
    slug: "water-damaged-phone-7-things-to-do-immediately",
    title: "Water-Damaged Phone? 7 Things to Do Immediately",
    category: "Phone Repairs",
    date: "Nov 14, 2026",
    readTime: "4 min read",
    image: "Water-Dappled Smartphone on Slate.png",
    excerpt:
      "A practical first-response guide to reducing further damage when your phone gets wet.",
    sections: [
      {
        heading: "Why the First 15 Minutes Matter Most",
        paragraphs: [
          "Even water-resistant phones can suffer internal liquid ingress if seals wear down over time or the device drops into deep water. Electrical short circuits happen when power flows across wet motherboard components.",
          "Taking the right steps immediately dramatically increases the chances of a full recovery and protects your personal data."
        ],
        bullets: [
          "Power off the device immediately—do not keep checking if it still works",
          "Never plug a wet phone into a wall charger or car cable",
          "Remove the SIM tray and protective case to let trapped moisture escape",
          "Skip the rice myth—rice dust enters charging ports and worsens corrosion"
        ]
      },
      {
        heading: "Professional Ultrasonic Cleaning in Cashel",
        paragraphs: [
          "Bring your device to ROX Tech Solutions as soon as possible. Our technicians disassemble the handset, disconnect the battery, and treat the logic board with specialized anti-corrosion ultrasonic cleaning."
        ]
      }
    ],
    faqs: [
      {
        question: "Should I put my wet iPhone in a bag of uncooked rice?",
        answer:
          "No. Rice does not remove internal moisture effectively and leaves fine starch dust inside your charging port and speaker grilles."
      },
      {
        question: "Can data be recovered from a dead water-damaged phone?",
        answer:
          "In most cases, yes. Even if a display is damaged, board-level cleaning often allows us to boot the phone and back up your photos and contacts."
      }
    ]
  },
  {
    id: 3,
    slug: "2026-refurbished-iphone-buying-checklist",
    title: "2026 Refurbished iPhone Buying Checklist",
    category: "Buying Tips",
    date: "Nov 11, 2026",
    readTime: "6 min read",
    image: "/Refurbished iPhones on Display.png",
    excerpt:
      "What to check, where to buy and how to get the best value on a refurbished iPhone.",
    sections: [
      {
        heading: "How to Spot a Properly Tested Refurbished iPhone",
        paragraphs: [
          "Buying a refurbished iPhone in Ireland can save you €250 to €450 compared to brand-new retail prices—provided the handset has been properly graded and network-unlocked.",
          "Always inspect battery health, True Tone display functionality, camera focus, and IMEI cleanliness before paying."
        ],
        bullets: [
          "Verify the phone is 100% SIM-free / Factory Unlocked for all Irish networks",
          "Check Battery Health in Settings (aim for 85%+ or a freshly installed cell)",
          "Confirm local store warranty rather than risky private peer-to-peer sales",
          "Inspect the charging port, speakers, and microphone clarity in person"
        ]
      },
      {
        heading: "Why Buy Locally in Cashel?",
        paragraphs: [
          "At ROX Tech Solutions, every pre-owned and refurbished handset undergoes a 35-point hardware inspection and comes with direct in-store support right here in Co. Tipperary."
        ]
      }
    ],
    faqs: [
      {
        question: "Are refurbished phones at ROX Tech unlocked for all Irish networks?",
        answer:
          "Yes, all our refurbished smartphones are factory unlocked and ready for Vodafone, Three, Eir, Tesco Mobile, and GoMo SIM cards."
      },
      {
        question: "Can I trade in my old phone toward an upgrade?",
        answer:
          "Yes, bring your current handset to our Cashel store for an instant trade-in valuation."
      }
    ]
  },
  {
    id: 4,
    slug: "refillable-pod-kits-vs-disposable-vapes-ireland",
    title: "Refillable Pod Kits vs Disposable Vapes in Ireland",
    category: "Vape Hub 18+",
    date: "Nov 09, 2026",
    readTime: "5 min read",
    image: "/Vape Devices and E-Liquid Showcase.png",
    excerpt:
      "An adult-only guide to device formats, maintenance and current trends.",
    sections: [
      {
        heading: "Why Adult Vapers in Ireland Are Switching to Refillable Pods",
        paragraphs: [
          "Refillable pod systems like the Vaporesso Luxe X2, OXVA Xlim Pro, and Aspire Gotek X deliver the exact same smooth nic-salt throat hit as disposables—while cutting weekly running costs by up to 60%.",
          "With USB-C fast charging and replaceable mesh pods, you simply top up with your favorite 10ml TPD-compliant e-liquid from brands like Elfliq, Maryliq, Hale Vaping, or LIQUA."
        ],
        bullets: [
          "Significant weekly savings compared to single-use devices",
          "Adjustable airflow and wattage control for customized vapor",
          "Wide selection of 10mg & 20mg nic salts and 50/50 freebase liquids",
          "Strictly for adults aged 18+ in compliance with Irish regulations"
        ]
      },
      {
        heading: "How Often Should You Change Your Pod or Coil?",
        paragraphs: [
          "Depending on e-liquid sweetness and daily usage, a quality mesh pod typically lasts 7 to 14 days. Always let a newly filled pod sit for 5 minutes before the first puff so the cotton wick saturates completely."
        ]
      }
    ],
    faqs: [
      {
        question: "Which e-liquid works best in compact pod kits?",
        answer:
          "50VG/50PG nicotine salts or classic 10ml liquids (such as Elfliq, Maryliq, Hale, and LIQUA) wick smoothly in 0.8Ω and 1.0Ω pods."
      },
      {
        question: "Is ID required when purchasing vape products in store?",
        answer:
          "Yes. We operate a strict 18+ policy across our Cashel stores. Valid government photo ID is required."
      }
    ]
  },
  {
    id: 5,
    slug: "how-to-extend-smartphone-battery-health-tips",
    title: "5 Proven Habits to Extend Your iPhone & Android Battery Lifespan",
    category: "Phone Repairs",
    date: "Nov 05, 2026",
    readTime: "4 min read",
    image: "/ROX Charging Setup.png",
    excerpt:
      "Simple daily charging adjustments that slow down lithium-ion battery wear and prevent sudden shutdowns.",
    sections: [
      {
        heading: "What Actually Degrades Modern Phone Batteries?",
        paragraphs: [
          "Extreme heat and leaving your phone pinned at 0% or 100% for extended periods are the two biggest culprits behind rapid battery capacity loss.",
          "Using uncertified, cheap charging bricks can also cause voltage fluctuations that stress your charging IC chip."
        ],
        bullets: [
          "Enable Optimized Battery Charging in iOS or Adaptive Charging on Android",
          "Avoid gaming or heavy video streaming while fast-charging",
          "Use CE-certified USB-C PD chargers and quality braided cables",
          "Replace your battery once health drops below 80% for peak speed"
        ]
      }
    ],
    faqs: [
      {
        question: "How long does a battery replacement take at ROX Tech Cashel?",
        answer:
          "Most iPhone and Samsung battery replacements are completed in 30 to 45 minutes while you wait."
      }
    ]
  },
  {
    id: 6,
    slug: "choosing-right-nicotine-strength-liquids-pouches",
    title: "Understanding Nicotine Strengths: 10mg vs 20mg Nic Salts & Pouches",
    category: "Vape Hub 18+",
    date: "Nov 01, 2026",
    readTime: "5 min read",
    image: "/ROX Vape Flavors and Mint Pouches.png",
    excerpt:
      "A clear breakdown of TPD nicotine strengths in Ireland to help adult customers pick the right balance.",
    sections: [
      {
        heading: "Matching Strength to Your Preference",
        paragraphs: [
          "In Ireland, TPD regulations cap retail e-liquids at 20mg/ml (2%). Choosing between 3mg, 6mg, 10mg, and 20mg depends on the type of device you use and how smooth you want the throat hit to feel.",
          "Low-wattage MTL pod kits pair best with 10mg or 20mg nic salts, whereas higher-wattage sub-ohm tanks work best with 0mg to 6mg liquids."
        ],
        bullets: [
          "20mg Nic Salt: Strongest legal e-liquid strength, fast satisfaction",
          "10mg Nic Salt: Balanced everyday option with smoother inhale",
          "3mg – 6mg Freebase: Ideal for classic tanks and lower nicotine intake",
          "Tobacco-Free Pouches (KILLA, PABLO, Cuba): Smoke-free discrete alternative (18+)"
        ]
      }
    ],
    faqs: [
      {
        question: "Do you stock both nicotine salts and traditional 10ml liquids in Cashel?",
        answer:
          "Yes, we stock Elfliq, Maryliq, IVG, Hale Vaping, LIQUA, plus replacement coils and tobacco-free nicotine pouches."
      }
    ]
  }
];