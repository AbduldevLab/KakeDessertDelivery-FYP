// This file is used to generate the sitemap.xml file
const router = require("./Routers.jsx");
//This is the sitemap generator
const Sitemap = require("react-router-sitemap").default;
//This is the path to the public folder
const sitemap = new Sitemap(router)
  .build("https://kakedessertdelivery.com")//
  .save("./public/sitemap.xml");
