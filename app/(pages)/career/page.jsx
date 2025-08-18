
"use client"
import AboutUs from '@/components/about/AboutUs';
import CareerPage from '@/components/careers/Careers';
import React, { useState } from 'react';
import { FaShareAlt } from 'react-icons/fa';
// NOTE: I am not importing Link from next/link because the page is self-contained.
// If you add internal navigation, you'll want to re-add it.

// This is the complete Privacy Policy component, now living directly inside your page file.
const PrivacyPolicy = () => {
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  const handleShareClick = () => {
    // In a real application, this would open a native share dialog or a custom modal.
    // For this example, we'll toggle a simple tooltip.
    setShowShareTooltip(!showShareTooltip);
    if (!showShareTooltip) {
      setTimeout(() => setShowShareTooltip(false), 2000);
    }
  };



  return (
    <div className="font-poppins text-black ">
      <div className="bg-white shadow-lg rounded-xl max-w-4xl mx-auto p-8 lg:p-12 my-10 relative">
        {/* Footer */}
        <footer className="text-center text-xs text-black pt-6 border-t mt-8 mb-8">
          <p className='mb-10'>Kutoot Innovations Pvt. Ltd. © 2025. All Rights Reserved.</p>
        </footer>

      </div>
    </div>
  );
};

// This is the default export that Next.js uses to create the page.
const Page = () => {
  return (
    <CareerPage />
  );
};

export default Page;



