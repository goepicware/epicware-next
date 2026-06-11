export interface DistrictData {
  slug: string;
  name: string;
  h1: string;
  subtitle: string;
  badge: string;
  openingParagraph: string;
  whyMatter: string;
  keyBusinessTypes: string[];
  nearbyDistricts: { name: string; slug: string }[];
  keyIndustries: { label: string; href: string }[];
}

export const DISTRICTS: DistrictData[] = [
  {
    slug: "jurong",
    name: "Jurong",
    badge: "LOCAL SEO · JURONG · SINGAPORE",
    h1: "Local SEO & Reputation Management in Jurong",
    subtitle:
      "Jurong is Singapore's largest regional centre outside the CBD — home to JEM, Westgate, IMM, and thousands of SMBs competing for the same local customers. Epicware helps Jurong businesses rank higher on Google Maps and protect their online reputation.",
    openingParagraph:
      "Jurong West and Jurong East combine to form one of Singapore's densest commercial and residential catchments. A restaurant near Jurong East MRT competes not just with the next-door shop but with every business in the same category within a 2km radius. Google Maps rank determines who wins that competition. Epicware's Local SEO platform runs GBP optimisation, rank tracking, and review management for Jurong businesses — so you show up in the 3-Pack when customers nearby are searching for what you offer.",
    whyMatter:
      "Jurong's population density and the cluster of regional malls mean search volume for local categories is extremely high. Customers searching 'best cafe near Jurong East MRT' or 'clinic near IMM' are ready to visit — you just need to appear. Businesses without a complete, optimised GBP profile are invisible to these high-intent searches. One bad review near a competitor's positive stream can swing the decision entirely.",
    keyBusinessTypes: ["F&B Restaurants", "Medical Clinics", "Beauty Salons", "Tuition Centres", "Car Workshops"],
    nearbyDistricts: [
      { name: "Clementi", slug: "clementi" },
      { name: "Buona Vista", slug: "buona-vista" },
      { name: "Woodlands", slug: "woodlands" },
    ],
    keyIndustries: [
      { label: "Restaurants", href: "/industries/restaurants" },
      { label: "Medical Clinics", href: "/industries/healthcare-clinics" },
      { label: "Hair & Beauty Salons", href: "/industries/nail-hair-salons" },
    ],
  },
  {
    slug: "tampines",
    name: "Tampines",
    badge: "LOCAL SEO · TAMPINES · SINGAPORE",
    h1: "Local SEO & Reputation Management in Tampines",
    subtitle:
      "Tampines is one of Singapore's most self-contained towns — with Tampines Mall, Century Square, and Our Tampines Hub drawing consistent foot traffic. SMBs here compete in a dense, search-driven environment where Google Maps rank is everything.",
    openingParagraph:
      "Tampines has one of Singapore's highest concentrations of young families and working adults, making it one of the most active search markets for local services — from dentists and clinics to tuition centres and restaurants. A business ranking in the Tampines Google Maps 3-Pack for its main category receives the majority of clicks from every customer who searches nearby. Epicware tracks your rank across Tampines, identifies the gaps, and fixes them through automated GBP optimisation and review management.",
    whyMatter:
      "Tampines's three major malls and residential density create a competitive local search environment. Businesses without recent GBP posts, consistent citations, and a strong review count fall behind competitors who are actively managing these signals. The town's self-contained nature means customers rarely travel far — your Google Maps rank within Tampines is where the business is won or lost.",
    keyBusinessTypes: ["F&B Restaurants", "Tuition Centres", "Medical Clinics", "Dental Clinics", "Retail Stores"],
    nearbyDistricts: [
      { name: "Bedok", slug: "bedok" },
      { name: "Tampines", slug: "tampines" },
      { name: "Ang Mo Kio", slug: "ang-mo-kio" },
    ],
    keyIndustries: [
      { label: "Tuition Centres", href: "/industries/tuition-centres" },
      { label: "Restaurants", href: "/industries/restaurants" },
      { label: "Dental Clinics", href: "/industries/dental-clinics" },
    ],
  },
  {
    slug: "woodlands",
    name: "Woodlands",
    badge: "LOCAL SEO · WOODLANDS · SINGAPORE",
    h1: "Local SEO & Reputation Management in Woodlands",
    subtitle:
      "Woodlands is Singapore's northernmost regional hub and a major transit point for JB commuters. SMBs in Woodlands serve both Singapore residents and cross-border customers — making reputation management and GBP visibility especially high-stakes.",
    openingParagraph:
      "Woodlands sits at the Malaysia-Singapore border, creating a unique customer base that includes Singapore residents, Malaysian day commuters, and workers from the Causeway corridor. Local businesses — F&B, auto workshops, clinics, and retailers — serve a high-volume, price-sensitive market where Google reviews are one of the few trust signals customers rely on before choosing. Epicware manages your Woodlands GBP profile, tracks your rank across Woodlands Town and the surrounding HDB estates, and handles review generation and bad review removal.",
    whyMatter:
      "The volume of cross-border traffic through Woodlands means one-time customers who don't return are a significant portion of your base. First impressions — captured in Google reviews — matter more here than in other districts. A bad review from a dissatisfied commuter can sit on your profile for months unless actively managed. Epicware's review monitoring and removal service is particularly high-value for Woodlands businesses.",
    keyBusinessTypes: ["Car Workshops", "F&B Restaurants", "Clinics", "Retail Stores", "Tuition Centres"],
    nearbyDistricts: [
      { name: "Yishun", slug: "yishun" },
      { name: "Ang Mo Kio", slug: "ang-mo-kio" },
    ],
    keyIndustries: [
      { label: "Car Workshops", href: "/industries/car-workshops" },
      { label: "Restaurants", href: "/industries/restaurants" },
      { label: "Medical Clinics", href: "/industries/healthcare-clinics" },
    ],
  },
  {
    slug: "ang-mo-kio",
    name: "Ang Mo Kio",
    badge: "LOCAL SEO · ANG MO KIO · SINGAPORE",
    h1: "Local SEO & Reputation Management in Ang Mo Kio",
    subtitle:
      "Ang Mo Kio is a mature estate with strong community loyalty and high search intent for trusted local services. SMBs here benefit from repeat customer patterns — but only if they rank visibly on Google Maps and maintain strong reviews.",
    openingParagraph:
      "Ang Mo Kio Town Centre and the surrounding estates represent a large, search-active population with established preferences for local services. Customers here are loyal, but they form those loyalties based on Google reviews and Maps rankings before they ever visit. A tuition centre, clinic, or restaurant that ranks 1st for its main keyword in Ang Mo Kio earns consistent foot traffic from the entire AMK corridor. Epicware's platform manages your GBP, tracks your rank across the AMK HDB clusters, and runs automated review campaigns that build the credibility needed to earn that #1 position.",
    whyMatter:
      "Ang Mo Kio's demographics skew towards families and older residents — both of whom rely heavily on Google reviews and personal recommendations. The area's density means competition for the Google Maps 3-Pack is intense across F&B, healthcare, and education categories. Consistent GBP posts, complete profile information, and a strong review velocity are the ranking factors that separate visible businesses from invisible ones here.",
    keyBusinessTypes: ["Medical Clinics", "Tuition Centres", "F&B Restaurants", "Beauty Salons", "Physiotherapy"],
    nearbyDistricts: [
      { name: "Toa Payoh", slug: "toa-payoh" },
      { name: "Yishun", slug: "yishun" },
      { name: "Woodlands", slug: "woodlands" },
    ],
    keyIndustries: [
      { label: "Medical Clinics", href: "/industries/healthcare-clinics" },
      { label: "Tuition Centres", href: "/industries/tuition-centres" },
      { label: "Physiotherapy", href: "/industries/physiotherapy" },
    ],
  },
  {
    slug: "toa-payoh",
    name: "Toa Payoh",
    badge: "LOCAL SEO · TOA PAYOH · SINGAPORE",
    h1: "Local SEO & Reputation Management in Toa Payoh",
    subtitle:
      "Toa Payoh is one of Singapore's oldest and most established estates, with strong community ties and high foot traffic through HDB hub and Toa Payoh Central. Google Maps rank here is won through review volume and GBP completeness.",
    openingParagraph:
      "Toa Payoh's central location and well-connected transport links make it a high-footfall district for F&B, healthcare, and personal services. The estate's older demographic and community-driven culture mean word-of-mouth still matters — but in 2026, word-of-mouth starts on Google. A positive review that shows up when someone searches for 'hawker near Toa Payoh' or 'GP clinic near Toa Payoh MRT' is the digital version of a neighbour's recommendation. Epicware runs the systems that generate those reviews and ensures your GBP profile ranks for the searches that bring customers through your door.",
    whyMatter:
      "Toa Payoh competes with surrounding districts — Bishan, Ang Mo Kio — for many customer searches. A clinic or restaurant that ranks in Toa Payoh's 3-Pack but not in Bishan's is losing customers who search from 1.5km away. Epicware's EpicMap tracks your rank position across the full search grid around Toa Payoh so you know exactly where you are visible and where you are not.",
    keyBusinessTypes: ["Medical Clinics", "F&B Restaurants", "Beauty Salons", "Tuition Centres", "Retail"],
    nearbyDistricts: [
      { name: "Ang Mo Kio", slug: "ang-mo-kio" },
      { name: "Bedok", slug: "bedok" },
      { name: "Orchard", slug: "orchard" },
    ],
    keyIndustries: [
      { label: "Medical Clinics", href: "/industries/healthcare-clinics" },
      { label: "Restaurants", href: "/industries/restaurants" },
      { label: "Hair & Beauty Salons", href: "/industries/nail-hair-salons" },
    ],
  },
  {
    slug: "clementi",
    name: "Clementi",
    badge: "LOCAL SEO · CLEMENTI · SINGAPORE",
    h1: "Local SEO & Reputation Management in Clementi",
    subtitle:
      "Clementi is a key residential and education hub in western Singapore, home to NUS, ITE, and a large student and family population. Local businesses here compete for a mix of student, family, and professional customers across F&B, healthcare, and services.",
    openingParagraph:
      "Clementi's proximity to NUS and its large HDB population creates a diverse customer base — from students looking for affordable meal options to families seeking trusted clinics and tuition centres. Google Maps visibility in Clementi is competitive, particularly for F&B and education categories where multiple businesses cluster near the same MRT stations and shopping malls. Epicware's platform optimises your Clementi GBP profile, tracks your rank across the Clementi corridor, and manages the review signals that determine who appears in the 3-Pack.",
    whyMatter:
      "Clementi's student population means higher search activity, shorter decision cycles, and more reliance on online reviews than typical residential estates. A business with 50+ positive reviews and a 4.6 rating wins the click over a competitor with 8 reviews every time. For multi-outlet businesses serving both Clementi and Jurong, Epicware's multi-location dashboard tracks both profiles simultaneously.",
    keyBusinessTypes: ["F&B Restaurants", "Tuition Centres", "Medical Clinics", "Wellness Centres", "Retail"],
    nearbyDistricts: [
      { name: "Jurong", slug: "jurong" },
      { name: "Buona Vista", slug: "buona-vista" },
    ],
    keyIndustries: [
      { label: "Restaurants", href: "/industries/restaurants" },
      { label: "Tuition Centres", href: "/industries/tuition-centres" },
      { label: "Medical Clinics", href: "/industries/healthcare-clinics" },
    ],
  },
  {
    slug: "buona-vista",
    name: "Buona Vista",
    badge: "LOCAL SEO · BUONA VISTA · SINGAPORE",
    h1: "Local SEO & Reputation Management in Buona Vista",
    subtitle:
      "Buona Vista is Singapore's innovation and research corridor — home to one-north, Biopolis, Fusionopolis, and Star Vista. Businesses here serve a high-income, tech-savvy professional demographic that researches online before every visit.",
    openingParagraph:
      "Buona Vista's one-north cluster houses tens of thousands of researchers, tech workers, and biomedical professionals — a customer segment that is highly review-driven and expects businesses to have a strong digital presence. A restaurant near Star Vista or a wellness centre near Biopolis without a well-optimised GBP profile and consistent positive reviews misses the lunch and after-work crowd that searches Google before making a decision. Epicware ensures your Buona Vista business ranks visibly and converts that visibility into customers.",
    whyMatter:
      "The professional demographic in Buona Vista has high purchasing power and high trust requirements. They read reviews carefully, look at photo quality, and compare competitors side by side on Google Maps before choosing. One or two negative reviews that go unanswered can lose an entire segment of customers. Epicware's AI review response and bad review removal services are particularly high-value for businesses in this area.",
    keyBusinessTypes: ["F&B Restaurants", "Wellness Centres", "Medical Clinics", "Retail", "Physiotherapy"],
    nearbyDistricts: [
      { name: "Clementi", slug: "clementi" },
      { name: "Jurong", slug: "jurong" },
      { name: "Orchard", slug: "orchard" },
    ],
    keyIndustries: [
      { label: "Restaurants", href: "/industries/restaurants" },
      { label: "Wellness Centres", href: "/industries/wellness-centres" },
      { label: "Physiotherapy", href: "/industries/physiotherapy" },
    ],
  },
  {
    slug: "orchard",
    name: "Orchard",
    badge: "LOCAL SEO · ORCHARD · SINGAPORE",
    h1: "Local SEO & Reputation Management in Orchard",
    subtitle:
      "Orchard Road is Singapore's premier shopping and lifestyle destination — with the highest concentration of retail, dining, wellness, and healthcare businesses in the country. Competition for Google Maps visibility here is the most intense in Singapore.",
    openingParagraph:
      "A business on Orchard Road is surrounded by hundreds of competitors within a 500-metre radius. Google Maps rank in this environment is determined by review volume, review velocity, and GBP completeness — not just proximity. A spa in Ngee Ann City competes against every other spa visible in the Orchard Google Maps view, and the difference between ranking 1st and 8th is thousands of customers per month. Epicware's platform runs the automated review generation, GBP optimisation, and competitive tracking that keeps Orchard businesses in the 3-Pack.",
    whyMatter:
      "Orchard's mix of tourists, expats, and high-income locals creates a customer base that reads reviews in multiple languages, takes photos, and expects premium service to be reflected in premium reviews. Negative reviews from tourists — who may never return — can permanently damage your rating unless actively challenged. Epicware's bad review removal service is used by more Orchard businesses than any other district in Singapore.",
    keyBusinessTypes: ["Retail Stores", "Wellness Centres", "Fine Dining", "Medical Clinics", "Beauty Salons"],
    nearbyDistricts: [
      { name: "Buona Vista", slug: "buona-vista" },
      { name: "Toa Payoh", slug: "toa-payoh" },
    ],
    keyIndustries: [
      { label: "Retail Stores", href: "/industries/retail-stores" },
      { label: "Wellness Centres", href: "/industries/wellness-centres" },
      { label: "Hair & Beauty Salons", href: "/industries/nail-hair-salons" },
    ],
  },
  {
    slug: "bedok",
    name: "Bedok",
    badge: "LOCAL SEO · BEDOK · SINGAPORE",
    h1: "Local SEO & Reputation Management in Bedok",
    subtitle:
      "Bedok is one of Singapore's most populous and food-famous districts — known for Bedok 85 Food Centre and Bedok North Street hawker culture. For F&B and service businesses, Google Maps rank here is directly tied to foot traffic volume.",
    openingParagraph:
      "Bedok's reputation as a food destination drives consistent Google search volume for F&B categories. Customers search 'best char kway teow near Bedok' and 'supper in Bedok' hundreds of times per day. The businesses that win those searches are not always the best — they are the ones with the most reviews, the highest rating, and the most complete GBP profile. Epicware's platform runs review generation campaigns and GBP optimisation specifically tuned for the high-volume F&B search environment in Bedok and the surrounding eastern districts.",
    whyMatter:
      "Bedok's density and food culture create one of Singapore's most competitive local search environments for F&B. Beyond food, the district also has strong demand for healthcare, fitness, and education services serving a large family population. Businesses in all these categories benefit from the same core strategy: more reviews, better rating, more complete GBP, and active monitoring for fake or malicious reviews.",
    keyBusinessTypes: ["F&B Restaurants", "Hawker Businesses", "Medical Clinics", "Tuition Centres", "Fitness"],
    nearbyDistricts: [
      { name: "Tampines", slug: "tampines" },
      { name: "Toa Payoh", slug: "toa-payoh" },
    ],
    keyIndustries: [
      { label: "Restaurants", href: "/industries/restaurants" },
      { label: "Medical Clinics", href: "/industries/healthcare-clinics" },
      { label: "Tuition Centres", href: "/industries/tuition-centres" },
    ],
  },
  {
    slug: "yishun",
    name: "Yishun",
    badge: "LOCAL SEO · YISHUN · SINGAPORE",
    h1: "Local SEO & Reputation Management in Yishun",
    subtitle:
      "Yishun is a self-contained new town in northern Singapore with Northpoint City, Singapore's largest suburban mall, as its commercial anchor. SMBs in Yishun serve a large, family-oriented residential population with strong local search activity.",
    openingParagraph:
      "Northpoint City's expansion has turned Yishun into one of Singapore's most commercially active northern districts. Customers here are research-driven — they check Google reviews before choosing a clinic, tuition centre, or restaurant, and they are less likely to travel to other districts if a good option exists locally. Being visible in Yishun's Google Maps 3-Pack for your main category means capturing customers who are already nearby and ready to act. Epicware's platform manages the review signals, GBP optimisation, and rank tracking that keep Yishun businesses visible to this high-intent local audience.",
    whyMatter:
      "Yishun's self-contained nature means customer loyalty is geographically concentrated. A business that ranks consistently in Yishun's 3-Pack and maintains a 4.5+ rating with 100+ reviews becomes the default choice for its category in the entire town. Epicware's review generation campaigns are particularly effective in Yishun because the customer base is repeat-visit oriented — making each review request campaign land with a warm, satisfied customer base.",
    keyBusinessTypes: ["Medical Clinics", "F&B Restaurants", "Tuition Centres", "Beauty Salons", "Retail"],
    nearbyDistricts: [
      { name: "Woodlands", slug: "woodlands" },
      { name: "Ang Mo Kio", slug: "ang-mo-kio" },
    ],
    keyIndustries: [
      { label: "Medical Clinics", href: "/industries/healthcare-clinics" },
      { label: "Restaurants", href: "/industries/restaurants" },
      { label: "Tuition Centres", href: "/industries/tuition-centres" },
    ],
  },
];

export function getDistrict(slug: string): DistrictData | undefined {
  return DISTRICTS.find((d) => d.slug === slug);
}
