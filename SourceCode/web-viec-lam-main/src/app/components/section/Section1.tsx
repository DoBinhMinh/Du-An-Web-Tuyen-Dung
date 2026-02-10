
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
export const Section1 = () => {
  return (
    <>
      <div className="bg-[#000065] py-[60px]">
        <div className="container">
          <h1 className="font-[700] text-[28px] text-white mb-[30px] text-center">
            887 Việc làm IT cho Developer &quot;Chất&quot;
          </h1>
          <form action="" className="flex flex-wrap md:flex-nowrap gap-y-[12px] gap-x-[15px] mb-[30px]">
            <select name="" id="" className="md:w-[240px] w-full h-[56px] rounded-[4px] bg-white font-[500] text-[16px] text-[#121212] px-[20px]">
              <option value="" className="">Tất cả thành phố</option>
              <option value="" className="">Hà Nội</option>
              <option value="" className="">Đà Nẵng</option>
              <option value="" className="">Hồ Chí Minh</option>
            </select>
            <input type="text" className="md:flex-1 w-full h-[56px] rounded-[4px] bg-white font-[500] text-[16px] text-[#121212] px-[20px]" placeholder="Nhập từ khóa..."/>
            <button className="md:w-[240px] w-full h-[56px] rounded-[4px] bg-[#0088FF] font-[500] text-[16px] text-white px-[20px] flex items-center justify-center gap-x-[10px] cursor-pointer">
              <IoIosSearch className="text-[26px]"/><Link href="search">Tìm Kiếm</Link>
            </button>
          </form>
          <div className="flex flex-wrap items-center gap-x-[12px] gap-y-[15px]">
            <div className="font-[500] text-[16px] text-[#DEDEDE]">
              Mọi người đang tìm kiếm :
            </div>
            <div className="flex flex-wrap gap-[10px] ">
              <Link href={"search"} className="border-[#414042] border-[1px] bg-[#121212] hover:bg-[#414042] rounded-[20px] px-[22px] py-[8px] font-[500] text-[16px] text-[#DEDEDE] hover:text-white">
                ReactJS
              </Link>
              <Link href={"search"} className="border-[#414042] border-[1px] bg-[#121212] hover:bg-[#414042] rounded-[20px] px-[22px] py-[8px] font-[500] text-[16px] text-[#DEDEDE] hover:text-white">
                Javascript
              </Link>
              <Link href={"search"} className="border-[#414042] border-[1px] bg-[#121212] hover:bg-[#414042] rounded-[20px] px-[22px] py-[8px] font-[500] text-[16px] text-[#DEDEDE] hover:text-white">
                NodeJS
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}