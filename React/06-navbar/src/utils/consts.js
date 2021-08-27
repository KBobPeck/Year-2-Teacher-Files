import { FaFacebook, FaTwitter, FaLinkedin, FaBehance } from "react-icons/fa";
import React from "react";
import { Home, About, Products, Error, Cart } from "../Pages";
import Admin from "../Pages/Admin"; // <-- added for the thing below

export const links = [
  // HOME SHOULD BE FIRST
  {
    id: 1,
    url: "/",
    text: "Home",
    page: <Home />,
  },
  {
    id: 2,
    url: "/about",
    text: "About",
    page: <About />,
  },
  {
    id: 3,
    url: "/products",
    text: "Products",
    page: <Products />,
  },
  {
    id: 4,
    url: "/cart",
    text: "Cart",
    page: <Cart />,
  },

  //I added this at the end to show the new page being added
  //to the route and the nav bar at the same time.
  // its a good example of why we take the time to make this file

  // {
  //   id: 6,
  //   url: "/admin",
  //   text: "Admin",
  //   page: <Admin />,
  // },

  //ERROR NEEDS TO BE LAST
  {
    id: 5,
    url: "*",
    text: "Error",
    page: <Error />,
  },
];

export const socials = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.behance.net",
    icon: <FaBehance />,
  },
];
