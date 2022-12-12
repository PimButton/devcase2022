// Components==============
import React, { useState, useEffect, useCallback } from "react";
import Container from "../components/Container/Container";
import NewsCards from "../components/NewsCards/NewsCards";
import { useMediaQ } from "../components/useMediaQ";
// =========================

export default function Home() {
  // This is just a setup for retrieving the data with a useEffect hook, feel free to use your own state management solution if you prefer
  const [news, setNews] = useState<NewsEntity[]>([]);

  // api url
  const getUrl = () => {
    return 'http://localhost:3000/api/news'
  }

  // function to retrieve the news from api
  const getNews = useCallback(async () => {
    const response = await fetch(getUrl());
    const results = await response.json();
    // console.log(results); for testing purposes
    setNews(results);
    // console.log(news); for testing purposes
  }, [])

  // use effect hook to call function on intitial render
  useEffect(() => {
    getNews();
  }, []);

  const query = useMediaQ("min", 325);

  return (
    <div>
      <Container>
        {/* mapping through news object */}
          {query && news?.map(({id, title, content, created_at}) => (
            // displaying news cards
            <NewsCards key={id} id={id} title={title} content={content} created_at={created_at}/>
          ))}
      </Container>
    </div>
  );
}
