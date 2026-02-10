
import Link from "next/link";
import { FaUserTie } from "react-icons/fa6";
import { Section1 } from "./components/section/Section1";
import { Title } from "./components/title/Title";
import { CardCompanyItem } from "./components/card/CardCompanyItem";

export default function Home() {
  return (
   <>
    {/* Section 1 */}
      <Section1 />
    {/* End Section 1 */}
    {/* Section 2 */}
    <div className="py-[60px]">
      <div className="container">
        <Title text="Nhà tuyển dụng hàng đầu"/>
        {/* Wrap */}
        <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
          {/* Items */}
          <CardCompanyItem />
          <Link 
            href="/job/detail/1234345546" 
            className="rounded-[8px] border border-[#DEDEDE] relative"
            style={{
              background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)"
            }}
          >
            <img 
              src="/assets/images/Frame.svg" 
              alt="" 
              className="absolute top-0 left-0 w-full h-auto" 
            />
            <div className="relative">
              <div 
                className="sm:w-[160px] w-[125px] aspect-square sm:mt-[32px] mt-[20px] sm:mb-[24px] mb-[16px] mx-auto rounded-[8px] bg-white"
                style={{
                  boxShadow: "0px 4px 24px 0px #0000001F"
                }}
              >
                <img 
                  src="/assets/images/logoLG.png" 
                  alt="" 
                  className="w-full h-full object-contain p-[10px]" 
                />
              </div>
              <h3 className="font-[700] sm:text-[18px] text-[14px] text-[#121212] sm:mb-[24px] mb-[16px] mx-[16px] text-center line-clamp-2 sm:min-h-[54px] min-h-[42px]">
                LG Electronics Development Vietnam (LGEDV)
              </h3>
              <div className="bg-[#F7F7F7] py-[12px] px-[16px] flex flex-wrap items-center sm:justify-between justify-center gap-[12px] rounded-b-[8px] border-b border-[#DEDEDE]">
                <div className="font-[400] text-[14px] text-[#414042]">
                  Ha Noi
                </div>
                <div className="inline-flex items-center gap-[6px] font-[400] text-[14px] text-[#121212]">
                  <FaUserTie className="text-[16px] text-[#000096]"/> 5 Việc làm
                </div>
              </div>
            </div>
          </Link>
          <Link 
            href="/job/detail/1234345546" 
            className="rounded-[8px] border border-[#DEDEDE] relative"
            style={{
              background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)"
            }}
          >
            <img 
              src="/assets/images/Frame.svg" 
              alt="" 
              className="absolute top-0 left-0 w-full h-auto" 
            />
            <div className="relative">
              <div 
                className="sm:w-[160px] w-[125px] aspect-square sm:mt-[32px] mt-[20px] sm:mb-[24px] mb-[16px] mx-auto rounded-[8px] bg-white"
                style={{
                  boxShadow: "0px 4px 24px 0px #0000001F"
                }}
              >
                <img 
                  src="/assets/images/logoMB.png" 
                  alt="" 
                  className="w-full h-full object-contain p-[10px]" 
                />
              </div>
              <h3 className="font-[700] sm:text-[18px] text-[14px] text-[#121212] sm:mb-[24px] mb-[16px] mx-[16px] text-center line-clamp-2 sm:min-h-[54px] min-h-[42px]">
                MB Bank
              </h3>
              <div className="bg-[#F7F7F7] py-[12px] px-[16px] flex flex-wrap items-center sm:justify-between justify-center gap-[12px] rounded-b-[8px] border-b border-[#DEDEDE]">
                <div className="font-[400] text-[14px] text-[#414042]">
                  Ha Noi
                </div>
                <div className="inline-flex items-center gap-[6px] font-[400] text-[14px] text-[#121212]">
                  <FaUserTie className="text-[16px] text-[#000096]"/> 5 Việc làm
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
    {/* End Section 2 */}
   </>
  );
}
