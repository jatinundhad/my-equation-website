import { useState } from "react";
import { Login } from "./Login";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { HamburgerIcon } from "./HamburgerIcon";
import { CollapsibleMenu } from "./CollapsibleMenu";

export const Navbar = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { scrollY } = useScroll();
  const animationStyle = {
    width: "80%",
    borderRadius: "100px",
    translateY: "15px",
    margin: "0 auto 0 auto",
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 80) {
      setShowAnimation(true);
    } else {
      setShowAnimation(false);
    }
  });

  return (
    <motion.nav
      // animate={showAnimation ? animationStyle : {}}
      // transition={{ type: "spring", bounce: 0, duration: 0.1, stiffness: 80 }}
      className="z-50 w-full sticky h-[60px] backdrop-blur-sm bg-white/30 top-0 border-b-[1px] border-slate-100"
      layout
    >
      <section className="min-w-screen-lg h-full flex justify-between px-4 sm:justify-around sm:px-0">
        <Logo />
        <Navigation />
        <div className="flex">
          <Login />
          <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </section>
      <CollapsibleMenu isOpen={isOpen} />
    </motion.nav>
  );
};
