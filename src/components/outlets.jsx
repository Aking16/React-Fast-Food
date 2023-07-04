import styles from "../styles";
import OutletsCard from "./outletsCard";
import { locations } from "../constants";

const menu = () => (
  <section
    id="menu"
    className={`${styles.container} ${styles.flexCenter} flex-col py-16 bg-[#F5F5F5]`}
  >
    <p className={`${styles.paragraph} text-yellow font-semibold`}>TOP FOODS</p>
    <h2 className={`${styles.heading2} font-bold`}>Our Categories</h2>

    <div className={`${styles.flexCenter} mt-10 flex-wrap`}>
      {locations.map((location) => (
        <OutletsCard key={location.id} {...location} />
      ))}
    </div>
  </section>
);

export default menu;
