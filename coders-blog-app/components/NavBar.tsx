import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-2">
      <Link href={"/"}>
        <div className="flex items-center cursor-pointer">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <span className="font-bold ml-3 text-primary">
            {"Coder's"} Blog App
          </span>
        </div>
      </Link>
      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Products</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Pricing</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Docs</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Company</a>
        </li>
      </ul>
      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <a href="#" className="hover:text-gray-400 transition-all">
            Login
          </a>
        </li>
        <li className="font-medium text-gray-600">
          <a
            href="#"
            className="bg-primary px-4 py-2 rounded-md text-white hover:bg-primary-dark transition-all"
          >
            Signup
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
