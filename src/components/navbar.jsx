import { useState } from "react";
import { navLinks } from "../constants";
import { heroimg, menu, close } from "../assets";
import { Button } from ".";
import styles from "../styles";

const navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav
        className={`w-full relative flex flex-row justify-between items-center font-poppins pt-[2rem] uppercase ${styles.container}`}
      >
        <h1 className="text-primary font-bold text-[20px]">foodmood</h1>
        <ui className="md:flex flex-row list-none text-primary items-center font-semibold hidden">
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

          <Button title="Download App" px="px-[40px]" />
        </ui>

        <div className="md:hidden flex justify-end items-center">
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
            <ul
              className={`list-none flex ${styles.flexCenter} flex-1 flex-col uppercase font-poppins font-semibold`}
            >
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

      <section className={`font-poppins text-primary ${styles.container}`}>
        <p className="font-semibold text-[19px] mt-[1rem] sm:mt-[5rem] md:text-[30px]">
          Only $15.00
        </p>
        <h2 className="font-bold text-[30px] mt-2 md:mt-5 md:text-[50px]">
          AUTHENTIC ITALIAN PIZZA
        </h2>
        <div className="hidden flex-row items-center mt-10 md:flex">
          <div
            className={`relative w-[8rem] h-[8rem] bg-yellow rounded-full ${styles.flexCenter} text-center p-5 shadow-xl text-[20px] font-bold xl:text-[42px] xl:w-[14rem] xl:h-[14rem]`}
          >
            <span className="absolute text-[4.5rem] left-0 top-0 text-red-600 leading-none font-semibold xl:text-[8rem]">
              !
            </span>
            20% Discount
          </div>
          <p className="font-normal text-[25px] w-[40%] ms-6 xl:text-[50px] xl:w-[30%]">
            On your first order, if you order online through our App!
          </p>
        </div>
        <Button
          title="ORDER ONLINE"
          mt="mt-[0.5rem] xl:mt-[12rem] lg:mt-[4rem]"
          px="px-[60px]"
        />

        <img src={heroimg} className="w-full absolute top-0 right-0 z-[-10]" />
      </section>
    </>
  );
};

export default navbar;
