"use client";

import React, { useEffect } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { InView, useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Header() {
  const [state, setViewState] = React.useState<boolean>(false);
  const [ref, inView] = useInView({ threshold: 0.1 });
  useEffect(() => {
    setViewState(inView);
  }, [inView]);

  const [showmodal, setShowModal] = React.useState<boolean>(false);

  return (
    <>
      <div className="w-full  flex  justify-between  items-center   px-5 md:px-4 lg:px-52 pt-3  fixed z-50 lg:relative top-0 " ref={ref}>
        <div className="flex gap-2  items-center  ">
          <button className="bg-purple-400 text-2xl text-white rounded-full px-3 text-center py-1 flex items-center justify-center  ">
            A
          </button>
          <h1 className="text-2xl font-semibold ">Angel</h1>
        </div>
        <Navigation />
        <ResponsiveNav setState={setShowModal} state={showmodal} />
      </div>
      {!state && <Component />}
    </>
  );
}

export default Header;

const Navigation: React.FC = () => {
  return (
    <>
      <div className=" hidden w-[50%] h-full  lg:flex items-center justify-between ">
        <div className="flex-1 flex  gap-10 items-center justify-center">
          <a href="" className="text-sm font-semibold font-sans">
            Home
          </a>
          <a href="#about" className="text-sm font-semibold font-sans">
            About{" "}
          </a>
          <a href="#projects" className="text-sm font-semibold font-sans">
            projects
          </a>
          <a href="#services" className="text-sm font-semibold font-sans">
            Services
          </a>  
        </div>
        <button className="bg-purple-400 rounded px-4 py-2  mr-3  text-white">
          <a href="#contacts">Contact</a>
        </button>
      </div>
    </>
  );
};

const ResponsiveNav: React.FC<{ setState: Function; state: boolean }> = ({
  setState,
  state,
}) => {
  function handleClick() {
    setState(true);
  }

  return (
    <>
      <div className="block lg:hidden " onClick={handleClick}>
        <Bars3BottomRightIcon
          width={25}
          height={25}
          className=""
          color="black "
        />
        {state && <MobileNavigationModal state={state} setState={setState} />}
      </div>
    </>
  );
};



const MobileNavigationModal: React.FC<{
    setState: Function,
    state:boolean
}> = ({ setState }) => {
    
  function handlehidemodal() {
      console.log('clicked')
    setState(false);
}

  return (
      <>
      <div className="fixed top-0 right-0 w-[90%] md:w-[70%]  bg-white  flex flex-col items-end border-l pt-8 bottom-0 px-4">
        <button onClick={handlehidemodal}>
          <XMarkIcon width={25} height={25} className="mb-2 " color="black " />
        </button>
        <div className="flex flex-col gap-10 w-full  ">
          <NavComponent to="" label="Home" />
          <NavComponent to="" label="About " />
          <NavComponent to="" label="Projects" />
          <NavComponent to="" label="contacts" />
        </div>
      </div>
    </>
  );
};

const NavComponent: React.FC<{ label: string; to: string }> = ({
    label,
    to,
}) => {
    return (
    <div className="w-full hover:bg-purple-400 rounded flex items-center justify-center hover:text-white ">
      <a href={to} className="font-semibold">
        {label}
      </a>
    </div>
  );
};
  function Component() {
    const initial = { opacity: 0, y: -50 }; // Initial state: invisible and 50px above the viewport
    const animate = { opacity: 1, y: 0 }; // Animation state: fully visible and at its original position
    const transition = { duration: 0.5 };
  
    return (
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className="hidden fixed top-0  lg:flex items-center  shadow-md shadow-gray-200  gap-10  justify-center ml-[100px] lg:ml-[550px] px-8 py-3 rounded-full mt-2 z-50 bg-white"
      >
        {/* Your element content */}
        <a href="" className="text-sm font-semibold font-sans">
          Home
        </a>
        <a href="#about" className="text-sm font-semibold font-sans">
          About
        </a>
        <a href="#projects" className="text-sm font-semibold font-sans">
          projects
        </a>
        <a href="#services" className="text-sm font-semibold font-sans">
          services
        </a>
        <a href="#contacts" className="text-sm font-semibold font-sans">
          contacts
        </a>
      </motion.div>
    );
  }