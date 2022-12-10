// all images imported from images directory
import product_01_image_01 from "../images/cc1.jpg";
import product_01_image_02 from "../images/cc2.jpg";

import product_02_image_01 from "../images/cd1.jpg";
import product_02_image_02 from "../images/cd2.jpg";
import product_02_image_03 from "../images/cd3.jpg";

import product_03_image_01 from "../images/cck1.jpg";

import product_04_image_01 from "../images/rc1.jpg";

import product_05_image_01 from "../images/c1.jpg";

import product_06_image_01 from "../images/ms1.jpg";

import product_07_image_01 from "../images/sm1.png";


const products = [
  {
    id: "01",
    title: "Cheese Cake Tub",
    price: 6,
    image01: product_01_image_01,
    image02: product_01_image_02,
    category: "Desserts",

    desc: "See faqs page for any allergy advice and ingrediants.",
  },

  {
    id: "02",
    title: "Cookie Dough Tray",
    price: 7,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Desserts",

    desc: "See faqs page for any allergy advice and ingrediants.",
  },

  {
    id: "03",
    title: "Chocolate Cake Slice",
    price: 5,
    image01: product_03_image_01,
    category: "Desserts",

    desc: "See faqs page for any allergy advice and ingrediants.",
  },

  {
    id: "04",
    title: "Red-Velvet Cake Slice",
    price: 5,
    image01: product_04_image_01,
    category: "Desserts",

    desc: "See faqs page for any allergy advice and ingrediants.",
  },

  {
    id: "05",
    title: "Croissant",
    price: 3,
    image01: product_05_image_01,
    category: "Desserts",

    desc: "See faqs page for any allergy advice and ingrediants.",
  },
  {
    id: "06",
    title: "Biscoff Shake",
    price: 5,
    image01: product_06_image_01,
    category: "Drinks",

    desc: "See faqs page for any allergy advice and ingrediants.",
  },

  {
    id: "07",
    title: "Strawberry Smoothie",
    price: 115.0,
    image01: product_07_image_01,
    category: "Drinks",
    
    desc: "See faqs page for any allergy advice and ingrediants.",
  },
  // {
  //   id: "08",
  //   title: "Thin Cheese Pizza",
  //   price: 110.0,
  //   image01: product_03_image_02,
  //   image02: product_03_image_01,
  //   image03: product_03_image_03,
  //   category: "Pizza",

  //   desc: "See faqs page for any allergy advice and ingrediants.",
  // },

  // {
  //   id: "09",
  //   title: "Pizza With Mushroom",
  //   price: 110.0,
  //   image01: product_04_image_02,
  //   image02: product_04_image_01,
  //   image03: product_04_image_03,
  //   category: "Pizza",

  //   desc: "See faqs page for any allergy advice and ingrediants.",
  // },

  // {
  //   id: "10",
  //   title: "Classic Hamburger",
  //   price: 24.0,
  //   image01: product_05_image_02,
  //   image02: product_05_image_01,
  //   image03: product_05_image_03,
  //   category: "Burger",

  //   desc: "See faqs page for any allergy advice and ingrediants.",
  // },

  // {
  //   id: "11",
  //   title: "Crunchy Bread ",
  //   price: 35.0,
  //   image01: product_06_image_01,
  //   image02: product_06_image_02,
  //   image03: product_06_image_03,
  //   category: "Bread",

  //   desc: "See faqs page for any allergy advice and ingrediants.",
  // },

  // {
  //   id: "12",
  //   title: "Delicious Bread ",
  //   price: 35.0,
  //   image01: product_06_image_02,
  //   image02: product_06_image_01,
  //   image03: product_06_image_03,
  //   category: "Bread",

  //   desc: "See faqs page for any allergy advice and ingrediants.",
  // },

  // {
  //   id: "13",
  //   title: "Loaf Bread ",
  //   price: 35.0,
  //   image01: product_06_image_03,
  //   image02: product_06_image_02,
  //   image03: product_06_image_03,
  //   category: "Bread",

  //   desc: "See faqs page for any allergy advice and ingrediants.",
  // },
];

export default products;
