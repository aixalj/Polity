import Link from "next/link";

import * as React from "react";

const Onboarding = () => {
  return (
    <main>
      <Link href="/">Basic</Link>
      <Link href="/onboarding/steps/verification">Paid</Link>
    </main>
  );
};

export default Onboarding;
