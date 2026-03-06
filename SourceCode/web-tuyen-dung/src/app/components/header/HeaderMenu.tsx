import Link from "next/link"
import { FaAngleDown, FaAngleRight } from "react-icons/fa6"
interface MenuItem {
  name: string;
  link: string;
  children?: MenuItem[];
}
export const HeaderMenu = () => {
  const menuList : MenuItem [] = [
    {
      name: "Việc Làm IT",
      link: "#",
      children: [
        {
          name: "Việc làm IT theo kỹ năng",
          link: "#",
          children: [
            {
              name: "ReactJS",
              link: "#",

            },
            {
              name: "NodeJS",
              link: "#"
            },
            {
              name: "Javascript",
              link: "#"
            },
            {
              name: "HTML5",
              link: "#"
            },
            {
              name: "CSS3",
              link: "#"
            }
          ]
        },
        {
          name: "Việc làm IT theo công ty",
          link: "#"
        },
        {
          name: "Việc làm IT theo thành phố",
          link: "#"
        }
        
      ]
    },
    {
      name: "Top Công Ty IT",
      link: "#",
      children: [
        {
          name: "FPT Software",
          link: "#"
        },
        {
          name: "Techcombank",
          link: "#"
        },
        {
          name: "MB Bank",
          link: "#"
        }
      ]
    },
    {
      name: "Nhà Tuyển Dụng",
      link: "#",
      children: [
        {
          name: "Đăng Nhập",
          link: "#"
        },
        {
          name: "Đăng Ký",
          link: "#"
        }
      ]
    }
  ]
  return (
    <>
      <nav className=" lg:block hidden">
        <ul className="flex gap-x-[30px]">
          {menuList.map((menu, index) => (
            <li
              key={index}
              className="inline-flex gap-x-[8px] items-center relative group/sub-1"
            >
              <Link href={menu.link} className="font-[600] text-[16px] text-white">
                {menu.name}
              </Link>
              {menu.children && (
                <>
                  <FaAngleDown className="text-[16px] text-white" />
                  <ul className="w-[280px] absolute top-[100%] left-0 w-[280px] rounded-[4px] bg-[#000065] hidden group-hover/sub-1:block">
                    {menu.children.map((menuSub1, indexSub1) => (
                      <li
                        key={indexSub1}
                        className="flex items-center justify-between py-[10px] px-[16px] rounded-[4px] hover:bg-[#000096] relative group/sub-2"
                      >
                        <Link href={menuSub1.link} className="font-[600] text-[16px] text-white">
                          {menuSub1.name}
                        </Link>
                        {menuSub1.children && (
                          <>
                            <FaAngleRight className="text-[16px] text-white" />
                            <ul className="w-[280px] rounded-[4px] bg-[#000065] hidden group-hover/sub-2:block absolute top-0 left-[100%]">
                              {menuSub1.children.map((menuSub2, indexSub2) => (
                                <li
                                  key={indexSub2}
                                  className="flex items-center justify-between py-[10px] px-[16px] rounded-[4px] hover:bg-[#000096]"
                                >
                                  <Link href={menuSub2.link} className="font-[600] text-[16px] text-white">
                                    {menuSub2.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}