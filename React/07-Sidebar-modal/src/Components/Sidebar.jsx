import React from 'react';
import logo from '../util/logo.svg';
import { useGlobalContext } from '../util/context';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { social, links } from '../util/consts';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarOpen && 'show-sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='coding addict' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links
        .filter((link) => link.text !== "error")
        .map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <Link to={url}>
                {icon}
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
