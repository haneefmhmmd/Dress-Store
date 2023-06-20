// Select the database to use.
use("DressStore");

// Insert a few documents into the sales collection.
db.getCollection("products").insertMany([
  {
    name: "Floral Maxi Dress",
    description:
      "A beautiful floral print maxi dress perfect for summer occasions.",
    price: 59.99,
    published: true,
    category: "Women",
  },
  {
    name: "Slim Fit Blazer",
    description: "A stylish and elegant slim fit blazer for formal events.",
    price: 89.99,
    published: true,
    category: "Men",
  },
  {
    name: "Denim Jacket",
    description: "A classic denim jacket with a vintage wash.",
    price: 69.99,
    published: true,
    category: "Men",
  },
  {
    name: "Little Black Dress",
    description: "A timeless little black dress that is a wardrobe essential.",
    price: 49.99,
    published: true,
    category: "Women",
  },
  {
    name: "Graphic Print T-Shirt",
    description: "A casual and trendy graphic print t-shirt for everyday wear.",
    price: 24.99,
    published: true,
    category: "Men",
  },
  {
    name: "Ankle Boots",
    description: "Stylish ankle boots for a fashionable look.",
    price: 79.99,
    published: true,
    category: "Women",
  },
  {
    name: "Leather Wallet",
    description: "A sleek leather wallet to keep your essentials organized.",
    price: 39.99,
    published: true,
    category: "Men",
  },
  {
    name: "Strapless Jumpsuit",
    description: "A chic and versatile strapless jumpsuit for any occasion.",
    price: 69.99,
    published: true,
    category: "Women",
  },
  {
    name: "Button-Up Shirt",
    description: "A classic button-up shirt in a variety of colors.",
    price: 49.99,
    published: true,
    category: "Men",
  },
  {
    name: "Printed Midi Skirt",
    description: "A stylish printed midi skirt for a trendy look.",
    price: 54.99,
    published: true,
    category: "Women",
  },
  {
    name: "Casual Sneakers",
    description: "Comfortable and casual sneakers for everyday wear.",
    price: 59.99,
    published: true,
    category: "Men",
  },
  {
    name: "Off-Shoulder Top",
    description: "A trendy off-shoulder top for a feminine look.",
    price: 34.99,
    published: true,
    category: "Women",
  },
  {
    name: "Chino Pants",
    description: "Classic chino pants for a polished and relaxed style.",
    price: 59.99,
    published: true,
    category: "Men",
  },
  {
    name: "Maxi Skirt",
    description: "A flowy and comfortable maxi skirt for a boho vibe.",
    price: 44.99,
    published: true,
    category: "Women",
  },
  {
    name: "Polo Shirt",
    description: "A timeless polo shirt for a sporty and casual look.",
    price: 29.99,
    published: true,
    category: "Men",
  },
  {
    name: "Striped Dress",
    description: "A classic striped dress for a stylish and effortless outfit.",
    price: 39.99,
    published: true,
    category: "Women",
  },
  {
    name: "Cargo Shorts",
    description: "Versatile cargo shorts with multiple pockets.",
    price: 44.99,
    published: true,
    category: "Men",
  },
  {
    name: "Bohemian Blouse",
    description: "A bohemian-style blouse with intricate details.",
    price: 49.99,
    published: true,
    category: "Women",
  },
  {
    name: "Loafers",
    description: "Classic loafers for a sophisticated and polished look.",
    price: 69.99,
    published: true,
    category: "Men",
  },
  {
    name: "Printed Romper",
    description: "A playful and trendy printed romper for summer.",
    price: 34.99,
    published: true,
    category: "Women",
  },
  {
    name: "Hooded Sweatshirt",
    description: "A cozy hooded sweatshirt for casual and comfortable wear.",
    price: 49.99,
    published: true,
    category: "Men",
  },
  {
    name: "Floral Skater Dress",
    description:
      "A cute and vibrant floral skater dress for a fun and youthful look.",
    price: 39.99,
    published: true,
    category: "Teens",
  },
  {
    name: "Off-Shoulder Mini Dress",
    description:
      "An trendy off-shoulder mini dress perfect for parties and special occasions.",
    price: 49.99,
    published: true,
    category: "Teens",
  },
  {
    name: "Denim Overall Dress",
    description:
      "A stylish denim overall dress that can be dressed up or down.",
    price: 44.99,
    published: true,
    category: "Teens",
  },
  {
    name: "Printed T-Shirt Dress",
    description:
      "A comfortable and casual printed t-shirt dress for everyday wear.",
    price: 29.99,
    published: true,
    category: "Teens",
  },
  {
    name: "KW Collection Maxi Dress",
    description:
      "An elegant and stylish KW Collection maxi dress for special occasions.",
    price: 89.99,
    published: true,
    category: "Women",
  },
  {
    name: "KW Floral Print Dress",
    description:
      "A beautiful KW floral print dress perfect for a summer getaway.",
    price: 54.99,
    published: true,
    category: "Women",
  },
  {
    name: "KW Knit Sweater Dress",
    description:
      "A cozy and comfortable KW knit sweater dress for chilly days.",
    price: 64.99,
    published: true,
    category: "Women",
  },
]);

db.getCollection("categories").insertMany([
  {
    name: "Men",
  },
  {
    name: "Women",
  },
  {
    name: "Teens",
  },
]);
