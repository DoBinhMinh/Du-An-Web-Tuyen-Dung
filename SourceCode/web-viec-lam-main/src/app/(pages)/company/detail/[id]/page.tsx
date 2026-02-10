import { CardJobItem } from "@/app/components/card/CardJobItem"
import { Metadata } from "next"
import { FaLocationDot } from "react-icons/fa6"

export const metadata: Metadata = {
  title: "Chi tiết công ty",
  description: "Mô tả trang chi tiết công ty...",
}

export default function CompanyDetailPage() {
  return (
    <>
      {/* Chi tiết công ty */}
      <div className="pt-[30px] pb-[60px]">
        <div className="container">
          {/* Thông tin công ty */}
          <div className="border border-[#DEDEDE] rounded-[8px] p-[20px]">
            <div className="flex flex-wrap items-center gap-[16px]">
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
              <div className="sm:flex-1 w-full">
                <div className="font-[700] text-[28px] text-[#121212] mb-[10px]">
                  Viet QR Hà Nội
                </div>
                <div className="flex items-center gap-[8px] text-[14px] font-[400] text-[#121212]">
                  <FaLocationDot className="text-[16px]" />Hà Nội
                </div>
              </div>
            </div>
            <div className="mt-[20px] flex flex-col gap-[10px]">
              <div className="flex items-center gap-[5px]">
                <div className="font-[400] text-[16px] text-[#A6A6A6]">
                  Mô hình công ty:
                </div>
                <div className="font-[400] text-[16px] text-[#121212] text-right">
                  Sản phẩm
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <div className="font-[400] text-[16px] text-[#A6A6A6]">
                  Quy mô công ty:
                </div>
                <div className="font-[400] text-[16px] text-[#121212] text-right">
                  151 - 300 nhân viên
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <div className="font-[400] text-[16px] text-[#A6A6A6]">
                  Thời gian làm việc:
                </div>
                <div className="font-[400] text-[16px] text-[#121212] text-right">
                  Thứ 2 - Thứ 6
                </div>
              </div>
              <div className="flex items-center gap-[5px]">
                <div className="font-[400] text-[16px] text-[#A6A6A6]">
                  Làm việc ngoài giờ:
                </div>
                <div className="font-[400] text-[16px] text-[#121212] text-right">
                  Không có OT
                </div>
              </div>
            </div>
          </div>
          {/* End Thông tin công ty */}
          {/* Mô tả chi tiết */}
          <div className="rounded-[8px] border border-[#DEDEDE] p-[20px] mt-[20px]">
            Mô tả chi tiết...
          </div>
          {/* End Mô tả chi tiết */}
          {/* Việc làm */}
          <div className="mt-[30px]">
            <h2 className="font-[700] text-[28px] text-[#121212] mb-[20px]">
              Công ty có 6 việc làm
            </h2>
            {/* Danh sách công việc */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
              {/* Items */}
              <CardJobItem />
              <CardJobItem />
              <CardJobItem />
              <CardJobItem />
              <CardJobItem />
              <CardJobItem />
            </div>
          </div>
          {/* End Việc làm */}
        </div>
      </div>

      {/* End Chi tiết công ty */}
    </>
  )
}
