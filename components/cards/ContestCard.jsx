import Image from "next/image";
import Link from "next/link";

const ContestCard = ({ itm }) => {
  console.log("itm", itm)
  return (
    <div className="contest-card">
      <Link href={`/contest-details-one?id=${itm?.id}`} className="item-link"></Link>
      <div className="contest-card__thumb">
        {itm?.img && (
          <Image src={itm?.img} alt={itm?.title} width={700} height={400} />
        )}
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
            <span>{parseInt(itm?.display_percentage) + '%'}</span>
            <p>Occupied</p>
            <div
              style={{
                width: "100%",
                maxWidth: '100px',
                backgroundColor: "#e0e0e0",
                borderRadius: "6px",
                height: "10px",
                marginTop: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${itm?.display_percentage}%`,
                  backgroundColor: "#28a745",
                  height: "100%",
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContestCard;
