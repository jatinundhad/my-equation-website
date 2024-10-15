import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

export const CollapsibleMenu = ({ isOpen }) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.section
          key="menu"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="sm:hidden py-2 h-fit flex justify-center rounded-b-xl border-b-[1px] border-slate-100 bg-white"
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
        </motion.section>
      )}
    </AnimatePresence>
  );
};

CollapsibleMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired
};
