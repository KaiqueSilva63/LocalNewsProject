import axios from "axios";

export async function getNews(
  query: string | null | undefined,
  category: string | null | undefined
) {
  let url = `https://newsdata.io/api/1/latest?
  apikey=pub_582650ab7af2248a1af77a310dc4d62a743ae
  &country=br
  &image=1
  &removeduplicate=1`;

  console.log(url);
  if (query !== "" || query === null) url += `&q=${query}`;
  if (category !== "" || category === null) url += `&category=${category}`;

  if (url.includes("&q") || url.includes("&category")) {
    const news = await axios.get(url);
    return news.data;
  }
}
