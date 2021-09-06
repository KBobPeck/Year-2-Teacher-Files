import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";

import Home from "../Pages/Home";
import Team from "../Pages/Team";
import Projects from "../Pages/Projects";
import Calendar from "../Pages/Calendar";
import Documents from "../Pages/Documents";
import Error from "../Pages/Error";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
    page: <Home />,
  },
  {
    id: 2,
    url: "/team",
    text: "team",
    icon: <FaUserFriends />,
    page: <Team />,
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
    icon: <FaFolderOpen />,
    page: <Projects />,
  },
  {
    id: 4,
    url: "/calendar",
    text: "calendar",
    icon: <FaCalendarAlt />,
    page: <Calendar />,
  },
  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <FaWpforms />,
    page: <Documents />,
  },
  {
    id: 6,
    url: "*",
    text: "error",
    icon: null,
    page: <Error />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: "https://www.twitter.com",
    icon: <FaSketch />,
  },
];
