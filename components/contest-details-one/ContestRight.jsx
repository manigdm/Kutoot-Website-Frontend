import React from "react";

const ContestRight = ({ campaignData }) => {
  return (
    <div className="contest-cart__right pb-20">
      <h4 className="subtitle">Enter now for a chance to win</h4>
      <h3 className="contest-name">{campaignData?.title}</h3>
      {/* <p>This competition has a maximum of 29994 entries.</p> */}
      <h5>Total Sold Quantity</h5>
      <div className="ticket-amount">
        <span className="left">{(parseInt(campaignData?.progress) + '%') || 0}</span>
        <span className="right">100%</span>
        <div className="progressbar" data-perc={parseInt(campaignData?.progress) + '%'}>
          <div className="bar" style={{ width: parseInt(campaignData?.progress) + '%'}}></div>
        </div>
        <p>{campaignData?.marketing_message}</p>
      </div>
    </div>
  );
};

export default ContestRight;
