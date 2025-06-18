import { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import to keep it client-only
const OtpVerifyScreen = dynamic(() => import("./otp-screen"), {
  ssr: false,
});

export default function Page() {
  return (
    <Suspense fallback={<div>Loading OTP screen...</div>}>
      <OtpVerifyScreen />
    </Suspense>
  );
}