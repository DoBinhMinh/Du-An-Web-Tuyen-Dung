"use client"
import Link from "next/link"
import {FaBars } from "react-icons/fa6";
import { HeaderMenu } from "./HeaderMenu";
import { useState } from "react";
import { HeaderACCount } from "./HeaderAccount";


export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <header className="bg-[#000071] py-[15px] sticky top-0 z-55">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* logo */}
            <Link href="/" className="font-[800] sm:text-[28px] text-[20px] text-white flex-1 lg:flex-none">
              28.ITJobs
            </Link>
            {/* Menu */}
            <HeaderMenu showMenu={showMenu}/>
            {/* Account */}
            <HeaderACCount />
            {/* Button Menu Mobile */}
            <button className="lg:hidden ml-[12px]" onClick={handleShowMenu}>
              <FaBars className="text-[20px] text-white"/>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}