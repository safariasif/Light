import React from "react";
import { Menu, Transition } from '@headlessui/react'
import { useState } from "react";
import Dinsity from "../dinsity/dinsity";
const LearningTearm = () => {
      const [openDensity, setOpenDensity] = useState(false);
  return (
    <article>
      {openDensity && (
        <div className="fixed top-80 left-0 right-0 bottom-0 backdrop-blur-sm z-50"></div>
      )}
      <div className=" font-bold pt-1 z-40">
        <Menu>
          {({ open }) => {
            return (
              <>
                <Menu.Button>
                  <div
                    onClick={() => setOpenDensity(!openDensity)}
                    className="flex items-center"
                  >
                    <p className="text-textWave">دوره های آموزشی</p>
                    <div>
                      {openDensity ? 
                        
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-caret-up text-textWave"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
                        </svg>
                      : <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-caret-down text-textWave"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                        </svg>
                      }
                    </div>
                  </div>

                  <Transition
                    show={openDensity}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Menu.Items static>
                      <div className="relative">
                        <Dinsity setOpenDensity={setOpenDensity} />
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu.Button>
              </>
            );
          }}
        </Menu>
      </div>
    </article>
  );
}
export default LearningTearm;