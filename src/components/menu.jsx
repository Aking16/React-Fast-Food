import styles from "../styles";
import MenuCard from "./menuCard";
import { categories } from "../constants";

const menu = () => (
  <section
    id="menu"
    className={`${styles.container} ${styles.flexCenter} flex-col mt-[15rem]`}
  >
    <p className={`${styles.paragraph} text-yellow font-semibold`}>TOP FOODS</p>
    <h2 className={`${styles.heading2} font-bold`}>Our Categories</h2>

    <div className={`${styles.flexCenter} flex-wrap`}>
      {categories.map((category) => (
        <MenuCard key={category.id} {...category} />
      ))}
    </div>
  </section>
);

export default menu;
