import styles from "../styles";
import MenuCard from "./menuCard";
import { team } from "../constants";

const about = () => (
  <section id="about" className={`${styles.container} mt-10`}>
    <div className={`${styles.flexCenter} flex-col`}>
      <h3 className="text-[20px] text-yellow font-bold">Team Members</h3>
      <h2 className="text-[40px] font-bold mt-3">Meet Our Best Team</h2>
      <hr className="bg-yellow h-[5px] w-[20%] my-5 mx-auto md:mx-0 mb-10" />
    </div>
    <div className={`${styles.flexCenter} flex-wrap`}>
      {team.map((member) => (
        <MenuCard key={member.id} {...member} />
      ))}
    </div>
  </section>
);

export default about;
