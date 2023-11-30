"use client"

import { Gpts } from "@/app/types/gpts"
import BoardList from "@/app/components/boardList"
import styles from "./index.module.scss"
import { GoArrowLeft } from "react-icons/go"

import BoardItem from "@/app/components/boardItem"
import React from "react"

interface RankListProps {
  backAllList: () => void
}

const RankList: React.FC<RankListProps> = (props) => {
  const { backAllList } = props
  return (
    <div className={styles.homeBody}>
      <div className={styles.boardListBox}>
        <div className={styles.gripFlex}>
          <div onClick={() => {}} className="w-full text-2xl mb-4">
            <GoArrowLeft onClick={backAllList} />
          </div>
          <div className="w-full text-2xl font-bold">Top GPTs</div>
          <BoardItem></BoardItem>
          <BoardItem></BoardItem>
          <BoardItem></BoardItem>
          <BoardItem></BoardItem>
        </div>
      </div>
    </div>
  )
}
export default React.memo(RankList)
