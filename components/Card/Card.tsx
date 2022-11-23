// Components==============
import React from "react";
import styles from "./Card.module.scss";
import { getTrimmedString } from "../../utils/getTrimmedString";
// =========================

type Props = {
  newsData: NewsEntityModify;
  setClickedItem: React.Dispatch<
    React.SetStateAction<NewsEntityModify | undefined>
  >;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Card({ newsData, setClickedItem, setClicked }: Props) {
  const news = getTrimmedString(newsData.textContent[0].content ?? "", 200);
  const openPopup = () => {
    setClicked(true);
    setClickedItem(newsData);
  };
  return (
    <div className={styles.card}>
      <div className={styles.card__inner}>
        <h2 className={styles.card__title}>{newsData.title}</h2>
        <p className={styles.card__date}>
          <span>{newsData.created_at}</span>
        </p>
        <div className={styles.card__news}>
          {newsData.imgContent ? (
            <div className={styles["card__news-img"]}>
              <img src={newsData.imgContent.content} alt="" />
            </div>
          ) : null}
          <p className={styles["card__news-text"]}>{news.text}</p>

          {news.isTrimmed ? (
            <p className={styles["card__news-cta"]} onClick={() => openPopup()}>
              Lees verder…
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
