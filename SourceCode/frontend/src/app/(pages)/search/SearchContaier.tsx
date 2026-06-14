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
  const searchParams = useSearchParams();
  const router = useRouter();
  const language = searchParams.get("language") || "";
  const city = searchParams.get("city") || "";
  const company = searchParams.get("company") || "";
  const keyword = searchParams.get("keyword") || "";
  const position = searchParams.get("position") || "";
  const workingForm = searchParams.get("workingForm") || "";
  const [jobList, setJobList] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/search?language=${language}&city=${city}&company=${company}&keyword=${keyword}&position=${position}&workingForm=${workingForm}&page=${page}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        if(data.code == "success") {
          setJobList(data.jobs);
          setTotalPage(data.totalPage);
          setTotalRecord(data.totalRecord);
        }
      })
  }, [language, city, company, keyword, position, workingForm, page]);

  const handleFilterStatus = (event: any) => {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if(value) {
      params.set("position", value);
    } else {
      params.delete("position");
    }
    router.push(`?${params.toString()}`);
  }

  const handleFilterWorkingForm = (event: any) => {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if(value) {
      params.set("workingForm", value);
    } else {
      params.delete("workingForm");
    }
    router.push(`?${params.toString()}`);
  }

  const handlePagination = (event: any) => {
    const value = event.target.value;
    setPage(parseInt(value));
  }

  return (
    <>
      <h2 className="font-[700] text-[28px] text-[#121212] mb-[30px]">
        {totalRecord} việc làm <span className="text-[#0088FF]">{language} {city} {company} {keyword}</span>
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
          defaultValue={position}
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
          defaultValue={workingForm}
        >
          <option value="">Hình thức làm việc</option>
          {workingFormList.map(item => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
        {jobList.map(item => (
          <CardJobItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-[30px]">
        <select 
          name="" 
          className="border border-[#DEDEDE] rounded-[8px] py-[12px] px-[18px] font-[400] text-[16px] text-[#414042]"
          onChange={handlePagination}
        >
          {Array(totalPage).fill("").map((item, index) => (
            <option key={index} value={index+1}>
              Trang {index+1}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}