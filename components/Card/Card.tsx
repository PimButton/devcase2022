// Components==============
import React from "react";
import styles from "./Card.module.scss";
import Container from "../Container/Container";
// ========================

//This is the full Card, this card gets cropped within the container
const renderContent = (item: NewsEntity) => {
  return item.content.map((content) => (
    <div>
      {content.layout == "image" && <img src={content.content}></img>}
      {content.layout == "text" && <p>{content.content}</p>}
    </div>
  ));
};

//should still put item.updated_at in datetime

export default function Card({ item }: { item: NewsEntity }) {
  return (
    <Container key={item.id}>
      <div className={styles.wrapper}>
        <div className={styles.cardHeader}>
          <h1>{item.title}</h1>
          <h2>{item.updated_at}</h2>
        </div>
        <div className={styles.content}>{renderContent(item)}</div>
      </div>
    </Container>
  );
}
