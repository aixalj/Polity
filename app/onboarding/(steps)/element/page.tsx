import OnboardingBlock from "@/components/onboardingblock";
import { Button } from "@/components/ui/button";
import { LinkExternal02, MessageCircle01 } from "@untitled-ui/icons-react";

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
      <div className="pt-5 pb-3">
        <div className="w-full bg-gray-50 uppercase px-6 text-xs font-medium text-gray-600 py-2">
          Step 1
        </div>

        <div className="flex gap-4 py-3 items-center  px-6">
          <div className="border min-w-40 h-40 rounded-2xl overflow-hidden"></div>
          <div>
            <p className="font-medium text-base mb-0.5">
              Create your Element account
            </p>
            <p className="text-sm text-gray-600">
              Visit Element’s website and create your free account in a matter
              of minutes. Element is built on Matrix, the decentralized open
              standard for secure and sovereign real time communication.
            </p>
            <div>
              <div className="inline-flex flex-col gap-3 mt-3 ">
                <Button
                  size="sm"
                  className="w-auto w-[133px] h-[30px] text-sm inline-flex"
                >
                  Go to Element <LinkExternal02 className="w-4 h-4" />
                </Button>
                <Button
                  variant="link"
                  className="p-0 h-auto shadow-none text-primary-500 w-auto inline-flex"
                >
                  Learn more about Element
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-50 uppercase px-6 text-xs font-medium text-gray-600 py-2">
          Step 2
        </div>

        <div className="flex gap-4 py-3 items-center  px-6">
          <div className="border min-w-40 h-40 rounded-2xl overflow-hidden"></div>
          <div className="flex flex-col justify-between h-40 max-h-full">
            <div className="flex flex-col mb-auto">
              <p className="font-medium text-base mb-0.5">
                Copy your Matrix User ID
              </p>
              <p className="text-sm text-gray-600 ">
                Once you get set up with Element, a unique Matrix User ID will
                be created. Keep it handy as you will need it for the following
                step.
              </p>
            </div>

            <div className=" mt-auto ">
              <Button
                variant="link"
                className="p-0 h-auto shadow-none text-primary-500 w-auto inline-flex"
              >
                Read Element user guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </OnboardingBlock>
  );
}
