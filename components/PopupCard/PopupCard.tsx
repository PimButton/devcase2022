// Components==============
import React from "react";
import styles from "./PopupCard.module.scss";
import stylesCommon from "../Card/Card.module.scss";
// =========================

type Props = {
  clickedItem?: NewsEntityModify;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Card({ clickedItem, setClicked }: Props) {
  return (
    <div className={styles.popup}>
      <div
        className={styles.popup__blur}
        onClick={() => {
          setClicked(false);
        }}
      />
      <div className={styles.popup__wrap}>
        <div className={`${styles.popup__card} ${stylesCommon.card}`}>
          <div className={`${stylesCommon.card__inner} ${styles.popup__inner}`}>
            <h2 className={stylesCommon.card__title}>
              {clickedItem?.title ?? ""}
            </h2>
            <p className={stylesCommon.card__date}>
              <span>{clickedItem?.created_at ?? ""}</span>
            </p>
            <div className={stylesCommon.card__news}>
              {clickedItem?.imgContent ? (
                <div className={stylesCommon["card__news-img"]}>
                  <img src={clickedItem.imgContent.content} alt="" />
                </div>
              ) : null}
              {clickedItem?.content.map((item, index) => {
                if (item.layout === "text")
                  return (
                    <p className={stylesCommon["card__news-text"]} key={index}>
                      {item.content}
                    </p>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
