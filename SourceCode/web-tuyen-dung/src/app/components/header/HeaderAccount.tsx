import Link from "next/link"

export const HeaderACCount = () => {
  return (
    <>
      <div className="font-[600] sm:text-[16px] text-[12px] text-white inline-flex gap-x-[5px] relative group/sub-1">
        {/* Chưa đăng nhập */}
        {/* <Link href="#" className="">
          Đăng nhập
        </Link>
        <span className="">/</span>
        <Link href="#" className="">
          Đăng Ký
        </Link> */}

        {/* đã đăng nhập */}
        <Link href="#">
          Menu...
        </Link>
        <ul className="bg-[#000065] lg:absolute relative lg:top-[100%] top-[0] right-0 left-0 lg:w-[200px] w-full rounded-[4px] hidden group-hover/sub-1:block">
          <li className="hover:bg-[#000096] flex items-center justify-between py-[10px] px-[16px] rounded-[4px] group/sub-2 flex-wrap">
            <Link href="/company/profile" className="font-[600] text-[16px] text-white">
              Thông tin công ty
            </Link>
          </li>
          <li className="hover:bg-[#000096] flex items-center justify-between py-[10px] px-[16px] rounded-[4px] group/sub-2 flex-wrap">
            <Link href="/company/job/list" className="font-[600] text-[16px] text-white">
              Quản lý công việc
            </Link>
          </li>
          <li className="hover:bg-[#000096] flex items-center justify-between py-[10px] px-[16px] rounded-[4px] group/sub-2 flex-wrap">
            <Link href="/company/cv/list" className="font-[600] text-[16px] text-white">
              Quản lý CV
            </Link>
          </li>
          <li className="hover:bg-[#000096] flex items-center justify-between py-[10px] px-[16px] rounded-[4px] group/sub-2 flex-wrap">
            <Link href="/" className="font-[600] text-[16px] text-white">
              Đăng xuất
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}