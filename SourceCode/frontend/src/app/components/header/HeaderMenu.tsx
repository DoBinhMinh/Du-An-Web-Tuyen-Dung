/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { useEffect, useState } from "react";

interface MenuSub2 {
  name: string;
  link: string;
}

interface MenuSub1 {
  name: string;
  link: string;
  children?: MenuSub2[];
}

interface MenuItem {
  name: string;
  link: string;
  isLogin?: boolean;
  children?: MenuSub1[];
}

export const HeaderMenu = (
  props: {
    showMenu: boolean
  }
) => {
  const { showMenu } = props;
  const { isLogin } = useAuth();
  const [topCompanies, setTopCompanies] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/list?limitItems=5`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        if (data.code === "success") {
          setTopCompanies(data.companyList);
        }
      });
  }, []);

  const menuList: MenuItem[] = [
    {
      name: "Việc Làm IT",
      link: "#",
      children: [
        {
          name: "Việc làm IT theo kỹ năng",
          link: "#",
          children: [
            { name: "HTML5", link: "/search?language=HTML5" },
            { name: "CSS3", link: "/search?language=CSS3" },
            { name: "Javascript", link: "/search?language=Javascript" },
            { name: "ReactJS", link: "/search?language=ReactJS" },
            { name: "NodeJS", link: "/search?language=NodeJS" }
          ]
        },
        {
          name: "Việc làm IT theo thành phố",
          link: "#",
          children: [
            { name: "Hà Nội", link: "/search?city=Hà Nội" },
            { name: "Đà Nẵng", link: "/search?city=Đà Nẵng" },
            { name: "Hồ Chí Minh", link: "/search?city=Hồ Chí Minh" },
          ]
        }
      ]
    },
    {
      name: "Nhà Tuyển Dụng",
      link: "#",
      isLogin: false,
      children: [
        { name: "Đăng Nhập", link: "/company/login" },
        { name: "Đăng Ký", link: "/company/register" }
      ]
    }
  ];

  return (
    <>
      <nav className={"lg:block " + (showMenu ? "fixed top-0 left-0 w-[280px] h-[100vh] z-[999] bg-[#000056]" : "hidden")}>
        <ul className="flex gap-x-[30px] flex-wrap">

          {menuList.map((menu, index) => (
            <li
              key={index}
              className={
                "inline-flex lg:w-auto w-full lg:justify-start justify-between p-[10px] items-center gap-x-[8px] relative group/sub-1 flex-wrap " +
                (menu.isLogin !== undefined && menu.isLogin !== isLogin ? "hidden" : "")
              }
            >
              <Link href={menu.link} className="text-white font-[600] text-[16px]">
                {menu.name}
              </Link>
              {menu.children && <FaAngleDown className="text-white text-[16px]" />}
              {menu.children && (
                <ul className="lg:absolute relative lg:top-[100%] top-0 left-[0px] lg:w-[280px] w-full bg-[#000065] hidden group-hover/sub-1:block z-[999]">
                  {menu.children.map((menuSub1: MenuSub1, indexSub1: number) => (
                    <li
                      key={indexSub1}
                      className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2 flex-wrap"
                    >
                      <Link href={menuSub1.link} className="text-white font-[600] text-[16px]">
                        {menuSub1.name}
                      </Link>
                      {menuSub1.children && <FaAngleRight className="text-white text-[16px]" />}
                      {menuSub1.children && (
                        <ul className="lg:absolute relative top-[0px] lg:left-[100%] left-0 lg:w-[280px] w-full bg-[#000065] hidden group-hover/sub-2:block z-[999]">
                          {menuSub1.children.map((menuSub2: MenuSub2, indexSub2: number) => (
                            <li
                              key={indexSub2}
                              className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096]"
                            >
                              <Link href={menuSub2.link} className="text-white font-[600] text-[16px]">
                                {menuSub2.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Menu Top Công Ty IT — dynamic từ API */}
          <li className="inline-flex lg:w-auto w-full lg:justify-start justify-between p-[10px] items-center gap-x-[8px] relative group/top-company flex-wrap">
            <Link href="/company/list" className="text-white font-[600] text-[16px]">
              Top Công Ty IT
            </Link>
            <FaAngleDown className="text-white text-[16px]" />
            <ul className="lg:absolute relative lg:top-[100%] top-0 left-[0px] lg:w-[280px] w-full bg-[#000065] hidden group-hover/top-company:block z-[999]">
              {topCompanies.length === 0 && (
                <li className="py-[10px] px-[16px] text-white font-[400] text-[14px] opacity-60">
                  Đang tải...
                </li>
              )}
              {topCompanies.map((company: any, index: number) => (
                <li
                  key={index}
                  className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096]"
                >
                  <Link
                    href={`/search?company=${encodeURIComponent(company.companyName)}`}
                    className="text-white font-[600] text-[16px]"
                  >
                    {company.companyName}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

        </ul>
      </nav>
    </>
  )
}