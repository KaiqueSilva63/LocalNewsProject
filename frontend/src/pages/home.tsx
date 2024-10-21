import { Search } from "lucide-react";
import { FormEvent, useState } from "react";
import { Header } from "../components/header";
import { NewsCard } from "../components/news-card";
import { getNews } from "../api/getNews";

export interface NewsCardProps {
  article_id: string;
  title: string;
  image_url: string;
  link: string;
  description: string;
}

export function Home() {
  const [search, setSearch] = useState("");
  const [news, setNews] = useState([]);

  async function handleSearchNews(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    getNews(search).then((res) => setNews(res.results));
    console.log(news);
  }

  return (
    <>
      <Header />
      <main className="flex items-center justify-center mt-20 flex-col gap-28">
        <form className="flex items-center" onSubmit={handleSearchNews}>
          <input
            type="text"
            className="rounded-lg w-96 h-8 p-2"
            placeholder="Pesquise alguma notícia"
            onChange={(event) => setSearch(event.target.value)}
          />
          <button className="flex items-center flex-col justify-center ml-[-1.5em]">
            <Search className="text-zinc-800 size-5" />
          </button>
        </form>
        <div className="flex items-center flex-wrap w-full p-4 gap-3 justify-center">
          {news.map((item: NewsCardProps) => {
            return <NewsCard data={item} key={item.article_id} />;
          })}
        </div>
      </main>
    </>
  );
}
