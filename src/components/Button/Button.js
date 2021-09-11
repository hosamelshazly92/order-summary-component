import { cardBtn, primaryBtn, secondaryBtn } from "./Button.module.css";

const Button = ({ children, type }) => {
  return (
    <button
      className={`${cardBtn} ${
        type === "primaryBtn" ? primaryBtn : secondaryBtn
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
