import { logo1, logo2, logo3, logo4 } from "../assets";
import styles from "../styles";

const logos = () => (
  <section className={`${styles.container} mt-10`}>
    <div className={"flex justify-center flex-wrap md:justify-evenly"}>
      <img src={logo1} className="mb-16 md:mb-0" />
      <img src={logo2} className="mb-16 md:mb-0" />
      <img src={logo3} className="mb-16 md:mb-0" />
      <img src={logo4} />
    </div>
  </section>
);

export default logos;
