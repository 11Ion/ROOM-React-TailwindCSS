import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../resources/img/logo.svg";
import iconAddress from "../../resources/img/address.svg";
import iconCard from "../../resources/img/card.svg";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const ContentDesktop = () => {
  const location = useLocation();

  return (
    <>
      <div>
        <ul className="hidden lg:flex items-center gap-x-24 uppercase text-xs tracking-2 leading-4">
          <li>
            <NavLink
              to="/Products"
              className={
                location.pathname === "/Products"
                  ? "text-[#46856E]"
                  : "text-black"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Explore"
              className={
                location.pathname === "/Explore"
                  ? "text-[#46856E]"
                  : "text-black"
              }
            >
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Shop"
              className={
                location.pathname === "/Shop" ? "text-[#46856E]" : "text-black"
              }
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
const ContentMobile = () => {
  const location = useLocation();

  return (
    <>
      <div className="left-0 top-36 absolute w-full lg:w-auto lg:static block lg:hidden">
        <ul className="drop-shadow-lg bg-white gap-y-7 pt-5 pb-5 pl-10 w-full flex-col flex items-center gap-x-24 uppercase text-xs tracking-2 leading-4">
          <li>
            <NavLink
              to="/Products"
              className={
                location.pathname === "/Products"
                  ? "text-[#46856E]"
                  : "text-black"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Explore"
              className={
                location.pathname === "/Explore"
                  ? "text-[#46856E]"
                  : "text-black"
              }
            >
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Shop"
              className={
                location.pathname === "/Shop" ? "text-[#46856E]" : "text-black"
              }
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full relative">
      <div className="h-10 flex w-full items-center justify-end gap-6 bg-gray_1 px-6">
        <NavLink
          to="/Contact"
          className="text-gray_2 text-xs uppercase leading-8 hover:text-black ease-out duration-300"
        >
          Contact Sales
        </NavLink>
        <NavLink
          to="tel:6467913726"
          className="text-gray_2 text-xs uppercase leading-8 hover:text-black ease-out duration-300"
        >
          TEL 646-791-3726
        </NavLink>
      </div>
      <div className="h-custom-99 border-b border-solid border-gray_3 px-8 flex w-full items-center justify-between">
        <div className="flex">
          <NavLink 
            to="/"
            className="w-[50px] h-[50px]"
          >
            <img src={Logo} className="w-[50px] h-[50px]" draggable="false" alt="Logo" />
          </NavLink>
        </div>
        <ContentDesktop />
        {isOpen && <ContentMobile />}
        <ul className="flex items-center gap-4 tracking-2 leading-4">
          <li className="flex">
            <NavLink
              to="/Showrooms"
              className="text-black flex items-center gap-2 w-[25px] h-[25px]"
            >
              <img src={iconAddress} draggable="false" alt="address" />
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/Card" className="w-[25px] h-[25px]" >
              <img src={iconCard} draggable="false" alt="address" />
            </NavLink>
          </li>
          <li className="flex lg:hidden">
            <button className="block lg:hidden" onClick={toggleNavbar}>
              {isOpen ? (
                <X className="w-[30px] h-[30px]" />
              ) : (
                <Menu className="w-[30px] h-[30px]" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
