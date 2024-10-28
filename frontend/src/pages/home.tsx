import { Search } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getNews } from "../api/getNews";
import { Header } from "../components/header";
import { NewsCard } from "../components/news-card";
import { Dialog, DialogTrigger } from "../components/ui/dialog";
import { CepModal } from "../components/cep-modal";

export interface NewsCardProps {
  article_id: string;
  title: string;
  image_url: string;
  link: string;
  description: string;
}

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("query"));
  const [category, setCategory] = useState(searchParams.get("category") || "");

  const [news, setNews] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cep") && !searchParams.get("query")) {
      setSearch(localStorage.getItem("cep"));
      updateUrlParams(search, category);
    }
  }, []);

  useEffect(() => {
    async function get() {
      await getNews(search, category).then((res) => setNews(res.results));
    }
    get();
  }, [searchParams]);

  function updateUrlParams(
    newQuery: string | null,
    newCategory: string | null
  ) {
    const params: any = {};
    if (newQuery) params.query = newQuery;
    if (newCategory) params.category = newCategory;

    setSearchParams(params);
  }

  function handleSearchNews(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateUrlParams(search, category);
  }

  return (
    <Dialog>
      <Header />
      <main className="flex items-center justify-center mt-6 flex-col gap-20">
        <div className="flex justify-end items-center w-full mr-32">
          <DialogTrigger asChild>
            <button className="bg-zinc-300 flex items-center p-2 rounded-lg">
              Cadastrar CEP
            </button>
          </DialogTrigger>
        </div>
        <form className="flex items-center" onSubmit={handleSearchNews}>
          <input
            type="text"
            className="rounded-lg w-96 h-8 p-2"
            placeholder="Pesquise alguma notícia"
            onChange={(event) => setSearch(event.target.value)}
            value={search}
          />
          <button className="flex items-center flex-col justify-center ml-[-1.5em]">
            <Search className="text-zinc-800 size-5" />
          </button>
        </form>
        {news.length > 0 ? (
          <div className="flex items-center flex-wrap w-full p-4 gap-3 justify-center">
            {news.map((item: NewsCardProps) => {
              return <NewsCard data={item} key={item.article_id} />;
            })}
          </div>
        ) : (
          <p className="mt-6 font-bold text-zinc-900 text-xl">
            Nenhuma noticia encontrada
          </p>
        )}
      </main>

      <CepModal />
    </Dialog>
  );
}
