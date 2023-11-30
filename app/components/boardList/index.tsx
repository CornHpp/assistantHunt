"use client"
import React, { useCallback, useEffect, useState } from "react"
import BoardItem from "@/app/components/boardItem"
import styles from "./index.module.scss"

interface boardListProps {
  toRankView: () => void
}

const BoardList: React.FC<boardListProps> = (props) => {
  const { toRankView } = props

  return (
    <div className={styles.boardStyleCss}>
      <div className={styles.boardtitle}>
        <h2>Leaderboard</h2>
        <div className="cursor-pointer" onClick={toRankView}>
          View All
        </div>
      </div>

      <BoardItem></BoardItem>
      <BoardItem></BoardItem>
      <BoardItem></BoardItem>
      <BoardItem></BoardItem>
      <BoardItem></BoardItem>
    </div>
  )
}

export default React.memo(BoardList)
