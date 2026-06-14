/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { cvStatusList, positionList, workingFormList } from "@/config/variable";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { FaBriefcase, FaCircleCheck, FaUserTie } from "react-icons/fa6";
import { Toaster, toast } from "sonner";

const LIMIT = 6;

export const CVList = () => {
  const [cvList, setCVList] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(cvList.length / LIMIT);
  const paginated = cvList.slice((page - 1) * LIMIT, page * LIMIT);

  const fetchCVList = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/cv/list`, {
      method: "GET",
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => {
        if (data.code === "success") {
          setCVList(data.cvs);
        }
      });
  };

  useEffect(() => {
    fetchCVList();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc muốn xóa CV này không?")) return;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/cv/delete/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    const data = await res.json();

    if (data.code === "success") {
      toast.success(data.message);
      fetchCVList();
    } else {
      toast.error(data.message);
    }
  };

  return (
    <>
      <Toaster richColors position="top-right" />

      {cvList.length === 0 && (
        <p className="text-center text-[#888] font-[400] text-[16px] py-[40px]">
          Bạn chưa gửi CV nào.
        </p>
      )}

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
        {paginated.map((item) => {
          const position = positionList.find(pos => pos.value === item.jobPosition);
          const workingForm = workingFormList.find(work => work.value === item.jobWorkingForm);
          const status = cvStatusList.find(st => st.value === item.status);

          return (
            <div
              key={item.id}
              className="border border-[#DEDEDE] rounded-[8px] flex flex-col relative truncate"
              style={{
                background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)"
              }}
            >
              <img
                src="/assets/images/card-bg.svg"
                alt=""
                className="absolute top-[0px] left-[0px] w-[100%] h-auto"
              />
              <h3 className="mt-[20px] mx-[16px] font-[700] text-[18px] text-[#121212] text-center flex-1 whitespace-normal line-clamp-2">
                {item.jobTitle}
              </h3>
              <div className="mt-[12px] text-center font-[400] text-[14px] text-black">
                Công ty: <span className="font-[700]">{item.companyName}</span>
              </div>
              <div className="mt-[6px] text-center font-[600] text-[16px] text-[#0088FF]">
                {item.jobSalaryMin?.toLocaleString("vi-VN")}$ - {item.jobSalaryMax?.toLocaleString("vi-VN")}$
              </div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <FaUserTie className="text-[16px]" /> {position?.label}
              </div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <FaBriefcase className="text-[16px]" /> {workingForm?.label}
              </div>
              <div
                className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px]"
                style={{ color: status?.color }}
              >
                <FaCircleCheck className="text-[16px]" /> {status?.label}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-[8px] mt-[12px] mb-[20px] mx-[10px]">
                {item.fileCV && (
                  <a
                    href={item.fileCV}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0088FF] rounded-[4px] font-[400] text-[14px] text-white inline-block py-[8px] px-[20px]"
                  >
                    Xem CV
                  </a>
                )}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-[#FF0000] rounded-[4px] font-[400] text-[14px] text-white inline-block py-[8px] px-[20px] cursor-pointer"
                >
                  Xóa
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {totalPage > 1 && (
        <div className="mt-[30px]">
          <select
            className="border border-[#DEDEDE] rounded-[8px] py-[12px] px-[18px] font-[400] text-[16px] text-[#414042]"
            value={page}
            onChange={(e) => setPage(parseInt(e.target.value))}
          >
            {Array(totalPage).fill("").map((_, index) => (
              <option key={index} value={index + 1}>
                Trang {index + 1}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};