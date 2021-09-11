import { label, icon, link } from "./Label.module.css";

const Label = () => {
  return (
    <div className={label}>
      <div className={icon}></div>
      <div>
        <h4>Annual Plan</h4>
        <p>$59.99 / year</p>
      </div>
      <a
        className={link}
        href="https://www.behance.net/hosamelsha9797"
        target="_blank"
        rel="noreferrer"
      >
        Change
      </a>
    </div>
  );
};

export default Label;
