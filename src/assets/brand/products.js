// all images imported from images directory
import product_01_image_01 from "../images/Beverages/Strawberry smoothie.jpeg";
import product_01_image_02 from "../images/Beverages/Biscoff shake.JPG";
import product_01_image_03 from "../images/Beverages/Snapple.jpg";
import product_01_image_04 from "../images/Beverages/Hot drinks.jpg";

// import product_02_image_05 from "../images/Brownie tray/bt1.jpg";
// import product_02_image_06 from "../images/Brownie tray/bt2.jpg";
import product_02_image_07 from "../images/Brownie tray/bt3.jpg";

// import product_03_image_08 from "../images/CheeseCake tub/cct1.jpg";
// import product_03_image_09 from "../images/CheeseCake tub/cct2.jpg";
// import product_03_image_10 from "../images/CheeseCake tub/cct3.jpg";
import product_03_image_11 from "../images/CheeseCake tub/CheeseCake tub.jpg";

import product_04_image_12 from "../images/Cookie dough tray/cdt1.jpg";
// import product_04_image_13 from "../images/Cookie dough tray/cdt2.jpg";
// import product_04_image_14 from "../images/Cookie dough tray/cdt3.jpg";

// import product_05_image_15 from "../images/Croissants/c1.jpg";
// import product_05_image_16 from "../images/Croissants/c2.jpg";
import product_05_image_17 from "../images/Croissants/c3.jpg";

import product_00_image_00 from "../images/Coming Soon.jpg";



const products = [
  {
    id: "02",
    title: "Cookie Dough Tray",
    price: 7,
    image01: product_04_image_12,
    category: "Desserts",

    desc: "See faqs page for any allergy advice and ingrediants.",
  },

  {
    id: "01",
    title: "Cheese Cake Tub",
    price: 6,
    // image01: product_03_image_08,
    // image02: product_03_image_09,
    // image03: product_03_image_10,
    image01: product_03_image_11,
    category: "Desserts",

    desc: "See faqs page for any allergy advice and ingrediants.",
  },

  {
    id: "03",
    title: "Croissant",
    price: 5,
    image01: product_05_image_17,
    category: "Desserts",

    desc: "See faqs page for any allergy advice and ingrediants.",
  },

  {
    id: "04",
    title: "Brownie tray",
    price: 5,
    image01: product_02_image_07,
    category: "Desserts",

    desc: "See faqs page for any allergy advice and ingrediants.",
  },

  {
    id: "05",
    title: "Strawberry Smoothie",
    price: 3,
    image01: product_01_image_01,
    category: "Drinks",

    desc: "See faqs page for any allergy advice and ingrediants.",
  },

  {
    id: "06",
    title: "Biscoff Shake",
    price: 3,
    image01: product_01_image_02,
    category: "Drinks",

    desc: "See faqs page for any allergy advice and ingrediants.",
  },

  {
    id: "07",
    title: "Cold drinks",
    price: 3,
    image01: product_01_image_03,
    category: "Drinks",

    desc: "See faqs page for any allergy advice and ingrediants.",
  },
  {
    id: "08",
    title: "Hot drinks",
    price: 3,
    image01: product_01_image_04,
    category: "Drinks",

    desc: "See faqs page for any allergy advice and ingrediants.",
  },
  {
    id: "09",
    title: "Crisps",
    price: 1.50,
    image01: product_00_image_00,
    category: "Snacks",

    desc: "See faqs page for any allergy advice and ingrediants.",
  },
  {
    id: "10",
    title: "Chocolate bars",
    price: 1.50,
    image01: product_00_image_00,
    category: "Snacks",

    desc: "See faqs page for any allergy advice and ingrediants.",
  },
  {
    id: "11",
    title: "American candy",
    price: 2.50,
    image01: product_00_image_00,
    category: "Snacks",

    desc: "See faqs page for any allergy advice and ingrediants.",
  },
];

export default products;
