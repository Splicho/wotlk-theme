import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigationmenu from "../index/NavigationMenuLeft";
import NavigationMenuRight from "../index/NavigationMenuRight";

function Header() {
  return (
    <div className="flex justify-center">
      <header className="mx-8 mt-8 p-4 rounded-lg backdrop-blur-lg relative z-50 flex items-center justify-between bg-[#060810]/35 w-full max-w-[2500px]">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/logo/logo_nav.svg"
              alt="logo"
              width={150}
              height={100}
              className="object-contain mr-12 hover:brightness-125 transition-all duration-150"
            />
          </Link>
          <Navigationmenu />
        </div>
        <NavigationMenuRight />
      </header>
    </div>
  );
}

export default Header;
