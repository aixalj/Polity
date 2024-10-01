import OnboardingBlock from "@/components/onboardingblock";

import { Link02, MessageCircle01, Image03 } from "@untitled-ui/icons-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
      <div className="px-6 py-5 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label>Select a Network Service Provider</Label>
          <Select
          //   defaultValue="bastion"
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a Network Service Provider..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bastion">Bastion</SelectItem>
              <SelectItem value="element">Element</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Matrix User ID</Label>
          <Input placeholder="@username:matrix.org" />
          <p className="text-sm text-gray-600">
            Please insert your Matrix User ID (@username:matrix.org) found in
            your Element application.
          </p>
        </div>
      </div>
    </OnboardingBlock>
  );
}
