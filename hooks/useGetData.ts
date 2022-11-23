import { useEffect, useState } from "react";

export const useGetData = () => {
  const [data, setData] = useState<NewsEntity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/news")
      .then((response) => response.json())
      .then((res) => setData(res))
      .finally(() => setIsLoading(false));
  }, []);

  const formatData = data
    .map((item) => {
      const formatTime = Intl.DateTimeFormat("nl", {
        timeStyle: "short",
        dateStyle: "short",
      }).format(new Date(item.created_at));
      const splittedDate = formatTime.split(" ");
      return {
        ...item,
        created_at: `${splittedDate[0] ?? "N/A"} - ${splittedDate[1] ?? "N/A"}`,
        imgContent:
          item.content.find((item) => item.layout === "image") ?? null, // to find the first pic
        textContent: item.content.filter((item) => item.layout === "text"), // to find every piece of text
      };
    })
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );

  return {
    formatData,
    isLoading,
  };
};
