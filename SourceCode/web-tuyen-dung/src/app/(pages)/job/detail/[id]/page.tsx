import { Metadata } from "next"
import Link from "next/link"
import { FaArrowRightLong, FaBriefcase, FaLocationDot, FaUserTie } from "react-icons/fa6"

export const metadata: Metadata = {
  title: "Chi tiết công việc",
  description: "Mô tả trang chi tiết công việc..."
}

export default function JobDetailPage() {
  return (
    <>
      {/* Chi tiết công việc */}
      <div className="pt-[30px] pb-[60px]">
        <div className="container">
          {/* Wrap */}
          <div className="flex flex-wrap gap-[20px]">
            {/* Left */}
            <div className="lg:w-[65%] w-full">
              {/* Thông tin công việc */}
              <div className="rounded-[8px] border border-[#DEDEDE] p-[20px]">
                <h1 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] mb-[10px]">
                  Front End Developer ( Javascript, ReactJS)
                </h1>
                <div className="font-[400] text-[16px] text-[#414042] mb-[10px]">
                  Viet QR
                </div>
                <div className="font-[700] text-[20px] text-[#0088FF] sm:mb-[20px] mb-[10px]">
                  1.000$ - 1.500$
                </div>
                <Link href="#" className="bg-[#0088FF] rounded-[4px] p-[14px] font-[700] text-[16px] text-white mb-[20px] block text-center">
                  Ứng tuyển
                </Link>
                <div className="grid grid-cols-3 sm:gap-[16px] gap-[8px] mb-[20px]">
                  <img
                    src="/assets/images/anh-1.jpg"
                    alt=""
                    className="w-full aspect-[232/145] rounded-[4px] object-cover"
                  />
                  <img
                    src="/assets/images/anh-2.jpg"
                    alt=""
                    className="w-full aspect-[232/145] rounded-[4px] object-cover"
                  />
                  <img
                    src="/assets/images/anh-3.jpg"
                    alt=""
                    className="w-full aspect-[232/145] rounded-[4px] object-cover"
                  />
                </div>
                <div className="flex items-center gap-[8px] mb-[10px] text-[14px]">
                  <FaUserTie className="text-[16px]" />Fresher
                </div>
                <div className="flex items-center gap-[8px] mb-[10px] text-[14px]">
                  <FaBriefcase className="text-[16px]" />Tại văn phòng
                </div>
                <div className="flex items-center gap-[8px] mb-[10px] text-[14px]">
                  <FaLocationDot className="text-[16px]" />Hà Nội
                </div>
                <div className="flex flex-wrap gap-[8px]">
                  <div className="border border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                    ReactJS
                  </div>
                  <div className="border border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                    NextJS
                  </div>
                  <div className="border border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                    Javascript
                  </div>
                </div>
              </div>
               {/* End Thông tin công việc */}
               {/* Mô tả chi tiết */}
                <div className="rounded-[8px] border border-[#DEDEDE] p-[20px] mt-[20px]">
                  Mô tả chi tiết...
                </div>
               {/* End Mô tả chi tiết */}
               {/* Form ứng tuyển */}
                <div className="rounded-[8px] border border-[#DEDEDE] p-[20px] mt-[20px]">
                  <h2 className="font-[700] text-[20px] text-black mb-[20px]">
                    Ứng tuyển ngay
                  </h2>
                  <form action="" className="flex flex-col gap-[15px]">
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
                      <label htmlFor="phone" className="font-[500] text-[14px] text-black mb-[5px]">
                        Số điện thoại *
                      </label>
                      <input 
                        type="text" 
                        name="" 
                        id="phone"
                        className="w-full h-[46px] rounded-[4px] border border-[#DEDEDE] font-[500] text-[14px] text-black px-[20px]"  
                      />
                    </div>
                    <div className="">
                      <label htmlFor="fileCV" className="font-[500] text-[14px] text-black mb-[5px]">
                        File CV dạng PDF *
                      </label>
                      <input 
                        type="file" 
                        name="" 
                        id="fileCV"
                        className="w-full h-[46px] rounded-[4px] border border-[#DEDEDE] font-[500] text-[14px] text-black px-[20px] file:py-[12px]"  
                      />
                    </div>
                    <button className="w-full h-[48px] bg-[#0088FF] rounded-[4px] font-[700] text-16[px] text-white cursor-pointer">
                      Gửi CV ứng tuyển
                    </button>
                  </form>
                </div>
               {/* End Form ứng tuyển */}
            </div>
            {/* Right */}
            <div className="flex-1">
              {/* Thông tin công ty */}
               <div className="border border-[#DEDEDE] rounded-[8px] p-[20px]">
                <div className="flex gap-[12px]">
                  <div 
                    className="w-[100px] aspect-square rounded-[4px] truncate border border-[#DEDEDE] flex items-center p-[10px]"
                    style={{
                      boxShadow: "0px 4px 24px 0px #0000001F"
                    }}
                  >
                    <img 
                      src="/assets/images/VietQR_Logo.png" alt="" 
                      className="" 
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-[700] text-[18px] text-[#121212] mb-[10px]">
                      Viet QR Hà Nội
                    </div>
                    <Link href="#" className="flex items-center gap-[8px] font-[400] text-[16px] text-[#0088FF]">
                      Xem công ty <FaArrowRightLong className="text-[16px]"/>
                    </Link>
                  </div>
                </div>
                <div className="mt-[20px] flex flex-col gap-[10px]">
                  <div className="flex items-center justify-between gap-[10px]">
                    <div className="font-[400] text-[16px] text-[#A6A6A6]">
                      Mô hình công ty
                    </div>
                    <div className="font-[400] text-[16px] text-[#121212] text-right">
                      Sản phẩm
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-[10px]">
                    <div className="font-[400] text-[16px] text-[#A6A6A6]">
                      Quy mô công ty
                    </div>
                    <div className="font-[400] text-[16px] text-[#121212] text-right">
                      151 - 300 nhân viên
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-[10px]">
                    <div className="font-[400] text-[16px] text-[#A6A6A6]">
                      Thời gian làm việc
                    </div>
                    <div className="font-[400] text-[16px] text-[#121212] text-right">
                      Thứ 2 - Thứ 6
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-[10px]">
                    <div className="font-[400] text-[16px] text-[#A6A6A6]">
                      Làm việc ngoài giờ
                    </div>
                    <div className="font-[400] text-[16px] text-[#121212] text-right">
                      Không có OT
                    </div>
                  </div>
                </div>
              </div> 
              {/* End Thông tin công ty */}
            </div>
          </div>
        </div>
      </div>
      {/* End Chi tiết công việc */}
    </>
  )
}