import Link from "next/link"
import {FaBars } from "react-icons/fa6"
import { HeaderMenu } from "./HeaderMenu"

export const Header = () => {
  
  return (
    <>
      <header className="bg-[#000071] py-[15px]">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="#" className="font-[800] sm:text-[28px] text-[20px] text-white lg:flex-none flex-1">
              28.ITJobs
            </Link>
            {/* Menu */}
            <HeaderMenu />
            {/* Account */}
            <div className="font-[600] sm:text-[16px] text-[12px] text-white inline-flex gap-x-[5px]">
              <Link href="#" className="">
                Đăng Nhập
              </Link>
              <span className="">/</span>
              <Link href="#" className="">
                Đăng Ký
              </Link>
            </div>
            {/* Button menu mobile */}
            <button className="lg:hidden block ml-[12px]">
              <FaBars className="text-[20px] text-white" />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}