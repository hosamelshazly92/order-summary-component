import {
  card,
  cardImage,
  cardTitle,
  cardText,
  cardBody,
} from "./Card.module.css";
import Label from "../Label/Label";
import Button from "../Button/Button";

const Card = () => {
  const primary = "primaryBtn";
  const secondary = "secondaryBtn";

  return (
    <div className={card}>
      <div className={cardImage}></div>
      <div className={cardBody}>
        <h2 className={cardTitle}>Order Summary</h2>
        <p className={cardText}>
          You can listen to millions of songs, audiobooks and podcasts on any
          device anuwhere you like!
        </p>
        <Label />
        <Button type={primary}>Proceed To Payment</Button>
        <Button type={secondary}>Cancel</Button>
      </div>
    </div>
  );
};

export default Card;
