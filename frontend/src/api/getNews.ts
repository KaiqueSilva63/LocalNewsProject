import axios from "axios";

export async function getNews(query: string) {
  const news = await axios.get(
    `https://newsdata.io/api/1/latest?apikey=pub_55432249dc5fc5f8481b0e1fc3423ae02f6e6&country=br&q=${query}&image=1&removeduplicate=1`
  );
  return news.data;
}
