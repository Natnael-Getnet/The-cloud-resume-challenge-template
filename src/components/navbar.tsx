"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";

export const navBarLinks = [
  { name: "BLOG", href: "https://medium.com/" },
  { name: "CONTACT", href: "/#contact" },
  { name: "RESUME (PDF)", href: "/resume" },
];

const Navbar = () => {
  const currentPath = usePathname();
  const [navbar, setNavbar] = useState(false);

  return (
    <div
      className={`mx-auto justify-between px-4 flex lg:max-w-7xl lg:items-center lg:px-8 bg-transparent`}
    >
      <div>
        <div className="flex items-center justify-between py-3 lg:block lg:py-5">
          <Link href={"/"}>
            <div className="flex">
              <div className="content-center pl-5">
                <p className=" lg:text-xl xl:text-2xl font-bold">Full name</p>
              </div>
            </div>
          </Link>

          <div className="lg:hidden">
            <button
              className="rounded-md p-2  outline-none focus:border focus:border-gray-400"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <IoCloseSharp size={50} /> : <BiMenu size={50} />}
            </button>
          </div>
        </div>
      </div>

      <div>
        <div
          className={`mt-8 flex-1 justify-self-center pb-3 lg:mt-0 lg:block lg:pb-0 ${
            navbar ? "block p-12 lg:p-0" : "hidden"
          }`}
        >
          <ul className="h-screen items-center justify-center lg:flex lg:h-auto">
            {navBarLinks.map((link) => (
              <li
                key={link.name}
                className="py-2 pb-6 text-center text-xl  lg:px-6"
              >
                <Link
                  className={` decoration-orange-500 underline-offset-8 hover:underline lg:text-xl xl:text-2xl ${
                    currentPath === link.href ? "underline" : ""
                  } font-bold`}
                  href={link.href}
                  target={link.name === "CONTACT" ? "_self" : "_blank"}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
