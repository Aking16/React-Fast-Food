import styles from "../styles";
import { locationmark } from "../assets";

const menuCard = ({ image, location }) => (
  <div
    className={`${styles.flexCenter} flex-col font-poppins text-center mb-10 md:mb-0`}
  >
    <img src={image} />
    <img src={locationmark} className="mt-5" />
    <p className="text-[20px] font-bold w-[80%] cursor-pointer hover:text-yellow mt-2 mb-10">
      {location}
    </p>
  </div>
);

export default menuCard;
