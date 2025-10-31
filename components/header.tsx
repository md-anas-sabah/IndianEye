import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { IoIosCall } from "react-icons/io";

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-center border-none bg-[#181818]">
      <div className="min-w-[1100px] mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src="/landing/logo.png"
            alt="Logo"
            width={121}
            height={50}
            className="ml-2.5 mr-[50px]"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-5">
          <Link
            href="/home"
            className="font-(family-name:--font-albert-sans) text-white text-[19px] font-normal leading-[100%] tracking-[0%] align-middle no-underline"
          >
            Home
          </Link>
          <div className="flex items-center gap-1.5">
            <Link
              href="/product"
              className="font-(family-name:--font-albert-sans) text-white text-[19px] font-normal leading-[100%] tracking-[0%] align-middle no-underline"
            >
              Product
            </Link>
            <ChevronDown size={20} color="#fff" />
          </div>
          <div className="flex items-center gap-1.5">
            <Link
              href="/service"
              className="font-(family-name:--font-albert-sans) text-white text-[19px] font-normal leading-[100%] tracking-[0%] align-middle no-underline"
            >
              Service
            </Link>
            <ChevronDown size={20} color="#fff" />
          </div>
          <Link
            href="/training"
            className="font-(family-name:--font-albert-sans) text-white text-[19px] font-normal leading-[100%] tracking-[0%] align-middle no-underline"
          >
            Training & skill development
          </Link>
          <Link
            href="/about"
            className="font-(family-name:--font-albert-sans) text-white text-[19px] font-normal leading-[100%] tracking-[0%] align-middle no-underline"
          >
            About Us
          </Link>
        </nav>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="bg-[#EA580C] font-(family-name:--font-albert-sans) text-white text-[19px] font-normal leading-[100%] tracking-[0%] align-middle rounded-4xl px-5 py-2.5 no-underline flex items-center gap-1.5"
        >
          {/* <Phone size={18} color="#fff" /> */}
          <IoIosCall />
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
