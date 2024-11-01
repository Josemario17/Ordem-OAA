import React, { useState } from "react";

export default function TextLongSection() {
  return (
    <section class="py-24 relative">
      <div class="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div class="flex flex-col lg:flex-row gap-11 items-center p-11 ">
          <div class="flex flex-wrap items-center justify-center w-full gap-10 max-lg:max-w-xl">
            <div class="w-auto flex flex-col items-center">
              <button class="p-5 rounded-full shadow-sm shadow-transparent bg-indigo-50 flex items-center justify-center transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200 focus-within:bg-indigo-100 focus-within:outline-0">
                <svg
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.0714 13.7143C30.0714 17.2647 24.7948 20.1429 18.2857 20.1429C11.7766 20.1429 6.5 17.2647 6.5 13.7143M30.0714 20.1429C30.0714 23.6933 24.7948 26.5714 18.2857 26.5714C11.7766 26.5714 6.5 23.6933 6.5 20.1429M30.0714 26.5714C30.0714 30.1218 24.7948 33 18.2857 33C11.7766 33 6.5 30.1218 6.5 26.5714M30.0714 8.35714C30.0714 11.3158 24.7948 13.7143 18.2857 13.7143C11.7766 13.7143 6.5 11.3158 6.5 8.35714C6.5 5.39847 11.7766 3 18.2857 3C24.7948 3 30.0714 5.39847 30.0714 8.35714Z"
                    stroke="#4F46E5"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <p class="mt-2 font-medium text-sm leading-6 text-black text-center">
                A Lei da Advogacia
              </p>
            </div>

            <div class="w-auto flex flex-col items-center">
              <button class="p-5 rounded-full shadow-sm shadow-transparent bg-indigo-50 flex items-center justify-center transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200 focus-within:bg-indigo-100 focus-within:outline-0">
                <svg
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 4.5H4.45C6.24134 4.5 7.13701 4.5 7.6935 5.0565C8.25 5.61299 8.25 6.50866 8.25 8.3C8.25 11.3667 8.25 14.4333 8.25 17.5C8.25 20.3284 8.25 21.7426 9.12868 22.6213C10.0074 23.5 11.4216 23.5 14.25 23.5C20.8 23.5 27.35 23.5 33.9 23.5M13.95 30.15C13.95 31.724 12.674 33 11.1 33C9.52599 33 8.25 31.724 8.25 30.15C8.25 28.576 9.52599 27.3 11.1 27.3C12.674 27.3 13.95 28.576 13.95 30.15ZM32.95 30.15C32.95 31.724 31.674 33 30.1 33C28.526 33 27.25 31.724 27.25 30.15C27.25 28.576 28.526 27.3 30.1 27.3C31.674 27.3 32.95 28.576 32.95 30.15ZM28.6 5.85C24.9 5.85 21.2 5.85 17.5 5.85C16.0858 5.85 15.3787 5.85 14.9393 6.28934C14.5 6.72868 14.5 7.43579 14.5 8.85C14.5 10.65 14.5 12.45 14.5 14.25C14.5 15.6642 14.5 16.3713 14.9393 16.8107C15.3787 17.25 16.0858 17.25 17.5 17.25C21.2 17.25 24.9 17.25 28.6 17.25C30.0142 17.25 30.7213 17.25 31.1607 16.8107C31.6 16.3713 31.6 15.6642 31.6 14.25C31.6 12.45 31.6 10.65 31.6 8.85C31.6 7.43579 31.6 6.72868 31.1607 6.28934C30.7213 5.85 30.0142 5.85 28.6 5.85Z"
                    stroke="#4F46E5"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
              <p class="mt-2 font-medium text-sm leading-6 text-black text-center">
                Estatutos
              </p>
            </div>
            <div class="w-auto flex flex-col items-center">
              <button class="p-5 rounded-full shadow-sm shadow-transparent bg-indigo-50 flex items-center justify-center transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200 focus-within:bg-indigo-100 focus-within:outline-0">
                <svg
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5006 17.1458H7.30064C5.99424 17.1458 5.34104 17.1458 4.83915 16.8983C3.4278 16.2023 3.50064 14.7113 3.50064 13.3458C3.50064 11.9803 3.4278 10.4893 4.83915 9.79329C5.34104 9.54579 5.99424 9.54579 7.30064 9.54579H18.5006M18.5006 17.1458H29.7006C31.007 17.1458 31.6602 17.1458 32.1621 16.8983C33.5735 16.2023 33.5006 14.7113 33.5006 13.3458C33.5006 11.9803 33.5735 10.4893 32.1621 9.79329C31.6602 9.54579 31.007 9.54579 29.7006 9.54579H18.5006M18.5006 17.1458V9.54579M18.5006 17.1458V32.9458M18.5006 9.54579C18.0206 4.26579 15.4178 3.99037 14.3006 4.74579C12.7357 5.80395 12.901 8.3458 13.701 9.5458M23.5956 9.5458C24.3956 8.3458 24.7463 5.62092 22.9959 4.74579C21.7959 4.14579 19.2755 4.2658 18.7955 9.5458M7.10064 17.1458H29.9006C29.9006 20.4125 29.9006 23.6791 29.9006 26.9458C29.9006 29.7742 29.9006 31.1884 29.022 32.0671C28.1433 32.9458 26.7291 32.9458 23.9006 32.9458C20.3006 32.9458 16.7006 32.9458 13.1006 32.9458C10.2722 32.9458 8.858 32.9458 7.97932 32.0671C7.10064 31.1884 7.10064 29.7742 7.10064 26.9458C7.10064 23.6791 7.10064 20.4125 7.10064 17.1458Z"
                    stroke="#4F46E5"
                    stroke-width="2.5"
                  />
                </svg>
              </button>
              <p class="mt-2 font-medium text-sm leading-6 text-black text-center">
                Assembleia Geral 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
