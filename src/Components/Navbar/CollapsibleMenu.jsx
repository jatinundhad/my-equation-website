import React from 'react';
import PropTypes from 'prop-types';

export const CollapsibleMenu = ({ isOpen }) => {
  return (
    <section
      className={`${
        isOpen ? 'block' : 'hidden'
      } sm:hidden py-2 h-fit flex justify-center rounded-xl z-30 bg-slate-100`}
    >
      <ul className="text-center w-full grid grid-cols-1 divide-y">
        <li className="py-2 font-medium">
          <a href="#home" className="hover:text-slate-900/100 text-indigo-900/75 font-bold">
            Home
          </a>
        </li>
        <li className="py-2 font-medium">
          <a href="#about" className="hover:text-slate-900/100 text-indigo-900/75 font-bold">
            About
          </a>
        </li>
        <li className="py-2 font-medium">
          <a href="#contact" className="hover:text-slate-900/100 text-indigo-900/75 font-bold">
            Contact
          </a>
        </li>
      </ul>
    </section>
  );
};

CollapsibleMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired
};
