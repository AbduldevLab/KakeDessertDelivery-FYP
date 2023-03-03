const router = require("./Routers.jsx");

const Sitemap = require("react-router-sitemap").default;

const sitemap = new Sitemap(router)
  .build("https://kakedessertdelivery.com")
  .save("./public/sitemap.xml");
