import { useState } from "react";
import { navLinks } from "../constants";
import { heroimg, menu, close } from "../assets";
import { Button } from ".";

const navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full relative flex flex-row justify-between items-center font-poppins px-[1rem] pt-[2rem] md:px-[8rem] uppercase">
      <img src={heroimg} className="w-full absolute top-0 right-0 z-0" />
      <h1 className="text-primary font-bold z-10 text-[20px]">foodmood</h1>
      <ui className="md:flex flex-row list-none text-primary items-center z-10 font-semibold hidden">
        {navLinks.map((nav) => (
          <li
            className={`me-10 cursor-pointer ${
              active === nav.title ? "text-yellow" : "text-primary"
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        <Button title="Download App" />
      </ui>

      <div className="sm:hidden flex justify-end items-center z-20">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } bg-primary absolute top-20 right-0 mt-2 p-6 min-w-full rounded-xl`}
        >
          <ul className="list-none flex justify-center items-center flex-1 flex-col uppercase font-poppins font-semibold">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-[16px] ${
                  active === nav.title ? "text-yellow" : "text-secondary"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
