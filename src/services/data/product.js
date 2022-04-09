const products = [
  {
    id: 1,
    name: "Bolu Susun",
    description: "Disusun dengen penuh kenangan",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis et eos, perferendis ratione sint saepe ex in! Nam saepe quia ipsam totam accusantium, vero error eum neque laboriosam rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus minima alias tenetur, sequi neque et unde eos. Libero ad dolor, adipisci quibusdam quisquam pariatur! A cumque facere provident amet ipsam?",
    originalPrice: 40000,
    discountPercent: 10,
    category: "Bolu",
    image: "product01.png",
  },
  {
    id: 2,
    name: "Mie Aceh",
    description: "Disusun dengen penuh kenangan",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis et eos, perferendis ratione sint saepe ex in! Nam saepe quia ipsam totam accusantium, vero error eum neque laboriosam rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus minima alias tenetur, sequi neque et unde eos. Libero ad dolor, adipisci quibusdam quisquam pariatur! A cumque facere provident amet ipsam?",
    originalPrice: 28000,
    discountPercent: 5,
    category: "Mie",
    image: "product02.png",
  },
  {
    id: 3,
    name: "Bolu Lapis",
    description: "Ini Lapis",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis et eos, perferendis ratione sint saepe ex in! Nam saepe quia ipsam totam accusantium, vero error eum neque laboriosam rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus minima alias tenetur, sequi neque et unde eos. Libero ad dolor, adipisci quibusdam quisquam pariatur! A cumque facere provident amet ipsam?",
    originalPrice: 40000,
    discountPercent: 0,
    category: "Bolu",
    image: "product03.png",
  },
  {
    id: 4,
    name: "Donat",
    description: "Disusun dengen penuh kenangan",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis et eos, perferendis ratione sint saepe ex in! Nam saepe quia ipsam totam accusantium, vero error eum neque laboriosam rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus minima alias tenetur, sequi neque et unde eos. Libero ad dolor, adipisci quibusdam quisquam pariatur! A cumque facere provident amet ipsam?",
    originalPrice: 10000,
    discountPercent: 0,
    category: "Bolu",
    image: "product04.png",
  },
  {
    id: 5,
    name: "Pizza",
    description: "Disusun dengen penuh kenangan",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis et eos, perferendis ratione sint saepe ex in! Nam saepe quia ipsam totam accusantium, vero error eum neque laboriosam rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus minima alias tenetur, sequi neque et unde eos. Libero ad dolor, adipisci quibusdam quisquam pariatur! A cumque facere provident amet ipsam?",
    originalPrice: 200000,
    discountPercent: 10,
    category: "Pizza",
    image: "product05.png",
  },
  {
    id: 6,
    name: "Mata Sapi",
    description: "Disusun dengen penuh kenangan",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis et eos, perferendis ratione sint saepe ex in! Nam saepe quia ipsam totam accusantium, vero error eum neque laboriosam rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus minima alias tenetur, sequi neque et unde eos. Libero ad dolor, adipisci quibusdam quisquam pariatur! A cumque facere provident amet ipsam?",
    originalPrice: 4000,
    discountPercent: 0,
    category: "Lauk",
    image: "product06.png",
  },
  {
    id: 7,
    name: "Ice Cream",
    description: "Disusun dengen penuh kenangan",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis et eos, perferendis ratione sint saepe ex in! Nam saepe quia ipsam totam accusantium, vero error eum neque laboriosam rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus minima alias tenetur, sequi neque et unde eos. Libero ad dolor, adipisci quibusdam quisquam pariatur! A cumque facere provident amet ipsam?",
    originalPrice: 10000,
    discountPercent: 0,
    category: "Dessert",
    image: "product06.png",
  },
  {
    id: 8,
    name: "Nasi Goreng",
    description: "Disusun dengen penuh kenangan",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis et eos, perferendis ratione sint saepe ex in! Nam saepe quia ipsam totam accusantium, vero error eum neque laboriosam rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus minima alias tenetur, sequi neque et unde eos. Libero ad dolor, adipisci quibusdam quisquam pariatur! A cumque facere provident amet ipsam?",
    originalPrice: 30000,
    discountPercent: 0,
    category: "Main",
    image: "product06.png",
  },
  {
    id: 9,
    name: "Sayur Sop",
    description: "Disusun dengen penuh kenangan",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis et eos, perferendis ratione sint saepe ex in! Nam saepe quia ipsam totam accusantium, vero error eum neque laboriosam rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus minima alias tenetur, sequi neque et unde eos. Libero ad dolor, adipisci quibusdam quisquam pariatur! A cumque facere provident amet ipsam?",
    originalPrice: 20000,
    discountPercent: 0,
    category: "Lauk",
    image: "product06.png",
  },
  {
    id: 10,
    name: "Martabak Telur",
    description: "Disusun dengen penuh kenangan",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis et eos, perferendis ratione sint saepe ex in! Nam saepe quia ipsam totam accusantium, vero error eum neque laboriosam rerum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus minima alias tenetur, sequi neque et unde eos. Libero ad dolor, adipisci quibusdam quisquam pariatur! A cumque facere provident amet ipsam?",
    originalPrice: 8000,
    discountPercent: 0,
    category: "Dessert",
    image: "product06.png",
  },
];

export default products;
