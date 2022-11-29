// Components==============
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card/Card";
// =========================

export default function Home() {
  // This is just a setup for retrieving the data with a useEffect hook, feel free to use your own state management solution if you prefer

  const [data, setData] = useState<NewsEntity[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = () => {
    axios
      .get("/api/news")
      .then((response) => {
        setData(response.data);
        setIsLoaded(true);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderCards = data.map((item) => <Card item={item}></Card>);

  return <div>{isLoaded && <>{renderCards}</>}</div>;
}
