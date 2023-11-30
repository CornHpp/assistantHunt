"use client"

import { Gpts } from "@/app/types/gpts"
import BoardList from "@/app/components/boardList"
import styles from "./index.module.scss"
import React from "react"

interface AllListProps {
  toRankView: () => void
}

const AllList: React.FC<AllListProps> = (props) => {
  const { toRankView } = props
  return (
    <div className={styles.homeBody}>
      <div className={styles.boardListBox}>
        <div className={styles.gripFlex}>
          <BoardList toRankView={toRankView}></BoardList>
          <BoardList toRankView={toRankView}></BoardList>
          <BoardList toRankView={toRankView}></BoardList>
          <BoardList toRankView={toRankView}></BoardList>
          <BoardList toRankView={toRankView}></BoardList>
          <BoardList toRankView={toRankView}></BoardList>
        </div>
      </div>
    </div>
  )
}

export default React.memo(AllList)
