import { FaFacebook, FaLinkedin, FaTwitter, FaBehance } from "react-icons/fa";
import React from "react";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/about",
    text: "About",
  },
  {
    id: 3,
    url: "/products",
    text: "Products",
  },
  {
    id: 4,
    url: "/cart",
    text: "Cart",
  },
];
export const socials = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 3,
    url: "https://www.linkedin.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.behance.com",
    icon: <FaBehance />,
  },
];
