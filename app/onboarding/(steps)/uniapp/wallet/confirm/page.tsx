"use client";

import OnboardingBlock from "@/components/onboardingblock";
import { CreditCardCheck, Image03 } from "@untitled-ui/icons-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useWalletSelection } from "@/app/contexts/WalletSelectionContext";

import CheckIcon from "@/public/icons/check.svg";

export default function AVN() {
  const { selectedProvider } = useWalletSelection();

  return (
    <OnboardingBlock
      icon={<CreditCardCheck className="w-8 h-8 text-gray-700" />}
      title="Confirm your wallet"
      description="Assign a unique name and style to your wallet that reflects its intended use. This will help you easily identify its purpose in the future."
      button1link="/onboarding/uniapp/wallet/customize"
      button1text="Back"
      button2link="/onboarding/uniapp/wallet/agreement"
      button2text="Continue"
    >
      <div className="px-6 py-5 flex flex-col gap-4">
        {selectedProvider && (
          <div className="flex flex-col gap-4 ">
            <div className="w-full ustify-between flex items-center">
              <div className="flex flex-row gap-2.5 items-center">
                <Image
                  src={selectedProvider.logo}
                  className="w-8 h-8"
                  alt={selectedProvider.name}
                  width={32}
                  height={32}
                />
                <h3 className="text-xl font-medium">{selectedProvider.name}</h3>
              </div>
            </div>
            <p className="text-sm  text-gray-600 mt-2">
              {selectedProvider.description}
            </p>
            <a
              href={selectedProvider.learnMoreUrl}
              target="_blank"
              className="text-sm cursor-pointer font-semibold text-teal-600"
            >
              Learn more about {selectedProvider.name}
            </a>
            <div className="group  ">
              <p className="text-sm text-gray-800 mb-1">Wallet Features</p>
              <ul className="flex flex-col gap-3 ">
                {selectedProvider.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex gap-3 text-gray-600 text-sm items-center"
                  >
                    <Image
                      src={CheckIcon}
                      className="w-5 h-5"
                      alt="Check"
                      width={20}
                      height={20}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className=" flex  flex-col gap-1 text-gray-600 text-sm ">
          <p className="text-sm text-gray-800 mb-1">Integrations</p>
          <div className="w-full gap-3 flex flex-col items-center">
            <div className="w-full p-3 flex flex-col gap-2 bg-gray-50 border border-gray-200 rounded-xl">
              <div className="flex items-center gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.533 7.51974L18.482 3.63192C16.95 2.78936 15.0621 2.78936 13.53 3.63192L6.47298 7.51974C4.94094 8.3623 4 9.92706 4 11.6122V19.3878C4 21.079 4.94094 22.6377 6.47298 23.4803L13.524 27.3681C15.056 28.2106 16.944 28.2106 18.476 27.3681L25.527 23.4803C27.0591 22.6377 28 21.0729 28 19.3878V11.6122C28 9.92104 27.0591 8.3623 25.527 7.51974H25.533Z"
                    fill="#1452F0"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.5234 15.0959C22.5234 14.9815 22.5294 14.8672 22.5294 14.7528C22.5294 11.4307 20.0745 9.4086 16.6666 9.4086H12.1187V15.0959H14.9114V11.8159H16.6847C18.6691 11.8159 19.6764 13.0978 19.6764 14.7528C19.6764 14.8672 19.6764 14.9815 19.6583 15.0959H22.5234ZM9.48291 16.2634V21.5114H14.0489C17.3965 21.5114 19.8272 19.5193 19.8936 16.2634H17.0346C16.9682 17.7981 15.8765 19.092 14.0308 19.092H12.2756V16.2634H9.48291Z"
                    fill="white"
                  />
                </svg>

                <p className="font-medium text-gray-900">De.Fi</p>
              </div>
              <p className="text-gray-700 text-sm ">
                DeFi tracker for 45+ blockchains, 8+ exchanges, and 450+
                protocols.
              </p>
            </div>
            <div className="w-full p-3 flex flex-col gap-2 bg-gray-50 border border-gray-200 rounded-xl">
              <div className="flex items-center gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.03453 11.6136C12.8815 7.86221 19.1186 7.86221 22.9655 11.6136L23.4285 12.065C23.6209 12.2526 23.6209 12.5567 23.4285 12.7443L21.8447 14.2887C21.7485 14.3825 21.5926 14.3825 21.4964 14.2887L20.8594 13.6674C18.1756 11.0504 13.8244 11.0504 11.1407 13.6674L10.4584 14.3328C10.3622 14.4265 10.2063 14.4265 10.1101 14.3328L8.52635 12.7883C8.334 12.6008 8.334 12.2967 8.52635 12.1091L9.03453 11.6136ZM26.2409 14.8076L27.6505 16.1821C27.8427 16.3697 27.8427 16.6739 27.6505 16.8614L21.2947 23.0594C21.1023 23.2469 20.7905 23.2469 20.5981 23.0594L16.087 18.6605C16.039 18.6135 15.9611 18.6135 15.913 18.6605L11.4021 23.0594C11.2097 23.2469 10.8979 23.2469 10.7055 23.0594L4.34952 16.8612C4.15717 16.6737 4.15717 16.3697 4.34952 16.182L5.7591 14.8075C5.95145 14.6199 6.26331 14.6199 6.45565 14.8075L10.9667 19.2065C11.0148 19.2533 11.0927 19.2533 11.1408 19.2065L15.6517 14.8075C15.844 14.6199 16.1559 14.6199 16.3483 14.8075L20.8592 19.2065C20.9074 19.2533 20.9853 19.2533 21.0334 19.2065L25.5444 14.8076C25.7368 14.62 26.0485 14.62 26.2409 14.8076Z"
                    fill="#3396FF"
                  />
                </svg>

                <p className="font-medium text-gray-900">WalletConnect</p>
              </div>
              <p className="text-gray-700 text-sm ">
                Enabling your wallet to securely connect and interact with
                decentralized applications.
              </p>
            </div>
            <div className="w-full p-3 flex flex-col gap-2 bg-gray-50 border border-gray-200 rounded-xl">
              <div className="flex items-center gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_152_19998)">
                    <path
                      d="M27.3347 10.1293C26.2612 7.86408 24.0715 6.2958 21.6033 6.11046C20.394 5.99808 19.1461 6.20271 18.0559 6.75203C17.3237 7.11516 16.6721 7.61919 16.1244 8.21967C14.9948 6.93904 13.3989 6.10039 11.6762 6.01401C8.05495 5.79596 4.93348 8.14083 4.17282 11.7797C3.71073 13.9594 4.21476 16.2355 5.21527 18.1526C6.2141 20.0438 7.67168 21.7253 9.56788 22.7133C10.8913 23.3573 12.1317 21.7237 11.1638 20.5814C10.8552 20.2359 10.5709 19.8685 10.3118 19.4761C10.0711 19.1121 9.85468 18.7297 9.65845 18.338C9.11332 17.2209 8.70658 15.9629 8.62606 14.7242C8.57827 13.9368 8.68142 13.2583 9.00849 12.5731C9.31794 11.9341 9.81945 11.3847 10.4778 11.1265C11.5018 10.7381 12.5702 10.947 13.3485 11.7856C13.8542 12.3064 14.0857 13.0352 14.344 13.7078C14.3633 13.7565 14.3842 13.8034 14.406 13.8495C14.9202 15.4354 17.2768 15.4757 17.7171 13.6717C17.7305 13.6105 17.7439 13.5485 17.7582 13.4856C17.7607 13.4755 17.7632 13.4663 17.7657 13.4562C17.7682 13.4461 17.7699 13.4361 17.7724 13.4252C17.8101 13.2642 17.8537 13.1031 17.9099 12.953C18.0852 12.4691 18.3771 12.002 18.7276 11.6456C19.256 11.108 19.9294 10.7834 20.6666 10.8555C21.0792 10.879 21.5446 10.9914 21.8801 11.1734C23.7621 12.194 23.5658 14.8761 22.759 16.6431C22.1921 17.8809 21.2847 18.9167 20.2783 19.8115C20.0292 20.0321 19.7449 20.2753 19.4875 20.4807C18.3075 21.3974 18.0056 23.1326 18.9381 24.3763C19.9387 25.7433 21.9313 25.8096 23.076 24.5935C23.3008 24.3713 23.518 24.1406 23.7319 23.9083C25.8914 21.4964 27.8539 17.9161 28.1591 14.6169C28.2849 13.0746 28.0107 11.5332 27.3339 10.1293H27.3347Z"
                      fill="url(#paint0_radial_152_19998)"
                    />
                  </g>
                  <defs>
                    <radialGradient
                      id="paint0_radial_152_19998"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(20.5637 24.1419) rotate(-125.286) scale(20.9367 31.8178)"
                    >
                      <stop offset="0.0001" stop-color="#09FFD0" />
                      <stop offset="1" stop-color="#009EFF" />
                    </radialGradient>
                    <clipPath id="clip0_152_19998">
                      <rect
                        width="24"
                        height="19.68"
                        fill="white"
                        transform="translate(4 6)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <p className="font-medium text-gray-900">Moralis</p>
              </div>
              <p className="text-gray-700 text-sm ">
                Enterprise-grade APIs and real-time blockchain data used for
                decoding transactions.
              </p>
            </div>
            <div className="w-full p-3 flex flex-col gap-2 bg-gray-50 border border-gray-200 rounded-xl">
              <div className="flex items-center gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9836 4L18.8169 7.81643L17.367 8.89284L15.999 7.05008L14.7131 8.81919L13.2524 7.75751L15.9836 4ZM24.5112 7.53454L23.7855 12.1227L22.0019 11.8406L22.3435 9.68038L20.0732 10.016L19.8091 8.22968L24.5112 7.53454ZM7.50623 7.55193L12.2083 8.24714L11.9442 10.0335L9.67384 9.69784L10.0155 11.858L8.2319 12.1401L7.50623 7.55193ZM7.05008 16.0185L8.89284 14.6504L7.81643 13.2005L4 16.0338L7.75751 18.765L8.81919 17.3043L7.05008 16.0185ZM24.1836 13.2005L28 16.0338L24.2425 18.765L23.1808 17.3043L24.9499 16.0185L23.1072 14.6504L24.1836 13.2005ZM9.68908 22.3435L10.0248 20.0732L8.23837 19.8091L7.54323 24.5112L12.1314 23.7855L11.8493 22.0019L9.68908 22.3435ZM23.7877 19.8178L24.4829 24.5199L19.8947 23.7942L20.1768 22.0106L22.337 22.3522L22.0014 20.0819L23.7877 19.8178ZM18.8169 24.1836L15.9836 28L13.2524 24.2425L14.7131 23.1808L15.999 24.9499L17.367 23.1072L18.8169 24.1836Z"
                    fill="black"
                  />
                </svg>

                <p className="font-medium text-gray-900">Blowfish</p>
              </div>
              <p className="text-gray-700 text-sm ">
                Blowfish makes it easy to identify & stop fraud before it
                happens. Proactive defense for your wallet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </OnboardingBlock>
  );
}
