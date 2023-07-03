import { burgericon, truck, clock } from "../assets";
import styles from "../styles";

const services = () => (
  <section className={`${styles.container} bg-yellow mt-10`}>
    <div
      className={`${styles.flexCenter} flex-col justify-between pt-10 md:flex-row font-poppins text-center text-primary`}
    >
      <div className="flex flex-col justify-center items-center">
        <img
          src={truck}
          className="object-none w-36 h-36 rounded-full bg-primary"
        />
        <h2 className="text-[20px] font-bold mt-5">
          Free Shipping on <br /> First Order
        </h2>
        <p className="font-semibold w-[70%] mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 md:mt-0">
        <img
          src={burgericon}
          className="object-none w-36 h-36 rounded-full bg-primary"
        />
        <h2 className="text-[20px] font-bold mt-5">
          Variety of <br /> Dishes
        </h2>
        <p className="font-semibold w-[70%] mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 md:mt-0">
        <img
          src={clock}
          className="object-none w-36 h-36 rounded-full bg-primary"
        />
        <h2 className="text-[20px] font-bold mt-5">
          Thirty Minutes <br /> Delivery
        </h2>
        <p className="font-semibold w-[70%] mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </p>
      </div>
    </div>
  </section>
);

export default services;
