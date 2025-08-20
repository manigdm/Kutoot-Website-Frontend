import { Suspense } from "react";
import Campaign from "@/components/campaignpage/campaign";
const page = () => {
  return (
  	<Suspense fallback={<div>Loading...</div>}>
	    <div>
	      <Campaign/>
	    </div>
    </Suspense>
  )
}
export default page
