import styles from "../styles";

const menuCard = ({ image, title, num }) => (
  <div className={`${styles.flexCenter} flex-col me-10 font-poppins`}>
    <img src={image} />
    <h2 className="text-[25px] font-bold mt-5">{title}</h2>
    <p className="text-[20px] font-bold">{num}</p>
  </div>
);

export default menuCard;
