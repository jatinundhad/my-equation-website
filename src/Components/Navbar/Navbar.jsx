import { useState } from 'react';
import { Login } from './Login';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { HamburgerIcon } from './HamburgerIcon';
import { CollapsibleMenu } from './CollapsibleMenu';

export const Navbar = () => {
  const [changeNavbarBackground, setChangeNavbarBackground] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest >= 0.1) {
      setChangeNavbarBackground(true);
    } else {
      setChangeNavbarBackground(false);
    }
  });

  return (
    <motion.nav
      className={`z-50 w-full sticky h-[60px] ${
        changeNavbarBackground
          ? 'backdrop-blur-sm bg-white/30 top-0 border-b-[1px] border-slate-100'
          : 'bg-transparent'
      }`}
      layout
    >
      <section className="min-w-screen-lg h-full flex justify-between px-4 sm:justify-around sm:px-0">
        <div className="flex">
          <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
          <Logo />
        </div>
        <Navigation />
        <Login />
      </section>
      <CollapsibleMenu isOpen={isOpen} />
    </motion.nav>
  );
};
