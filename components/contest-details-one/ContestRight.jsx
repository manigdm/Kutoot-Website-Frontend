import Link from "next/link";
import { useContext } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AppContext } from "../../context/context";
import apiRequest from "../../utils/apiRequest";
import { useRouter } from 'next/navigation';
import auth from '@/utils/auth';

const ContestRight = ({campaignData}) => {
  const { incrementHandle, decrementHandle, quantity } = useContext(AppContext);
  const router = useRouter();
  const token = auth()?.access_token;

  const handleBuyCoins = async () => {
    try {
      const reqBody = {
        "camp_id": campaignData?.id,
        "amount": campaignData?.ticket_price,
        "quantity": quantity,
      }
      const response = await apiRequest.coinPurchase(reqBody, token);
      console.log("response", response);
      router.push("/thank-you");
    } catch (error) {
      console.error("Error during buy coins:", error);
    }
  }

  return (
    <div className="contest-cart__right">
      <h4 className="subtitle">Enter now for a chance to win</h4>
      <h3 className="contest-name">{campaignData?.title}</h3>
      <p>This competition has a maximum of 29994 entries.</p>
      <h4 className="contest-num">
        Total coins: <strong style={{ color: "#c82373"}}>{campaignData?.coins_per_campaign}</strong>
      </h4>
      <h5>Total Sold Quantity</h5>
      <div className="ticket-amount">
        <span className="left">0</span>
        <span className="right">29994</span>
        <div className="progressbar" data-perc="70%">
          <div className="bar"></div>
        </div>
        <p>Only {campaignData?.total_tickets} remaining!</p>
      </div>
      <div className="ticket-price">
        <span className="amount">Rs.{campaignData?.ticket_price}</span>
        <small>Per coin</small>
      </div>
      <div className="d-flex flex-wrap align-items-center mb-30">
        <div className="select-quantity">
          <span className="caption">Quantity</span>
          <div className="quantity">
            <input
              type="number"
              value={quantity}
              onChange={() => setQuantity(quantity)}
            />
            <div className="quantity-nav">
              <div
                className={`quantity-button ${quantity <= 0 && "pe-none"}`}
                onClick={decrementHandle}
              >
                <i className="las la-minus"></i>
              </div>
              <div
                className={`quantity-button quantity-up ${
                  quantity >= 16 && "pe-none"
                }`}
                onClick={incrementHandle}
              >
                <i className="las la-plus"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-sm-0 mt-3">
          <button
            className="cmn-btn active"
            id="description-tab"
            data-bs-toggle="tab"
            data-bs-target="#description"
            role="tab"
            onClick={handleBuyCoins}
            aria-controls="description"
            aria-selected="true"
          >
            buy coins
          </button>
        </div>
      </div>
      <ul className="social-links align-items-center">
        <li>Share :</li>
        <li>
          <Link href="/#">
            <FaFacebookF />
          </Link>
        </li>
        <li>
          <Link href="/#">
            <FaTwitter />
          </Link>
        </li>
        <li>
          <Link href="/#">
            <FaLinkedinIn />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ContestRight;
