import { Link } from "react-router-dom";
import styles from "../styles";
import { footerLinks } from "../constants";

const footer = () => {
  return (
    <footer className={`${styles.container} mt-20 font-poppins`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className=" flex flex-col justify-start mr-10">
          <h2 className="font-semibold text-[25px] leading-[27px] text-yellow">
            FOODMOOD
          </h2>
          <p className={`${styles.paragraph} mt-10 w-full md:max-w-[20vw]`}>
            Vivamus convallis fermen sollicitudin et, vitae elit in vel ultrices
            sed in urna ipsum ullamcorper auctor.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-evenly flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-semibold text-[25px] leading-[27px] text-secondary">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-10">
                {footerlink.links.map((link) => (
                  <li
                    key={link.name}
                    className="font-normal text-[16px] leading-[24px] hover:text-red-600 cursor-pointer mb-4"
                  >
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center text-center flex-col md:flex-row md:justify-between mb-2 font-bold text-gray-400">
        <h2>
          Copyright &copy; 2023{" "}
          <a
            href="https://github.com/Aking16"
            target="_blank"
            className="hover:text-yellow underline underline-offset-[7px]"
          >
            Aking16
          </a>
        </h2>
        <h2>Powered by Github Pages</h2>
      </div>
    </footer>
  );
};

export default footer;
