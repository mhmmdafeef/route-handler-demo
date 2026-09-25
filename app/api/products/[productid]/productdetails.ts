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

    images: [
      "/images/products/amal-eternal-1.jpg",
      "/images/products/amal-eternal-2.jpg",
      "/images/products/amal-eternal-3.jpg",
      "/images/products/amal-eternal-4.jpg",
    ],

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
];