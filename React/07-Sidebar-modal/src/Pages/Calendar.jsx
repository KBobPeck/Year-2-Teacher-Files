import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../util/context';
const Calendar = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return <main>
  <button onClick={openSidebar} className='sidebar-toggle'>
    <FaBars />
  </button>
  <h1>Calendar Page</h1>
  <button onClick={openModal} className='btn'>
    show modal
  </button>
</main>;
};

export default Calendar;
