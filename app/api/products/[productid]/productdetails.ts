export type FragranceNote = {
  name: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  detailedDescription: string;
  images: string[];
  sizes: number[];
  concentration: string;
  longevity: string;
  sillage: string;
  gender: string;

  notes: {
    top: FragranceNote[];
    heart: FragranceNote[];
    base: FragranceNote[];
  };

  idealFor: string[];
};

export const products: Product[] = [
  {
    id: "amal-eternal",

    name: "Amal Eternal",

    subtitle: "A timeless expression of elegance",

    price: 149,

    rating: 4.8,

    reviewCount: 126,

    description:
      "A graceful floral fragrance blending delicate rose petals with luminous jasmine and warm sandalwood.",

    detailedDescription:
      "Amal Eternal is an elegant and long-lasting fragrance created for those who appreciate a refined oriental character. It opens with fresh rose petals, bergamot and pink pepper before revealing a romantic floral heart of jasmine and peony. The fragrance settles into a warm and sensual base of sandalwood, musk and vanilla.",

    images: ["/Gemini_Generated_Image_snycj8snycj8snyc.jpeg"],

    sizes: [50, 100],

    concentration: "Eau de Parfum",

    longevity: "8–10 hours",

    sillage: "Moderate to strong",

    gender: "Unisex",

    notes: {
      top: [
        {
          name: "Rose Petals",
          description: "Fresh and delicate",
        },
        {
          name: "Bergamot",
          description: "Bright and citrusy",
        },
        {
          name: "Pink Pepper",
          description: "Soft spicy warmth",
        },
      ],

      heart: [
        {
          name: "Jasmine",
          description: "Rich and luminous",
        },
        {
          name: "Peony",
          description: "Soft and romantic",
        },
        {
          name: "Lily",
          description: "Clean and floral",
        },
      ],

      base: [
        {
          name: "Sandalwood",
          description: "Creamy and warm",
        },
        {
          name: "Musk",
          description: "Soft and sensual",
        },
        {
          name: "Vanilla",
          description: "Sweet and comforting",
        },
      ],
    },

    idealFor: [
      "Evening",
      "Special Occasions",
      "Everyday Elegance",
      "Gifting",
    ],
  },
  {
    id: "amal-amber",
    name: "Amal Amber",
    subtitle: "A warm glow wrapped in golden amber",
    price: 139,
    rating: 0,
    reviewCount: 0,
    description:
      "A warm and sensual amber fragrance with deep woody undertones.",
    detailedDescription:
      "Amal Amber is a smooth, enveloping fragrance with a radiant amber heart. Bright bergamot and saffron open into rich amber and soft vanilla, before settling into sandalwood and musk. Warm, softly spiced, and made for moments that linger.",
    images: ["/amal_amber.jpeg"],
    sizes: [50, 100],
    concentration: "Eau de Parfum",
    longevity: "Long-lasting",
    sillage: "Warm and noticeable",
    gender: "Unisex",
    notes: {
      top: [
        { name: "Bergamot", description: "Bright and citrusy" },
        { name: "Saffron", description: "Softly spiced" },
      ],
      heart: [
        { name: "Amber", description: "Golden and resinous" },
        { name: "Vanilla", description: "Smooth and comforting" },
      ],
      base: [
        { name: "Sandalwood", description: "Creamy and warm" },
        { name: "Musk", description: "Soft and sensual" },
      ],
    },
    idealFor: ["Evening", "Cooler Days", "Everyday Elegance", "Gifting"],
  },
  {
    id: "amal-jasmin",
    name: "Amal Jasmin",
    subtitle: "A luminous floral with a graceful finish",
    price: 139,
    rating: 0,
    reviewCount: 0,
    description:
      "A graceful floral fragrance centered around delicate jasmine.",
    detailedDescription:
      "Amal Jasmin celebrates the luminous character of jasmine in a fresh, graceful composition. A bright citrus opening gives way to a generous white-floral heart, softened by clean musk and smooth cedarwood. Elegant and easy to wear from day into evening.",
    images: ["/amal_jasmin.jpeg"],
    sizes: [50, 100],
    concentration: "Eau de Parfum",
    longevity: "Long-lasting",
    sillage: "Soft and graceful",
    gender: "Unisex",
    notes: {
      top: [
        { name: "Bergamot", description: "Fresh and sparkling" },
        { name: "Neroli", description: "Green and uplifting" },
      ],
      heart: [
        { name: "Jasmine", description: "Luminous and floral" },
        { name: "Orange Blossom", description: "Soft and radiant" },
      ],
      base: [
        { name: "White Musk", description: "Clean and comforting" },
        { name: "Cedarwood", description: "Smooth and softly woody" },
      ],
    },
    idealFor: ["Daytime", "Spring", "Everyday Wear", "Gifting"],
  },
  {
    id: "amal-musk",
    name: "Amal Musk",
    subtitle: "A soft, close-to-the-skin comfort",
    price: 129,
    rating: 0,
    reviewCount: 0,
    description:
      "A soft, elegant musk fragrance with a clean and comforting finish.",
    detailedDescription:
      "Amal Musk is a gentle, comforting fragrance built around clean, airy musk. Juicy pear and bergamot bring a fresh first impression, while iris adds a delicate powdery softness. A quiet base of cashmere woods and vanilla leaves a smooth, intimate trail.",
    images: ["/amal_musk.jpeg"],
    sizes: [50, 100],
    concentration: "Eau de Parfum",
    longevity: "Long-lasting",
    sillage: "Soft and intimate",
    gender: "Unisex",
    notes: {
      top: [
        { name: "Pear", description: "Juicy and delicate" },
        { name: "Bergamot", description: "Light and refreshing" },
      ],
      heart: [
        { name: "White Musk", description: "Clean and airy" },
        { name: "Iris", description: "Soft and powdery" },
      ],
      base: [
        { name: "Cashmere Woods", description: "Smooth and cozy" },
        { name: "Vanilla", description: "Warm and gentle" },
      ],
    },
    idealFor: ["Everyday Wear", "Layering", "Quiet Moments", "Gifting"],
  },
  {
    id: "amal-oud-noir",
    name: "Amal Oud Noir",
    subtitle: "A bold, dusky take on oud",
    price: 189,
    rating: 0,
    reviewCount: 0,
    description:
      "A bold and mysterious oud fragrance crafted for evening occasions.",
    detailedDescription:
      "Amal Oud Noir is a deep, atmospheric fragrance with a confident oud signature. Cardamom and saffron lend a spiced opening, followed by dark woods and incense. Oud, amber, and a touch of leather create a rich finish with an elegant evening presence.",
    images: ["/amal_oud_noir.jpeg"],
    sizes: [50, 100],
    concentration: "Eau de Parfum",
    longevity: "Long-lasting",
    sillage: "Bold and lingering",
    gender: "Unisex",
    notes: {
      top: [
        { name: "Cardamom", description: "Warm and aromatic" },
        { name: "Saffron", description: "Rich and softly spiced" },
      ],
      heart: [
        { name: "Oud", description: "Deep and woody" },
        { name: "Incense", description: "Smoky and atmospheric" },
      ],
      base: [
        { name: "Amber", description: "Resinous and warm" },
        { name: "Leather", description: "Smooth and dark" },
      ],
    },
    idealFor: ["Evening", "Special Occasions", "Cooler Days", "Gifting"],
  },
  {
    id: "amal-rose-oud",
    name: "Amal Rose Oud",
    subtitle: "Where velvety rose meets precious oud",
    price: 169,
    rating: 0,
    reviewCount: 0,
    description:
      "A luxurious combination of delicate rose and rich Arabian oud.",
    detailedDescription:
      "Amal Rose Oud brings together the softness of rose petals and the depth of oud. A lively touch of pink pepper opens the fragrance, leading into a velvety rose heart layered with smoky woods. Amber, sandalwood, and musk settle into a warm, polished finish.",
    images: ["/amal_rose_oud.jpeg"],
    sizes: [50, 100],
    concentration: "Eau de Parfum",
    longevity: "Long-lasting",
    sillage: "Rich and elegant",
    gender: "Unisex",
    notes: {
      top: [
        { name: "Rose Petals", description: "Fresh and romantic" },
        { name: "Pink Pepper", description: "Bright and gently spiced" },
      ],
      heart: [
        { name: "Damask Rose", description: "Velvety and opulent" },
        { name: "Oud", description: "Smoky and richly woody" },
      ],
      base: [
        { name: "Amber", description: "Warm and resinous" },
        { name: "Sandalwood", description: "Creamy and smooth" },
        { name: "Musk", description: "Soft and sensual" },
      ],
    },
    idealFor: ["Evening", "Special Occasions", "Romantic Moments", "Gifting"],
  },
];