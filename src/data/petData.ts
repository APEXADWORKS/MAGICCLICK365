import { BlogPost, PetCareTask, VetResource } from '../types';

export const VET_RESOURCES: VetResource[] = [
  {
    name: "AVMA (American Veterinary Medical Association)",
    url: "https://www.avma.org",
    description: "The nation's leading advocate for the veterinary profession and safe animal health. AVMA provides authoritative resources on pet health care, animal welfare, disaster planning for pet owners, and public health guidelines.",
    features: [
      "Official veterinary-approved pet health guidelines",
      "Comprehensive brochures on common pet toxic substances",
      "Accredited veterinary hospital directories and certifications"
    ],
    recommendedFor: "Professional health advice, preventive veterinary care, and regulatory animal welfare information.",
    badge: "Official Association"
  },
  {
    name: "ASPCA Pet Care Guides",
    url: "https://www.aspca.org",
    description: "The American Society for the Prevention of Cruelty to Animals (ASPCA) offers deep practical guides on nutrition, behavior counseling, vaccination schedules, spaying/neutering counseling, and toxic plant lists.",
    features: [
      "Blazing-fast toxic plant search filter and emergency hotlines",
      "Puppy/kitten training templates for early behavioral development",
      "Adopted pet transitioning instructions for foster and shelter parents"
    ],
    recommendedFor: "Adoption preparedness, behavior training, and poison control indexes.",
    badge: "Rescue & Care Authority"
  },
  {
    name: "PetMD Veterinary Network",
    url: "https://www.petmd.com",
    description: "A comprehensive medical library written and reviewed entirely by licensed veterinarians. PetMD features a symptom checker tool, thorough drug indexing guides, disease information charts, and expert-reviewed dietary meal planning tips.",
    features: [
      "Interactive Pet Symptom Checker for minor concerns",
      "Dosage calculators and veterinary-approved medication guides",
      "Detailed breed-specific genetic health risk profiles"
    ],
    recommendedFor: "Factual medical research, symptom analysis, and pet medication search.",
    badge: "Clinical Medical Archive"
  },
  {
    name: "RSPCA Animal Welfare Guides",
    url: "https://www.rspca.org.uk",
    description: "The UK's largest animal welfare charity shares excellent advice sheets detailing the five basic freedoms and legal requirements of active pet parenthood, with step-by-step videos for rabbits, cats, and small rodents.",
    features: [
      "Expert-designed enrichment guides for indoor rabbits and guinea pigs",
      "Legal specifications for proper animal housing and pasture guidelines",
      "Feral and wild animal coexistence instructions for suburb pet owners"
    ],
    recommendedFor: "Small pet care schedules, cage sizing requirements, and animal empathy guides.",
    badge: "Welfare & Standard"
  },
  {
    name: "Cornell Feline Health Center",
    url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center",
    description: "An elite veterinary research center dedicated exclusively to the domestic cat. Cornell provides unparalleled expert columns, high-definition videos on cat grooming, and clinical breakdowns of complex feline illnesses.",
    features: [
      "In-depth research columns on cat diabetes, renal health, and heart issues",
      "Step-by-step videos showing safe cat nail trimming and medication dosing",
      "Scientific feline diets, caloric requirements, and sensory behavioral guides"
    ],
    recommendedFor: "Scientific feline medicine, kidney health, senior cat diagnostics, and feline behavior.",
    badge: "Academic Research Center"
  }
];

export const PET_CARE_TASKS: PetCareTask[] = [
  // Dogs
  {
    id: "dog-feed",
    task: "Feed Balanced Portion",
    frequency: "Daily",
    petType: "Dog",
    category: "Nutrition",
    description: "Provide high-quality dry kibble or veterinary-approved raw diet formulated for their size, age, and activity level. Always secure clean water."
  },
  {
    id: "dog-walk",
    task: "Daily Exercise & Sniffari",
    frequency: "Daily",
    petType: "Dog",
    category: "Exercise",
    description: "Provide at least 30-60 minutes of physically stimulating walk or play. Include plenty of sniffing opportunity for high mental stimulation."
  },
  {
    id: "dog-brush",
    task: "Groom Coat & Skin Inspection",
    frequency: "Weekly",
    petType: "Dog",
    category: "Grooming",
    description: "Brush coat to prevent matting and remove loose hair. Check ears for redness/odor and examine skin carefully for ticks, fleas, or hot spots."
  },
  {
    id: "dog-teeth",
    task: "Brush Teeth & Dental Chew",
    frequency: "Daily",
    petType: "Dog",
    category: "Health",
    description: "Brush teeth using pet-safe toothpaste to prevent periodontal diseases. Give certified veterinary dental chews for supplementary plaque scraping."
  },
  {
    id: "dog-nails",
    task: "Clip Nails & Treat Pads",
    frequency: "Monthly",
    petType: "Dog",
    category: "Grooming",
    description: "Trim claws carefully avoiding the quick. Apply soothing balm on dry or cracked paw pads after extensive runs on hot or freezing walkways."
  },

  // Cats
  {
    id: "cat-feed",
    task: "Hydrating Wetted Meal",
    frequency: "Daily",
    petType: "Cat",
    category: "Nutrition",
    description: "Offer moisture-rich wet canned food or raw meals to supply natural fluid index. Run a water fountain since cats despise stagnant bowls."
  },
  {
    id: "cat-litter",
    task: "Scoop & Sanitize Litter Box",
    frequency: "Daily",
    petType: "Cat",
    category: "Health",
    description: "Scoop clumped waste twice daily to preserve cat hygiene. Dispose responsibly and fully clean/sanitize the whole litter tray monthly."
  },
  {
    id: "cat-play",
    task: "Interactive Feather Hunt",
    frequency: "Daily",
    petType: "Cat",
    category: "Exercise",
    description: "Engage in 15-20 minutes of hunting-imitation play using feather wands, lasers, or crinkly balls to burn pent-up energy and anxiety."
  },
  {
    id: "cat-brush",
    task: "Exfoliating Coat Brushing",
    frequency: "Weekly",
    petType: "Cat",
    category: "Grooming",
    description: "Brush coat regularly (especially long-haired breeds like Maine Coons) to reduce painful hairballs and promote healthy fur oils."
  },

  // Birds
  {
    id: "bird-clean",
    task: "Change Cage Liner & Water",
    frequency: "Daily",
    petType: "Bird",
    category: "Health",
    description: "Replace soiled bottom cage paper to limit bacterial growths. Wash food and water crocks with non-toxic dish soap daily."
  },
  {
    id: "bird-diet",
    task: "Chop Prep & Seed Ratios",
    frequency: "Daily",
    petType: "Bird",
    category: "Nutrition",
    description: "Prepare fresh vegetable chop (kale, carrots, broccoli, squash) mixed with limited high-quality pellets and healthy seeds to avoid avian fatty liver."
  },
  {
    id: "bird-toys",
    task: "Rotate Shredding Toys",
    frequency: "Weekly",
    petType: "Bird",
    category: "Exercise",
    description: "Rotate paper-shredding, block-chewing, and foraging puzzle toys inside and outside the cage to provide high psychological enrichment."
  },

  // Rabbits
  {
    id: "rabbit-hay",
    task: "Top-up Untreated Timothy Hay",
    frequency: "Daily",
    petType: "Rabbit",
    category: "Nutrition",
    description: "Rabbits require constant access to premium Timothy hay representing 80% of their total diet. Keeps digestive gut moving and naturally wears teeth."
  },
  {
    id: "rabbit-greens",
    task: "Harvest Fresh Leafy Herbs",
    frequency: "Daily",
    petType: "Rabbit",
    category: "Nutrition",
    description: "Offer 1-2 cups of fresh greens like cilantro, parsley, romaine, and celery leaf. Avoid high sugar items like carrots or apples to few treats."
  },
  {
    id: "rabbit-brush",
    task: "Shedding Brush & Skin Exam",
    frequency: "Weekly",
    petType: "Rabbit",
    category: "Grooming",
    description: "Gently brush out loose fluff. Rabbits can ingest fur and develop deadly gut stasis since they cannot vomit to dispel hairballs."
  },

  // Exotics
  {
    id: "exotic-temp",
    task: "Verify Enclosure Thermometer",
    frequency: "Daily",
    petType: "Exotic",
    category: "Health",
    description: "Check temperature at the hot spot and cool side of the terrarium. Verify ambient humidity using digital hygrometers for correct shedding."
  },
  {
    id: "exotic-misting",
    task: "Hydrate and Enclosure Mist",
    frequency: "Daily",
    petType: "Exotic",
    category: "Health",
    description: "Mist high-humidity active cages (like geckos or tropical frogs) to permit water-droplet drinking. Ensure dry species have fresh shallow water."
  },
  {
    id: "exotic-uvb",
    task: "Verify UVB Solar Schedules",
    frequency: "Daily",
    petType: "Exotic",
    category: "Health",
    description: "Ensure the diurnal cycle (UVB and heat bulbs) is functioning for 10-12 hours via auto timers. Essential for active calcium absorption and bone structure."
  }
];

export const PET_BLOGS: BlogPost[] = [
  {
    id: "puppy-nutrition-guide",
    title: "Puppy Nutrition: Feeding Your Growing Companion for Lifelong Skeletal Vitality",
    brief: "An extensive scientific exploration of essential amino acids, calcium-to-phosphorus balances, and custom daily caloric budgets tailored for large vs. toy breeds.",
    content: `
      <p class="mb-4">Welcoming a puppy is a magical milestone, but behind the tail wags and playtime falls a critical biological responsibility: managing their daily energetic expansion. During their first 12 months, puppies undergo deep cellular growth, expanding their skeletal frame, neural pathways, and musculature. Feeding them random table scraps or mediocre formulas is a recipe for physical complications in senior years.</p>
      
      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3 uppercase tracking-tight">The Crucial Calcium and Phosphorus Balance</h3>
      <p class="mb-4">Many pet parents assume that throwing extra calcium at a puppy will automatically build robust bones. This is a dangerous veterinary myth. For larger breeds (like Great Danes or German Shepherds), excessive calcium intake can cause developmental orthopedic diseases (DOD) like hip dysplasia or osteochondrosis. Large breed puppies lack the endocrine mechanisms to regulate excess calcium absorption. Thus, large-breed puppy kibbles must feature a precise calcium-to-phosphorus ratio of 1.1:1 to 1.3:1 to safeguard controlled, gradual cartilage development.</p>
      
      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3 uppercase tracking-tight">Protein Quality over Margin Hype</h3>
      <p class="mb-4">Puppies require high concentrations of premium crude protein containing all ten essential amino acids (including arginine, histidine, and leucine) which their bodies cannot synthesize. Protein fuels muscle accretion and immune response. Look for named animal proteins as the primary ingredient (e.g., 'crushed deboned chicken', 'whole pasture lamb') rather than cryptic bypasses like 'animal byproduct meal'. Poor bypass proteins have low biological value, which means they pass straight through the puppy's intestines without contributing to tissue generation, causing flatulence and loose stools.</p>

      <div class="bg-blue-50 border-l-4 border-blue-600 p-4 my-6 rounded-xl">
        <h4 class="font-black uppercase text-xs text-blue-900 tracking-wider">🚫 Dangerous Common Toxins to Memorize</h4>
        <ul class="list-disc list-inside mt-2 text-xs text-slate-750 space-y-1 text-slate-750">
          <li><strong>Chocolate & Coffee:</strong> Contains large amounts of methylxanthines causing heart palpitations, seizures, and death.</li>
          <li><strong>Onions & Garlic:</strong> Contains thiosulfate which completely destroys canine red blood cells (hemolytic anemia).</li>
          <li><strong>Grapes & Raisins:</strong> Highly toxic compound causing sudden, irreversible acute kidney failure even in microscopic quantities.</li>
          <li><strong>Xylitol (Birch Birch Sugar):</strong> Found in peanut butter or sugar-free gums. Triggers massive surge in insulin, causing lethal hypoglycemia.</li>
        </ul>
      </div>

      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3 uppercase tracking-tight">Determining Portions: Feed the Ideal Weight</h3>
      <p class="mb-4">To compute accurate daily portions, veterinarians rely on the Rest Energy Requirement formula: <strong>RER = 70 x (Body Weight in kg)^0.75</strong>, then multiplied by a growing coefficient of 2.0 to 3.0 depending on age weeks. Adjust feeding frequency based on physical milestones: three to four feedings daily under 6 months, and down to two larger portions beyond 6 months.</p>
    `,
    date: "May 20, 2026",
    author: "Dr. Sarah Hendricks, DVM",
    category: "Dogs",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80",
    readTime: "7 Min Read",
    links: [
      { text: "AVMA Puppy Welfare Guidelines", url: "https://www.avma.org" },
      { text: "PetMD Breed Nutritional Requirements", url: "https://www.petmd.com" }
    ],
    featured: true,
    tags: ["Puppy Care", "Nutrition Science", "Orthopedics"]
  },
  {
    id: "feline-behavior-decoder",
    title: "Deciphering Feline Behavioral Language: Tail Postures, Midnight Jumps, and Sound Waves",
    brief: "Diving into feline psychology to interpret biological triggers such as single-ear twitching, scent marking glands, and why cats zoom around at 3 AM.",
    content: `
      <p class="mb-4">Cats are often described as cryptic, aloof, or unpredictable. In reality, felines operate under an extremely complex sensory-communication grid. While dogs evolved to express excitement through broad muscular displays, cats evolved as solitary ambush hunters, making their communication fine-tuned, delicate, and deeply contextual. When you learn to read their tiny mechanical prompts, you unlock a peaceful relationship.</p>
      
      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3 uppercase tracking-tight">Deciphing Tail Mechanics</h3>
      <p class="mb-4">The feline tail is more than just a balance beam; it is a live broadcast tower for emotional status. A tail held high with a slight curl at the tip represents the 'Greeting Posture', showing confidence, comfort, and open invitation to bond. However, a gently twitching or swishing tail tip indicates intense sensory concentration or early-stage frustration. If the entire tail begins a thrashing, whipping side-to-side rotation, immediate withdrawal is required—this is a warning of over-stimulation that will result in a reactive nip if ignored.</p>
      
      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3 uppercase tracking-tight">The Mystery of the 3 AM Zoomies</h3>
      <p class="mb-4">Every feline housemate is familiar with the midnight race—sudden sprint loops, jumps over carpets, and leaps onto shelves at 2 AM. Far from random, this is a biological instinct known as the <strong>Frenetic Random Activity Period (FRAP)</strong>. In the wild, cats spend hours hunting, hiding, stalking, and sprinting. Indoor cats with stationary kibble bowls accumulate immense kinetic energy. When this natural drive isn't discharged through structured play sessions during evening hours, their internal biological clock releases a rush of adrenaline, triggering the frantic night sprints.</p>

      <div class="bg-amber-50 border-l-4 border-amber-600 p-4 my-6 rounded-xl">
        <h4 class="font-black uppercase text-xs text-amber-950 tracking-wider">🌟 Micro-Signals to Watch For</h4>
        <ul class="list-disc list-inside mt-2 text-xs text-slate-800 space-y-1">
          <li><strong>Slow Blink:</strong> The ultimate feline expression of safety and high-affection. It lowers heart rate and indicates complete trust. Return the slow blink!</li>
          <li><strong>Single Ear Turned Outer:</strong> Known as protective monitoring. If they hear a sound, they track it without shifting their skull to mask concentration.</li>
          <li><strong>All-Fours Loaf:</strong> Paws tucked beneath the breastbone. Indicates comfort, warmth, and that they do not perceive any immediate escape requirement.</li>
        </ul>
      </div>

      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3 uppercase tracking-tight">Facial Scent Glands: Marking Ownership</h3>
      <p class="mb-4">When a cat rubs their cheeks (bunting), forehead, or body parts against your ankles, they aren't merely asking for treats. They are using specialized sebaceous glands located on their cheeks, chin, and temporal zones to apply comforting facial pheromones. By marking you with feline lipids, they establish a 'communal aroma profile', creating an instant calm boundary that reassures them they are in safe, personal territory.</p>
    `,
    date: "May 19, 2026",
    author: "Elena Rostov, Feline Behavioral Specialist",
    category: "Cats",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80",
    readTime: "5 Min Read",
    links: [
      { text: "Cornell Feline Behavior Library", url: "https://www.vet.cornell.edu" },
      { text: "ASPCA Cat Transition Manuals", url: "https://www.aspca.org" }
    ],
    tags: ["Cat Psychology", "Zoomies Explained", "Feline Trust"]
  },
  {
    id: "rabbit-dietary-dental-health",
    title: "Rabbit Husbandry: Unceasing Tooth Growth, Timothy Hay, and G.I. Stasis Prevention",
    brief: "Why fiber is the absolute mechanical weapon in a rabbit's biological defense system. Explains cecotropes and dangerous dietary mistakes.",
    content: `
      <p class="mb-4">Rabbits are highly misunderstood pets, often stuffed into sterile wire cages and fed pellet-heavy diets. Because of their unique evolutionary biology, domestic rabbits require incredibly specific care rules. Two primary systems govern rabbit survival: their constantly expanding dental plates and a highly delicate hindgut fermentation loop. Failures in either system result in swift veterinary emergencies.</p>
      
      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3 uppercase tracking-tight">The 24/7 Dental Grinding Requirement</h3>
      <p class="mb-4">A rabbit's incisors, premolars, and molars are open-rooted (elodont), meaning they grow endlessly throughout their lifetime—up to 12 centimeters a year! In their wild habitats, rabbits survive on coarse, abrasive grasses containing silica particles. To keep these teeth at a functional length, rabbits must spend hours chewing and grinding high-quality Timothy or Orchard grass. If an domestic rabbit is fed only soft pellets or sweet treats, their teeth will malocclude (grow misaligned) and form painful sharp spurs that pierce the cheeks and tongue, causing infection, bleeding, and starvation.</p>

      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3 uppercase tracking-tight">Understanding G.I. Stasis: The Silent Threat</h3>
      <p class="mb-4">Gastrointestinal (G.I.) Stasis is a lethal syndrome where the digestive muscular contractions slow down or stop completely, causing painful gas compaction and dehydration of gut contents. It is triggered by low-fiber diets, extreme emotional stress, or chronic pain. Unlike humans or dogs, a rabbit cannot vomit. If their stomach stops active digestion, painful pathogenic bacteria (like Clostridium) expand rapidly, flooding their system with system-wide toxins that can be fatal in less than 24 hours.</p>

      <div class="bg-emerald-50 border-l-4 border-emerald-600 p-4 my-6 rounded-xl">
        <h4 class="font-black uppercase text-xs text-emerald-950 tracking-wider">🌾 Essential 80-15-5 Rabbit Dietary Pyramid</h4>
        <ul class="list-disc list-inside mt-2 text-xs text-slate-800 space-y-1">
          <li><strong>Timothy Hay (80%):</strong> Clean, green, chemical-free grass must represent the overwhelming bulk of their intake.</li>
          <li><strong>Leafy Herbs (15%):</strong> Fresh greens like kale, romaine lettuce, carrot tops, dill, and parsley supply hydration and minerals.</li>
          <li><strong>Oxbow Pellets (5%):</strong> High-fiber timothy-based nutritional pellets (no artificial seed/grain additions) as a small supplementary vitamin boost.</li>
        </ul>
      </div>

      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3 uppercase tracking-tight">Cecotropes: Eating Waste for Survival</h3>
      <p class="mb-4">A first-time rabbit owner is often shocked to find their rabbit eating directly from their rear. Do not panic or discourage this behavior. Rabbits produce specialized, nutrient-dense soft pellets called cecotropes. These are fermented in the cecum (hindgut) and packed with essential proteins, B-vitamins, and highly beneficial gut microbiome. Re-ingesting cecotropes allows rabbits to double-digest their foods and extract essential fuel required for strong immunity.</p>
    `,
    date: "May 18, 2026",
    author: "Marcus Vance, Exotic Animal Caregiver",
    category: "Rabbits",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=1200&q=80",
    readTime: "6 Min Read",
    links: [
      { text: "RSPCA Rabbit Housing Standards", url: "https://www.rspca.org.uk" },
      { text: "ASPCA Rabbit Care Protocols", url: "https://www.aspca.org" }
    ],
    tags: ["Rabbit Care", "GI Stasis", "Dental Health"]
  },
  {
    id: "exotic-reptile-husbandry",
    title: "Mastering Terrarium Physics: UV Radiation, Thermal Stratification, and Skin Shedding",
    brief: "A technical guide for exotic reptile parents. Explains why correct temperature gradients and humidity levels are non-negotiable for metabolic health.",
    content: `
      <p class="mb-4">Reptiles (bearded dragons, leopard geckos, ball pythons) represent beautiful additions to homes, but keeping them alive requires setting up artificial environments. As ectothermic animals, reptiles cannot produce internal metabolic body heat. They are entirely reliant on external environmental physics to regulate their digestion, immune cells, and heart rate. A cold habitat is a direct cause of illness.</p>
      
      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3 uppercase tracking-tight">Thermal Gradients: Hot Spots to Cool Refuge</h3>
      <p class="mb-4">Never heat a terrarium uniformly. Reptiles require a strict thermal gradient to regulate their temperature naturally. This means setting up a 'hot spot' (using basking bulbs or overhead ceramic heat emitters) on one side of the tank, and a cool refuge zone on the opposite side. For example, a bearded dragon requires a basking spot of 100°F - 105°F to mobilize digestive enzymes, while their cool side must drop to 75°F - 80°F to prevent overheating and stress. Use high-accuracy digital probes on each side—analog stick-on dials are notoriously inaccurate and lead to accidental overheating.</p>

      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3 uppercase tracking-tight">The Crucial Role of UVB Lighting</h3>
      <p class="mb-4">Simply supplying heat is not enough. Diurnal reptiles require specific exposure to Ultraviolet B (UVB) wavelengths (specifically 290-320 nm range). UVB radiation acts as a cellular activator, allowing the reptile's skin to synthesize Vitamin D3. Without ample active D3, their intestines cannot absorb dietary calcium, causing their bodies to pull calcium directly from their own bones. This results in <strong>Metabolic Bone Disease (MBD)</strong>, causing rubbery undermolded jaws, tremors, fractures, and skeletal failure. Note that glass and plastic filter out 100% of UVB rays; your UVB fixture must rest directly over the mesh lid of the enclosure.</p>

      <div class="bg-blue-50 border-l-4 border-blue-600 p-4 my-6 rounded-xl">
        <h4 class="font-black uppercase text-xs text-blue-900 tracking-wider">🌡️ Critical Reptile Checklist</h4>
        <ul class="list-disc list-inside mt-2 text-xs text-slate-800 space-y-1">
          <li><strong>Digital Probes:</strong> Glue digital temperature probes directly where they rest to avoid misleading ambient air metrics.</li>
          <li><strong>UVB Lifespans:</strong> UVB bulbs stop producing invisible uv radiation after 6-12 months, even if they still emit visible light. Label and replace regularly.</li>
          <li><strong>Humidity Hides:</strong> Always provide a damp moss-filled humid hide on the warm side to aid in shedding (dysecdysis prevention).</li>
        </ul>
      </div>

      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3 uppercase tracking-tight">Humidity and Dysecdysis Prevention</h3>
      <p class="mb-4">Proper humidity ensures healthy cell renewal and regular skin shedding (ecdysis). If ambient humidity is too dry, reptiles develop dysecdysis, where skin pieces remain stuck around their digits, tail tip, and eyelids. Over time, stuck shed dries, constricting blood flow and causing necrosis (loss of tail or toes). Conversely, excessive wetness cause fungal scales or skin rot. Use automated timed misting units or manual hand sprays paired with high-quality digital hygrometers to replicate their exact home climate.</p>
    `,
    date: "May 17, 2026",
    author: "Dr. Alistair Finch, Exotic Herpetologist",
    category: "Exotics",
    image: "https://images.unsplash.com/photo-1504450758481-7338ecc7524a?auto=format&fit=crop&w=1200&q=80",
    readTime: "8 Min Read",
    links: [
      { text: "AVMA Exotic Companion Care Standards", url: "https://www.avma.org" },
      { text: "Cornell Reptile Health Library", url: "https://www.vet.cornell.edu" }
    ],
    tags: ["Reptile Husbandry", "Shedding Care", "UVB Physics"]
  }
];
