// 1>"Toilet Cleaner Acid",
// 2>Toilet Cleaner Gas Free Liquid
// 3>Floor Cleaner Phenyl
// 4>Sanitizing Powder
// 5>Battery Water
// 6>Handwash liquid
import slider1 from "../public/slider1.png";
import slider2 from "../public/slider2.png";
import slider3 from "../public/slider3.png";
import slider4 from "../public/slider4.png";

import textLabel from "../labels.js";



export const categories = [
  {
    catId: 1,
    catName: "Toilet Cleaner Acid",
    offerText: `Items under ${textLabel.dashboard.rupeeSign}49`,
    description:
      "Achieve a deep clean with our powerful Hans Toilet Cleaning Acid, formulated with Hydrochloric Acid (HCL) to remove the toughest stains, scale, and bacteria from toilet bowls, urinals, and drains.",
    features: [
      "High-Strength Formula - Quickly dissolves limescale, rust, and hard stains.",
      "Kills 99.9% Germs - Ensures hygiene and sanitization in every use.",
      "Restores Shine - Leaves toilets sparkling clean and refreshed.",
      "Fast-Acting - Visible results within minutes of application.",
      "Ideal for Commercial & Domestic Use - Suitable for toilets in homes, schools, hotels, hospitals, and public facilities.",
    ],
    howToUse: [
      {
        useFor: "",
        howTo: [
          "Pour the acid carefully around the toilet bowl or stained area.",
          "Let it sit for 5-10 minutes (do not scrub immediately).",
          "Flush with plenty of water and scrub if needed.",
          "Ensure proper ventilation during use.",
        ],
      },
    ],
  },
  {
    catId: 2,
    catName: "Toilet Cleaner Gas Free Liquid",
    offerText: `Items under ${textLabel.dashboard.rupeeSign}69`,

    description:
      "Maintain a hygienic and fresh-smelling bathroom with our Hans Toilet Cleaner Liquid, specially formulated to clean, disinfect, and deodorize toilet bowls with ease. Its thick formula clings to surfaces, removing tough stains, limescale, and 99.9% of germs.",
    features: [
      "Removes Tough Stains - Effective against hard water marks, rust, and yellow stains.",
      "Kills 99.9% Germs - Ensures a hygienic and sanitized toilet.",
      "Thick Clinging Formula - Stays longer for deep cleaning.",
      "Fresh Fragrance - Leaves your bathroom smelling clean and refreshing.",
      "Safe on Ceramic Surfaces - Ideal for toilet bowls and urinals.",
    ],
    howToUse: [
      {
        useFor: "",
        howTo: [
          "Direct the nozzle under the toilet rim.",
          "Squeeze to apply evenly around the bowl.",
          "Leave for 10-15 minutes.",
          "Scrub with a toilet brush and flush.",
        ],
      },
    ],
  },
  {
    catId: 3,
    catName: "Floor Cleaner Phenyl",
    offerText: `Items under ${textLabel.dashboard.rupeeSign}79`,
    description:
      "Ensure a hygienic and sparkling clean environment with our high-quality Hans phenyl, specially formulated for daily floor cleaning and disinfection. Suitable for homes, offices, hospitals, schools, and commercial spaces.",
    features: [
      "Kills 99.9% Germs - Provides strong antibacterial protection.",
      "Powerful Cleaning Action - Effectively removes dirt, stains, and odors.",
      "Pleasant Fragrance - Leaves floors smelling fresh and clean.",
      "Safe on All Surfaces - Ideal for tiles, marble, granite, mosaic, etc.",
      "Concentrated Formula - Just dilute before use for long-lasting performance.",
    ],
    howToUse: [
      {
        useFor: "",
        howTo: [
          "For regular cleaning: Mix 1 cap (approx. 15-20ml) of phenyl in 1 liter of water.",
          "For tough stains: Use undiluted on affected area, leave for a few minutes, then scrub and rinse.",
        ],
      },
    ],
  },
  {
    catId: 4,
    catName: "Sanitizing Powder",
    offerText: `Items under ${textLabel.dashboard.rupeeSign}29`,
    description:
      "Keep your surroundings germ-free with our high-quality Hans bleaching powder. Ideal for disinfecting floors, toilets, drains, and surfaces, it effectively kills bacteria, removes stains, and eliminates foul odors. Perfect for home, hospital, and industrial use.",
    features: [
      "Powerful Disinfectant - Effectively kills 99.9% of bacteria and viruses.",
      "Multi-Purpose Use - Suitable for cleaning floors, toilets, drains, and water tanks.",
      "Removes Tough Stains - Helps in whitening and removing stains from surfaces.",
      "Deodorizes Surfaces - Eliminates bad odors and leaves areas smelling fresh.",
      "Industrial & Domestic Use - Ideal for homes, hospitals, schools, and public spaces.",
      "Long Shelf Life - Stable and effective when stored properly.",
    ],
    howToUse: [
      {
        useFor: "",
        howTo: [
          "Pour the acid carefully around the toilet bowl or stained area.",
          "Let it sit for 5-10 minutes (do not scrub immediately).",
          "Flush with plenty of water and scrub if needed.",
          "Ensure proper ventilation during use.",
        ],
      },
    ],
  },
  {
    catId: 5,
    catName: "Battery Water",
    offerText: `Items under ${textLabel.dashboard.rupeeSign}19`,

    description:
      "Keep your batteries performing at their best with high-quality Hans distilled Battery Water, specially formulated for use in all types of lead-acid batteries, including those used in inverters, cars, trucks, and UPS systems.",
    features: [
      "100% Pure Distilled Water - Free from minerals, salts, and impurities.",
      "Enhances Battery Life - Prevents sulfation and corrosion of battery plates.",
      "Improves Efficiency - Ensures proper electrolyte levels and optimal charging.",
      "Safe & Reliable - Non-toxic, non-flammable, and safe for regular use.",
      "Multipurpose - Ideal for inverter batteries, automotive batteries, and solar power systems.",
    ],
    howToUse: [
      {
        useFor: "For Floor Cleaning:",
        howTo: [
          "Mix 1 tablespoon of bleaching powder in 1 bucket (5 liters) of water.",
          "Mop the floor thoroughly with the solution.",
        ],
      },
      {
        useFor: "For Toilets and Drains:",
        howTo: [
          "Sprinkle directly into the toilet bowl or drain area.",
          "Let it sit for 15-20 minutes before flushing with water.",
        ],
      },
      {
        useFor: "For Surface Disinfection:",
        howTo: [
          "Prepare a diluted solution (1 tsp in 1 liter of water).",
          "Apply using a cloth or spray bottle and wipe after 5 minutes.",
        ],
      },
      {
        useFor: "For Water Tank Cleaning (Large Use Only):",
        howTo: [
          "Add as per safety guidelines (approx. 1 gram per 1000 liters).",
          "Let it sit for 30 minutes before use (ensure proper ventilation).",
        ],
      },
    ],
  },
  {
    catId: 6,
    catName: "Handwash liquid",
    offerText: `Items under ${textLabel.dashboard.rupeeSign}49`,

    description:
      "Hans Handwash cleans hands effectively while being gentle on the skin. Enriched with moisturizers and antibacterial agents, it removes dirt, germs, and impurities—leaving your hands soft, fresh, and protected with every wash.",
    features: [
      "Effective Germ Protection - Eliminates 99.9% of germs and bacteria.",
      "Gentle on Skin - Formulated with moisturizing ingredients to prevent dryness.",
      "Refreshing Fragrance - Leaves your hands smelling clean and fresh.",
      "Rich Lather Formula - Provides a smooth, foamy wash with minimal usage.",
      "Suitable for All Skin Types - Safe and mild for everyday use by the whole family.",
      "Attractive & Easy-to-Use Packaging - Available in refill packs and pump bottles.",
    ],
    howToUse: [
      {
        useFor: "",
        howTo: [
          "Wet your hands with clean water.",
          "Pump a small amount of Hans Handwash onto your palm.",
          "Rub hands together thoroughly, making sure to cover all areas—back of hands, between fingers, and under nails—for at least 20 seconds.",
          "Rinse well with water.",
          "Dry hands with a clean towel or air dry.",
        ],
      },
    ],
  },
];

export const imageData = [
  {
    id: 1,
    src: [slider1, slider2, slider3, slider4],
    productId: 1,
  },
];

export const ProductData = [
  {
    id: 1,
    name: "Hans Toilet Cleaner Acid",
    price: 299,
    mrp: 380,
    catId: 1,
    volume: "5 litre",
  },
  {
    id: 2,
    name: "Hans Toilet Cleaner Acid",
    price: 69,
    mrp: 90,
    catId: 1,
    volume: "1 litre",
  },
  {
    id: 3,
    name: "Hans Toilet Cleaner Acid",
    price: 39,
    mrp: 42,
    catId: 1,
    volume: "500 ml",
  },
  {
    id: 4,
    name: "Hans Toilet Cleaner Acid",
    price: 29,
    mrp: 32,
    catId: 1,
    volume: "300 ml",
  },

  {
    id: 5,
    name: "Hans BlueDrop Bathroom cleaner",
    price: 399,
    mrp: 560,
    catId: 2,
    volume: "5 litre",
  },
  {
    id: 6,
    name: "Hans BlueDrop Bathroom cleaner",
    price: 89,
    mrp: 117,
    catId: 2,
    volume: "1 litre",
  },
  {
    id: 7,
    name: "Hans BlueDrop Bathroom cleaner",
    price: 49,
    mrp: 65,
    catId: 2,
    volume: "400 ml",
  },
  {
    id: 8,
    name: "Hans BlueDrop Bathroom cleaner",
    price: 39,
    mrp: 56,
    catId: 2,
    volume: "250 ml",
  },
  {
    id: 9,
    name: "Hans White Floor Cleaner",
    catId: 3,
    price: 249,
    mrp: 310,
    volume: "5 litre",
  },
  {
    id: 10,
    name: "Hans White Floor Cleaner",
    catId: 3,
    price: 59,
    mrp: 78,
    volume: "1 litre",
  },
  {
    id: 11,
    name: "Hans White Floor Cleaner",
    catId: 3,
    price: 39,
    mrp: 56,
    volume: "500 ml",
  },
  {
    id: 12,
    name: "Hans White Floor Cleaner",
    catId: 3,
    price: 249,
    mrp: 310,
    volume: "5 litre",
  },

  {
    id: 13,
    name: "Hans Sanitizing Powder",
    catId: 4,
    price: 399,
    mrp: 560,
    volume: "10 Kg Bag",
  },
  {
    id: 14,
    name: "Hans Sanitizing Powder",
    catId: 4,
    price: 249,
    mrp: 315,
    volume: "5 Kg Bag",
  },
  {
    id: 15,
    name: "Hans Sanitizing Powder",
    catId: 4,
    price: 59,
    mrp: 88,
    volume: "1 Kg",
  },
  {
    id: 16,
    name: "Hans Sanitizing Powder",
    catId: 4,
    price: 39,
    mrp: 59,
    volume: "500 g",
  },
  {
    id: 17,
    name: "Hans Sanitizing Powder",
    catId: 4,
    price: 19,
    mrp: 79,
    volume: "200 g",
  },

  {
    id: 18,
    catId: 5,
    name: "Hans Distilled Battery Water",
    price: 149,
    mrp: 235,
    volume: "5 litre",
  },
  {
    id: 19,
    catId: 5,
    name: "Hans Distilled Battery Water",
    price: 109,
    mrp: 185,
    volume: "2 litre",
  },
  {
    id: 20,
    catId: 5,
    name: "Hans Distilled Battery Water",
    price: 59,
    mrp: 125,
    volume: "1 litre",
  },

  {
    id: 21,
    catId: 6,
    name: "Hasn handwash liquid",
    price: 499,
    mrp: 750,
    volume: "5 litre",
  },
  {
    id: 22,
    catId: 6,
    name: "Hasn handwash liquid",
    price: 499,
    volume: "5 litre",
  },
  {
    id: 23,
    catId: 6,
    name: "Hasn handwash liquid",
    price: 109,
    mrp: 150,
    volume: "1 litre",
  },
  {
    id: 24,
    catId: 6,
    name: "Hasn handwash liquid",
    price: 89,
    mrp: 117,
    volume: "400 ml",
  },
];
