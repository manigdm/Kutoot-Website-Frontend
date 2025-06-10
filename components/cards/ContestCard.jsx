import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

const ContestCard = ({ itm }) => {

  console.log("item data",itm);
  return (
    <div className="contest-card">
      <Link href={`/contest-details-one?id=${itm.id}`} className="item-link"></Link>
      <div className="contest-card__thumb">
        <Image src={itm.img} alt={itm.title} width={700} height={400} />
        {/* <a href="#0" className="action-icon">
          <FaRegHeart />
        </a> */}
        <div className="contest-num">
          <span>total coins:</span>
          <h4 className="number">{itm?.coins_per_campaign}</h4>
        </div>
      </div>
      <div className="contest-card__content">
        <div className="left">
          <h5 className="contest-card__name">{itm?.title}</h5>
        </div>
        <div className="right">
          <span className="contest-card__price">Rs.{itm?.ticket_price}</span>
          <p>Coin Price</p>
        </div>
      </div>
      <div className="contest-card__footer">
        <ul className="contest-card__meta">
          <li style={{ width: "50%" }}>
            <i className="las la-plus"></i>
            <span>{itm?.coupons_per_campaign} free coupons</span>
          </li>
          <li style={{ width: "50%" }} className="justify-content-center">
            <i className="las la-ticket-alt"></i>
            <span>{itm?.available}</span>
            <p>Remaining</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContestCard;
