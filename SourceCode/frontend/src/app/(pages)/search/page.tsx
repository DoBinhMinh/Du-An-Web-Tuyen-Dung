import { Suspense } from "react"
import { Metadata } from "next"
import { SearchContainer } from "./SearchContaier"

export const metadata: Metadata = {
  title: "Kết quả tìm kiếm",
  description: "Kết quả tìm kiếm công việc...",
}

export default function SearchPage() {
  return (
    <>
      {/* Kết quả tìm kiếm */}
      <div className="py-[60px]">
        <div className="container mx-auto px-[16px]">
          <Suspense
            fallback={
              <div className="text-center text-[16px] text-[#414042]">
                Đang tải kết quả tìm kiếm...
              </div>
            }
          >
            <SearchContainer />
          </Suspense>
        </div>
      </div>
      {/* Hết Kết quả tìm kiếm */}
    </>
  )
}