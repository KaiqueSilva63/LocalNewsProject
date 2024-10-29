import axios from "axios";

export async function getNews(
  query: string | null | undefined = "",
  category: string | null | undefined = ""
) {
  let url = `https://newsdata.io/api/1/latest?
  apikey=pub_55432249dc5fc5f8481b0e1fc3423ae02f6e6
  &country=br
  &image=1
  &removeduplicate=1`;

  if (query !== "") url += `&q=${query}`;
  if (category !== "") url += `&category=${category}`;

  console.log(url);
  if (url.includes("&q") || url.includes("&category")) {
    const news = await axios.get(url);
    return news.data;
  }
}
