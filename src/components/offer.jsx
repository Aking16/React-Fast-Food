import styles from "../styles";
import { offerImg, offerImg2, offerImg3 } from "../assets";

export const offer = () => (
  <section id="offer" className={`${styles.container} mt-20`}>
    <div
      className={`${styles.flexCenter} flex-col md:flex-row text-center md:text-start`}
    >
      <div className="font-poppins">
        <p className="text-[20px] text-yellow font-semibold">Pizza Delivery</p>
        <h2 className="text-[50px] font-bold">Get Started Today!</h2>
        <hr className="bg-yellow h-[5px] w-[20%] my-5 mx-auto md:mx-0" />
        <p className={`text-[40px] font-semibold leading-tight`}>
          Everything you need to build an amazing{" "}
          <br className="sm:block hidden" /> food restaurant responsive website.
        </p>
        <p className="text-[20px] mt-5">
          Hendrerit in vulputate velit esse molestie consequat, vel illum dolore{" "}
          <br className="sm:block hidden" />
          eu feugiat nulla facilisis at vero eros et accumsan et iusto odio{" "}
          <br className="sm:block hidden" />
          dignissim qui blandit praesent luptatum zzril delenit augue duis.
        </p>
        <div className={`${styles.flexStart} mt-10 flex-col md:flex-row`}>
          <div className="flex flex-col justify-center items-center text-center md:me-20 md:text-start md:items-start">
            <img src={offerImg2} />
            <h3 className="text-[25px] font-bold mt-5">Food Order</h3>
            <p className="text-[18px] mt-3">
              Food is the necessity of life. It{" "}
              <br className="sm:block hidden" /> provides nutrition, sustenance{" "}
              <br className="sm:block hidden" /> growth to human body.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center mt-10 md:mt-0 md:text-start md:items-start">
            <img src={offerImg3} />
            <h3 className="text-[25px] font-bold mt-5">Promote Restaurant</h3>
            <p className="text-[18px] mt-3">
              Food can be classified into <br className="sm:block hidden" />{" "}
              cereals, pulses, nuts and <br className="sm:block hidden" />
              oilseeds, vegetable
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src={offerImg} className="mt-10 md:ms-10 md:mt-0" />
      </div>
    </div>
  </section>
);

export default offer;
