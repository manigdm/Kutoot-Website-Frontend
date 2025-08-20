"use client";

import React, { Suspense } from "react";
import Campaign from "@/components/campaignpage/campaign";

// simple loader (you can replace with spinner/animation)
const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <p className="text-lg font-medium">Loading campaign...</p>
  </div>
);

const Page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Campaign />
    </Suspense>
  );
};

export default Page;
