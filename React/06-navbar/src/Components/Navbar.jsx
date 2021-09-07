import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links, socials } from "../utils/consts";
import logo from "../utils/logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);

  // this function will hide and show the links based on the window size
  // so that nothing can be missing when you chance from large to small
  //you can use a .show class to do the same thing but this shows what a useref
  const checkSize = () => {
    if (window.innerWidth > 768) {
      setShowLinks(true);
    }
    if (window.innerWidth <= 768) {
      setShowLinks(false);
    }
  };

  useEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {/* HOW I DID IT WITHOUT USEREF  */}
        {/* <div className={`links-container ${showLinks && "show"}`}>
          <ul className="links"> */}
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {/* Since we added the error to the list of pages for 
            the route so that we can do it automatically we need
            to filter out the error page so there isn't a link to
            it on the navbar */}
            {links
              .filter((link) => link.text !== "Error")
              .map((link) => {
                const { url, id, text } = link;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <ul className={`social-icons ${showLinks && "show"}`}>
          {socials.map((social) => {
            const { url, id, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
