"use client";

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  EnvelopeIcon,
  HeartIcon,
  HomeIcon,
  PencilIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SideNav() {
  const [current, setCurrent] = useState("Home");
  const [toggle, setToggle] = useState(true);
  const pathname = usePathname();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed z-[9999] lg:w-[20%] w-full flex lg:h-screen lg:flex-col lg:py-8  lg:my-auto mx-auto justify-between lg:p-4 p-8 lg:text-lg bg-transparent lg:bg-black">
      <div className="flex-col gap-2 lg:flex hidden">
        <Link
          href="/"
          className={clsx(    
            `p-2 flex gap-2 border-2 box-border border-transparent items-center`,
        
          )}
        >
          <HomeIcon className="w-5" />
          <div className="relative hover-underline-animation">
      <span className={clsx("absolute inset-x-0 bottom-0 ", {
        "h-[1px] bg-white": pathname === "/",
        // Add other conditional classes as needed
      })}></span>
      Home
    </div>
        </Link>

        <Link
          href="/Projects"
          className={clsx(
            `p-2 flex gap-2 border-2 box-border border-transparent items-center`,
         
          )}
        >
          <HeartIcon className="w-5" />
          <div className="relative hover-underline-animation">
      <span className={clsx("absolute inset-x-0 bottom-0 ", {
        "h-[1px] bg-white": pathname.startsWith("/Projects"),
        // Add other conditional classes as needed
      })}></span>
      Projects
    </div>
        </Link>

        <Link
          href="/Resume"
          className={clsx(
            `p-2 flex gap-2 border-2 box-border border-transparent items-center`,
        
          )}
        >
          <PencilIcon className="w-5" />
          <div className="relative hover-underline-animation">
      <span className={clsx("absolute inset-x-0 bottom-0 ", {
        "h-[1px] bg-white": pathname === "/Resume",
        // Add other conditional classes as needed
      })}></span>
      Resume
    </div>
        </Link>
        <Link
          href="/Contact"
          className={clsx(
            `p-2 flex gap-2  box-border border-transparent items-center`,
           
          )}
        >
          <EnvelopeIcon className="w-5" />
          <div className="relative hover-underline-animation">
      <span className={clsx("absolute inset-x-0 bottom-0 ", {
        "h-[1px] bg-white": pathname === "/Contact",
        // Add other conditional classes as needed
      })}></span>
      Contact
    </div>
        </Link>
      </div>

      <div className="hidden lg:flex flex-col gap-4 text-gray-400 text-lg">
        <Link
          href="https://www.linkedin.com/in/ananya-singh-95bb83242/"
          target="_blank"
          className=" pt-3 flex gap-2 items-center  hover:gap-3 transition-all"
        >
          LinkedIn
          <ArrowUpRightIcon className="w-4" />
        </Link>

        <Link
          href="https://www.instagram.com/hdeius/?igsh=YmFqeHp1dDA3bXFo"
          target="_blank"
          className="border-t-2 border-gray-800 pt-3 flex gap-2 items-center hover:gap-3 transition-all"
        >
          Instagram
          <ArrowUpRightIcon className="w-4 group " />
        </Link>

        <a
          href="mailto:varunparmarwork@gmail.com"
          className="border-t-2 border-gray-800  pt-3 flex gap-2 items-center  hover:gap-3 transition-all"
        >
          Email
          <ArrowUpRightIcon className="w-4" />
        </a>
      </div>

      <div className="lg:hidden flex">
        <Link href="/">
        
  <HomeIcon className="w-8" />


        </Link>
      </div>

      <div className="lg:hidden flex">
        {toggle ? (
          <Bars3Icon className="w-8" onClick={() => handleToggle()} />
        ) : (
          <XMarkIcon className="w-8" onClick={() => handleToggle()} />
        )}
      </div>

      <div
        className={`fixed z-50 h-screen  lg:hidden top-0 transition-all duration-300 ease-in-out  ${
          toggle ? "-right-full" : "right-0"
        }  w-[60vw]  bg-black flex flex-col justify-between`}
      >
        <div className=" flex flex-col gap-4 p-4">
          <div className="flex-col gap-2 ">
            <div className="flex justify-end mr-4 ">
              <XMarkIcon
                className="mt-4 w-8 mb-4"
                onClick={() => handleToggle()}
              />
            </div>
            <Link
              href="/"
              className={clsx(
                `${
                  toggle ? "opacity-0" : "opacity-100"
                } transition-all  p-2 flex gap-2 border-2 box-border delay-[250ms] border-transparent items-center`,
                {
                  "border-2 box-border rounded-lg border-white":
                    pathname === "/",
                }
              )}
              onClick={() => {
                handleToggle();
              }}
            >
              <HomeIcon className="w-5" />
              Home
            </Link>

            <Link
              href="/Projects"
              className={clsx(
                `${
                  toggle ? "opacity-0" : "opacity-100"
                } transition-all delay-[250ms] p-2 flex gap-2 border-2 box-border border-transparent items-center`,
                {
                  "border-2 box-border rounded-lg border-white":
                    pathname === "/Projects",
                }
              )}
              onClick={() => {
                handleToggle();
              }}
            >
              <HeartIcon className="w-5" />
              Projects
            </Link>

            <Link
              href="/Resume"
              className={clsx(
                `${
                  toggle ? "opacity-0" : "opacity-100"
                } transition-all delay-[250ms] p-2 flex gap-2 border-2 box-border border-transparent items-center`,
                {
                  " border-2 box-border rounded-lg border-white":
                    pathname === "/Resume",
                }
              )}
              onClick={() => {
                handleToggle();
              }}
            >
              <PencilIcon className="w-5" />
              Resume
            </Link>
            <Link
              href="/Contact"
              className={clsx(
                `${
                  toggle ? "opacity-0" : "opacity-100"
                } transition-all delay-[250ms] p-2 flex gap-2 border-2 box-border border-transparent items-center`,
                {
                  "border-2 box-border rounded-lg border-white":
                    pathname === "/Contact",
                }
              )}
              onClick={() => {
                handleToggle();
              }}
            >
              <EnvelopeIcon className="w-5" />
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4 text-gray-500">
          <Link
            href="https://www.linkedin.com/in/ananya-singh-95bb83242/"
            target="_blank"
            className={`${
              toggle ? "opacity-0" : "opacity-100"
            } transition-all delay-[400ms] pt-3 flex gap-2 items-center  hover:gap-3`}
          >
            LinkedIn
            <ArrowUpRightIcon className="w-4" />
          </Link>

          <Link
            href="https://www.instagram.com/hdeius/?igsh=YmFqeHp1dDA3bXFo"
            target="_blank"
            className={`${
              toggle ? "opacity-0" : "opacity-100"
            } transition-all delay-[400ms] border-t-2 border-gray-800  pt-3 flex gap-2 items-center  hover:gap-3`}
          >
            Instagram
            <ArrowUpRightIcon className="w-4 group " />
          </Link>

          <Link
            href="/"
            className={`${
              toggle ? "opacity-0" : "opacity-100"
            } transition-all  delay-[400ms] border-t-2 border-gray-800 mb-16 pt-3 flex gap-2 items-center  hover:gap-3`}
          >
            Email
            <ArrowUpRightIcon className="w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
