
"use client"
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

  const policyContent = [
    {
      title: 'Introduction',
      content: (
        <>
          <p>
            Kutoot Innovations Pvt. Ltd. ("Kutoot", "we", "our", or "us") is committed to protecting your personal data and privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our platform—covering our website (<a href="www.kutoot.com" className="text-black hover:underline">www.kutoot.com</a>), mobile app, promotional campaigns, and e-commerce rewards program (collectively, the "Platform").
          </p>
          <p className="mt-2 mb-2">
            This Policy complies with the Digital Personal Data Protection Act, 2023 (DPDP Act), Information Technology Act, 2000, IT Rules, 2011, and other applicable Indian laws. For users outside India, we also follow global frameworks such as the General Data Protection Regulation (GDPR).
          </p>
          <p className="mt-2 mb-4">
            By using our services, you agree to this Privacy Policy.
          </p>
        </>
      ),
    },
    {
      title: 'Definitions',
      content: (
        <ul
          className="space-y-1 mt-2 mb-4"
          style={{
            listStyleType: "disc",
            listStylePosition: "outside",
            marginLeft: "1.5rem",
            fontSize: "18px",
            color: "black"
          }}
        >
          <li><strong>Personal Data:</strong> Any information that identifies you directly or indirectly.</li>
          <li><strong>Sensitive Personal Data:</strong> Financial information, government IDs (e.g., Aadhaar, PAN), biometric or health data.</li>
          <li><strong>Processing:</strong> Collection, usage, storage, disclosure, or deletion of data.</li>
          <li><strong>Cookies:</strong> Small text files used to recognize your device or browser activity.</li>
        </ul>

      ),
    },
    {
      title: 'Data We Collect',
      content: (
        <>
          <h4
            className="font-semibold text-lg mt-2 mb-2"
            style={{ color: "black", fontWeight: 600, fontSize: "18px" }}
          >
            (a) Personal Data
          </h4>

          <ul
            className="space-y-1 mt-2 mb-2"
            style={{
              listStyleType: "disc",
              listStylePosition: "outside",
              marginLeft: "1.5rem",
              fontSize: "18px",
              color: "black"
            }}
          >
            <li>Name, email ID, mobile number</li>
            <li>Date of birth, gender</li>
            <li>Communication address</li>
            <li>User-generated content (e.g., campaign clicks, survey answers)</li>
            <li>KYC information (PAN, Aadhaar, selfie) for prize claims</li>
          </ul>
          <h4
            className="font-semibold text-lg"
            style={{ color: "black", fontWeight: 600, fontSize: "18px" }}
          >(b) Financial and Transactional Data</h4>
          <ul
            className="space-y-1 mt-2 mb-2"
            style={{
              listStyleType: "disc",
              listStylePosition: "outside",
              marginLeft: "1.5rem",
              fontSize: "18px",
              color: "black"
            }}
          >
            <li>Purchase history of coins</li>
            <li>Redeemed rewards and vendor interactions</li>
            <li>Payment gateway data (processed securely via Razorpay or equivalent PCI-DSS platforms)</li>
            <li>Prize winnings and tax documentation (e.g., Form 194B for TDS)</li>
          </ul>
          <h4
            className="font-semibold text-lg"
            style={{ color: "black", fontWeight: 600, fontSize: "18px" }}
          >(c) Technical & Usage Data</h4>
          <ul
            className="space-y-1 mt-2 mb-2"
            style={{
              listStyleType: "disc",
              listStylePosition: "outside",
              marginLeft: "1.5rem",
              fontSize: "18px",
              color: "black"
            }}
          >
            <li>Device identifiers (IP address, OS version, device ID)</li>
            <li>Clickstream data (e.g., campaign views, lucky draw entries)</li>
            <li>Browsing behavior, app interaction logs</li>
            <li>Location (approximate, with permission)</li>
          </ul>
          <h4
            className="font-semibold text-lg"
            style={{ color: "black", fontWeight: 600, fontSize: "18px" }}
          >(d) Cookies & Tracking</h4>
          <ul
            className="space-y-1 mt-2 mb-4"
            style={{
              listStyleType: "disc",
              listStylePosition: "outside",
              marginLeft: "1.5rem",
              fontSize: "18px",
              color: "black"
            }}
          >
            <li>Authentication and login tracking</li>
            <li>Personalization and retargeting (with user consent)</li>
            <li>Analytics via Google Analytics, Mixpanel, or equivalent tools</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Purpose of Collection',
      content: (
        <>
          <p className='mt-2'>
            We process your data to:
          </p>
          <ul
            className="space-y-1 mt-2 mb-4"
            style={{
              listStyleType: "disc",
              listStylePosition: "outside",
              marginLeft: "1.5rem",
              fontSize: "18px",
              color: "black"
            }}
          >
            <li>Verify your identity (KYC, OTP)</li>
            <li>Manage coins, bundles, expiry (typically 100 days, subject to change)</li>
            <li>Process payments and deliver rewards</li>
            <li>Operate lucky draws, notify winners, and issue prizes</li>
            <li>Comply with tax, audit, and legal obligations</li>
            <li>Improve Platform usability and detect fraud</li>
            <li>Send offers, updates, and promotional communications (with opt-in consent)</li>
            <li>Offer customer support via chat, email, or call</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Legal Basis of Processing',
      content: (
        <table
          className="min-w-full divide-y divide-gray-200 mt-2 rounded-lg overflow-hidden shadow-md mb-4"
          style={{ fontSize: "18px" }}
        >
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-1 text-left  text-gray-500 uppercase tracking-wider">Basis</th>
              <th scope="col" className="px-6 py-1 text-left  text-gray-500 uppercase tracking-wider">Examples</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-900">Consent</td>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-500">Location access, Email marketing, tracking cookies</td>
            </tr>
            <tr>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-900">Contractual Need</td>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-500">Coin purchases, account setup, campaign participation</td>
            </tr>
            <tr>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-900">Legal Obligation</td>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-500">TDS reporting, fraud checks, KYC verification</td>
            </tr>
            <tr>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-900">Legitimate Interest</td>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-500">Platform analytics, feature enhancements, security logs</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      title: ' Coin-Specific Data Terms',
      content: (
        <ul
          className="space-y-1 mt-2 mb-4"
          style={{
            listStyleType: "disc",
            listStylePosition: "outside",
            marginLeft: "1.5rem",
            fontSize: "18px",
            color: "black"
          }}
        >
          <li><strong>Validity:</strong> Shopping Coins typically expire after 100 days from issuance. This is subject
            to variation and will be displayed on the dashboard or during campaigns.</li>
          <li><strong>Refund Policy:</strong> Coin purchases are non-refundable but may be redeemed on
            partnered e-commerce platforms.</li>
          <li><strong>Campaign Audits: </strong> We may review coin usage, fraud attempts, or suspicious patterns
            for integrity.</li>
          <li><strong>Data Logging:</strong> Issuance, redemption, and expiration of coins are logged for audit and
            tax purposes.</li>
        </ul>

      ),
    },
        {
      title: ' Children’s Privacy',
      content: (
        <>
          <p className="mt-2 mb-4">
         Kutoot is intended for individuals 18 years or older. If a minor signs up, the account will be
terminated, and all data will be deleted within 7 days upon detection. Where applicable, a
notification may be sent to a verified parent/guardian, per the POCSO Act, 2012..
          </p>
      
        
        </>
      ),
    },
    {
      title: 'Data Sharing',
      content: (
        <>
          <p>
            Your data may be shared with:
          </p>
          <ul
            className="space-y-1 mt-2"
            style={{
              listStyleType: "disc",
              listStylePosition: "outside",
              marginLeft: "1.5rem",
              fontSize: "18px",
              color: "black"
            }}
          >
            <li>Payment partners: Razorpay, Paytm, UPI, etc.</li>
            <li>Logistics & reward partners: For prize delivery or redemption</li>
            <li>Government authorities: For taxation (e.g., TDS), dispute resolution, or legal orders</li>
            <li>Analytics vendors: Google Analytics, Firebase (anonymized unless consented)</li>
            <li>Internal Kutoot Teams: Only those with data access clearance (per role-based control)</li>
          </ul>


          <p className="mt-1 mb-4">
            We do not sell your personal data.
          </p>
        </>
      ),
    },
     {
      title: 'Data Retention',
      content: (
        <table
          className="min-w-full divide-y divide-gray-200 mt-2 rounded-lg overflow-hidden shadow-md mb-4"
          style={{ fontSize: "18px" }}
        >
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-1 text-left  text-gray-500 uppercase tracking-wider">Data Type</th>
              <th scope="col" className="px-6 py-1 text-left  text-gray-500 uppercase tracking-wider">Retention Duration</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-900">KYC & identity proof </td>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-500">7 years (for tax & audit compliance)</td>
            </tr>
            <tr>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-900">Coin transactions</td>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-500">7 years</td>
            </tr>
            <tr>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-900">Support conversations</td>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-500">1–3 years</td>
            </tr>
            <tr>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-900">Marketing opt-ins</td>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-500">Until user unsubscribes</td>
            </tr>
              <tr>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-900">Cookies</td>
              <td className="px-6 py-1 whitespace-nowrap  text-gray-500">6–24 months</td>
            </tr>
          </tbody>
        </table>
      ),
    },
    {
      title: 'Your Rights',
      content: (
        <>
          <p className='mt-2'>
            Under the DPDP Act, 2023 and GDPR (for international users), you may:
          </p>
  <ul
          className="space-y-1 mt-2 mb-2"
          style={{
            listStyleType: "disc",
            listStylePosition: "outside",
            marginLeft: "1.5rem",
            fontSize: "18px",
            color: "black"
          }}
        >
            <li>Access a copy of your data</li>
            <li>Correct inaccurate or outdated info</li>
            <li>Withdraw consent at any time</li>
            <li>Request data deletion (if legally permitted)</li>
            <li>Transfer your data</li>
            <li>Object to profiling or targeted ads</li>
          </ul>
          <p className="mt-2 mb-4">
            Submit requests at: <a href="mailto:support@kutoot.com" className="text-black hover:underline">support@kutoot.com</a>. Response guaranteed within 30 days.
          </p>
        </>
      ),
    },
    {
      title: 'Data Protection Measures',
      content: (
        <ul
          className="space-y-1 mt-2 mb-4"
          style={{
            listStyleType: "disc",
            listStylePosition: "outside",
            marginLeft: "1.5rem",
            fontSize: "18px",
            color: "black"
          }}
        >
          <li><strong>Encryption:</strong> AES-256 (at rest), SSL/TLS (in transit)</li>
          <li><strong>Infrastructure:</strong> Hosted on secure cloud environments (e.g., AWS, GCP)</li>
          <li><strong>Access Control:</strong> Only authorized staff with 2FA access</li>
          <li><strong>Regular Audits:</strong> Pen-testing, compliance reviews, and backups</li>
        </ul>
      ),
    },
    {
      title: 'International Data Transfers',
      content: (
       <>
          <p className='mt-2'>
         Some service providers may process data outside India (e.g., EU, Singapore, USA). We
ensure compliance using:
          </p>
  <ul
          className="space-y-1 mt-2 mb-4"
          style={{
            listStyleType: "disc",
            listStylePosition: "outside",
            marginLeft: "1.5rem",
            fontSize: "18px",
            color: "black"
          }}
        >
            <li>Standard Contractual Clauses (SCCs)</li>
            <li>Binding Corporate Rules (BCRs)</li>
            <li>Explicit consent for non-essential services (e.g., analytics)</li>
          </ul>
       
        </>
      
      ),
    },
    {
      title: 'External Links',
      content: (
        <p className='mt-2 mb-4'> 
          Our Platform may link to third-party services (e.g., e-commerce vendors). We are not responsible for their privacy practices. Please read their respective policies.
        </p>
      ),
    },
    {
      title: 'Grievance Redressal',
      content: (
        <>
          <p className="font-semibold">Data Protection Officer (DPO)</p>
          <ul
          className="space-y-1 mt-2 mb-2"
          style={{
            listStyleType: "disc",
            listStylePosition: "outside",
            marginLeft: "1.5rem",
            fontSize: "18px",
            color: "black"
          }}
        >
            <li>Email: <a href="mailto:legal@kutoot.com" className="text-black hover:underline">legal@kutoot.com</a></li>
            <li>Phone: +91 93803 84568</li>
            <li>Office: Metro Station Rajajinagar, No.59,1st Floor, Chowdeshwari, Arcade, 2nd Stage, opp. to Rajajinagar, West of Chord Road, II stage, Basaveshwar Nagar, Bengaluru, Karnataka - 560086</li>
          </ul>
          <p className="mt-2 mb-4">We will respond within 7 working days, and resolve within 30 calendar days, as per IT Rules, 2011.</p>
        </>
      ),
    },
    {
      title: 'Updates to This Policy',
      content: (
        <>
          <p className='mt-2'>
            We may modify this policy periodically. Updates will be announced via:
          </p>
          <ul
          className="space-y-1 mt-2 mb-2"
          style={{
            listStyleType: "disc",
            listStylePosition: "outside",
            marginLeft: "1.5rem",
            fontSize: "18px",
            color: "black"
          }}
        >
            <li>In-app notification</li>
            <li>Website banner</li>
            <li>Email (if critical)</li>
          </ul>
          <p className="mt-2 mb-4">
            We recommend reviewing the Policy every 6 months.
          </p>
        </>
      ),
    },
    {
      title: 'Governing Law & Jurisdiction',
      content: (
        <p className='mt-2 mb-4'>
          This Policy is governed by the laws of India, with disputes subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka.
        </p>
      ),
    },
    {
      title: 'Contact Us',
      content: (
         <ul
          className="space-y-1 mt-2 mb-2"
          style={{
            listStyleType: "disc",
            listStylePosition: "outside",
            marginLeft: "1.5rem",
            fontSize: "18px",
            color: "black"
          }}
        >
          <li>Kutoot Innovations Pvt. Ltd.</li>
          <li>Email: <a href="mailto:support@kutoot.com" className="text-black hover:underline">support@kutoot.com</a></li>
          <li>Phone: +91 9380384568</li>
          <li>Website: <a href="www.kutoot.com" className="text-black hover:underline">www.kutoot.com</a></li>
        </ul>
      ),
    },
  ];

  return (
    <div className="font-poppins text-black ">
      <div className="bg-white shadow-lg rounded-xl max-w-4xl mx-auto p-8 lg:p-12 my-10 relative">
        {/* Header */}
        <header
          style={{
            display: "flex",
            flexDirection: "column",  // stack children vertically
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1.5rem",
            borderBottom: "1px solid #e5e7eb",
            paddingBottom: "1rem",
            paddingTop: "100px"
          }}
        >
          <h1 className="text-3xl lg:text-4xl font-extrabold text-black">
            Privacy Policy
          </h1>
          <p className="italic text-black text-sm mt-2">
            Effective Date: July 11, 2025 | Version: 1.0 | Last Reviewed: July 18, 2025
          </p>
        </header>




        {/* Sections */}
        <div
          className="space-y-8 text-sm lg:text-base leading-relaxed"
          style={{
            margin: "0 auto",      // centers the block horizontally
            maxWidth: "1200px",     // keeps content readable
            textAlign: "left"      // ensures text stays left aligned
          }}
        >
          {policyContent.map((section, index) => (
            <section key={index} className="space-y-4">
              <h2 className="text-2xl font-bold text-black">
                {index + 1}. {section.title}
              </h2>
              <div className="text-black">{section.content}</div>
            </section>
          ))}
        </div>

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
    <PrivacyPolicy />
  );
};

export default Page;
