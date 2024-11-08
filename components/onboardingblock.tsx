import * as React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ArrowLeft, ArrowRight } from "@untitled-ui/icons-react";

interface OnboardingBlockProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  children: React.ReactNode;
  button1link?: string;
  button1text?: string;
  button2link?: string;
  button2text?: string;
  button3link?: string; 
  button3text?: string; 
}

interface OnboardingActionsProps {
  button1link?: string;
  button1text?: string;
  button2link?: string;
  button2text?: string;
  button3link?: string; 
  button3text?: string; 
}

const OnboardingActions = ({
  button1link,
  button1text,
  button2link,
  button2text,
  button3link, 
  button3text, 
}: OnboardingActionsProps) => {
  if (!button1link && !button2link && !button3link) return null; 

  return (
    <div className="flex max-w-screen-sm mx-auto w-full justify-end">
       {button3link && ( 
        <Link href={button3link}>
          <Button variant="outline"> 
            {button3text}
          </Button>
        </Link>
      )}
      <div className='flex gap-3 max-w-screen-sm mx-auto w-full justify-end'>
      {button1link && (
        <Link href={button1link}>
          <Button variant="outline">
            <ArrowLeft className="w-5 h-5" /> {button1text}
          </Button>
        </Link>
      )}
      {button2link && (
        <Link href={button2link}>
          <Button>
            {button2text} <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      )}
      </div>
     
    </div>
  );
};

const OnboardingBlock = ({
  icon,
  title,
  description,
  children,
  button1link,
  button1text,
  button2link,
  button2text,
  button3link, 
  button3text, 
}: OnboardingBlockProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div
        className="relative h-fit border gap-0 flex-none border-gray-300 rounded-3xl 
flex-col p-0 grid shadow-sm max-w-screen-sm mx-auto w-full  
 bg-white duration-200 overflow-hidden"
      >
        <div className="px-6 pt-6 pb-3 border-b border-gray-200 flex flex-col">
          <div className="w-full mb-4 flex justify-between items-center">
            {icon}
          </div>
          <div className="text-xl pb-1">
            <div>{title}</div>
          </div>
          <div className="text-gray-600 flex text-sm flex-col items-start gap-4 ">
            {description}
          </div>
        </div>

        {children}
      </div>

      {(button1link || button2link || button3link) && ( 
        <OnboardingActions
          button1link={button1link}
          button1text={button1text}
          button2link={button2link}
          button2text={button2text}
          button3link={button3link} 
          button3text={button3text}
        />
      )}
    </div>
  );
};

export default OnboardingBlock;