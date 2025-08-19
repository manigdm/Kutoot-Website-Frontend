"use client"; // ← this makes the whole page a client component

import React from "react";
import Campaign from "@/components/campaignpage/campaign";

const Page = () => {
  return (
    <div>
      <Campaign />
    </div>
  );
};

export default Page;
