import { Metadata } from "next"

import FormRegister from "./FormRegister"

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
            <FormRegister />
          </div>
        </div>
      </div>
    </>
  )
}