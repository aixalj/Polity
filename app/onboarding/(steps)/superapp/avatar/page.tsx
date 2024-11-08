import OnboardingBlock from "@/components/onboardingblock";

import { File02, Users03, Image03 } from "@untitled-ui/icons-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Agreement() {
  return (
    <OnboardingBlock
      icon={<Users03 className="w-8 h-8 text-gray-700" />}
      title="Create your Avatar Identity"
      description="Choose a name and upload an image that represent your Avatar."
      button1link="/onboarding/superapp/verification"
      button1text="Back"
      button2link="/onboarding/superapp/nsp"
      button2text="Continue"
    >
      <div className="px-6 py-5 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label>Avatar Name</Label>
          <Input placeholder="AristoInvest" />
          <p className="text-sm text-gray-600">
            An Avatar Name is unique across the network.
          </p>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Avatar Image</Label>
          <p className="text-sm text-gray-600">
            Upload an image for your Avatar.
          </p>
          <div className="w-40 h-40 border  flex-col gap-3   border-gray-200 rounded-2xl flex items-center justify-center">
            <div className="w-12 h-12 flex items-center justify-center  border border-gray-200 rounded-full">
              <Image03 className="w-6 h-6 text-gray-600" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-primary-500 text-sm font-semibold">
                Click to upload
              </p>
              <p className="text-xs text-gray-600">or drag and drop</p>
            </div>
          </div>
        </div>
      </div>
    </OnboardingBlock>
  );
}
