import { apple, googleplay, mobileimg } from "../assets";
import styles from "../styles";

const mobile = () => (
  <section className={`${styles.container} ${styles.gradientYellow} py-16 `}>
    <div
      className={`${styles.flexCenter} justify-between flex-col md:flex-row`}
    >
      <div className="text-primary font-poppins text-center md:text-start">
        <h2 className="text-[40px] font-bold">Get 20% Discount</h2>
        <p className="text-[20px] font-semibold mt-5">
          Get flat 20% off on your first order though <br /> The Foodmood App!
        </p>
        <div
          className={`${styles.flexStart} mt-16 justify-center md:justify-start`}
        >
          <img src={googleplay} className="me-5" />
          <img src={apple} />
        </div>
      </div>
      <div>
        <img src={mobileimg} className="scale-down mt-10 md:mt-0" />
      </div>
    </div>
  </section>
);

export default mobile;
