import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../util/context';
const Error = () => {
  const { openSidebar } = useGlobalContext();
  return <main>
  <button onClick={openSidebar} className='sidebar-toggle'>
    <FaBars />
  </button>
  <h1>404 No Page Found</h1>
</main>;
};

export default Error;
