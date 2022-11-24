// Components==============
import React, { useState } from "react";
import Container from "../components/Container/Container";
import Card from "../components/Card/Card";
import PopupCard from "../components/PopupCard/PopupCard";
import { useMediaQ } from "../components/useMediaQ";
import { useGetData } from "../hooks/useGetData";
import styles from "../styles/Home.module.scss";
// =========================

export default function Home() {
  // This is just a setup for retrieving the data with a useEffect hook, feel free to use your own state management solution if you prefer
  const { formatData, isLoading } = useGetData();

  const query = useMediaQ("min", 525);

  const [clickedItem, setClickedItem] = useState<NewsEntityModify>();
  const [clicked, setClicked] = useState<boolean>(false);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const openPopup = (newsData: NewsEntityModify) => {
    setClicked(true);
    setClickedItem(newsData);
  };

  return (
    <div>
      <Container>
        {query ? (
          <h2 className={styles["resize-warning"]}>
            This is responsive enough, resize to a smaller screen please
          </h2>
        ) : (
          formatData.map((item) => {
            return (
              <Card
                key={item.id}
                newsData={item}
                openPopup={openPopup}
              />
            );
          })
        )}

        {clicked ? (
          <PopupCard clickedItem={clickedItem} setClicked={setClicked} />
        ) : null}
      </Container>
    </div>
  );
}
