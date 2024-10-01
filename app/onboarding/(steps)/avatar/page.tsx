import OnboardingBlock from "@/components/onboardingblock";

import { File02, Users03 } from "@untitled-ui/icons-react";

export default function Agreement() {
  return (
    <OnboardingBlock
      icon={<Users03 className="w-8 h-8 text-gray-700" />}
      title="Create your Avatar Identity"
      description="Choose a name and upload an image that represent your Avatar."
      button1link="/onboarding/verification"
      button1text="Back"
      button2link="/onboarding/element"
      button2text="Continue"
    >
      <div className="min-h-[70vh] px-6 py-2">Agreement</div>
    </OnboardingBlock>
  );
}
