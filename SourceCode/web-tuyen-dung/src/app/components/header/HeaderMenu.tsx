import Link from "next/link";
import { FaAngleDown, FaAngleRight} from "react-icons/fa6";
export const HeaderMenu = (props:{
  showMenu: boolean
}) => {
  const { showMenu } = props;
  
  const menuList = [
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
              link: "/search"
            },
            {
              name: "NodeJS",
              link: "/search"
            },
            {
              name: "Javascript",
              link: "/search"
            },
            {
              name: "HTML5",
              link: "/search"
            },
            {
              name: "CSS3",
              link: "/search"
            }
          ]
        },
        {
          name: "Việc làm IT theo công ty",
          link: "/search",
        },
        {
          name: "Việc làm IT theo thành phố",
          link: "/search",
        }
      ]
    },
    {
      name: "Top Công Ty IT",
      link: "#",
      children: [
        {
          name: "FPT Software",
          link: "/company/detail/1234",
        },
        {
          name: "Techcombank",
          link: "/company/detail/1234",
        },
        {
          name: "MB Bank",
          link: "/company/detail/1234",
        }
      ]
    },
    {
      name: "Nhà Tuyển Dụng",
      link: "#",
      children: [
        {
          name: "Đăng nhập",
          link: "/company/login",
        },
        {
          name: "Đăng ký",
          link: "/company/register",
        }
      ]
    },
    {
      name: "Ứng Viên",
      link: "#",
      children: [
        {
          name: "Đăng nhập",
          link: "/user/login",
        },
        {
          name: "Đăng ký",
          link: "/user/register",
        }
      ]
    }

  ];
  return (
    <>
      <nav className={
        "lg:block " + 
        (showMenu ?
          "fixed top-0 left-0 w-[280px] h-[100vh] bg-blue-800" 
          : 
          "hidden ")
      }>
        <ul className="flex flex-wrap gap-x-[30px]">
          {menuList.map((menu, index) => (
            <li
              key={index}
              className="inline-flex lg:w-auto w-full lg:justify-start justify-between items-center gap-x-[8px] relative group/sub-1 lg:p-0 p-[10px] flex-wrap">
              <Link href={menu.link} className="font-[600] text-[16px] text-white">
                {menu.name}
              </Link>
              {menu.children && (
                <>
                  <FaAngleDown className="text-[16px] text-white" />
                  <ul className="bg-[#000065] lg:absolute relative lg:top-[100%] top-[0] left-0 lg:w-[280px] w-full rounded-[4px] hidden group-hover/sub-1:block">
                    {menu.children.map((menuSub1, indexSub1) => (
                      <li key={indexSub1} className="hover:bg-[#000096] flex items-center justify-between py-[10px] px-[16px] rounded-[4px] group/sub-2 flex-wrap">
                        <Link href={menuSub1.link} className="font-[600] text-[16px] text-white">
                          {menuSub1.name}
                        </Link>
                        {menuSub1.children && (
                          <>
                            <FaAngleRight className="text-[16px] text-white" />
                            <ul className="bg-[#000065] lg:absolute relative lg:left-[100%] left-0 top-0 lg:w-[280px] w-full rounded-[4px] hidden group-hover/sub-2:block">
                              {menuSub1.children.map((menuSub2, indexSub2) => (
                                <li key={indexSub2} className="hover:bg-[#000096] flex items-center justify-between py-[10px] px-[16px] rounded-[4px]">
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