import OnboardingBlock from "@/components/onboardingblock";

import { Link02, MessageCircle01 } from "@untitled-ui/icons-react";

export default function Agreement() {
  return (
    <OnboardingBlock
      icon={<Link02 className="w-8 h-8 text-gray-700" />}
      title="Connect to a Network Service Provider"
      description="Provider of virtual nodes and technical support to Clients and other network participants."
      button1link="/onboarding/element"
      button1text="Back"
      button2link="/onboarding/avn"
      button2text="Continue"
    >
      <div className="min-h-[70vh] px-6 py-2">Agreement</div>
    </OnboardingBlock>
  );
}
