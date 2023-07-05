import styles from "../styles";

const menuCard = ({ image, title, num }) => (
  <div className={`${styles.flexCenter} flex-col font-poppins md:me-10`}>
    <img src={image} />
    <a className="text-center hover:text-yellow cursor-pointer">
      <h2 className="text-[25px] font-bold mt-5">{title}</h2>
      <p className="text-[20px] font-bold mb-10">{num}</p>
    </a>
  </div>
);

export default menuCard;
