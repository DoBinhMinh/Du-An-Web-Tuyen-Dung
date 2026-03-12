import Link from "next/link";
import { IoIosSearch } from "react-icons/io";


export default function Home() {
  return (
    <>
      {/* Section 1 */}
      <div className="bg-[#000065] py-[60px]">
        <div className="container">
          <h1 className=" font-[700] text-[28px] text-white text-center mb-[30px]">
            887 Việc làm IT cho Developer &quot;Chất&quot;
          </h1>
          <div className="text-center">
            <form
              action=""
              className="flex md:flex-nowrap flex-wrap gap-y-[12px] justify-between gap-x-[15px] mb-[30px]"
            >
              <select
                name=""
                id=""
                className="bg-[#FFFFFF] md:w-[240px] w-full h-[56px] rounded-[4px] px-[20px] py-[18px] font-[500] text-[16px] text-[#121212]"
              >
                <option 
                  value="" 
                  className="font-[500] text-[16px] text-[#121212]"
                >
                  Tất cả thành phố
                </option>
                <option 
                  value="" 
                  className="font-[500] text-[16px] text-[#121212]"
                >
                  Hà Nội
                </option>
                <option 
                  value="" 
                  className="font-[500] text-[16px] text-[#121212]"
                >
                  TP. Hồ Chí Minh
                </option>
              </select>
              <input 
                type="text" 
                className="bg-[#FFFFFF] h-[56px] md:flex-1 w-full rounded-[4px] px-[20px] py-[18px] font-[500] text-[16px] bg-[#A8A8A8]"
                placeholder="Nhập từ khóa..." 
              />
              <button className="md:w-[240px] w-full h-[56px] rounded-[4px] bg-[#0088FF] flex items-center gap-x-[10px] font-[500] text-[16px] text-[#FFFFFF] justify-center cursor-pointer">
                <IoIosSearch className="text-[26px]" />Tìm Kiếm
              </button>
            </form>
          </div>
          <div className="flex flex-wrap gap-x-[12px] gap-y-[15px] items-center">
            <div className="font-[500] text-[16px] text-[#DEDEDE]">
              Mọi người đang tìm kiếm:
            </div>
            <div className="flex flex-wrap gap-[10px]">
              <Link href={"#"} className="w-[110px] h-[36px] rounded-[20px] border-[1px] border-[#414042] bg-[#121212] flex items-center justify-center font-[500] text-[16px] text-[#DEDEDE] hover:text-[#FFFFFF] hover:bg-[#414042]">
                ReactJS
              </Link>
              <Link href={"#"} className="w-[110px] h-[36px] rounded-[20px] border-[1px] border-[#414042] bg-[#121212] flex items-center justify-center font-[500] text-[16px] text-[#DEDEDE] hover:text-[#FFFFFF] hover:bg-[#414042]">
                NodeJS
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* End Section 1 */}
    </>
  );
}
