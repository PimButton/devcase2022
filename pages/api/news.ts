import type { NextApiRequest, NextApiResponse } from "next";
import { news } from "../../database/news";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewsEntity[]>
) {
  res.status(200).json(news);
}


