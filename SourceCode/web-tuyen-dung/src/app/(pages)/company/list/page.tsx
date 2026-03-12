import { CardCompanyItem } from "@/app/components/card/CardCompanyItem"
import { Pagination } from "@/app/components/pagination/Pagination"
import { Title } from "@/app/components/title/Title"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Danh sách công ty",
  description: "Mô tả trang danh sách công ty...",
}

export default function CompanyListPage() {
  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          <Title text="Danh sách công ty" />
          {/* Wrap */}
          <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-x-[20px] gap-x-[10px] gap-y-[20px]">
            {/* Items */}
            <CardCompanyItem />
            <CardCompanyItem />
            <CardCompanyItem />
            <CardCompanyItem />
            <CardCompanyItem />
            <CardCompanyItem />

          </div>
          {/* Phân trang */}
          <Pagination />

        </div>
      </div>
    </>
  )
}