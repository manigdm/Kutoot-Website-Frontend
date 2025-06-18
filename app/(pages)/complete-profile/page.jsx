import { Suspense } from "react";
import dynamic from "next/dynamic";

const CompleteProfileScreen = dynamic(() => import("./completeProfileScreen"), {
  ssr: false,
});

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CompleteProfileScreen />
    </Suspense>
  );
}