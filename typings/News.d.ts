type NewsEntity = {
  id: number;
  title: string;
  content: NewsContentEntity[];
  created_at: string;
  updated_at: string;
};

type NewsContentEntity = {
  layout: "text" | "image";
  content: string;
};

type NewsEntityModify = NewsEntity & {
  imgContent: NewsContentEntity | null;
  textContent: NewsContentEntity[];
}