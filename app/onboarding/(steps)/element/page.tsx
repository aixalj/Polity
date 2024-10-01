import OnboardingBlock from "@/components/onboardingblock";

import { MessageCircle01 } from "@untitled-ui/icons-react";

export default function Agreement() {
  return (
    <OnboardingBlock
      icon={<MessageCircle01 className="w-8 h-8 text-gray-700" />}
      title="Join Element"
      description="Element offers a secure and compliant communication solution, empowering you with data sovereignty through open-source and decentralized hosting."
      button1link="/onboarding/avatar"
      button1text="Back"
      button2link="/onboarding/nsp"
      button2text="Continue"
    >
      <div className="min-h-[70vh] px-6 py-2">Agreement</div>
    </OnboardingBlock>
  );
}
