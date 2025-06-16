import Image from "next/image";
import { format } from "date-fns";

const WinnerCard = ({ winner }) => {
  const {
    announcing_date,
    campaign,
    coupon_number,
    prize_details,
    userdetails
  } = winner;
  const formattedDate = announcing_date && new Date(announcing_date?.replace(" ", "T"))
  return (
    <div className="winner-card mb-30">
      <div className="winner-card__thumb">
        { campaign?.campaign?.img &&
          <img
            src={campaign?.campaign?.img}
            alt="Coin Campaign"
            width="500"  // Specify the width
            height="300"  // Specify the height
          />
        }
      </div>
      <div className="winner-card__content">
        {/*<div className="winner-thumb">
          <Image src={winer_img} alt={title} />
        </div>*/}
        <div className="content-top">
          <div className="left">
            <h5>{userdetails?.name}</h5>
          </div>
          <div className="right">
            <span>Announcement On</span>

            <p>{ formattedDate ? format(formattedDate, "dd MMM yyyy") : "---"}</p>
          </div>
        </div>
        <div className="content-bottom">
          <div className="number-list-wrapper">
            <p>Coupon Numbers:</p>
            <ul className="number-list mt-2">
              
                <li style={{ width: 'fit-content', borderRadius: 0}}>{coupon_number && coupon_number?.toString()?.match(/.{1,2}/g)?.join(" ")}</li>
              
            </ul>
          </div>
          <div className="right">
            <p>Prize Won:</p>
            <span className="contest-num">{prize_details}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
