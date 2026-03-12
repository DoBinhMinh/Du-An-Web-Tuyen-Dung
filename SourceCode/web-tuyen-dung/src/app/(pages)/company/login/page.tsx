import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Đăng nhập (Nhà tuyển dụng)",
  description: "Mô tả trang đăng nhập (Nhà tuyển dụng)...",
}

export default function CompanyLoginPage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <div className="rounded-[8px] border border-[#DEDEDE] py-[50px] px-[20px] max-w-[602px] mx-auto">
            <h1 className="font-[700] text-[20px] text-black mb-[20px] text-center">
              Đăng nhập (Nhà tuyển dụng)
            </h1>
            <form action="" className="grid grid-cols-1 gap-x-[20px] gap-y-[15px]">
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
                <Link href="/company/job/create">
                  <button className="w-full h-[48px] bg-[#0088FF] rounded-[4px] font-[700] text-[16px] text-white cursor-pointer">
                    Đăng nhập
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