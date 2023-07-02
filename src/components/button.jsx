const button = (props) => (
  <button
    className={`bg-yellow text-primary py-[15px] font-bold font-poppins ${props.mt} ${props.px}`}
  >
    {props.title}
  </button>
);

export default button;
