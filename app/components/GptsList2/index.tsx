"use client"

import { Gpts } from "@/app/types/gpts"
import AllList from "@/app/components/GptsList2/allList"
import RankList from "@/app/components/GptsList2/RankList"
import { useState } from "react"

interface Props {
  gpts: Gpts[]
  loading: boolean
}

export default ({ gpts, loading }: Props) => {
  const [isAllList, setIsAllList] = useState(true)
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl  py-4 md:px-10 md:py-4 lg:py-4">
        {!loading ? (
          isAllList ? (
            <AllList
              toRankView={() => {
                setIsAllList(false)
              }}
            />
          ) : (
            <RankList
              backAllList={() => {
                setIsAllList(true)
              }}
            />
          )
        ) : (
          <div className="mx-auto text-center">Loading data...</div>
        )}
      </div>
    </section>
  )
}
