import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigationmenu from "./navigationmenuleft";
import NavigationMenuRight from "./navigationmenuright";
import MobileMenu from "./MobileMenu";
function Header() {
  return (
    <div className="flex justify-center fixed top-4 left-0 right-0 z-50">
      <header className="mx-4 sm:mx-8 p-4 rounded-lg backdrop-blur-lg relative flex items-center justify-between bg-[#060810]/35 w-full max-w-[2500px]">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/logo/logo_nav.svg"
              alt="logo"
              width={150}
              height={100}
              className="object-contain mr-6 sm:mr-12 hover:brightness-125 transition-all duration-150"
            />
          </Link>
          <div className="hidden lg:block">
            <Navigationmenu />
          </div>
        </div>
        <div className="hidden lg:block">
          <NavigationMenuRight />
        </div>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </header>
    </div>
  );
}

export default Header;
