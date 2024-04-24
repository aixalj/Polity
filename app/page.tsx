import Image from "next/image";
import type { Config } from "tailwindcss";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart } from "@tremor/react";

const data = [
  { date: "Jan 23", Organic: 232, Sponsored: 0 },
  { date: "Feb 23", Organic: 241, Sponsored: 0 },
  { date: "Mar 23", Organic: 291, Sponsored: 0 },
  { date: "Apr 23", Organic: 101, Sponsored: 0 },
  { date: "May 23", Organic: 318, Sponsored: 0 },
  { date: "Jun 23", Organic: 205, Sponsored: 0 },
  { date: "Jul 23", Organic: 372, Sponsored: 0 },
  { date: "Aug 23", Organic: 341, Sponsored: 0 },
  { date: "Sep 23", Organic: 387, Sponsored: 120 },
  { date: "Oct 23", Organic: 220, Sponsored: 0 },
  { date: "Nov 23", Organic: 372, Sponsored: 0 },
  { date: "Dec 23", Organic: 321, Sponsored: 0 },
];

const summary = [
  {
    name: "Organic",
    value: 3273,
  },
  {
    name: "Sponsored",
    value: 120,
  },
];

export default function Home() {
  return (
    <main className="">
      <div className="flex h-screen overflow-hidden bg-gray-50 w-full">
        <div className="px-2 pt-8 pb-2 hidden sm:flex sm:flex-col">
          <a href="index.html" className="px-4 py-1">
            <img
              className="h-6"
              src="https://polity.li/images/PolityLogo-Full-Main.svg"
              alt="Logo"
            />
          </a>

          <a
            className="group focus:ring-0 justify-between mt-6 outline-none focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300  p-2 text-base font-medium duration-200 ease-in-out text-black hover:bg-gray-50 shadow-sm"
            href="#"
            id="overview"
          >
            <div className="flex gap-3 items-center">
              <div className="size-11 rounded-md border-gray-300 border overflow-hidden">
                <img
                  src={
                    "https://ethics.org.au/wp-content/uploads/2021/03/Aristotle_sq.jpg"
                  }
                  className="w-full h-full"
                />
              </div>

              <div>
                <p className="text-sm text-gray-900">Avatar Name</p>
                <p className="text-xs text-gray-500">Avatar</p>
              </div>
            </div>

            <svg
              className="mr-1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7929 6C11.2383 6 11.4614 5.46143 11.1464 5.14645L8.35355 2.35355C8.15829 2.15829 7.84171 2.15829 7.64645 2.35355L4.85355 5.14645C4.53857 5.46143 4.76165 6 5.20711 6H10.7929ZM10.7929 10C11.2383 10 11.4614 10.5386 11.1464 10.8536L8.35355 13.6464C8.15829 13.8417 7.84171 13.8417 7.64645 13.6464L4.85355 10.8536C4.53857 10.5386 4.76165 10 5.20711 10H10.7929Z"
                fill="#475467"
              />
            </svg>
          </a>

          <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear h-full">
            <nav className="mt-6 w-80 h-full">
              <div className="h-full flex flex-col justify-between">
                <ul className="flex flex-col gap-1">
                  <li>
                    <a
                      className="group focus:ring-0 justify-between outline-none focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl bg-white border border-gray-300 h-11 p-3 text-base font-medium duration-200 ease-in-out text-black shadow-sm"
                      href="#"
                      id="overview"
                    >
                      <div className="flex gap-3 items-center">
                        <svg
                          className="group-target:text-black"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.66667 16.1668H15.3333M11.1814 4.30345L5.52949 8.69939C5.15168 8.99324 4.96278 9.14017 4.82669 9.32417C4.70614 9.48716 4.61633 9.67077 4.56169 9.866C4.5 10.0864 4.5 10.3257 4.5 10.8043V16.8334C4.5 17.7669 4.5 18.2336 4.68166 18.5901C4.84144 18.9037 5.09641 19.1587 5.41002 19.3185C5.76654 19.5001 6.23325 19.5001 7.16667 19.5001H16.8333C17.7668 19.5001 18.2335 19.5001 18.59 19.3185C18.9036 19.1587 19.1586 18.9037 19.3183 18.5901C19.5 18.2336 19.5 17.7669 19.5 16.8334V10.8043C19.5 10.3257 19.5 10.0864 19.4383 9.866C19.3837 9.67077 19.2939 9.48716 19.1733 9.32417C19.0372 9.14017 18.8483 8.99324 18.4705 8.69939L12.8186 4.30345C12.5258 4.07574 12.3794 3.96189 12.2178 3.91812C12.0752 3.87951 11.9248 3.87951 11.7822 3.91812C11.6206 3.96189 11.4742 4.07574 11.1814 4.30345Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        Wealth
                      </div>

                      <p className="ml-auto text-sm text-gray-800  font-medium">
                        $0.00
                      </p>
                    </a>
                  </li>

                  <li>
                    <a
                      className="group focus:ring-0 outline-none focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-200"
                      href="#"
                      id="overview"
                    >
                      <svg
                        className="group-target:text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.6 4.20008L5.3 5.93341C5.04251 6.27673 4.91377 6.44839 4.91676 6.59207C4.91936 6.71711 4.97799 6.83437 5.07646 6.91148C5.18962 7.00008 5.40419 7.00008 5.83333 7.00008H18.1667C18.5958 7.00008 18.8104 7.00008 18.9235 6.91148C19.022 6.83437 19.0806 6.71711 19.0832 6.59207C19.0862 6.44839 18.9575 6.27673 18.7 5.93341L17.4 4.20008M6.6 4.20008C6.74667 4.00453 6.82 3.90675 6.91294 3.83623C6.99525 3.77377 7.08846 3.72716 7.18782 3.69879C7.3 3.66675 7.42222 3.66675 7.66667 3.66675H16.3333C16.5778 3.66675 16.7 3.66675 16.8122 3.69879C16.9115 3.72716 17.0047 3.77377 17.0871 3.83623C17.18 3.90675 17.2533 4.00453 17.4 4.20008M6.6 4.20008L5.03333 6.28897C4.83545 6.55281 4.73651 6.68474 4.66625 6.83002C4.6039 6.95893 4.55843 7.09534 4.53096 7.23588C4.5 7.39426 4.5 7.55916 4.5 7.88897L4.5 17.6667C4.5 18.6002 4.5 19.0669 4.68166 19.4234C4.84144 19.737 5.09641 19.992 5.41002 20.1518C5.76654 20.3334 6.23325 20.3334 7.16667 20.3334L16.8333 20.3334C17.7668 20.3334 18.2335 20.3334 18.59 20.1518C18.9036 19.992 19.1586 19.737 19.3183 19.4234C19.5 19.0669 19.5 18.6002 19.5 17.6667V7.88897C19.5 7.55916 19.5 7.39426 19.469 7.23588C19.4416 7.09534 19.3961 6.95893 19.3338 6.83002C19.2635 6.68474 19.1646 6.55282 18.9667 6.28897L17.4 4.20008M15.3333 10.3334C15.3333 11.2175 14.9821 12.0653 14.357 12.6904C13.7319 13.3156 12.8841 13.6667 12 13.6667C11.1159 13.6667 10.2681 13.3156 9.64298 12.6904C9.01786 12.0653 8.66667 11.2175 8.66667 10.3334"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Marketplace
                    </a>
                  </li>

                  <li>
                    <a
                      className="group focus:ring-0 outline-none focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-200"
                      href="#"
                      id="overview"
                    >
                      <svg
                        className="group-target:text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_85_15228)">
                          <path
                            d="M12.0001 7.00008V12.0001L15.3334 13.6667M20.3334 12.0001C20.3334 16.6025 16.6025 20.3334 12.0001 20.3334C7.39771 20.3334 3.66675 16.6025 3.66675 12.0001C3.66675 7.39771 7.39771 3.66675 12.0001 3.66675C16.6025 3.66675 20.3334 7.39771 20.3334 12.0001Z"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_85_15228">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(2 2)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Transactions
                    </a>
                  </li>

                  <li>
                    <a
                      className="group focus:ring-0 outline-none focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-200"
                      href="#"
                      id="overview"
                    >
                      <svg
                        className="group-target:text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0001 18.6666H6.33341C5.39999 18.6666 4.93328 18.6666 4.57676 18.4849C4.26316 18.3251 4.00819 18.0702 3.8484 17.7566C3.66675 17.4 3.66675 16.9333 3.66675 15.9999V7.99992C3.66675 7.0665 3.66675 6.59979 3.8484 6.24327C4.00819 5.92966 4.26316 5.6747 4.57676 5.51491C4.93328 5.33325 5.39999 5.33325 6.33341 5.33325H6.66675C8.53359 5.33325 9.46701 5.33325 10.18 5.69656C10.8073 6.01614 11.3172 6.52608 11.6368 7.15328C12.0001 7.86632 12.0001 8.79974 12.0001 10.6666M12.0001 18.6666V10.6666M12.0001 18.6666H17.6667C18.6002 18.6666 19.0669 18.6666 19.4234 18.4849C19.737 18.3251 19.992 18.0702 20.1518 17.7566C20.3334 17.4 20.3334 16.9333 20.3334 15.9999V7.99992C20.3334 7.0665 20.3334 6.59979 20.1518 6.24327C19.992 5.92966 19.737 5.6747 19.4234 5.51491C19.0669 5.33325 18.6002 5.33325 17.6667 5.33325H17.3334C15.4666 5.33325 14.5332 5.33325 13.8201 5.69656C13.1929 6.01614 12.683 6.52608 12.3634 7.15328C12.0001 7.86632 12.0001 8.79974 12.0001 10.6666"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Address Book
                    </a>
                  </li>

                  <li>
                    <a
                      className="group focus:ring-0 outline-none focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-200"
                      href="#"
                      id="overview"
                    >
                      <svg
                        className="group-target:text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.6666 12.4167V7.66675C18.6666 6.26662 18.6666 5.56655 18.3941 5.03177C18.1544 4.56137 17.772 4.17892 17.3016 3.93923C16.7668 3.66675 16.0667 3.66675 14.6666 3.66675H9.33325C7.93312 3.66675 7.23306 3.66675 6.69828 3.93923C6.22787 4.17892 5.84542 4.56137 5.60574 5.03177C5.33325 5.56655 5.33325 6.26662 5.33325 7.66675V16.3334C5.33325 17.7335 5.33325 18.4336 5.60574 18.9684C5.84542 19.4388 6.22787 19.8212 6.69828 20.0609C7.23306 20.3334 7.93312 20.3334 9.33325 20.3334H11.9999M13.6666 11.1667H8.66659M10.3333 14.5001H8.66659M15.3333 7.83341H8.66659M14.0833 17.8334L15.7499 19.5001L19.4999 15.7501"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Agreements
                    </a>
                  </li>

                  <li>
                    <a
                      className="group focus:ring-0 outline-none focus:outline-none focus:tap-highlight-transparent focus:outline-none relative flex items-center gap-3 rounded-xl h-11 p-3 text-base font-medium duration-200 ease-in-out text-gray-500 hover:text-black hover:bg-white hover:shadow-sm target:bg-white target:text-black border border-transparent target:border-gray-200"
                      href="#"
                      id="overview"
                    >
                      <svg
                        className="group-target:text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.6667 19.5001H10.3334M17.0001 8.66675C17.0001 7.34067 16.4733 6.0689 15.5356 5.13121C14.5979 4.19353 13.3261 3.66675 12.0001 3.66675C10.674 3.66675 9.4022 4.19353 8.46452 5.13121C7.52684 6.0689 7.00006 7.34067 7.00006 8.66675C7.00006 11.2419 6.35045 13.005 5.62478 14.1713C5.01266 15.155 4.7066 15.6468 4.71783 15.784C4.73025 15.936 4.76244 15.9939 4.88487 16.0847C4.99544 16.1667 5.49388 16.1667 6.49077 16.1667H17.5093C18.5062 16.1667 19.0047 16.1667 19.1152 16.0847C19.2377 15.9939 19.2699 15.936 19.2823 15.784C19.2935 15.6468 18.9875 15.155 18.3753 14.1713C17.6497 13.005 17.0001 11.2419 17.0001 8.66675Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Notifications
                    </a>
                  </li>
                </ul>

                <div className="flex flex-col gap-4">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <div className="flex flex-col px-4 py-5 gap-1 rounded-xl bg-white border border-gray-300 text-sm shadow-sm">
                        <svg
                          width="103"
                          height="16"
                          viewBox="0 0 103 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.9091 0C20.3586 0 23.1543 2.7746 23.1543 6.19823C23.1543 9.62184 20.3586 12.3738 16.9091 12.3738H6.22226C2.77275 12.3738 0 9.62184 0 6.19823C0 2.7746 2.77275 0 6.22226 0H16.9091ZM78.0064 0.403143C81.1854 0.403143 83.4171 2.79727 83.4171 6.24355C83.4171 9.46593 81.2525 11.972 78.0514 11.972C76.5858 11.972 75.233 11.3903 74.2186 10.3835V16H72.2347V0.515088H73.993L74.1736 1.92505C75.0531 0.917543 76.4052 0.403143 78.0064 0.403143ZM66.5535 0.403143C67.8385 0.403143 70.792 0.872903 70.792 5.30335V11.8594H68.8309V5.41529C68.8309 3.89337 68.3798 2.14825 66.2609 2.14825C64.4797 2.14825 63.3754 3.49092 63.3754 5.77311V11.8594H61.4136V5.41529C61.4136 3.31167 60.534 2.14825 58.8885 2.14825C57.1302 2.14825 56.003 3.55823 56.003 5.84041V11.8594H53.9963V0.515088H55.7774L55.8902 1.7458C56.657 0.984848 57.7613 0.403143 59.1819 0.403143C60.6026 0.403143 61.8426 1.09679 62.6536 2.2602C63.5996 1.02949 64.8852 0.403143 66.5535 0.403143ZM51.7183 9.93501C51.7183 10.0696 51.8311 10.0916 51.9439 10.0916H53.0033V11.8594H51.9439C50.9515 11.8594 50.2527 11.3896 49.96 10.5614C48.9456 11.5682 47.7734 11.9713 46.0593 11.9713C44.0526 11.9713 42.0008 10.8526 42.0008 8.52573C42.0008 6.19891 43.7142 4.90089 46.5997 4.90089H49.7109V4.36383C49.7109 2.90921 48.7642 2.08164 47.073 2.08164C45.6525 2.08164 44.593 2.66335 44.3675 3.73748L44.3225 3.96137H42.3157L42.4057 3.55891C42.8568 1.56724 44.5924 0.403829 47.1851 0.403829C50.0706 0.403829 51.7169 1.92575 51.7169 4.47645V9.93501H51.7183ZM89.9327 0.403143C92.976 0.403143 95.1405 2.5514 95.1405 5.66116C95.1405 5.92969 95.1405 6.35481 95.0955 6.60068H86.5731V6.64532C86.6181 8.81556 87.9709 10.2702 89.8649 10.2702C91.2854 10.2702 92.6383 9.50921 92.976 8.23385L93.0437 7.98799H95.0505L94.9377 8.45775C94.3966 10.6953 92.4576 11.9706 90.0454 11.9706C86.6859 11.9706 84.4543 9.57651 84.4543 6.17556C84.4543 2.72996 86.6859 0.403143 89.9327 0.403143ZM12.4673 6.19823C12.4673 8.65965 14.4291 10.584 16.9084 10.584C19.3878 10.584 21.3496 8.65965 21.3496 6.19823C21.3496 3.73679 19.3656 1.79044 16.9084 1.79044C14.4291 1.79044 12.4673 3.75945 12.4673 6.19823ZM29.9625 0.403143C31.3154 0.403143 34.4494 0.917542 34.4494 5.54989V11.8601H32.4426V5.66184C32.4426 4.07332 31.9693 2.14895 29.6242 2.14895C27.5503 2.14895 26.3103 3.67017 26.3103 6.17624V11.8601H24.3713V0.515088H26.0848L26.1976 1.7458C27.1441 0.872903 28.497 0.403143 29.9625 0.403143ZM81.3653 6.17624C81.3653 3.73748 79.9446 2.08164 77.8259 2.08164C75.707 2.08164 74.2186 3.78212 74.2186 6.17624C74.2186 8.57037 75.6392 10.2709 77.758 10.2709C79.8769 10.2709 81.3653 8.63768 81.3653 6.17624ZM37.7853 1.7458C38.3714 0.984848 39.1831 0.515088 40.1298 0.515088H41.9558V2.37215H40.1975C38.597 2.37215 37.8981 4.31849 37.8981 6.06431V11.8594H35.8915V0.515088H37.6726L37.7853 1.7458ZM10.6862 6.19823C10.6862 4.47508 11.3851 2.90921 12.5123 1.79044H11.5657C9.08564 1.79044 7.12459 3.75945 7.12459 6.19823C7.12459 8.63699 8.99569 10.4947 11.3858 10.584H12.513C11.3851 9.46525 10.6862 7.92136 10.6862 6.19823ZM1.78114 6.19823C1.78114 8.63699 3.7429 10.584 6.22226 10.584H7.16888C6.04164 9.46525 5.34275 7.92136 5.34275 6.19823C5.34275 4.47508 6.04164 2.90921 7.16888 1.79044H6.22226C3.74221 1.79044 1.78114 3.75945 1.78114 6.19823ZM46.4205 10.3382C48.4273 10.3382 49.7122 9.04013 49.7122 7.00383V6.46676H46.3527C44.8193 6.46676 44.0083 7.18307 44.0083 8.45843C44.0083 10.0916 45.5411 10.3382 46.4205 10.3382ZM93.0437 4.94553C92.7511 3.20041 91.5782 2.08164 89.9327 2.08164C88.2871 2.08164 87.0471 3.26772 86.6859 4.94553H93.0437ZM98.2295 1.7458C98.8156 0.984848 99.6273 0.515088 100.574 0.515088H102.4V2.37215H100.642C99.0412 2.37215 98.3423 4.31849 98.3423 6.06431V11.8594H96.3355V0.515088H98.1167L98.2295 1.7458Z"
                            fill="black"
                          />
                        </svg>

                        <h3 className="font-semibold text-gray-900">
                          Buy Crypto with Cash
                        </h3>
                        <p className="text-gray-600">
                          Trade your cash for crypto at the best rates.
                        </p>

                        <a className="mt-4 text-emerald-700 font-semibold">
                          Buy Now
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden py-2 px-2 h-screen w-full ">
          <div
            className="z-10 hided sm:hidden mx-auto flex w-full items-center justify-between px-4 pb-3"
            aria-label="Global"
          >
            <div className="flex w-full justify-between gap-3">
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                </a>
              </div>
              <div className="flex">
                <button
                  id="open-menu-btn"
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full p-6  bg-white rounded-xl flex flex-col h-full border-gray-300 border gap-6 overflow-scroll">
            <div className="max-w-screen-xl w-full mx-auto flex flex-col gap-3 h-full">
              <div>
                <nav aria-label="Breadcrumb">
                  <ol className="flex items-center gap-1 text-xs text-gray-600">
                    <li>
                      <a
                        href="#"
                        className="block transition hover:text-gray-700"
                      >
                        {" "}
                        Wealth{" "}
                      </a>
                    </li>

                    <li className="rtl:rotate-180">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.83337 18.3334L14.1667 1.66675"
                          stroke="#D0D5DD"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </li>

                    <li>
                      <a href="#" className="block transition text-gray-800">
                        {" "}
                        Overview{" "}
                      </a>
                    </li>
                  </ol>
                </nav>
                <h1 className="text-4xl font-medium mt-4">Wealth</h1>

                <h2 className="text-2xl font-medium mt-5">Overview</h2>
              </div>

              <div className="w-full  h-auto border rounded-xl border-gray-300 p-4 flex flex-col gap-6">
                <div>
                  <p className="text-base text-gray-600 flex gap-2 items-center">
                    Net Worth
                    <a>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_83_101861)">
                          <path
                            d="M6 8V6M6 4H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
                            stroke="#475467"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_83_101861">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </p>
                  <h2 className="text-3xl mt-1 font-medium">$987,654.32</h2>

                  <div className="flex mt-2 items-center gap-2">
                    <div className="bg-teal-100 border border-teal-200 py-0.5 pl-2 pr-3 flex gap-1 items-center rounded-md text-sm text-teal-800 font-medium">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 3.5L7.06568 7.43432C6.86768 7.63232 6.76867 7.73133 6.65451 7.76842C6.55409 7.80105 6.44591 7.80105 6.34549 7.76842C6.23133 7.73133 6.13232 7.63232 5.93431 7.43431L4.56568 6.06568C4.36768 5.86768 4.26867 5.76867 4.15451 5.73158C4.05409 5.69895 3.94591 5.69895 3.84549 5.73158C3.73133 5.76867 3.63232 5.86768 3.43431 6.06569L1 8.5M11 3.5H7.5M11 3.5V7"
                          stroke="#107569"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      9.54% ($20,239.24)
                    </div>
                    <p className="text-gray-600 text-sm font-medium">
                      Last 24 hours
                    </p>
                  </div>
                </div>

                <div>
                  <AreaChart
                    data={data}
                    index="date"
                    categories={["Organic"]}
                    colors={["emerald", "blue"]}
                    showLegend={false}
                    showYAxis={true}
                    showGradient={true}
                    startEndOnly={true}
                    className="mt-6 h-72"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col lg:flex-row gap-3 h-auto">
                <div className="relative w-full p-4 bg-white rounded-xl border border-gray-300 flex-1 justify-between flex flex-col duration-300 ease-in-out ">
                  <p className="text-base text-gray-600 flex gap-2 items-center">
                    Total Assets
                    <a>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_83_101861)">
                          <path
                            d="M6 8V6M6 4H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
                            stroke="#475467"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_83_101861">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </p>
                  <h2 className="text-xl mt-1 font-medium">$987,654.32</h2>

                  <div className="flex mt-6 items-center gap-2">
                    <div className="bg-teal-100 border border-teal-200 py-0.5 pl-2 pr-3 flex gap-1 items-center rounded-md text-sm text-teal-800 font-medium">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 3.5L7.06568 7.43432C6.86768 7.63232 6.76867 7.73133 6.65451 7.76842C6.55409 7.80105 6.44591 7.80105 6.34549 7.76842C6.23133 7.73133 6.13232 7.63232 5.93431 7.43431L4.56568 6.06568C4.36768 5.86768 4.26867 5.76867 4.15451 5.73158C4.05409 5.69895 3.94591 5.69895 3.84549 5.73158C3.73133 5.76867 3.63232 5.86768 3.43431 6.06569L1 8.5M11 3.5H7.5M11 3.5V7"
                          stroke="#107569"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      9.54% ($20,239.24)
                    </div>
                    <p className="text-gray-600 text-sm font-medium">
                      Last 24 hours
                    </p>
                  </div>

                  <svg
                    className="absolute right-0 top-0 mt-4 mr-4"
                    width="83"
                    height="42"
                    viewBox="0 0 83 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.3335 41C12.6994 37.2114 16.4087 22.6447 28.0002 21C38.6869 19.4836 44.0586 33.4626 54.6668 31C67.5312 28.0136 68.3361 2.08312 81.3335 1"
                      stroke="#15B79E"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="relative w-full p-4 bg-white rounded-xl border border-gray-300 flex-1 justify-between flex flex-col duration-300 ease-in-out ">
                  <p className="text-base text-gray-600 flex gap-2 items-center">
                    Total Debts
                    <a>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_83_101861)">
                          <path
                            d="M6 8V6M6 4H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
                            stroke="#475467"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_83_101861">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </p>
                  <h2 className="text-xl mt-1 font-medium">$987,654.32</h2>

                  <div className="flex mt-6 items-center gap-2">
                    <div className="bg-teal-100 border border-teal-200 py-0.5 pl-2 pr-3 flex gap-1 items-center rounded-md text-sm text-teal-800 font-medium">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 3.5L7.06568 7.43432C6.86768 7.63232 6.76867 7.73133 6.65451 7.76842C6.55409 7.80105 6.44591 7.80105 6.34549 7.76842C6.23133 7.73133 6.13232 7.63232 5.93431 7.43431L4.56568 6.06568C4.36768 5.86768 4.26867 5.76867 4.15451 5.73158C4.05409 5.69895 3.94591 5.69895 3.84549 5.73158C3.73133 5.76867 3.63232 5.86768 3.43431 6.06569L1 8.5M11 3.5H7.5M11 3.5V7"
                          stroke="#107569"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      9.54% ($20,239.24)
                    </div>
                    <p className="text-gray-600 text-sm font-medium">
                      Last 24 hours
                    </p>
                  </div>

                  <svg
                    className="absolute right-0 top-0 mt-4 mr-4"
                    width="83"
                    height="42"
                    viewBox="0 0 83 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.3335 41C12.6994 37.2114 16.4087 22.6447 28.0002 21C38.6869 19.4836 44.0586 33.4626 54.6668 31C67.5312 28.0136 68.3361 2.08312 81.3335 1"
                      stroke="#15B79E"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="relative w-full p-4 bg-white rounded-xl border border-gray-300 flex-1 justify-between flex flex-col duration-300 ease-in-out ">
                  <p className="text-base text-gray-600 flex gap-2 items-center">
                    Total Claimable
                    <a>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_83_101861)">
                          <path
                            d="M6 8V6M6 4H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
                            stroke="#475467"
                            stroke-width="1.25"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_83_101861">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </p>
                  <h2 className="text-xl mt-1 font-medium">$987,654.32</h2>

                  <div className="flex mt-6 items-center gap-2">
                    <div className="bg-teal-100 border border-teal-200 py-0.5 pl-2 pr-3 flex gap-1 items-center rounded-md text-sm text-teal-800 font-medium">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 3.5L7.06568 7.43432C6.86768 7.63232 6.76867 7.73133 6.65451 7.76842C6.55409 7.80105 6.44591 7.80105 6.34549 7.76842C6.23133 7.73133 6.13232 7.63232 5.93431 7.43431L4.56568 6.06568C4.36768 5.86768 4.26867 5.76867 4.15451 5.73158C4.05409 5.69895 3.94591 5.69895 3.84549 5.73158C3.73133 5.76867 3.63232 5.86768 3.43431 6.06569L1 8.5M11 3.5H7.5M11 3.5V7"
                          stroke="#107569"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      9.54% ($20,239.24)
                    </div>
                    <p className="text-gray-600 text-sm font-medium">
                      Last 24 hours
                    </p>
                  </div>

                  <svg
                    className="absolute right-0 top-0 mt-4 mr-4"
                    width="83"
                    height="42"
                    viewBox="0 0 83 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.3335 41C12.6994 37.2114 16.4087 22.6447 28.0002 21C38.6869 19.4836 44.0586 33.4626 54.6668 31C67.5312 28.0136 68.3361 2.08312 81.3335 1"
                      stroke="#15B79E"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative w-full  bg-white border rounded-xl border-gray-300 p-5 flex flex-col gap-6">
                <div className="relative flex justify-between w-full justify-items-stretch flex-row place-content-between	">
                  <div className="flex flex-col max-w-[30rem]">
                    <h2 className="text-xl font-medium">Allocation</h2>
                  </div>
                </div>
                <Tabs defaultValue="assets">
                  <TabsList className="absolute right-0 top-0 mt-5 mr-5">
                    <TabsTrigger value="assets">Assets</TabsTrigger>
                    <TabsTrigger value="protocols">Protocols</TabsTrigger>
                    <TabsTrigger value="network">Networks</TabsTrigger>
                  </TabsList>
                  <TabsContent className="w-full py-2" value="assets">
                    <div className="w-full h-6 flex rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-green-300"></div>
                      <div className="w-full h-full bg-red-300"></div>
                      <div className="w-full h-full bg-blue-300"></div>
                      <div className="w-full h-full bg-yellow-300"></div>
                    </div>
                    <div className="text-sm text-gray-700 font-medium flex items-center gap-3 mt-4">
                      <div className="flex items-center gap-2 py-1 px-2.5">
                        <div className="size-2 rounded-full bg-green-300"></div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_86_3742)">
                            <rect
                              width="24"
                              height="24"
                              rx="12"
                              fill="#F7931A"
                            />
                            <path
                              d="M23.641 14.9029C22.0383 21.3315 15.5271 25.2438 9.09772 23.6407C2.67102 22.0381 -1.24132 15.5265 0.362068 9.09837C1.96405 2.66903 8.47521 -1.24361 14.9026 0.359081C21.3316 1.96177 25.2437 8.47405 23.6408 14.903L23.6409 14.9029H23.641Z"
                              fill="#F7931A"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M17.2928 10.2903C17.5316 8.6934 16.3158 7.83498 14.6533 7.26233L15.1926 5.09914L13.8758 4.77103L13.3508 6.87726C13.0046 6.79093 12.6491 6.70957 12.2958 6.62892L12.8246 4.50878L11.5086 4.18066L10.969 6.34315C10.6825 6.27793 10.4012 6.21347 10.1282 6.14555L10.1297 6.13874L8.3138 5.68528L7.96351 7.09171C7.96351 7.09171 8.94047 7.31565 8.91988 7.32944C9.45311 7.46252 9.54954 7.81551 9.53353 8.09529L8.91918 10.5597C8.95589 10.569 9.00352 10.5825 9.05608 10.6036L9.01781 10.5941L9.01777 10.5941C8.9853 10.5859 8.95154 10.5775 8.91689 10.5692L8.05578 14.0214C7.99061 14.1834 7.8252 14.4266 7.45239 14.3342C7.46559 14.3534 6.49532 14.0954 6.49532 14.0954L5.84155 15.6027L7.55516 16.0299C7.7428 16.077 7.92822 16.1253 8.11177 16.1731L8.1118 16.1731C8.24007 16.2066 8.36743 16.2398 8.49399 16.2721L7.94908 18.4601L9.26436 18.7883L9.80399 16.6235C10.1633 16.721 10.512 16.811 10.8534 16.8958L10.3156 19.0504L11.6324 19.3785L12.1773 17.1946C14.4227 17.6196 16.1111 17.4482 16.8218 15.4172C17.3944 13.7821 16.7932 12.8389 15.6119 12.2238C16.4723 12.0254 17.1204 11.4595 17.2932 10.2905L17.2928 10.2902L17.2928 10.2903ZM14.2842 14.5091C13.9108 16.0094 11.5625 15.3891 10.4881 15.1054C10.3915 15.0798 10.3051 15.057 10.2315 15.0387L10.9546 12.14C11.0443 12.1624 11.154 12.187 11.2783 12.2149L11.2784 12.2149C12.3897 12.4644 14.6667 12.9754 14.2842 14.5091H14.2842ZM11.5013 10.8696C12.397 11.1087 14.3511 11.6302 14.6914 10.2666H14.6915C15.039 8.8721 13.14 8.45166 12.2125 8.24631C12.1082 8.22321 12.0161 8.20283 11.941 8.1841L11.2854 10.8131C11.3473 10.8285 11.4199 10.8479 11.5013 10.8696Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_86_3742">
                              <rect
                                width="24"
                                height="24"
                                rx="12"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        BTC • 20%
                      </div>

                      <div className="flex items-center gap-2 py-1 px-2.5">
                        <div className="size-2 rounded-full bg-red-300"></div>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_86_3757)">
                            <circle cx="12" cy="12" r="12" fill="#ECEFF0" />
                            <path
                              opacity="0.6"
                              d="M11.8674 10.2615L7.5 12.2469L11.8674 14.8287L16.2355 12.2469L11.8674 10.2615Z"
                              fill="black"
                            />
                            <path
                              opacity="0.45"
                              d="M7.50146 12.2469L11.8688 14.8286V10.2614V5L7.50146 12.2469Z"
                              fill="black"
                            />
                            <path
                              opacity="0.8"
                              d="M11.8689 5V10.2614V14.8286L16.2363 12.2469L11.8689 5Z"
                              fill="black"
                            />
                            <path
                              opacity="0.45"
                              d="M7.5 13.0754L11.8674 19.23V15.6556L7.5 13.0754Z"
                              fill="black"
                            />
                            <path
                              opacity="0.8"
                              d="M11.8674 15.6556V19.23L16.238 13.0754L11.8674 15.6556Z"
                              fill="black"
                            />
                          </g>
                          <g clip-path="url(#clip1_86_3757)">
                            <circle cx="18" cy="18" r="6" fill="#ECEFF0" />
                            <path
                              opacity="0.6"
                              d="M17.9337 17.1307L15.75 18.1235L17.9337 19.4143L20.1178 18.1235L17.9337 17.1307Z"
                              fill="black"
                            />
                            <path
                              opacity="0.45"
                              d="M15.7507 18.1234L17.9344 19.4143V17.1307V14.5L15.7507 18.1234Z"
                              fill="black"
                            />
                            <path
                              opacity="0.8"
                              d="M17.9346 14.5V17.1307V19.4143L20.1183 18.1234L17.9346 14.5Z"
                              fill="black"
                            />
                            <path
                              opacity="0.45"
                              d="M15.75 18.5377L17.9337 21.615V19.8278L15.75 18.5377Z"
                              fill="black"
                            />
                            <path
                              opacity="0.8"
                              d="M17.9336 19.8278V21.615L20.1189 18.5377L17.9336 19.8278Z"
                              fill="black"
                            />
                          </g>
                          <rect
                            x="11.5"
                            y="11.5"
                            width="13"
                            height="13"
                            rx="6.5"
                            stroke="white"
                          />
                          <defs>
                            <clipPath id="clip0_86_3757">
                              <rect
                                width="24"
                                height="24"
                                rx="12"
                                fill="white"
                              />
                            </clipPath>
                            <clipPath id="clip1_86_3757">
                              <rect
                                x="12"
                                y="12"
                                width="12"
                                height="12"
                                rx="6"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        ETH • 20%
                      </div>

                      <div className="flex items-center gap-2 py-1 px-2.5">
                        <div className="size-2 rounded-full bg-blue-300"></div>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_86_3783)">
                            <rect
                              width="24"
                              height="24"
                              rx="12"
                              fill="#50AF95"
                            />
                            <path
                              d="M23.6383 14.9029C22.0356 21.3315 15.5244 25.2438 9.09503 23.6407C2.66833 22.0381 -1.24401 15.5265 0.359382 9.09837C1.96137 2.66903 8.47253 -1.24361 14.8999 0.359081C21.3289 1.96177 25.241 8.47405 23.6381 14.903L23.6382 14.9029H23.6383Z"
                              fill="#50AF95"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5184 13.3605C13.4336 13.3668 12.9952 13.393 12.0173 13.393C11.2395 13.393 10.6872 13.3697 10.4935 13.3605C7.48765 13.2283 5.24405 12.705 5.24405 12.0785C5.24405 11.452 7.48765 10.9295 10.4935 10.7952V12.8394C10.6901 12.8535 11.2529 12.8867 12.0307 12.8867C12.9641 12.8867 13.4314 12.8478 13.5156 12.8401V10.7966C16.5151 10.9302 18.7537 11.4535 18.7537 12.0785C18.7537 12.7036 16.5158 13.2268 13.5156 13.3598L13.5184 13.3605ZM13.5184 10.5851V8.7559H17.7044V5.96643H6.30751V8.7559H10.4928V10.5844C7.09097 10.7407 4.53271 11.4146 4.53271 12.2221C4.53271 13.0296 7.09097 13.7027 10.4928 13.8597V19.7215H13.5177V13.8576C16.9118 13.7013 19.4658 13.0281 19.4658 12.2214C19.4658 11.4146 16.9139 10.7414 13.5177 10.5844L13.5184 10.5851Z"
                              fill="white"
                            />
                          </g>
                          <g clip-path="url(#clip1_86_3783)">
                            <circle cx="18" cy="18" r="6" fill="#ECEFF0" />
                            <path
                              opacity="0.6"
                              d="M17.9337 17.1307L15.75 18.1235L17.9337 19.4143L20.1178 18.1235L17.9337 17.1307Z"
                              fill="black"
                            />
                            <path
                              opacity="0.45"
                              d="M15.7507 18.1234L17.9344 19.4143V17.1307V14.5L15.7507 18.1234Z"
                              fill="black"
                            />
                            <path
                              opacity="0.8"
                              d="M17.9346 14.5V17.1307V19.4143L20.1183 18.1234L17.9346 14.5Z"
                              fill="black"
                            />
                            <path
                              opacity="0.45"
                              d="M15.75 18.5377L17.9337 21.615V19.8278L15.75 18.5377Z"
                              fill="black"
                            />
                            <path
                              opacity="0.8"
                              d="M17.9336 19.8278V21.615L20.1189 18.5377L17.9336 19.8278Z"
                              fill="black"
                            />
                          </g>
                          <rect
                            x="11.5"
                            y="11.5"
                            width="13"
                            height="13"
                            rx="6.5"
                            stroke="white"
                          />
                          <defs>
                            <clipPath id="clip0_86_3783">
                              <rect
                                width="24"
                                height="24"
                                rx="12"
                                fill="white"
                              />
                            </clipPath>
                            <clipPath id="clip1_86_3783">
                              <rect
                                x="12"
                                y="12"
                                width="12"
                                height="12"
                                rx="6"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        USDT • 20%
                      </div>

                      <div className="flex items-center gap-2 py-1 px-2.5">
                        <div className="size-2 rounded-full bg-yellow-300"></div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_86_3807)">
                            <rect
                              width="24"
                              height="24"
                              rx="12"
                              fill="#EDF0F4"
                            />
                            <mask
                              id="mask0_86_3807"
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            >
                              <path
                                d="M12.0001 23.7556C18.4925 23.7556 23.7557 18.4924 23.7557 11.9999C23.7557 5.50746 18.4925 0.244263 12.0001 0.244263C5.50758 0.244263 0.244385 5.50746 0.244385 11.9999C0.244385 18.4924 5.50758 23.7556 12.0001 23.7556Z"
                                fill="white"
                              />
                            </mask>
                            <g mask="url(#mask0_86_3807)">
                              <path
                                d="M24.8689 -0.868896H-0.868652V24.8687H24.8689V-0.868896Z"
                                fill="url(#paint0_linear_86_3807)"
                              />
                            </g>
                            <path
                              d="M15.3997 14.5368L18.7257 12.6163C18.9018 12.5145 19.0108 12.3254 19.0108 12.1219V8.28142C19.0108 8.07839 18.9013 7.88878 18.7257 7.78702L15.3997 5.86655C15.2236 5.76479 15.0052 5.76527 14.829 5.86655L11.5031 7.78702C11.3269 7.88878 11.218 8.07839 11.218 8.28142V15.1449L8.88565 16.4913L6.55333 15.1449V12.4517L8.88565 11.1053L10.4241 11.9933V10.1865L9.17077 9.46318C9.08437 9.41326 8.98549 9.38686 8.88517 9.38686C8.78485 9.38686 8.68597 9.41326 8.60005 9.46318L5.27413 11.3837C5.09797 11.4854 4.98901 11.6745 4.98901 11.8781V15.7185C4.98901 15.9216 5.09845 16.1112 5.27413 16.2129L8.60005 18.1334C8.77573 18.2347 8.99461 18.2347 9.17077 18.1334L12.4967 16.2134C12.6729 16.1117 12.7818 15.9221 12.7818 15.719V8.85551L12.8241 8.83151L15.1141 7.50911L17.4465 8.85551V11.5488L15.1141 12.8952L13.5781 12.0081V13.8149L14.829 14.5373C15.0052 14.6385 15.2236 14.6385 15.3997 14.5373V14.5368Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_86_3807"
                              x1="-5.57217"
                              y1="1.24646"
                              x2="20.9977"
                              y2="17.506"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#A229C5" />
                              <stop offset="1" stop-color="#7B3FE4" />
                            </linearGradient>
                            <clipPath id="clip0_86_3807">
                              <rect
                                width="24"
                                height="24"
                                rx="12"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        MATIC • 20%
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="password">
                    Change your password here.
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
