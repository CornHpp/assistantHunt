"use client"
import React, { useCallback, useEffect, useState } from "react"
import styles from "./index.module.scss"
import gameIcon from "./gameIcon.jpg"
import Image from "next/image"
import { EyeOutline, TagOutline } from "antd-mobile-icons"

const BoardItem: React.FC = (props) => {
  const [isMobile, setIsMobile] = useState(false)
  React.useEffect(() => {
    const setRem = () => {
      const actualWidth =
        document.documentElement.clientWidth || document.body.clientWidth // 实际宽度
      if (actualWidth > 431) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    window.addEventListener("resize", setRem)
    return () => {
      window.removeEventListener("resize", setRem)
    }
  }, [])

  return !isMobile ? (
    <PcBOardItem></PcBOardItem>
  ) : (
    <MobileBoardItem></MobileBoardItem>
  )
}

const PcBOardItem = () => {
  return (
    <div className={styles.boardItem}>
      <Image
        className="rounded-xl"
        src={gameIcon}
        alt=""
        width={64}
        height={64}
      ></Image>
      <div className="mx-3">1</div>

      <div className={styles.contentText}>
        <div className={styles.contentTitle}>Mad Libs Storyteller</div>
        <div className={styles.contentDetail}>
          Create wacky stories by providing your own words and letting the Mad
          Libs Storyteller fill in the blanks, with a fun illustration at the
          end!
        </div>
        <div className={styles.feature}>
          <div>by ChatGPT</div>
          <div className={`${styles.eyeoutline} ${styles.featureCenter}`}>
            <TagOutline />5
          </div>
          <div className={styles.eyeoutline}>
            <EyeOutline />
            1.7M
          </div>
        </div>
      </div>
      <div className={styles.chatButton}>Chat</div>
    </div>
  )
}

const MobileBoardItem = () => {
  return (
    <div className={styles.mobileBox}>
      <div className="flex item-center justify-between  mt-4">
        <div className="flex">
          <Image
            className="rounded-xl"
            src={gameIcon}
            alt=""
            width={64}
            height={64}
          ></Image>
          <div className="mx-3">1</div>
        </div>

        <div className={styles.chatButton}>Chat</div>
      </div>

      <div className={`${styles.contentText} mt-2`}>
        <div className={styles.contentTitle}>Mad Libs Storyteller</div>
        <div className={`${styles.contentDetail} text-base`}>
          Create wacky stories by providing your own words and letting the Mad
          Libs Storyteller fill in the blanks, with a fun illustration at the
          end!
        </div>
        <div className={styles.feature}>
          <div>by ChatGPT</div>
          <div className={`${styles.eyeoutline} ${styles.featureCenter}`}>
            <TagOutline />5
          </div>
          <div className={styles.eyeoutline}>
            <EyeOutline />
            1.7M
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(BoardItem)
