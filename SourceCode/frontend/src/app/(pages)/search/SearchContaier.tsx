// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client"
// import { CardJobItem } from "@/app/components/card/CardJobItem"
// import { positionList, workingFormList } from "@/config/variable";
// import { useRouter, useSearchParams } from "next/navigation"
// import { useEffect, useState } from "react";

// export const SearchContainer = () => {
//   const [page, setPage] = useState(1);
//   const [totalPage, setTotalPage] = useState(0);
//   const [totalRecord, setTotalRecord] = useState(0);
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const language = searchParams.get("language") || "";
//   const city = searchParams.get("city") || "";
//   const company = searchParams.get("company") || "";
//   const keyword = searchParams.get("keyword") || "";
//   const position = searchParams.get("position") || "";
//   const workingForm = searchParams.get("workingForm") || "";
//   const [jobList, setJobList] = useState<any[]>([]);

//   useEffect(() => {
//     fetch(`${process.env.NEXT_PUBLIC_API_URL}/search?language=${language}&city=${city}&company=${company}&keyword=${keyword}&position=${position}&workingForm=${workingForm}&page=${page}`, {
//       method: "GET"
//     })
//       .then(res => res.json())
//       .then(data => {
//         if(data.code == "success") {
//           setJobList(data.jobs);
//           setTotalPage(data.totalPage);
//           setTotalRecord(data.totalRecord);
//         }
//       })
//   }, [language, city, company, keyword, position, workingForm, page]);

//   const handleFilterStatus = (event: any) => {
//     const value = event.target.value;
//     const params = new URLSearchParams(searchParams.toString());
//     if(value) {
//       params.set("position", value);
//     } else {
//       params.delete("position");
//     }
//     router.push(`?${params.toString()}`);
//   }

//   const handleFilterWorkingForm = (event: any) => {
//     const value = event.target.value;
//     const params = new URLSearchParams(searchParams.toString());
//     if(value) {
//       params.set("workingForm", value);
//     } else {
//       params.delete("workingForm");
//     }
//     router.push(`?${params.toString()}`);
//   }

//   const handlePagination = (event: any) => {
//     const value = event.target.value;
//     setPage(parseInt(value));
//   }

//   return (
//     <>
//       <h2 className="font-[700] text-[28px] text-[#121212] mb-[30px]">
//         {totalRecord} việc làm <span className="text-[#0088FF]">{language} {city} {company} {keyword}</span>
//       </h2>
    
//       <div 
//         className="bg-white rounded-[8px] py-[10px] px-[20px] mb-[30px] flex flex-wrap gap-[12px]"
//         style={{
//           boxShadow: "0px 4px 20px 0px #0000000F"
//         }}
//       >
//         <select 
//           onChange={handleFilterStatus}
//           className="border border-[#DEDEDE] rounded-[20px] h-[36px] px-[18px] font-[400] text-[16px] text-[#414042]"
//           defaultValue={position}
//         >
//           <option value="">Cấp bậc</option>
//           {positionList.map(item => (
//             <option key={item.value} value={item.value}>
//               {item.label}
//             </option>
//           ))}
//         </select>
//         <select 
//           onChange={handleFilterWorkingForm}
//           className="border border-[#DEDEDE] rounded-[20px] h-[36px] px-[18px] font-[400] text-[16px] text-[#414042]"
//           defaultValue={workingForm}
//         >
//           <option value="">Hình thức làm việc</option>
//           {workingFormList.map(item => (
//             <option key={item.value} value={item.value}>
//               {item.label}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
//         {jobList.map(item => (
//           <CardJobItem key={item.id} item={item} />
//         ))}
//       </div>

//       <div className="mt-[30px]">
//         <select 
//           name="" 
//           className="border border-[#DEDEDE] rounded-[8px] py-[12px] px-[18px] font-[400] text-[16px] text-[#414042]"
//           onChange={handlePagination}
//         >
//           {Array(totalPage).fill("").map((item, index) => (
//             <option key={index} value={index+1}>
//               Trang {index+1}
//             </option>
//           ))}
//         </select>
//       </div>
//     </>
//   )
// }
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { CardJobItem } from "@/app/components/card/CardJobItem"
import { positionList, workingFormList } from "@/config/variable";
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

export const SearchContainer = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [totalRecord, setTotalRecord] = useState(0);
  const [jobList, setJobList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const router = useRouter();

  const language = searchParams.get("language") || "";
  const city = searchParams.get("city") || "";
  const company = searchParams.get("company") || "";
  const keyword = searchParams.get("keyword") || "";
  const position = searchParams.get("position") || "";
  const workingForm = searchParams.get("workingForm") || "";

  useEffect(() => {
    const pageFromUrl = parseInt(searchParams.get("page") || "1");
    setPage(pageFromUrl > 0 ? pageFromUrl : 1);
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (language) params.set("language", language);
    if (city) params.set("city", city);
    if (company) params.set("company", company);
    if (keyword) params.set("keyword", keyword);
    if (position) params.set("position", position);
    if (workingForm) params.set("workingForm", workingForm);
    params.set("page", String(page));

    setLoading(true);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/search?${params.toString()}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        if(data.code == "success") {
          setJobList(data.jobs);
          setTotalPage(data.totalPage);
          setTotalRecord(data.totalRecord);
        } else {
          setJobList([]);
          setTotalPage(0);
          setTotalRecord(0);
        }
      })
      .catch(() => {
        setJobList([]);
        setTotalPage(0);
        setTotalRecord(0);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [language, city, company, keyword, position, workingForm, page]);

  const updateSearchParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if(value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    params.delete("page");
    router.push(`/search?${params.toString()}`);
  }

  const handleFilterStatus = (event: any) => {
    updateSearchParam("position", event.target.value);
  }

  const handleFilterWorkingForm = (event: any) => {
    updateSearchParam("workingForm", event.target.value);
  }

  const handlePagination = (event: any) => {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", value);
    setPage(parseInt(value));
    router.push(`/search?${params.toString()}`);
  }

  const keywordDisplay = [language, city, company, keyword].filter(Boolean).join(" ");

  return (
    <>
      <h2 className="font-[700] text-[28px] text-[#121212] mb-[30px]">
        {loading ? "Đang tìm kiếm..." : `${totalRecord} việc làm`} {keywordDisplay && <span className="text-[#0088FF]">{keywordDisplay}</span>}
      </h2>

      <div 
        className="bg-white rounded-[8px] py-[10px] px-[20px] mb-[30px] flex flex-wrap gap-[12px]"
        style={{
          boxShadow: "0px 4px 20px 0px #0000000F"
        }}
      >
        <select 
          onChange={handleFilterStatus}
          className="border border-[#DEDEDE] rounded-[20px] h-[36px] px-[18px] font-[400] text-[16px] text-[#414042]"
          value={position}
        >
          <option value="">Cấp bậc</option>
          {positionList.map(item => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <select 
          onChange={handleFilterWorkingForm}
          className="border border-[#DEDEDE] rounded-[20px] h-[36px] px-[18px] font-[400] text-[16px] text-[#414042]"
          value={workingForm}
        >
          <option value="">Hình thức làm việc</option>
          {workingFormList.map(item => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {loading && (
        <div className="font-[500] text-[16px] text-[#414042]">
          Đang tải dữ liệu...
        </div>
      )}

      {!loading && jobList.length == 0 && (
        <div className="bg-white rounded-[8px] border border-[#DEDEDE] py-[30px] px-[20px] text-center font-[500] text-[16px] text-[#414042]">
          Không tìm thấy việc làm phù hợp.
        </div>
      )}

      {!loading && jobList.length > 0 && (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
          {jobList.map(item => (
            <CardJobItem key={item.id} item={item} />
          ))}
        </div>
      )}

      {!loading && totalPage > 1 && (
        <div className="mt-[30px]">
          <select 
            name="" 
            className="border border-[#DEDEDE] rounded-[8px] py-[12px] px-[18px] font-[400] text-[16px] text-[#414042]"
            onChange={handlePagination}
            value={page}
          >
            {Array(totalPage).fill("").map((item, index) => (
              <option key={index} value={index+1}>
                Trang {index+1}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  )
}