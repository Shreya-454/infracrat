import React, { useState } from "react";
import Icons from "./Icons";
import { NAV_LINK_LIST } from "../../utils/helper";
import logo from "../../assets/images/svg/logo.svg";
import CommonButton from "../custom-ui/CommonButton";

const NavBar = () => {
  const [show, setShow] = useState(true);

  // Function to toggle the nav
  function showNav() {
    setShow(!show);
    if (show === true) {
      document.body.classList.add("max-lg:!overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:!overflow-hidden");
    }
  }

  // Function to check if a link is active
  const isActiveLink = (url) => {
    return window.location.pathname === url; // Returns true if the current path matches the link URL
  };

  return (
    <div className="sm:py-[17px] pt-6">
      <div className="container max-w-[1188px] px-6 mx-auto">
        <div className="flex justify-between items-center">
          <a href="/">
            <img
              src={logo}
              alt="nav-logo"
              className="md:w-[233px] sm:w-[150px] w-[124.63px]"
            />
          </a>
          <ul
            className={`flex items-center gap-5 xl:gap-[35px] max-lg:z-20 max-lg:justify-center max-lg:flex-col max-lg:fixed max-lg:right-0 max-lg:top-0 max-lg:bg-blue max-lg:w-full max-lg:h-screen duration-300 ${
              show ? "max-lg:translate-x-full" : "max-lg:translate-x-0"
            }`}
          >
            {NAV_LINK_LIST.map((data, index) => (
              <li key={index}>
                <a
                  onClick={showNav}
                  href={data.url}
                  className={`text-white hover:text-opacity-100 !leading-115 text-opacity-70 font-normal font-open-sans text-base duration-300 relative after:absolute after:w-0 after:h-0.5 after:rounded-full after:-bottom-1 after:start-1/2 after:-translate-x-1/2 after:bg-white hover:after:w-[80%] after:duration-300 ${
                    isActiveLink(data.url) ? "!text-opacity-100 !font-bold" : ""
                  }`}
                >
                  {data.link}
                </a>
              </li>
            ))}
            <li className="sm:hidden lg:block xl:ml-[23px]">
              <CommonButton onClick={showNav}>Sign up</CommonButton>
            </li>
          </ul>
          <div className="gap-4 items-center flex lg:hidden">
            <CommonButton className="sm:flex hidden">Sign up</CommonButton>
            <div className="lg:hidden cursor-pointer" onClick={showNav}>
              {show ? (
                <div className="z-30 cursor-pointer relative">
                  <Icons icon="menuIcon" />
                </div>
              ) : (
                <div className="z-20 cursor-pointer relative">
                  <Icons icon="crossIcon" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
