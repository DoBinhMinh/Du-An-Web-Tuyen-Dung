import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Đăng ký (Ứng viên)",
  description: "Mô tả trang đăng ký (Ứng viên)...",
}

export default function UserRegisterPage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <div className="rounded-[8px] border border-[#DEDEDE] py-[50px] px-[20px] max-w-[602px] mx-auto">
            <h1 className="font-[700] text-[20px] text-black mb-[20px] text-center">
              Đăng ký (Ứng viên)
            </h1>
            <form action="" className="grid grid-cols-1 gap-x-[20px] gap-y-[15px]">
              <div className="">
                <label htmlFor="fullName" className="font-[500] text-[14px] text-black mb-[5px]">
                  Họ tên *
                </label>
                <input
                  type="text"
                  name=""
                  id="fullName"
                  className="w-full h-[46px] rounded-[4px] border border-[#DEDEDE] font-[500] text-[14px] text-black px-[20px]"
                />
              </div>
              <div className="">
                <label htmlFor="email" className="font-[500] text-[14px] text-black mb-[5px]">
                  Email *
                </label>
                <input
                  type="email"
                  name=""
                  id="email"
                  className="w-full h-[46px] rounded-[4px] border border-[#DEDEDE] font-[500] text-[14px] text-black px-[20px]"
                />
              </div>
              <div className="">
                <label htmlFor="password" className="font-[500] text-[14px] text-black mb-[5px]">
                  Mật khẩu *
                </label>
                <input
                  type="password"
                  name=""
                  id="password"
                  className="w-full h-[46px] rounded-[4px] border border-[#DEDEDE] font-[500] text-[14px] text-black px-[20px]"
                />
              </div>
              <div className="">
                <Link href="/user/login">
                  <button className="w-full h-[48px] bg-[#0088FF] rounded-[4px] font-[700] text-[16px] text-white cursor-pointer">
                    Đăng ký
                  </button>
                </Link>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}